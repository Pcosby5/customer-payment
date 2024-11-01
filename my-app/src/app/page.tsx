'use client';

import { useState } from 'react';
import DateRangePicker from '@/components/ui/DateRangePicker';
import PaymentTable from '@/components/PaymentTable';
import ErrorAlert from '@/components/ErrorAlert';
import LoadingButton from '@/components/LoadingButton';
import PaymentModal from '@/components/modal/PaymentModal';
import PaymentDetailModal from '@/components/modal/PaymentDetailsModal';
import usePayments from '@/hooks/usePayments';
import { PaymentDetail, Payment } from '@/types/payment';

export default function Home() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { payments, isLoading, error, fetchPayments, fetchPaymentById } = usePayments(startDate, endDate);

  // State to manage which modal is open
  const [selectedPayment, setSelectedPayment] = useState<PaymentDetail | null>(null);
  const [selectedBasicPayment, setSelectedBasicPayment] = useState<Payment | null>(null);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isPaymentDetailModalOpen, setPaymentDetailModalOpen] = useState(false);
  const [isModalLoading, setModalLoading] = useState(false);

  // Handler to open PaymentModal
  const openPaymentModal = (payment: Payment) => {
    setSelectedBasicPayment(payment);
    setPaymentModalOpen(true);
  };

  // Handler to close PaymentModal
  const closePaymentModal = () => {
    setSelectedBasicPayment(null);
    setPaymentModalOpen(false);
  };

  // Handler to open PaymentDetailModal
  const openPaymentDetailModal = async (paymentId: string) => {
    setModalLoading(true); // Set loading state
    try {
      const paymentDetail = await fetchPaymentById(paymentId);
      if (paymentDetail) {
        setSelectedPayment(paymentDetail);
        setPaymentDetailModalOpen(true);
      }
    } catch (error) {
      console.error("Error fetching payment details:", error);
      // Handle the error here (e.g., set error state)
    } finally {
      setModalLoading(false); // Reset loading state
    }
  };

  // Handler to close PaymentDetailModal
  const closePaymentDetailModal = () => {
    setSelectedPayment(null);
    setPaymentDetailModalOpen(false);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Payments</h1>

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      {/* Use LoadingButton to manually trigger fetchPayments */}
      <LoadingButton onClick={fetchPayments} isLoading={isLoading} label="Fetch Payments" />

      {error && <ErrorAlert message={error} />}

      <PaymentTable
        payments={payments}
        isLoading={isLoading}
        onPaymentClick={openPaymentDetailModal} // Pass handler to open PaymentDetailModal
        onBasicPaymentClick={openPaymentModal} // Pass handler to open PaymentModal for basic payment
      />

      {/* Render PaymentModal */}
      <PaymentModal payment={selectedBasicPayment} onClose={closePaymentModal} isOpen={isPaymentModalOpen} />

      {/* Render PaymentDetailModal */}
      <PaymentDetailModal
        payment={selectedPayment}
        onClose={closePaymentDetailModal}
        isOpen={isPaymentDetailModalOpen}
        isLoading={isModalLoading}
        error={error}
      />
    </main>
  );
}

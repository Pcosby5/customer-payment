import { useState } from 'react';
import { Payment, PaymentDetail } from '@/types/payment';

export default function usePayments(startDate: string, endDate: string) {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPayments = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const url = `/api/paymentRoute?StartDate=${startDate}&EndDate=${endDate}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: Payment[] = await response.json();
            setPayments(data);
        } catch (e) {
            setError('Failed to fetch payments. Please try again.');
            console.error('Error fetching payments:', e);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPaymentById = async (paymentId: string): Promise<PaymentDetail | null> => {
        try {
            const response = await fetch(`https://spes.pscgh.com:442/sales-api/api/Payments/${paymentId}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data: PaymentDetail = await response.json();
            return data;
        } catch (e) {
            setError('Failed to fetch the payment details. Please try again.');
            console.error('Error fetching payment details:', e);
            return null;
        }
    };

    return { payments, isLoading, error, fetchPayments, fetchPaymentById };
}

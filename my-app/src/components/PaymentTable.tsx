import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PaymentDetailsModal from "@/components/modal/PaymentDetailsModal";
import usePayments from "@/hooks/usePayments";
import { Payment, PaymentDetail } from "@/types/payment";

interface PaymentTableProps {
    payments: Payment[];
    isLoading: boolean;
    onPaymentClick: (paymentId: string) => Promise<void>;
    onBasicPaymentClick: (payment: Payment) => void;
}

export default function PaymentTable({ payments, isLoading, onPaymentClick, onBasicPaymentClick }: PaymentTableProps) {
    const [selectedPayment, setSelectedPayment] = useState<PaymentDetail | null>(null);
    const [isModalLoading, setModalLoading] = useState(false);
    const [modalError, setModalError] = useState<string | null>(null);
    const { fetchPaymentById } = usePayments('', '');

    const handleViewDetails = async (paymentId: string) => {
        setModalLoading(true);
        setModalError(null);
        try {
            const paymentDetail = await fetchPaymentById(paymentId);
            if (paymentDetail) {
                setSelectedPayment(paymentDetail);
            }
        } catch (error) {
            console.error("Error fetching payment details:", error);
            const errorMessage = error instanceof Error ? error.message : "Failed to load payment details.";
            setModalError(errorMessage);
        } finally {
            setModalLoading(false);
        }
    };

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Payment ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {payments.map((payment) => (
                        <TableRow key={payment.PaymentId}>
                            <TableCell>{payment.PaymentNumber}</TableCell>
                            <TableCell>{payment.Customer}</TableCell>
                            <TableCell>{payment.Amount.toFixed(2)}</TableCell>
                            <TableCell>
                                {payment.PaymentDate
                                    ? new Date(payment.PaymentDate).toLocaleDateString()
                                    : "N/A"}
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={async () => {
                                        await handleViewDetails(payment.PaymentId);
                                        onBasicPaymentClick(payment); // Consider if you need this here
                                        // onPaymentClick could also be called within handleViewDetails if it's necessary
                                    }}
                                    aria-label="View Payment Details"
                                >
                                    View
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {payments.length === 0 && !isLoading && (
                <p className="text-center text-gray-500 mt-4">
                    No payments found. Try adjusting your date range.
                </p>
            )}

            {/* Payment Details Modal */}
            {selectedPayment && (
                <PaymentDetailsModal
                    payment={selectedPayment}
                    onClose={() => setSelectedPayment(null)}
                    isLoading={isModalLoading}
                    isOpen={!!selectedPayment}
                    error={modalError}
                />
            )}
        </div>
    );
}

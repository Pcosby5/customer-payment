import React from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import { PaymentDetail } from '@/types/payment';

interface PaymentDetailModalProps {
    payment: PaymentDetail | null;
    onClose: () => void;
    isOpen: boolean;
    isLoading: boolean;
    error: string | null;
}

export default function PaymentDetailModal({ payment, onClose, isOpen, isLoading }: PaymentDetailModalProps) {
    // Return null if no payment details are provided
    if (!payment) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <h2 className="text-lg font-bold">Payment Details</h2>

                {/* Show loading state */}
                {isLoading && <p>Loading payment details...</p>}

                {/* Payment Details */}
                <p>Payment Number: {payment.PaymentNumber}</p>
                <p>Amount Paid: {payment.AmountPaid}</p>
                <p>Outstanding: {payment.Outstanding}</p>
                <p>Payment Date: {new Date(payment.PaymentDate).toLocaleDateString()}</p>

                {/* Mode of Payment Details */}
                {payment.ModeOfPayments?.length > 0 && (
                    <div>
                        <h3 className="font-semibold mt-4">Mode of Payment</h3>
                        {payment.ModeOfPayments.map((mode, index) => (
                            <div key={index}>
                                <p>Method: {mode.ModeOfPayment}</p>
                                <p>Amount: {mode.Amount}</p>
                                <p>Bank: {mode.Bank}</p>
                                <p>Reference: {mode.Reference}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Invoice Details */}
                {payment.invoices?.length > 0 && (
                    <div>
                        <h3 className="font-semibold mt-4">Invoices</h3>
                        {payment.invoices.map((invoice, index) => (
                            <div key={index}>
                                <p>Invoice Number: {invoice.InvoiceNumber}</p>
                                <p>Total Amount: {invoice.TotalAmount}</p>
                                <p>Outstanding: {invoice.Outstanding}</p>
                                <p>Invoice Date: {new Date(invoice.InvoiceDate).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Payee Details */}
                {payment.Payee && (
                    <div>
                        <h3 className="font-semibold mt-4">Payee Information</h3>
                        <p>Full Name: {payment.Payee.FullName}</p>
                        <p>Phone: {payment.Payee.Phone}</p>
                        <p>Email: {payment.Payee.Email}</p>
                        <p>Address: {payment.Payee.Address}</p>
                    </div>
                )}

                <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    onClick={onClose}
                >
                    Close
                </button>
            </DialogContent>
        </Dialog>
    );
}

import React from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import { Payment } from '@/types/payment';

interface PaymentModalProps {
    payment: Payment | null;
    onClose: () => void;
    isOpen: boolean;  // Add this line
}

const PaymentModal: React.FC<PaymentModalProps> = ({ payment, onClose }) => {
    if (!payment) return null;

    return (
        <Dialog open={!!payment} onOpenChange={onClose}>
            <DialogContent>
                <h2 className="text-lg font-bold">Payment Overview</h2>
                <p>Payment Number: {payment.PaymentNumber}</p>
                <p>Amount: {payment.Amount}</p>
                <p>Payment Date: {new Date(payment.PaymentDate).toLocaleDateString()}</p>
                <button className="mt-4" onClick={onClose}>
                    Close
                </button>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentModal;

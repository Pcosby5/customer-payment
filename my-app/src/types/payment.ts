export interface Payment {
    PaymentId: string;
    PaymentNumber: string;
    CustomerId: string;
    Customer: string;
    Amount: number;
    PaymentDate: string;
}

export interface PaymentDetail {
    Id: string;
    PaymentNumber: string;
    AmountPaid: number;
    Outstanding: number;
    PaymentDate: string;
    CustomerId: string;
    UserId: string;
    Customer: string;
    Remarks: string;
    onAccount: number;
    CreatedAt: string;
    Status: number;
    ModeOfPayments: Array<{
        ModeOfPayment: string;
        Amount: number;
        AccountId: string;
        BankId: string;
        Account: string;
        Bank: string;
        Reference: string;
    }>;
    invoices: Array<{
        Id: string;
        InvoiceNumber: string;
        TotalAmount: number;
        Outstanding: number;
        InvoiceDate: string;
        InvoiceStatus: string;
    }>;
    Payee: {
        FullName: string;
        Phone: string;
        Email: string;
        Address: string;
    };
}

// Add this interface at the top of the file
export interface PaymentData {
    amount: number;
    currency: string;
    description?: string;
    // Add other payment fields as needed
}

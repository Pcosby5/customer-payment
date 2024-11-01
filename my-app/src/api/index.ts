import { PaymentDetail } from '@/types/payment';


const API_URL = process.env.REACT_APP_API_URL;



export const api = {
    payments: {
        // Method to get all payments
        get: async () => {
            try {
                const response = await fetch(`${API_URL}/payments`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                return await response.json();
            } catch (error) {
                console.error("Error fetching payments:", error);
                throw error;
            }
        },

        // Method to get payment details by ID
        getById: async (paymentId: string) => {
            try {
                const response = await fetch(`${API_URL}/payments/${paymentId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                return await response.json();
            } catch (error) {
                console.error(`Error fetching payment details for ID ${paymentId}:`, error);
                throw error;
            }
        },

        // Method to create a new payment
        create: async (paymentData: PaymentDetail) => {
            try {
                const response = await fetch(`${API_URL}/payments`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentData),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                return await response.json();
            } catch (error) {
                console.error("Error creating payment:", error);
                throw error;
            }
        },
    },
};

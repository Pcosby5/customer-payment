// /pages/api/payments.js or /pages/api/payments.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { StartDate, EndDate } = req.query;

    try {
        // Construct the external API URL with query parameters
        const url = new URL('https://spes.pscgh.com:442/sales-api/api/Payments');
        if (StartDate) url.searchParams.append('StartDate', StartDate as string);
        if (EndDate) url.searchParams.append('EndDate', EndDate as string);

        // Fetch data from the external API
        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Failed to fetch payments' });
    }
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const redirectURL =
                process.env.NODE_ENV === 'development'
                    ? 'http://localhost:3000/'
                    : 'https://marvhuelsmann.com/';

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: 'price_1KamhJJ8QVh3nth2x8768iai',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: redirectURL + 'services/success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url: redirectURL + 'services/buy?status=cancel',
            });

            res.status(200).json(session)
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Internal server error'
            res.status(500).json({statusCode: 500, message: errorMessage})
        }
    }
}

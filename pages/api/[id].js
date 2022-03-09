import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res){
    const id  = req.query.id
    try {
        if (!id.startsWith('cs_')) {
            console.log('incorrect id')
        }
        const checkout_session =
            await stripe.checkout.sessions.retrieve(id, {
                expand: ['payment_intent'],
            })

        res.status(200).json(checkout_session)
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : 'Internal server error'
        res.status(500).json({ statusCode: 500, message: errorMessage })
    }
}

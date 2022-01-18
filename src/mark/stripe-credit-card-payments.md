---
title: How to Process Credit Cards with Stripe API
about: Can you process a credit card? I can't. I mean, that's a lotta person data that I personally want nothing to do with. So, along came Stripe to handle credit card payments
primaryTech: React.js, Ruby on Rails, Stripe API
---

Create Stripe account to get API keys

### Stripe w/ Ruby on Rails API

Create file stripe.rb in /config/initializers

- Add API keys (stored as environmental variables)

```
Rails.configuration.stripe = {
 :publishable_key => ENV['PUBLISHABLE_KEY'],
 :secret_key      => ENV['SECRET_KEY']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
```

Add Environmental variables

- Create file called local_env.yml & add it to .gitignore
- Store key/value pairs e.g. STRIPE_KEY: "api key"

In application.rb add the following code before loading default config

```
   config.before_configuration do
     env_file = File.join(Rails.root, 'config', 'local_env.yml')
     YAML.load(File.open(env_file)).each do |key, value|
       ENV[key.to_s] = value
     end if File.exists?(env_file)
   end
```

In orders_controllers use the PaymentIntents module to create a new payment, passing the Stipe token from the request body

```
@charge = Stripe::PaymentIntent.create({
       amount: @order.total,
       currency: "USD",
       confirm: true,
       payment_method: params[:stripe_token],
     })
```

update order to include the charge

```
@order.update(charge: @charge.id)
```

### Stripe w/ React front end

Add .env.local file to root directory & add it to .gitignore

Add key/value pairs e.g. REACT\_\_APP\_\_SECRET_KEY="api secret key"

CheckOut Component

- imports from stripe:

```
import { CardElement, Elements, useElements, useStripe} from "@stripe/react-stripe-js"
```

- configure stripe w/API key

```
const stripeLib = loadStripe(process.env.REACT_APP_STRIPE_KEY);
```

- return Stripe Element w/ checkout form, passing down stripe configuration & user as props

```
const CheckOut = ({ user }) => {
 return (
   <Elements stripe={stripeLib}>
     <CheckOutForm user={user} />
   </Elements>
  );
};
```

CheckOut Form

- create state to handle loading & errors

```
 const [error, setError] = React.useState();
 const [loading, setLoading] = React.useState();
```

- return \<form> w/ messages to handle loading and errors, & Stripe \<CardElement>

```
return (
   <CheckOutFormStyles onSubmit={handleCheckout}>
     {error && <p className="message">{error.message}></p>}
     {loading && <p className="message">Processing >Payment...</p>}
     <CardElement />
     <button className="checkout">Check Out</button>
   </CheckOutFormStyles>
 );
```

- save Stripe hooks to variables that will be used when submitting checkout form

```
 const stripe = useStripe();
 const elements = useElements();
```

handleCheckout()

- preventDefault() - stop page from reloading
- setLoading(true) - prints loading message
- create Stripe payment method w/ async function
- handle error w/ if() statement - prints error message
- make post request to API to create Order w/ order details & Stripe payment token
- redirect to order page, clear form, close cart, reset loading and error state

```
 const handleCheckout = async (e) => {
   e.preventDefault();

   setLoading(true);

   const { error, paymentMethod } = await stripe.createPaymentMethod({
     type: "card",
     card: elements.getElement(CardElement),
   });

   if (error) {
     setError(error);
     setLoading(false);
     return;
   }

   const response = await fetch(`${url}/orders`, {
     method: "POST",
     headers: {
       Authorization: `bearer: ${token}`,
       "content-type": "application/json",
     },
     body: JSON.stringify({
       user_id: user.id,
       stripe_token: paymentMethod.id,
     }),
   });
   const data = await response.json();

   history.push(`/orders/${data.id}`);
   elements.getElement(CardElement).clear(); // clear CC form
   closeCart();
   setError();
   setLoading(false);
 };
```

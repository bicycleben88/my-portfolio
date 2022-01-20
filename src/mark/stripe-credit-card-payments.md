---
title: How to Process Credit Cards with Stripe API
about: Can you process a credit card? I can't. I mean, that's a lotta person data that I personally want nothing to do with. So, along came Stripe to handle credit card payments
primaryTech: React.js, Ruby on Rails, Stripe API
---

I want your credit card data. Except of course, I don’t. Well, if I want a user to use a credit card on my e-commerce app, then how do I do it? Use Stripe, that’s how! There’s a lot of compliance required in order to pass credit card data through a server. Stripe will handle the compliance without my app, the backend, or the server ever knowing what credit card data a user entered. It’s a bit of a long walk to go on, but computer power and Stripe make it super fast and easy.

I have two videos showing [how to set up Stripe](https://www.youtube.com/watch?v=3ycb_ESC9qw&list=PLjYC3ZkfhqCpDJl-34_mycn5KZcrrsPKR&index=8) and [how to use it](https://www.youtube.com/watch?v=TvcQeQGFBhc&list=PLjYC3ZkfhqCpDJl-34_mycn5KZcrrsPKR&index=9).

After a user enters credit card data the frontend sends a request to Stripe and Stripe responds to the frontend with a payment token. With a payment token and shopping cart full of items, the frontend sends a request to the backend, and the backend takes the payment token and order details and sends a request to Stripe. Stripe processes the order using the payment token and responds to the backend with a success or an error message. Finally the backend responds to the frontend with the message it received from Stripe.

Stripe needs credentials. Create an account with Stripe and they will supply api keys that are needed for configuration on both the frontend and backend. Never expose the secret key, and keep it inside an environmental variable. On the frontend, I keep environmental variables in a .env file, [following the steps in React’s documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/); and on the backend I do the same in a .yml file [following the steps in this article](https://qiita.com/alokrawat050/items/0d7791b3915579f95791).

On the **frontend**, create two components, Checkout and CheckoutForm, and import the dependencies. Checkout, which will be the exported component, uses the Element provider component from Stripe, which I wrap around the CheckoutForm component and to which I pass the Stripe credentials. The user prop has the id I will need later.

```
import { CardElement, Elements, useElements, useStripe} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";

const CheckoutForm = () => {
 // this part coming soon
}

const Checkout = ({ user }) => {
 return (
   <Elements stripe={stripeLib}>
     <CheckOutForm user={user} />
   </Elements>
  );
};

export default CheckOut;
```

To pass the credentials use the loadStripe hook and save the result to a variable outside of both components, which becomes the value for the stripe attribute inside the Element prodiver.

```
const stripeLib = loadStripe(process.env.REACT_APP_STRIPE_KEY);
```

The CheckoutForm component holds the error and loading state, reroutes the user once the form is submitted, handles the submit button logic, & contains the credit card form, CardElement, which Stripe has made and handles.

```
const CheckoutForm = () => {
  const history = useHistory(); // reroutes the user
  const [error, setError] = React.useState(); // sets error state
  const [loading, setLoading] = React.useState(); // sets loading stats
  const stripe = useStripe(); // creates payment method
  const elements = useElements(); // gets cc data from CardElement

  const handleCheckout = async (e) => {
    // this will handle the logic for submitting the form
  };

  return (
    <form onSubmit={handleCheckout}>
      {error && <p className="message">{error.message}</p>}
      {loading && <p className="message">Processing Payment...</p>}
      <CardElement />
      <button className="checkout">Check Out</button>
    </form>
  );
}
```

When the user submits the credit card data, the function handleCheckout coordinates the requests being sent from the frontend and the responses it receives from Stripe and the backend. While this coordination is underway, the loading state is set to true until a success or an error message is received. The frontend sends the first request, to Stripe, to create a payment method, and if it receives as a response an error message, the error state is set to true and the function ends.

```
  const handleCheckout = async (e) => {
     e.preventDefault(); // stop the page from reloading

    setLoading(true);

    // Create a payment method w/ createPaymentMethod hook from useStripe
    // Get credit data from CardElement component w/ getElement hook from useElement
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    // handle error
    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    await fetch(`${url}/orders`, {
      // this is where the frontend will send a request to the backend
    });

    ... more to come
  };
```

On the **backend** create the file stripe.rb inside the directory /config/initializers. Add the keys from Stripe.

```
Rails.configuration.stripe = {
 :publishable_key => ENV['PUBLISHABLE_KEY'],
 :secret_key      => ENV['SECRET_KEY']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
```

In orders_controllers create a payment [in a new Order](https://www.youtube.com/watch?v=CFK23L0xM0o&list=PLjYC3ZkfhqCpDJl-34_mycn5KZcrrsPKR&index=6&t=4s) using the PaymentIntents module from Stripe, passing the payment token that comes from the request sent by the frontend.

```
@charge = Stripe::PaymentIntent.create({
       amount: @order.total,
       currency: "USD",
       confirm: true,
       payment_method: params[:stripe_token],
     })
```

Update the order to include the charge and send a response to the frontend.

```
@order.update(charge: @charge.id)

render json: @order, status: :created, location: @order
```

On the **frontend**, send a Post request to the backend along with the payment token Stripe sent and the id of the user. Finally, reroute the user, clear the credit card data, close the cart, & set error and loading states.

```
 const handleCheckout = async (e) => {
   ...
   // error state, loading state, payment method creation, error handling
   ...

   await fetch(`${url}/orders`, {
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
   await response.json();

   history.push(`/orders/${data.id}`); // reroutes the user to the Order page
   elements.getElement(CardElement).clear(); // clear CC form
   closeCart(); // closes cart
   setError(); // sets error state
   setLoading(false); // sets loading state to false
 };
```

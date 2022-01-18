---
title: How to Create Custom Hooks
about: I built a custom hook in React to create a shopping cart. Learn more about creating context and a provider component
primaryTech: React.js
---

> ## Custom Hooks
>
> ---
>
> #### useCart()
>
> use createContext() to create Provider component
>
> ```
> const LocalStateContext = createContext();
> const LocalStateProvider= LocalStateContext.Provider;
> ```
>
> create higher level component
>
> - add state & functions
> - return Provider component w/ all values that will be passed down as props to child components
>
> ```
> const CartStateProvider = ({ children }) => {
>  const [cartOpen, setCartOpen] = useState(false);
>
> const toggleCart = () => {
>    setCartOpen(!cartOpen);
>  };
>
>  const closeCart = () => {
>   setCartOpen(false);
>  };
>
>  const openCart = () => {
>    setCartOpen(true);
>  };
>
>  return (
>    <LocalStateProvider
>      value={{
>        cartOpen,
>        setCartOpen,
>        closeCart,
>        openCart,
>        toggleCart,
>      }}
>    >
>      {children}
>    </LocalStateProvider>
>  );
> };
> ```
>
> create custom hook using useContext()
>
> ```
> const useCart = () => {
>  const all = useContext(LocalStateContext);
>  return all;
> };
> ```
>
> export hook & provider component
>
> ```
> export { CartStateProvider, useCart };
> ```

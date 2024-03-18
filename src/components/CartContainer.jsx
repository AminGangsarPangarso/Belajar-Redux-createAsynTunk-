import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
const CartContainer = () => {
  const { amount, cartItems } = useSelector((store) => store.cart);
  const total = useSelector((store) => store.cart.total);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>

      <div className="">
        {cartItems.map((item) => {
          return <CartItem key={item.id} data={item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen} = useSelector((state)=>state.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <>
      { isOpen &&<Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;

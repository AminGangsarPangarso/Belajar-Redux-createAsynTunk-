import React from "react";
import { removeCart ,increment ,dicrement} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <article className="cart-item">
      <img src={data.img} alt={data.title} />
      <div className="">
        <h4>{data.title}</h4>
        <h4 className="item-price">${data.price}</h4>
        <button className="remove-btn" onClick={()=>dispatch(removeCart(data.id))}>remove</button>
      </div>
      <div className="">
        <button className="amount-btn" onClick={()=>dispatch(increment(data.id))}><ChevronUp/></button>
        <p className="amount">{data.amount}</p>
        <button className="amount-btn" onClick={()=>dispatch(dicrement(data.id))}><ChevronDown/></button>
      </div>
    </article>
  );
};

export default CartItem;

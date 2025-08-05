import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart' >
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{currency}{(item.price).toFixed(2)}</p>
                <div>{cartItems[item._id]}</div>
                <p>{currency}{(item.price * cartItems[item._id]).toFixed(2)}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item._id)}>X</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount().toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{currency}{getTotalCartAmount()===0?0:deliveryCharge}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{currency}{(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge).toFixed(2)}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="filler">
          <p>Delivery fee may vary based on restaurant</p>
        </div>
      </div>
    </div>
  )
}

export default Cart

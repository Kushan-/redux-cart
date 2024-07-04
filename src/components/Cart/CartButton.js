import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { myCartAction } from '../../store/index'

const CartButton = ( props ) => {
  const dispatch = useDispatch()
  const handleToggle = () =>{
    dispatch( myCartAction.toggle())
  }

  const cartQantity = useSelector(state=>state.cartItems.totalQuantity)

  console.log(cartQantity)
  return (

    // toggle on My Cart
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQantity}</span>
    </button>
  );
};

export default CartButton;

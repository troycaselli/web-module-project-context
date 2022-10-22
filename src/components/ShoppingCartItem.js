import React, {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {
	const {cart, setCart} = useContext(CartContext);

	const handleRemove = () => {
		setCart(cart.filter(item => item.id !== props.id));
		// window.localStorage.setItem('cart', JSON.stringify(cart));
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleRemove}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

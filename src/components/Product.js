import React, {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const Product = props => {
	const {cart} = useContext(CartContext);
	const {addItem} = useContext(ProductContext);

	const handleAdd = () => {
		addItem(props.product);
		// window.localStorage.setItem('cart', JSON.stringify(cart));
	}

	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={handleAdd}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;

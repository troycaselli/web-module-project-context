import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(localStorageCart || []);

	const addItem = item => {
		const filtered = cart.filter(element => element.id !== item.id);
		if(cart.length === filtered.length) setCart([...cart, item]);
	};

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, setCart}}>
				<div className="App">
					<Navigation />

					{/* Routes */}
						<Route exact path="/">
							<Products />
						</Route>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

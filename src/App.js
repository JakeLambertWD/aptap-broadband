import React, { useEffect, useState } from 'react';
import './App.css';
import Deal from './Deal/Deal';
import OverlayDrawer from './OverlayDrawer';
import Popup from './Popup/Popup';

function App() {
	const [broadbandDeals, setBroadbandDeals] = useState([]);
	const [comparedDeals, setComparedDeals] = useState([]);
	const [openPopup, setOpenPopup] = useState(false);

	// API call
	useEffect(() => {
		fetch('https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals')
			.then(response => response.json())
			.then(responseData => {
				const { deals } = responseData;
				setBroadbandDeals(deals);
			})
			.catch(error => alert(error.message));
	}, []);

	// ADD for comparison
	const clickToCompareHandler = id => {
		// find clicked broadband deal
		const clickedBroadbandDeal = broadbandDeals.filter(item => item.deal_id === id);
		// push to the compare array
		comparedDeals.push(...clickedBroadbandDeal);
		// if array more than 2, remove from beggining of array
		if (comparedDeals.length > 2) {
			comparedDeals.shift();
			console.log(comparedDeals);
		}
	};

	// REMOVE from comparison
	const removeComparisonHandler = id => {
		const itemRemoved = comparedDeals.filter(item => item.deal_id !== id);
		setComparedDeals(itemRemoved);
		console.log(comparedDeals);
	};

	// OPEN popup
	const openPopupHandler = () => {
		setOpenPopup(true);
	};

	// CLOSE popup
	const closePopupHandler = () => {
		setOpenPopup(false);
	};

	return (
		<div className='App'>
			{broadbandDeals.map(item => {
				return (
					<Deal
						key={item.deal_id}
						id={item.deal_id}
						name={item.provider_name}
						image={item.provider_logo_image_url}
						monthlyPrice={item.monthly_price}
						speed={item.internet_speed}
						cost={item.set_up_cost}
						contract={item.contract_info}
						data={item.data_limits}
						rating={item.provider_rating}
						handler={clickToCompareHandler}
					/>
				);
			})}

			{openPopup === true && <Popup closePopupHandler={closePopupHandler} removeItemHandler={removeComparisonHandler} items={comparedDeals} />}

			<OverlayDrawer popupHandler={openPopupHandler} items={comparedDeals} removeItemHandler={removeComparisonHandler} />
		</div>
	);
}

export default App;

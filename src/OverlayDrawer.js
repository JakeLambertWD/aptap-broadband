import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

const OverlayDrawer = ({ popupHandler, items, removeItemHandler }) => {
	let comparedDeals = 0;
	if (items.length === 2) {
		comparedDeals = '2';
	} else if (items.length === 1) {
		comparedDeals = '1';
	} else {
		comparedDeals = '0';
	}

	return (
		<Card
			className='flex-middle'
			sx={{ position: 'fixed', backgroundColor: 'white', width: '100%', bottom: '0', padding: '30px 0', boxShadow: 3, border: 2 }}
		>
			{items.map(item => (
				<Paper elevation={3} sx={{ display: 'flex', padding: '10px 20px', marginRight: '20px' }}>
					<img src={item.provider_logo_image_url} alt='' className='company-logo' />
					<div>
						<p style={{ fontWeight: '300' }}>{item.provider_name}</p>
						<span>{item.broadband_type}</span>
					</div>
					<CloseIcon sx={{ cursor: 'pointer', marginLeft: '15px' }} fontSize='small' onClick={() => removeItemHandler(item.deal_id)} />
				</Paper>
			))}

			<Button variant='contained' onClick={() => popupHandler()}>
				Compare deals ({comparedDeals} of 2)
			</Button>
		</Card>
	);
};

export default OverlayDrawer;

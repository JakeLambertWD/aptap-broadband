import React from 'react';
import '../App.css';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import CompareDeal from './CompareDeal/CompareDeal';

const Popup = props => {
	return (
		<>
			<div className='modal'></div>
			<Paper
				elevation={3}
				sx={{
					width: '80vw',
					borderRadius: '10px',
					height: '90vh',
					position: 'fixed'
				}}
			>
				<div className='flex-between'>
					<h1>Compare</h1>
					<CloseIcon sx={{ cursor: 'pointer' }} fontSize='large' onClick={() => props.closePopupHandler()} />
				</div>
				{props.items.map(item => {
					return (
						<CompareDeal
							key={item.deal_id}
							id={item.deal_id}
							name={item.provider_name}
							image={item.provider_logo_image_url}
							rating={item.provider_rating}
							monthlyPrice={item.monthly_price}
							dealType={item.deal_type}
							speed={item.internet_speed}
							broadbandType={item.broadband_type}
							cost={item.set_up_cost}
							oneOffCost={item.contract_info}
							data={item.data_limits}
							removeItemHandler={props.removeItemHandler}
						/>
					);
				})}
			</Paper>
		</>
	);
};

export default Popup;

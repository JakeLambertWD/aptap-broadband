import React from 'react';
import '../../App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const CompareDeal = ({ id, name, image, rating, monthlyPrice, dealType, speed, broadbandType, cost, oneOffCost, data, removeItemHandler }) => {
	return (
		<div>
			<Grid container sx={{ width: '50%', padding: '10px', float: 'left' }}>
				<Grid item xs={5}>
					<p className='company-name' onClick={() => removeItemHandler(id)}>
						Remove
					</p>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={image} alt={name} className='company-logo' />
						<div>
							<p>{name}</p>
							<span>{broadbandType}</span>
						</div>
					</div>
				</Grid>
				<Grid item xs={7} sx={{ position: 'relative' }}>
					<Button variant='contained' sx={{ position: 'absolute', bottom: '0', width: '300px' }}>
						Continue
					</Button>
				</Grid>
			</Grid>

			<Grid container sx={{ width: '50%', padding: '10px', float: 'left', display: 'block' }}>
				<div className='table-row'>
					<p>Rating</p>
					<p>{rating}/10</p>
				</div>
				<div className='table-row grey'>
					<p>Monthly Cost</p>
					<p>{monthlyPrice}</p>
				</div>
				<div className='table-row'>
					<p>Tariff Type</p>
					<p>{dealType}</p>
				</div>
				<div className='table-row grey'>
					<p>Speed</p>
					<p>{speed}</p>
				</div>
				<div className='table-row'>
					<p>Broadband Type</p>
					<p>{broadbandType}</p>
				</div>
				<div className='table-row grey'>
					<p>Setup Cost</p>
					<p>{cost}</p>
				</div>
				<div className='table-row'>
					<p>One off cost</p>
					<p>{oneOffCost}</p>
				</div>
				<div className='table-row grey'>
					<p>Data Limits</p>
					<p>{data}</p>
				</div>
			</Grid>
		</div>
	);
};

export default CompareDeal;

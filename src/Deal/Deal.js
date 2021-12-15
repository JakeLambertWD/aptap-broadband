import React from 'react';
import '../App.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Deal = ({ id, name, image, monthlyPrice, speed, cost, contract, data, rating, handler }) => {
	return (
		<Paper
			elevation={0}
			sx={{
				width: '100%',
				padding: '15px 20px',
				borderBottom: '1px solid lightgrey',
				borderRadius: '0%',
				'&:last-child': { borderBottom: 'none' }
			}}
		>
			<Grid container>
				<Grid className='flex' item xs={1}>
					<img src={image} alt={name} className='company-logo' />
				</Grid>
				<Grid className='flex' item xs={2}>
					<p>{name}</p>
					<span>{data}</span>
					{rating}/10
				</Grid>
				<Grid className='flex' item xs={1}>
					<p className='price'>£{monthlyPrice}</p>
					<span className='price'>Monthly Cost</span>
				</Grid>
				<Grid className='flex' item xs={1}>
					<p>{speed}mbps</p>
					<span>Standard Speed</span>
				</Grid>
				<Grid className='flex' item xs={1}>
					<p>£{cost}</p>
					<span>Setup Costs</span>
				</Grid>
				<Grid className='flex' item xs={1}>
					<p>{contract}</p>
					<span>Contract</span>
				</Grid>
				<Grid className='flex' item xs={2} sx={{ textAlign: 'center' }}>
					<Button variant='outlined' onClick={() => handler(id)}>
						Add to compare
					</Button>
				</Grid>
				<Grid className='flex' item xs={2} sx={{ textAlign: 'center' }}>
					<Button variant='contained'>Continue</Button>
				</Grid>
				<Grid className='flex' item xs={1}>
					<Button sx={{ color: 'black' }} endIcon={<ExpandMoreIcon />}>
						More info
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Deal;

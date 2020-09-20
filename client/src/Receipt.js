import React, { useState } from 'react';

import {
	Box,
	Button,
	FormField,
  Grid,
  List,
  TextInput
} from 'grommet';



const Receipt = () => {

	const [total, setTotal] = useState();
	const [subtotal, setSubtotal] = useState();
	const [tipPercent, setTipPercent] = useState();

	const listHeaderItems = [{name: "Name", price: "Price"}]
	let items = [{name: "Steve", price: 8.75}];

	return (
		<Grid 
			areas={[
				{name: 'top', start: [0,0], end: [0,0]},
				{name: 'main', start: [0,1], end: [0,1]},
			]} 
			columns={["xlarge"]}
			rows={['xsmall','medium']}  
			gap="small"
			responsive
			alignSelf="center"
		>
			<Box gridArea="top" background="light-2" align="center" justify="center" direction="row" gap="large">
				<FormField id="subtotal" label="Subtotal" align="center">
  				<TextInput 
  					placeholder="0.00" 
  					icon="$" 
  					value={subtotal}
  					onChange={event => setSubtotal(event.target.value)}
  				/>
				</FormField>
				<FormField id="total" label="Total" align="center">
  				<TextInput 
  					placeholder="0.00" 
  					icon="$"
  					value={total}
  					onChange={event => setTotal(event.target.value)}
  				/>
				</FormField>
				<FormField id="tip" label="Tip" align="center">
  				<TextInput 
  					placeholder="0.0"
  					icon="%"
  					reverse
  					value={tipPercent}
  					onChange={event => setTipPercent(event.target.value)}
  				/>
				</FormField>
			</Box>
			<Box gridArea="main" direction="column">
				<Button primary label="Add Item" alignSelf="start" margin="small" />
				<List primaryKey="name" secondaryKey="price" data={listHeaderItems} border background="light-3" />
				<List primaryKey="name" secondaryKey="price" data={items} background="white" />
			</Box>
			<Box gridArea="bottom" background="light-2" />
		</Grid>
	)
}

export default Receipt;

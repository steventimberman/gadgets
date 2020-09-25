import React, {useState} from 'react';

import {
	Box,
	Button,
	FormField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TextInput
} from 'grommet';

function Item(props) {

	return (

		<TableRow>
			<TableCell>{props.itemName} ({props.personName})</TableCell>
			<TableCell><strong>${props.itemPrice}</strong></TableCell>
		</TableRow>

	);

}


const Receipt = () => {


	// Item is a row with a receipt item, person, and the price

	const [subtotal, setSubtotal] = useState(0.00)
	const [total, setTotal] = useState(0.00)
	const [tipPercent, setTipPercent] = useState(0)
	const [itemsList, setItemsList] = useState([])

	const [personName, setPersonName] = useState()
	const [itemName, setItemName] = useState()
	const [itemPrice, setItemPrice] = useState()

	function handleItemAdd() {
		const newItem = { itemName: itemName, personName: personName, itemPrice: itemPrice };
		const newItemsList = itemsList.concat(newItem);
		setItemsList(newItemsList);

		setPersonName("");
		setItemName("");
		setItemPrice(0.00);
	}


	return (
		<Grid 
			areas={[
				{name: 'check_info', start: [0,0], end: [0,0]},
				{name: 'item_info', start: [0,1], end: [0,1]},
				{name: 'main', start: [0,2], end: [0,2]},
			]} 
			columns={["xlarge"]}
			rows={['xsmall', 'xsmall', 'medium']}  
			gap="small"
			responsive
			alignSelf="center"
		>
			<Box gridArea="check_info" background="light-2" align="center" justify="center" direction="row" gap="large">
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
			
			<Box gridArea="summary" background="light-6" direction="row">
				<p>I am a box</p>
			</Box>

			<Box gridArea="item_info" background="light-2" align="center" justify="start" direction="row" gap="small">
				<Button primary label="+" margin="medium" onClick={() => handleItemAdd()}/>
				
				<FormField id="personName" label="Name of Person">
  				<TextInput 
  					placeholder="Name of Person"
  					value={personName}
  					onChange={event => setPersonName(event.target.value)}
  					size="small"
  				/>
				</FormField>
				<FormField id="itemName" label="Name of Item">
  				<TextInput 
  					placeholder="Name of Item"
  					value={itemName}
  					onChange={event => setItemName(event.target.value)}
  					size="small"
  				/>
				</FormField>
				<FormField id="itemPrice" label="Cost of Item" >
  				<TextInput 
  					placeholder="0.00"
  					value={itemPrice}
  					onChange={event => setItemPrice(event.target.value)}
  					size="small"	  					
  				/>
				</FormField>
			</Box>

			<Box gridArea="main" direction="column">
				<Table>
					<TableHeader>
						<TableRow>
							<TableCell scope="col" border="bottom">
								Name
							</TableCell>
							<TableCell scope="col" border="bottom">
								Price
							</TableCell>
						</TableRow>
					</TableHeader>
					<TableBody>
						{itemsList.map((value, index) => {
							return <Item itemName={value.itemName} personName={value.personName} itemPrice={value.itemPrice} />
						})}
					</TableBody>
				</Table>
			</Box>
			<Box gridArea="bottom" background="light-2" />
		</Grid>
	);
};

export default Receipt;

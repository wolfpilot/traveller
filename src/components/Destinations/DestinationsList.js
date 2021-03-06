import React from 'react';
import DestinationsItem from './DestinationsItem';

const DestinationsList = (props) => {
	const destinationItems = props.destinations.map((destination) => {
		return <DestinationsItem
			key={destination.id}
			destination={destination}
			onLike={(destination) => props.onLike(destination)} />
	});

	return (
		<div className="destinations-list">
			{destinationItems}
		</div>
	);
}

export default DestinationsList;

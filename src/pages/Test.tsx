// import isUserInArea from '@/utils/isUserInArea';
import { Location } from '@/types';
// import mapLocations from '@/data/mapLocations.json';
// import React, { useEffect, useState } from 'react';
import useWatchGeoLocation from '@/hooks/useWatchGeoLocation';
import getCurrentLocation from '@/utils/getCurrentLocation';
// import Map from '@/components/Map';

function Test() {
	//const target: Location = { lat: 33.2419183, lon: 130.2911011 };
	//const target: Location = { lat: 33.241597723216685, lon:130.29113956700826};

	const target: Location = { lat: 33.24203231210039, lon: 130.29191519180145 };

	// for (let i = 0; i < mapLocations.length; i++) {
	// 	console.log(isUserInArea(mapLocations[i].area, target));
	// }
	const current_user_place = getCurrentLocation(target);
	console.log(current_user_place);
	// return (
	// 	<>
	// 		<Map/>

	// 	</>
	// );
	const location = useWatchGeoLocation();
	console.log(location);

	return (
		<div>
			<h1>Current Location</h1>
			{location.lat && location.lon ? (
				<p>
					Latitude: {location.lat}, Longitude: {location.lon}
				</p>
			) : (
				<p>Getting location...</p>
			)}
		</div>
	);
}

export default Test;

import useIsUserInArea from '@/utils/isUserInArea';
import { Location } from '@/types';
import mapLocations from '@/data/mapLocations.json';

function Test() {
	const target: Location = { lat: 33.2419183, lon: 130.2911011 };
	for (let i = 0; i < mapLocations.length; i++) {
		console.log(useIsUserInArea(mapLocations[i].area, target));
	}
	return (
		<>
			<h1>test</h1>
		</>
	);
}

export default Test;

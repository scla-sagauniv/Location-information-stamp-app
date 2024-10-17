import useIsUserInArea from '@/utils/isUserInArea';
import { Location } from '@/types';

function Test() {
	// 図書館
	// (33.2418049, 130.2906834)
	// (33.2412766, 130.2908134)
	// (33.2413686, 130.2914200)
	// (33.2418741, 130.2913231)
	const test_inputs: Location[] = [
		{ lat: 33.2418049, lon: 130.2906834 },
		{ lat: 33.2412766, lon: 130.2908134 },
		{ lat: 33.2413686, lon: 130.29142 },
		{ lat: 33.2418741, lon: 130.2913231 },
	];
	const target: Location = { lat: 33.2419183, lon: 130.2911011 };
	const test = useIsUserInArea(test_inputs, target);
	console.log(test);
	return (
		<>
			<h1>test</h1>
			<p>{test}</p>
		</>
	);
}

export default Test;

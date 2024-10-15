import useIsUserInArea from '@/api/useIsUserInArea';

function Test() {
	const test = useIsUserInArea({}, {});
	console.log(test);
	return (
		<>
			<h1>test</h1>
			<p>{test}</p>
		</>
	);
}

export default Test;

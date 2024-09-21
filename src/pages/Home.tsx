import { useEffect } from 'react';

function Home() {
	useEffect(() => {
		navigator.bluetooth.getAvailability().then((available) => {
			if (available) {
				console.log('Web Bluetooth is available');
			} else {
				console.log('Web Bluetooth is not available');
			}
		});
	}, []);

	return (
		<>
			<div>Home</div>
		</>
	);
}

export default Home;

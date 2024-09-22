import { useEffect } from 'react';

function Home() {
	useEffect(() => {
		if (navigator.bluetooth) {
			navigator.bluetooth
				.getAvailability()
				.then((available) => {
					if (available) {
						console.log('Web Bluetooth is available');
					} else {
						console.log('Web Bluetooth is not available');
					}
				})
				.catch((error) => {
					console.error('Error accessing Bluetooth API:', error);
				});
		} else {
			console.log('Web Bluetooth API is not available in this browser.');
		}
	}, []);

	return (
		<>
			<div>Home</div>
		</>
	);
}

export default Home;

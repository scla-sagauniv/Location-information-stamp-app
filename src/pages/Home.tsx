import { useEffect } from 'react';

const connectToIBeacon = async () => {
	try {
		console.log('Bluetoothデバイスに接続中...');
		const device = await navigator.bluetooth.requestDevice({
			filters: [{ name: 'FSC-BP103B' }],
		});
		console.log('デバイスに接続しました:', device);
	} catch (error) {
		console.error('デバイスへの接続エラー:', error);
	}
};

function Home() {
	useEffect(() => {
		if (!navigator.bluetooth) {
			console.log('Web Bluetooth API はこのブラウザでは使えません');
		}
	}, []);

	return (
		<div>
			<h1>Home</h1>
			<button onClick={connectToIBeacon}>Bluetoothデバイスに接続</button>
		</div>
	);
}

export default Home;

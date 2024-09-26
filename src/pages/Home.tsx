import { useEffect, useState } from 'react';

const connectToIBeacon = async (setDeviceName: (name: string) => void) => {
	try {
		console.log('Bluetoothデバイスに接続中...');
		const device = await navigator.bluetooth.requestDevice({
			filters: [{ name: 'FSC-BP103B' }],
		});
		console.log('デバイスに接続しました:', device);
		setDeviceName(device.name || '名前不明のデバイス');
	} catch (error) {
		console.error('デバイスへの接続エラー:', error);
	}
};

function Home() {
	const [deviceName, setDeviceName] = useState<string | null>(null);

	useEffect(() => {
		if (!navigator.bluetooth) {
			console.log('Web Bluetooth API はこのブラウザでは使えません');
		}
	}, []);

	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => connectToIBeacon(setDeviceName)}>
				Bluetoothデバイスに接続
			</button>
			{deviceName && <div>接続できたデバイス名: {deviceName}</div>}
		</div>
	);
}

export default Home;

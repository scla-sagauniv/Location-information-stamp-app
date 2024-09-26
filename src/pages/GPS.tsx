import { useGeolocation } from '@/hooks/useGeolocation';

function GPS() {
	const targetLocation = {
		lat: 33.2382305,
		lon: 130.2962176,
	};
	const radius = 30;

	const isWithinRadius = useGeolocation(targetLocation, radius);

	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="radar-container">
				<div className="radar-bg">
					<div className="radar-scan-line"></div>
				</div>
			</div>
			<div>
				{isWithinRadius.isWithinRadius
					? 'スタンプ獲得!!'
					: 'スタンプ獲得まで30m圏内に入ってください'}
			</div>
		</div>
	);
}

export default GPS;

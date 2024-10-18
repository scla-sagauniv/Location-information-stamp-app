import { useState, useEffect } from 'react';
//import { Location } from '@/types';
import { watchGeolocation } from '@/utils/watchGeolocation';

export const useFirstLoad = (): [
	isExplanationOpen: boolean,
	setIsExplanationOpen: (open: boolean) => void,
	selectedLocations: number[],
	isWithinRadius: boolean[],
	altitude: number | null,
] => {
	const radius = 10;
	const [isExplanationOpen, setIsExplanationOpen] = useState<boolean>(false);
	const [selectedLocations, setSelectedLocations] = useState<number[]>([]);
	const [isWithinRadius, setIsWithinRadius] = useState<boolean[]>([]);
	const [altitude, setAltitude] = useState<number | null>(null);

	useEffect(() => {
		// モーダル表示チェック
		const hasSeenExplanation = localStorage.getItem('isModalShown');
		if (!hasSeenExplanation) {
			setIsExplanationOpen(true);
			localStorage.setItem('isModalShown', 'true');
		}

		const savedLocations = localStorage.getItem('selectedLocations');
		let locations: number[];
		if (savedLocations) {
			locations = JSON.parse(savedLocations);
		} else {
			// const targetLocations: Location[] = [
			// 	{ lat: 33.2439556, lon: 130.2929972, name: '熊本大学' },
			// 	{ lat: 33.2383057, lon: 130.2961993, name: '福岡大学' },
			// 	{ lat: 33.2383057, lon: 130.2961993, name: '福岡大学' },
			// 	{ lat: 33.2382305, lon: 130.2962176, name: '長崎大学' },
			// 	{ lat: 33.24, lon: 130.297, name: '大分大学' },
			// 	{ lat: 33.2382305, lon: 130.2962176, name: '九州大学' },
			// ];
			// const randomLocations = targetLocations.sort(() => 0.5 - Math.random());

			const id: number[] = [];
			for (let i = 0; i < 6; i++) {
				id.push(i);
			}
			const randomLocations = id.sort(() => 0.5 - Math.random());
			locations = randomLocations.slice(0, 3);
			localStorage.setItem('selectedLocations', JSON.stringify(locations));
		}
		setSelectedLocations(locations);
		// selectedLocations がセットされてから watchGeolocation を呼び出す
		if (locations.length > 0) {
			const watchIds = watchGeolocation(
				locations,
				radius,
				setIsWithinRadius,
				setAltitude,
			);
			console.log('watchIds', watchIds);
		}
	}, []);

	return [
		isExplanationOpen,
		setIsExplanationOpen,
		selectedLocations,
		isWithinRadius,
		altitude,
	];
};

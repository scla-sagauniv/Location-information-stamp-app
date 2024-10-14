import { useState, useEffect } from 'react';
import { Location } from '@/types';

export const useFirstLoad = (): [
	boolean,
	(open: boolean) => void,
	Location[],
] => {
	const [isExplanationOpen, setIsExplanationOpen] = useState<boolean>(false);
	const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);

	useEffect(() => {
		const hasSeenExplanation = localStorage.getItem('isModalShown');

		if (!hasSeenExplanation) {
			setIsExplanationOpen(true);
			localStorage.setItem('isModalShown', 'true');
		}

		const savedLocations = localStorage.getItem('selectedLocations');
		if (savedLocations) {
			setSelectedLocations(JSON.parse(savedLocations));
		} else {
			const targetLocations: Location[] = [
				{ lat: 33.2382305, lon: 130.2962176, name: '佐賀大学' },
				{ lat: 33.24, lon: 130.297, name: '熊本大学' },
				{ lat: 33.2382305, lon: 130.2962176, name: '福岡大学' },
				{ lat: 33.2382305, lon: 130.2962176, name: '長崎大学' },
				{ lat: 33.24, lon: 130.297, name: '大分大学' },
				{ lat: 33.2382305, lon: 130.2962176, name: '九州大学' },
			];
			const shuffledLocations = targetLocations.sort(() => 0.5 - Math.random());
			const selected = shuffledLocations.slice(0, 3);
			setSelectedLocations(selected);
			localStorage.setItem('selectedLocations', JSON.stringify(selected));
		}
	}, []);

	return [isExplanationOpen, setIsExplanationOpen, selectedLocations];
};

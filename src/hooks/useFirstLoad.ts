import { useState, useEffect } from 'react';
import { Location } from '@/types';
import { watchGeolocation } from '@/utils/watchGeolocation';

export const useFirstLoad = (): [
	isExplanationOpen: boolean,
	setIsExplanationOpen: (open: boolean) => void,
	selectedLocations: Location[],
	isWithinRadius: boolean[],
	altitude: number | null,
	position: Location | null, // 'Location | null'に変更
	currentLocationId: number | null,
] => {
	const radius = 10;
	const [isExplanationOpen, setIsExplanationOpen] = useState<boolean>(false);
	const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
	const [isWithinRadius, setIsWithinRadius] = useState<boolean[]>([]);
	const [altitude, setAltitude] = useState<number | null>(null);
	const [position, setPosition] = useState<Location | null>(null); // 初期値をnullに設定
	const [currentLocationId, setCurrentLocationId] = useState<number | null>(
		null,
	);

	useEffect(() => {
		// モーダル表示チェック
		const hasSeenExplanation = localStorage.getItem('isModalShown');
		if (!hasSeenExplanation) {
			setIsExplanationOpen(true);
			localStorage.setItem('isModalShown', 'true');
		}

		const savedLocations = localStorage.getItem('selectedLocations');
		let locations: Location[];
		if (savedLocations) {
			locations = JSON.parse(savedLocations);
		} else {
			const targetLocations: Location[] = [
				{ lat: 33.2439556, lon: 130.2929972, name: '図書館', id: 9 },
				{ lat: 33.2383057, lon: 130.2961993, name: 'ステージ', id: 10 },
				//{ lat: 33.2383057, lon: 130.2961993, name: 'バザー', id: 7 },
				{ lat: 33.2382305, lon: 130.2962176, name: 'キッチンカーなど', id: 4 },
				{ lat: 33.24, lon: 130.297, name: '教養2号館', id: 2 },
				{ lat: 33.2382305, lon: 130.2962176, name: '教養1号館', id: 1 },
				//{ lat: 33.2382305, lon: 130.2962176, name: '美術館', id: 6 },
				{ lat: 33.2382305, lon: 130.2962176, name: '銅像', id: 3 },
				{ lat: 33.2382305, lon: 130.2962176, name: '古着出店', id: 5 },
			];

			//配列をシャッフル
			const randomLocations = targetLocations.sort(() => 0.5 - Math.random());
			// 配列の先頭から3つを取得
			locations = randomLocations.slice(0, 3);
			// 選択した場所をlocalStorageに保存
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
				setPosition,
				setCurrentLocationId,
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
		position,
		currentLocationId,
	];
};

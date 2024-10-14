import { useState, useEffect } from 'react';

export const useModalOnFirstLoad = (): [boolean, (open: boolean) => void] => {
	const [isExplanationOpen, setIsExplanationOpen] = useState<boolean>(false);

	useEffect(() => {
		const hasSeenExplanation = localStorage.getItem('isModalShown');

		if (!hasSeenExplanation) {
			setIsExplanationOpen(true);
			localStorage.setItem('isModalShown', 'true');
		}
	}, []);

	return [isExplanationOpen, setIsExplanationOpen];
};

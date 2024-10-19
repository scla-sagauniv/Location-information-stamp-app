import MapBlock from '@/components/MapBlock';
import { Location } from '@/types';

type MapProps = {
	currentLocationId: number | null;
	selectedLocations: Location[];
	isWithinRadius: boolean[];
};

function Map({
	currentLocationId,
	selectedLocations,
	isWithinRadius,
}: MapProps) {
	const blocks = [
		{
			className: 'absolute left-[64px] bottom-[64px] w-[128px] h-[128px]',
			label: '図書館',
			id: 9,
		},
		{
			className: 'absolute left-[64px] bottom-[256px] w-[128px] h-[256px]',
			label: 'ステージ',
			id: 10,
		},
		{
			className: 'absolute left-[64px] bottom-[192px] w-[300px] h-[64px]',
			label: '通路',
			id: 8,
		},
		{
			className: 'absolute left-[364px] bottom-[192px] w-[200px] h-[64px]',
			label: 'バザー',
			id: 7,
		},
		{
			className: 'absolute left-[564px] bottom-[192px] w-[64px] h-[600px]',
			label: 'バザー',
			id: 0,
		},
		{
			className: 'absolute left-[436px] bottom-[64px] w-[192px] h-[128px]',
			label: 'キッチンカーなど',
			id: 4,
		},
		{
			className: 'absolute left-[628px] bottom-[664px] w-[192px] h-[128px]',
			label: '教養2号館',
			id: 2,
		},
		{
			className: 'absolute left-[628px] bottom-[536px] w-[192px] h-[128px]',
			label: '教養1号館',
			id: 1,
		},
		{
			className: 'absolute left-[436px] bottom-[600px] w-[128px] h-[192px]',
			label: '美術館',
			id: 6,
		},
	];

	return (
		<div className="overflow-x-scroll overflow-y-scroll">
			<div className="relative flex w-[884px] h-[844px] bg-gray-100">
				{blocks.map((block, index) => {
					const addCurrentAreaClass =
						currentLocationId === block.id ? 'bg-red-100 border-red-400' : '';

					// selectedLocationsに含まれている場所かどうかを確認
					const locationIndex = selectedLocations.findIndex(
						(location) => location.id === block.id,
					);

					// スタンプがある場所かどうか確認
					// selectedLocations に含まれているかつ、その場所のスタンプがまだ獲得されていない場合は印を表示
					const hasStamp =
						locationIndex !== -1 && !isWithinRadius[locationIndex];

					return (
						<MapBlock
							key={index}
							className={`${block.className} ${addCurrentAreaClass}`}
							label={block.label}
							id={block.id}
							hasStamp={locationIndex !== -1}
							stampCollected={!hasStamp}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Map;

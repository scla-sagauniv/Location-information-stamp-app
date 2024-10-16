import Stamp from './Stamp';

type StampCardProps = {
	stamps: boolean[];
};

const StampCard = ({ stamps }: StampCardProps) => {
	const remainingStamps = stamps.filter((stamp) => !stamp).length;
	return (
		<div className="flex flex-col items-center gap-4 p-4 mt-[-20px]">
			<div className="text-[25px] text-red-600 font-bold">
				残りスタンプ{remainingStamps}個
			</div>
			<div className="grid grid-rows-3 gap-6">
				{stamps.map((filled, index) => (
					<Stamp key={index} filled={filled} />
				))}
			</div>
		</div>
	);
};

export default StampCard;

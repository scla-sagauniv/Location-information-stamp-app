import Stamp from './Stamp';

type StampCardProps = {
	isStamped: boolean;
};

const StampCard = ({ isStamped }: StampCardProps) => {
	const stamps = [isStamped, false, false];

	return (
		<div className="p-8 w-[220px] mx-auto bg-white shadow-lg rounded-lg">
			<div className="grid grid-rows-3 gap-6">
				{stamps.map((filled, index) => (
					<Stamp key={index} filled={filled} />
				))}
			</div>
		</div>
	);
};

export default StampCard;

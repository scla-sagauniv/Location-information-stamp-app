import Stamp from './Stamp';

type StampCardProps = {
	stamps: boolean[];
};

const StampCard = ({ stamps }: StampCardProps) => {
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

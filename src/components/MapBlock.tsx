type Props = {
	className: string;
	label: string;
	id: number;
};

// 地図のブロック
const MapBlock = ({ className, label }: Props) => {
	return (
		<div
			className={`border border-black flex justify-center items-center border-2 text-xl font-bold bg-white ${className}`}
		>
			{label}
		</div>
	);
};

export default MapBlock;

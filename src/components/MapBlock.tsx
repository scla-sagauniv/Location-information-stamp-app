type Props = {
	className: string;
	label: string;
	color?: string;
	id: number;
};

// 地図のブロック
const MapBlock = ({ className, label, color, id }: Props) => {
	return (
		<div
			className={`border border-black flex justify-center items-center border-2 ${className} ${color}`}
		>
			{label}
			{id}
		</div>
	);
};

export default MapBlock;

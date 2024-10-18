type Props = {
	className: string;
	label: string;
	color?: string;
};

// 地図のブロック
const MapBlock = ({ className, label, color }: Props) => {
	return (
		<div
			className={`border border-black flex justify-center items-center border-2 ${className} ${color}`}
		>
			{label}
		</div>
	);
};

export default MapBlock;

type Props = {
	className: string;
	label: string;
};

// 地図のブロック
const MapBlock = ({ className, label }: Props) => {
	return (
		<div
			className={`border border-black flex justify-center items-center ${className}`}
		>
			{label}
		</div>
	);
};

export default MapBlock;

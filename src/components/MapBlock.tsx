type MapBlockProps = {
	className: string;
	label: string;
	id: number;
	mark: boolean;
};

// 地図のブロック
const MapBlock = ({ className, label, mark }: MapBlockProps) => {
	return (
		<div
			className={`border border-black flex justify-center items-center border-2 ${className}`}
		>
			{label}
			{mark && <div>🎁</div>}
		</div>
	);
};

export default MapBlock;

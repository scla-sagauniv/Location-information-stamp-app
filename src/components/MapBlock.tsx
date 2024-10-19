type Props = {
	className: string;
	label: string;
	id: number;
	hasStamp: boolean;
	stampCollected: boolean;
};

// 地図のブロック
const MapBlock = ({ className, label, hasStamp, stampCollected }: Props) => {
	return (
		<div
			className={`border border-black flex justify-center items-center border-2 text-xl font-bold bg-white ${className}`}
		>
			{label}
			{hasStamp && !stampCollected && <div>🎁</div>}
			{/* スタンプがある場合のみ印を表示、スタンプが獲得されたら消す */}
		</div>
	);
};

export default MapBlock;

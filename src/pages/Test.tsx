import React from 'react';

interface BlockProps {
	className: string;
	label: string;
}

const Block: React.FC<BlockProps> = ({ className, label }) => {
	return (
		<div
			className={`border border-black flex justify-center items-center ${className}`}
		>
			{label}
		</div>
	);
};

function Test() {
	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="relative w-[600px] h-[844px] border-2 border-black">
				{/* 図書館 */}
				<Block className="absolute left-0 bottom-0 w-32 h-32" label="図書館" />

				{/* ステージ */}
				<Block
					className="absolute left-0 bottom-32 w-32 h-48"
					label="ステージ"
				/>

				{/* 通路 */}
				<Block
					className="absolute left-32 bottom-32 w-[300px] h-16"
					label="通路"
				/>

				{/* 古着屋 */}
				<Block
					className="absolute left-32 bottom-48 w-32 h-16"
					label="古着屋"
				/>

				{/* バザー 1 */}
				<Block
					className="absolute left-64 bottom-32 w-32 h-16"
					label="バザー"
				/>

				{/* キッチンカーなど */}
				<Block
					className="absolute right-0 bottom-0 w-32 h-32"
					label="キッチンカーなど"
				/>

				{/* バザー 2 */}
				<Block
					className="absolute right-0 bottom-32 w-32 h-64"
					label="バザー"
				/>

				{/* 銅像 */}
				<Block className="absolute right-0 bottom-96 w-32 h-16" label="銅像" />

				{/* 教養1号館 */}
				<Block
					className="absolute right-0 top-96 w-32 h-32"
					label="教養1号館"
				/>

				{/* 教養2号館 */}
				<Block
					className="absolute right-0 top-64 w-32 h-32"
					label="教養2号館"
				/>

				{/* 美術館 */}
				<Block className="absolute right-40 top-64 w-32 h-32" label="美術館" />
			</div>
		</div>
	);
}

export default Test;

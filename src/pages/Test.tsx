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
		<div className="flex overflow-x-auto bg-gray-100 h-screen w-[884px]">
			<Block
				className="absolute left-[64px] bottom-[64px] w-[128px] h-[128px]"
				label="図書館"
			/>
			<Block
				className="absolute left-[64px] bottom-[256px] w-[128px] h-[256px]"
				label="ステージ"
			/>
			<Block
				className="absolute left-[64px] bottom-[192px] w-[300px] h-[64px]"
				label="通路"
			/>
			<Block
				className="absolute left-[364px] bottom-[192px] w-[200px] h-[64px]"
				label="バザー"
			/>
			<Block
				className="absolute left-[564px] bottom-[192px] w-[64px] h-[600px]"
				label="バザー"
			/>
			<Block
				className="absolute left-[436px] bottom-[64px] w-[192px] h-[128px]"
				label="キッチンカーなど"
			/>
			<Block
				className="absolute left-[628px] bottom-[664px] w-[192px] h-[128px]"
				label="教養2号館"
			/>
			<Block
				className="absolute left-[628px] bottom-[536px] w-[192px] h-[128px]"
				label="教養1号館"
			/>
			<Block
				className="absolute left-[436px] bottom-[600px] w-[128px] h-[192px]"
				label="美術館"
			/>
		</div>
	);
}

export default Test;

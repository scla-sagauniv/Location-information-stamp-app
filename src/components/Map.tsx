import MapBlock from '@/components/MapBlock';

function Map() {
	return (
		<div className="overflow-x-scroll">
			<div className="relative flex h-screen w-[884px]">
				<MapBlock
					className="absolute left-[64px] bottom-[64px] w-[128px] h-[128px]"
					label="図書館"
				/>
				<MapBlock
					className="absolute left-[64px] bottom-[256px] w-[128px] h-[256px]"
					label="ステージ"
				/>
				<MapBlock
					className="absolute left-[64px] bottom-[192px] w-[300px] h-[64px]"
					label="通路"
				/>
				<MapBlock
					className="absolute left-[364px] bottom-[192px] w-[200px] h-[64px]"
					label="バザー"
				/>
				<MapBlock
					className="absolute left-[564px] bottom-[192px] w-[64px] h-[600px]"
					label="バザー"
				/>
				<MapBlock
					className="absolute left-[436px] bottom-[64px] w-[192px] h-[128px]"
					label="キッチンカーなど"
				/>
				<MapBlock
					className="absolute left-[628px] bottom-[664px] w-[192px] h-[128px]"
					label="教養2号館"
				/>
				<MapBlock
					className="absolute left-[628px] bottom-[536px] w-[192px] h-[128px]"
					label="教養1号館"
				/>
				<MapBlock
					className="absolute left-[436px] bottom-[600px] w-[128px] h-[192px]"
					label="美術館"
				/>
			</div>
		</div>
	);
}

export default Map;

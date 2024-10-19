import { useFirstLoad } from '@/hooks/useFirstLoad';
import StampCard from '@/components/StampCard';
import Map from '@/components/Map';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

function GPS() {
	const [
		isExplanationOpen,
		setIsExplanationOpen,
		selectedLocations,
		isWithinRadius,
		,
		position,
		currentLocationId,
	] = useFirstLoad();

	return (
		<div className="h-screen w-screen bg-gray-100">
			<div className="fixed top-4 left-4 bg-white p-2 rounded shadow-md z-10">
				<div>{currentLocationId}</div>
				<p>現在の位置:</p>
				{position ? (
					<>
						<p>緯度: {position.lat}</p>
						<p>経度: {position.lon}</p>
						<p>選択した場所:</p>
						{selectedLocations.map((location, index) => (
							<p key={index}>{location.name}</p>
						))}
					</>
				) : (
					<p>取得中...</p>
				)}
			</div>

			<Map
				currentLocationId={currentLocationId}
				selectedLocations={selectedLocations}
			/>
			<div className="fixed right-4 bottom-4 space-x-1">
				<Dialog>
					<DialogTrigger>
						<div className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-green-600 text-white text-sm font-medium px-4 py-2 transition-colors hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
							スタンプ
						</div>
					</DialogTrigger>
					<DialogContent className="flex flex-col items-center w-4/5">
						<DialogTitle className="mt-6 text-[30px]">
							スタンプカード
						</DialogTitle>
						<StampCard stamps={isWithinRadius} />
					</DialogContent>
				</Dialog>
				<Dialog open={isExplanationOpen} onOpenChange={setIsExplanationOpen}>
					<DialogTrigger>
						<div className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-blue-500 text-white text-sm font-medium px-4 py-2 transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
							説明
						</div>
					</DialogTrigger>
					<DialogContent className="w-11/12">
						<DialogHeader>
							<DialogTitle>アプリの使い方</DialogTitle>
						</DialogHeader>
						<div className="text-black font-bold">
							<ol className="list-decimal pl-5 space-y-2">
								<li>
									地図上に青い印が表示されています。この印の場所に実際に行ってみましょう。
								</li>
								<li>
									青い印の場所に到着すると、スタンプを獲得することができます。
								</li>
								<li>
									あなたの位置は赤い印で表示されます。地図を見ながらスタンプを集めてください。
								</li>
								<li>
									スタンプを3つ集めたら、佐賀大学コンピュータ研究会の展示場所（教養129）に来て、ルーレットを回して賞品をゲットしましょう！
								</li>
							</ol>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}

export default GPS;

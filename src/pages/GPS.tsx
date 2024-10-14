import { useGeolocation } from '@/hooks/useGeolocation';
import { useModalOnFirstLoad } from '@/hooks/useModalOnFirstLoad';
import StampCard from '@/components/StampCard';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

function GPS() {
	const [isExplanationOpen, setIsExplanationOpen] = useModalOnFirstLoad();

	const targetLocations = [
		{ lat: 33.2382305, lon: 130.2962176 },
		{ lat: 33.24, lon: 130.297 },
		{ lat: 33.2382305, lon: 130.2962176 },
	];
	const radius = 30;

	const stamps = useGeolocation(targetLocations, radius);

	return (
		<div className="h-screen w-screen bg-gray-100">
			<div className="fixed right-4 bottom-4 space-x-1">
				<Dialog>
					<DialogTrigger>
						<Button className="bg-green-600">スタンプ</Button>
					</DialogTrigger>
					<DialogContent className="w-4/5">
						<StampCard stamps={stamps.isWithinRadius} />
					</DialogContent>
				</Dialog>
				<Dialog open={isExplanationOpen} onOpenChange={setIsExplanationOpen}>
					<DialogTrigger>
						<Button className="bg-blue-500">説明</Button>
					</DialogTrigger>
					<DialogContent className="w-11/12">
						<DialogHeader>
							<DialogTitle>アプリの使い方</DialogTitle>
						</DialogHeader>
						<DialogDescription className="text-black font-bold">
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
						</DialogDescription>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}

export default GPS;

import { useGeolocation } from '@/hooks/useGeolocation';
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
						<Button className="">スタンプ</Button>
					</DialogTrigger>
					<DialogContent className="w-4/5">
						<StampCard stamps={stamps.isWithinRadius} />
					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger>
						<Button className="">説明</Button>
					</DialogTrigger>
					<DialogContent className="w-4/5">
						<DialogHeader>
							<DialogTitle>アプリの使い方</DialogTitle>
						</DialogHeader>
						<DialogDescription>
							<p>Dialog Description</p>
						</DialogDescription>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}

export default GPS;

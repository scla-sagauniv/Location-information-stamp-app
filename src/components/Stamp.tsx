type StampProps = {
	filled: boolean;
};

const Stamp = ({ filled }: StampProps) => {
	return (
		<div
			className={`h-32 w-32 rounded-lg ${filled ? 'bg-green-500' : 'bg-gray-200'} flex items-center justify-center m-auto shadow-md`}
		>
			{filled && <span className="text-white text-4xl font-bold">✓</span>}
		</div>
	);
};

export default Stamp;

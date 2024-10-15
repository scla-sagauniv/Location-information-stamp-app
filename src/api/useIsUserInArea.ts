// 指定したエリアに指定した座標が存在するか判定する

type Props = {
	area: object;
	position: object;
};

// 地図のブロック
const useIsUserInArea = ({ area, position }: Props) => {
	if (area && position) {
		return false;
	}
	return true;
};

export default useIsUserInArea;

import * as turf from '@turf/turf';

// 指定したエリアに指定した座標が存在するか判定する
const useIsUserInArea = (area: object, location: object): boolean => {
	if (!area && !location) {
		return false;
	}
	// 多角形を定義する4点の緯度経度
	// 図書館
	// (33.2418049, 130.2906834)
	// (33.2412766, 130.2908134)
	// (33.2413686, 130.2914200)
	// (33.2418741, 130.2913231)
	//
	// 通路 33.2419183, 130.2911011
	// 図書館 33.2415736, 130.2911185
	const polygonPoints = [
		[130.2906834, 33.2418049], // 点1 (東京)
		[130.2908134, 33.2412766], // 点2
		[130.29142, 33.2413686], // 点3
		[130.2913231, 33.2418741], // 点4
	];
	// 判定する点
	const lat = 33.2419183; // 初期値は東京の緯度
	const lon = 130.2911011; // 初期値は東京の経度
	let isInside = null;

	const polygon = turf.polygon([[...polygonPoints, polygonPoints[0]]]); // 多角形を定義
	const point = turf.point([lon, lat]); // 判定する点を定義

	// 範囲内判定
	const inside = turf.booleanPointInPolygon(point, polygon);
	isInside = inside;

	return isInside;
};

export default useIsUserInArea;

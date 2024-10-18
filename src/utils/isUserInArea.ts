import * as turf from '@turf/turf';
import { Location } from '@/types';
import { Position } from 'geojson';

// 指定したエリアに指定した座標が存在するか判定する
const isUserInArea = (area: Location[], location: Location): boolean => {
	// 多角形を定義する4点の緯度経度
	const polygonPoints: Position[] = [];
	for (let i = 0; i < area.length; i++) {
		const tp: Position = [area[i].lon, area[i].lat];
		polygonPoints.push(tp);
	}
	polygonPoints.push(polygonPoints[0]);

	const polygon = turf.polygon([polygonPoints]); // 多角形を定義
	const point = turf.point([location.lon, location.lat]); // 判定する点を定義

	// 範囲内判定
	const isInside = turf.booleanPointInPolygon(point, polygon);

	return isInside;
};

export default isUserInArea;

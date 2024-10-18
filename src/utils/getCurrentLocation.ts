import mapLocations from '@/data/mapLocations.json';
import isUserInArea from './isUserInArea';
import { Location } from '@/types';

// ユーザーがマップ上のどこに存在するか判定する
// ユーザーがマップ上にいた場合，該当する場所のidを返す
// 存在しない場合-1を返す
const getCurrentLocation = (location: Location): number => {
	let isInside: number = -1;
	for (let i = 0; i < mapLocations.length; i++) {
		if (isUserInArea(mapLocations[i].area, location)) {
			isInside = mapLocations[i].id;
			break;
		}
	}

	return isInside;
};

export default getCurrentLocation;

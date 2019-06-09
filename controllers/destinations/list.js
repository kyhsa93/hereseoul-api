import request from 'request-promise';
import config from '../../config';

export default async (params) => {
  const {
    categoryGroupCode, x, y, radius, page,
  } = params;

  const query = `?category_group_code=${categoryGroupCode}&x=${x}&y=${y}&radius=${radius}&page=${page}`;

  const result = await request({
    ...config.kakao.dapi, url: config.kakao.dapi.url + query,
  });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};

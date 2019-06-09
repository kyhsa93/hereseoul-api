import request from 'request-promise';
import convert from 'xml-js';
import config from '../../config';

export default async (params) => {
  const {
    startX, startY, endX, endY, type,
  } = params;

  const xml = await request({
    uri: `${config.seoul.openapi.uri}${type}?ServiceKey=${config.seoul.openapi.ServiceKey}`,
    qs: {
      startX, startY, endX, endY,
    },
  });

  const result = convert.xml2json(xml, { compact: true, spaces: 2 });

  if (!result) return { code: 500, data: 'internal server error' };

  return { code: 200, data: result };
};

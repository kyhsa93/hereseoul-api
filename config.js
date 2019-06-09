const production = process.env.NODE_ENV === 'production';

export default {
  server: {
    port: process.env.PORT || 5000,
    production: production ? true : false,
  },
  kakao: {
    dapi: {
      url: 'https://dapi.kakao.com/v2/local/search/category.json',
      method: 'GET',
      headers: {
        'Authorization': process.env.KAKAO_KEY,
      },
    },
  },
  seoul: {
    openapi: {
      uri: 'http://ws.bus.go.kr/api/rest/pathinfo/getPathInfoBy',
      method: 'GET',
      ServiceKey: process.env.SEOUL_KEY,
    },
  },
};

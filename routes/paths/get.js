import { paths } from '../../controllers';

export default async (request, response) => {
  try {
    const {
      startX, startY, endX, endY, type,
    } = request.query;

    if (!startX) {
      return response.status(400).send('invalid startX');
    }
    if (!startY) {
      return response.status(400).send('invalid startY');
    }
    if (!endX) {
      return response.status(400).send('invalid endX');
    }
    if (!endY) {
      return response.status(400).send('invalid endY');
    }

    const pathType = ['Subway', 'Bus', 'BusNSub'];

    if (!type || pathType.indexOf(type) < 0) {
      const message = 'invalid type. type must be one of \'Subway\', \'Bus\', \'BusNSub\'';
      return response.status(400).send(message);
    }

    const { code, data } = await paths.get(request.query);

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};

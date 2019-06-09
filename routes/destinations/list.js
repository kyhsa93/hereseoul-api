import { destinations } from '../../controllers';

export default async (request, response) => {
  try {
    const {
      categoryGroupCode, x, y, radius,
    } = request.query;

    if (!categoryGroupCode) {
      return response.status(400).send('invalid categoryGroupCode');
    }
    if (!x) {
      return response.status(400).send('invalid x');
    }
    if (!y) {
      return response.status(400).send('invalid y');
    }
    if (!radius) {
      return response.status(400).send('invalid radius');
    }

    const { code, data } = await destinations.list(request.query);

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};

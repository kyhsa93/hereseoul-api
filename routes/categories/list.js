import { categories } from '../../controllers';

export default async (request, response) => {
  try {
    const { code, data } = await categories.list();

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};

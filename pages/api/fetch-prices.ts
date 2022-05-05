import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.post(
    'https://react-dev-test-api.vercel.app/api/test',
    req.body
  );

  return res.status(200).json(response.data);
}

import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import verifyJWT from "../../../lib/jwt";

const handler: NextApiHandler = (request: NextApiRequest, response: NextApiResponse) => {
    const { method, query } = request;

    if (method !== 'GET') return response.status(401).send('Inappropriate request');

    const isAuthenticated: boolean = verifyJWT(request);

    if(!isAuthenticated) return response.status(401).send('You are not authorized');

    return response.status(200).send('User details fetched');
}

export default handler;
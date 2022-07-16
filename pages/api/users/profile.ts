import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import verifyJWT from "../../../lib/jwt";

const handler: NextApiHandler = async (request: NextApiRequest, response: NextApiResponse<String>)  => {

    const isAuthenticated: boolean = verifyJWT(request);

    if(!isAuthenticated) return response.status(401).send('You are not authorized');
    response.status(200).send('Fetched Profile');
};

export default handler;
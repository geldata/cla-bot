import {NextApiResponse} from "next";
import {createAPIHandler} from "../../pages-common/apiHandler";

interface AliveContract {
  alive: boolean;
  timestamp: Date;
}

export default createAPIHandler({
  _all: {
    handler: async (req, res: NextApiResponse<AliveContract>) => {
      res.status(200).json({alive: true, timestamp: new Date()});
    },
    noAuth: true,
  },
});

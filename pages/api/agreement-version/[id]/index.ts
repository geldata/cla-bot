import { container } from "../../../../service/di";
import { AgreementListItem, AgreementVersion } from "../../../../service/domain/agreements";
import { AgreementsHandler } from "../../../../service/handlers/agreements";
import { NextApiRequest, NextApiResponse } from "next";
import { TYPES } from "../../../../constants/types";
import { handleExceptions } from "../..";
import { ErrorDetails } from "../../../../service/common/web";


const agreementsHandler = container
  .get<AgreementsHandler>(TYPES.AgreementsHandler);


export default async (
  req: NextApiRequest,
  res: NextApiResponse<AgreementVersion | ErrorDetails | void>
) => {
  const { query: { id }} = req;

  if (typeof id !== "string") {
    // should never happen by definition
    return res.status(400).end("Invalid object id");
  }

  switch (req.method) {
    case "GET":
      const data = await agreementsHandler.getAgreementVersion(id)

      if (!data) {
        return res.status(404).end("Agreement version not found.")
      }

      return res.status(200).json(data)
  }

  res.status(405).end(`${req.method} not allowed`)
}

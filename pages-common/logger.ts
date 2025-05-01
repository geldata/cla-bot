import {NextApiRequest, NextApiResponse} from "next";
import pino from "pino";

const logger = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
});

const reqContext = new AsyncLocalStorage();

export async function wrapAPILogging(
  req: NextApiRequest,
  res: NextApiResponse,
  handler: () => Promise<void>
) {
  const logData: object = {};
  const startTime = performance.now();
  try {
    await reqContext.run(logData, handler);
    logger.info({
      method: req.method,
      url: req.url,
      duration_ms: performance.now() - startTime,
      status_code: res.statusCode,
      ...logData,
    });
  } catch (err) {
    logger.error({
      method: req.method,
      url: req.url,
      duration_ms: performance.now() - startTime,
      status_code: 500,
      ...(err instanceof Error
        ? {
            error_name: err.name,
            message: err.message,
            cause: err.cause,
            stack: err.stack,
          }
        : {
            message: String(err),
          }),
      ...logData,
    });
    res.status(500).end("internal server error");
  }
}

export function addLogContext(data: object) {
  const ctxData = reqContext.getStore();
  if (ctxData) {
    Object.assign(ctxData, data);
  }
}

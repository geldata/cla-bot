function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class RetryError extends Error {
  internalError: Error;

  constructor(internalError: Error, methodName: string) {
    super(
      `The method ${methodName} failed more than allowed retry times. ` +
        `Inspect the internal error for more details on the last error.`
    );
    this.internalError = internalError;
  }
}

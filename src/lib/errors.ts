export class AppError extends Error {
  constructor(message: string, public code = 'invalid_request', public status = 400) {
    super(message);
    this.name = 'AppError';
  }
}

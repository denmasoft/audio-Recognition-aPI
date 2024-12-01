export type ErrorCode = 
  | 'VALIDATION_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'NOT_FOUND'
  | 'RATE_LIMIT_EXCEEDED'
  | 'EXTERNAL_API_ERROR';

export interface AppErrorParams {
  code: ErrorCode;
  message: string;
  statusCode: number;
  details?: unknown;
}
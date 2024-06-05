export interface BaseResponse<T> {
    isSuccessful: boolean
    message: string
    errorResponse: ErrorResponse
    data: T
  }
  
  export interface ErrorResponse {
    responseCode: string
    responseMessage: string
    responseDescription: string
  }
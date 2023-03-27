import { NextFunction, Request, Response } from "express"

class ValidationError extends Error {}

export const handleError = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error)

    res
       .status(error instanceof ValidationError ? 400 : 500)
       .json({
            message: error instanceof ValidationError ? error.message : 'Sorry, please try again later!'
       })
}
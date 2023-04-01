import express, { json, Router } from "express";
import cors from "cors";
import "express-async-errors"
import rateLimit from "express-rate-limit"

import { handleError } from "./utils/errors";
import { adRouter } from "./routers/ad";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000  '
}))
app.use(json())
app.use(rateLimit({
    windowMs: 1000 * 60 * 5,
    max: 100
}))

const router = Router()
router.use('/ad', adRouter)
app.use('/api', router)

app.use(handleError)

app.listen(3001, '0.0.0.0', () => {
    console.log('listening on http://localhost:3001')
})
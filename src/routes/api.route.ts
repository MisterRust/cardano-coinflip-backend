import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.send({
        key: "shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early"
    })
})
  

export { router as apiRouter };

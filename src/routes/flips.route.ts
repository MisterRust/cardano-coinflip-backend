import express, { Request, Response } from 'express';
import { Flip } from '../models/flips.model';
import { IFlip } from '../types/types';
// import { Lucid, Blockfrost } from "https://deno.land/x/lucid@0.10.7/mod.ts";
const router = express.Router();

// router.route('/create').post(async (req: Request, res: Response, next: any) => {
//     const flipData: IFlip = req.body;
//     console.log("req.body.isWin", req.body.isWin)
//     try {
//         // const data = await Flip.create(flipData);
//         if (req.body.isWin) {
//             const lucid = await Lucid.new(
//                 new Blockfrost(
//                     "https://cardano-mainnet.blockfrost.io/api/v0",
//                     'mainnetGY4Dy2Odu9EN6N7cQTq8z2EoW9BqdRlH'
//                 ),
//                 "Mainnet"
//             );
//             const seed = "shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early"
//             await lucid.selectWalletFromSeed(seed);
//             let tx;
//             if ( req.body.token === "ada") {
//                 tx = await lucid.newTx()
//                     .payToAddress(req.body.receiver, { lovelace: BigInt(req.body.amount * 2) })
//                     .complete();

//             } else {
//                 tx = await lucid.newTx()
//                     // @ts-ignore
//                     .payToAddress(_address, { [policy + asset]: _token_amount * 2 })
//                     .complete();
//             }
//             const signedTx = await tx.sign().complete();

//             const txHash = await signedTx.submit();
//             console.log("txhash", txHash)
//         }
//         // console.log(data);
//         // res.json(data);
//     } catch (error) {
//         return next(error);
//     }
// });

export { router as flipRouter };

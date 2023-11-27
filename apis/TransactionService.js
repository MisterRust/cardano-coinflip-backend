import express from 'express';
import {
    Lucid, Blockfrost, toUnit, Data, Constr, fromHex,
    toHex, sha256
} from "lucid-cardano";
import Flip from '../models/Flip.js';

const transactionRouter = express.Router();// ok
transactionRouter.post('/withdraw', async (req, res) => {
    console.log("req.body", req.body)
    const amount = req.body.amount;
    const address = req.body.address;
    const tokenType = req.body.tokenType;

    try {
        const lucid = await Lucid.new(
            new Blockfrost(
                "https://cardano-mainnet.blockfrost.io/api/v0",
                "mainnetGY4Dy2Odu9EN6N7cQTq8z2EoW9BqdRlH"
            ),
            "Mainnet"
        );

        await lucid.selectWalletFromSeed('shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early');

        let tx;

        if (tokenType === "ada") {
            tx = await lucid.newTx()
                .payToAddress(address, { lovelace: BigInt(amount * 2 * 1000000) })
                .complete();
        }
        if (tokenType === "snek") {
            tx = await lucid.newTx()
                .payToAddress(address, { ["279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b"]: BigInt(amount * 2) })
                .complete();
        }
        if (tokenType === "nebula") {
            tx = await lucid.newTx()
                .payToAddress(address, { ["3744d5e39333c384505214958c4ed66591a052778512e56caf420f624e4542554c41"]: BigInt(amount * 2 * 100000000) })
                .complete();
        }

        const signedTx = await tx.sign().complete();
        const txHash = await signedTx.submit();
        console.log("txhash", txHash);

        if(txHash){
            const newTransaction = await Flip.create({
                addr: req.body.address,
                amount: req.body.amount,
                token: req.body.tokenType,
                result: true,
                created_at: new Date().getTime()
            });

            res.json({
                "success": true
            });
        }else{
            res.json({
                "success": false
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error creating transaction' });
    }
});

export default transactionRouter;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withDraw = void 0;
// @ts-ignore
const lucid_cardano_1 = require("lucid-cardano");
const withDraw = (_address, _token_amount, tokenType) => __awaiter(void 0, void 0, void 0, function* () {
    // if success
    const lucid = yield lucid_cardano_1.Lucid.new(new lucid_cardano_1.Blockfrost("https://cardano-mainnet.blockfrost.io/api/v0", 'mainnetGY4Dy2Odu9EN6N7cQTq8z2EoW9BqdRlH'), "Mainnet");
    const seed = "shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early";
    yield lucid.selectWalletFromSeed(seed);
    let tx;
    if (tokenType === "ada") {
        tx = yield lucid.newTx()
            .payToAddress(_address, { lovelace: BigInt(_token_amount * 2) })
            .complete();
    }
    else {
        tx = yield lucid.newTx()
            // @ts-ignore
            .payToAddress(_address, { [policy + asset]: _token_amount * 2 })
            .complete();
    }
    const signedTx = yield tx.sign().complete();
    const txHash = yield signedTx.submit();
    console.log("txhash", txHash);
});
exports.withDraw = withDraw;

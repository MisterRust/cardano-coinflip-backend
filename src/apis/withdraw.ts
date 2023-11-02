// @ts-ignore
import { Lucid, Blockfrost } from "lucid-cardano"
export const withDraw = async (_address: string, _token_amount: number, tokenType: string) => {
      // if success
      const lucid = await Lucid.new(
        new Blockfrost(
          "https://cardano-mainnet.blockfrost.io/api/v0",
          'mainnetGY4Dy2Odu9EN6N7cQTq8z2EoW9BqdRlH'
        ),
        "Mainnet"
      );
      const seed = "shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early"
      await lucid.selectWalletFromSeed(seed);
      let tx;
      if (tokenType === "ada") {
        tx = await lucid.newTx()
          .payToAddress(_address, { lovelace: BigInt(_token_amount * 2) })
          .complete();

      } else {
        tx = await lucid.newTx()
          // @ts-ignore
          .payToAddress(_address, { [policy + asset]: _token_amount * 2 })
          .complete();
      }
      const signedTx = await tx.sign().complete();

      const txHash = await signedTx.submit();
      console.log("txhash", txHash)

  }
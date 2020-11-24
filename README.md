# aExchange
aExchange or "aEx" for short, is a simple application that allows users of the Arisen and BitShares networks to move RiseCoin (RIX) between both networks. aExchange will launch on January 1st, 2021 at [https://aex.arisen.network](https://aex.arisen.network).

## How It Works
aEx easily allows holders of RIX to move their RIX from one blockchain to another. Below, we'll explain how the application works. For now aEx only allows RIX to be moved from Arisen to BitShares or from BitShares to Arisen.

NOTE: Soon, RIX will be issued on the EOS, Ethereum and TRON networks and these networks will soon be integrated with aExchange, so that RIX can be moved across 5 different blockchains.

### Moving RIX From BitShares to Arisen
- Alice is asked where she is moving RIX from. She selects "BitShares".
- Alice is then asked where she is moving RIX to. She selects "Arisen".
- Alice is then asked how much RIX she is moving. She types "500.0000" (RIX uses 4 decimals).
- Alice is then shown instructions on how to send RIX from BitShares to Arisen, as follows:
-- Alice is asked to send 500.0000 RIX to the arisen-out account on BitShares, with a random SHA-256-based combination of letters and numbers to be entered in the transaction's memo.
- Alice sends the transaction.
- aExchange searches the BitShares network for a transaction matching 500.0000 RIX to the "arisen-out" account on BitShares, with a memo that matches the transaction's memo.
- Once found, aExchange sends 500.0000 RIX from the @out account on Arisen, to the Arisen username that Alice entered.
- Alice has moved 500.0000 RIX from BitShares to the Arisen network. The 500.0000 RIX on BitShares was moved to the arisen-out account on BitShares, pulling the 500.0000 tokenized RIX out of Arisen's overall circulation and then moving 500.0000 native RIX from the @out account on Arisen into Alice's account.

### Moving RIX From Arisen To BitShares
- Bob is asked where he is moving RIX from. He selects "Arisen".
- Bob is then asked where he is moving RIX to. He selects "BitShares".
- Bob is then asked how much RIX he is moving. He types "20.0000" (RIX has 4 decimals).
- Bob is then shown instructions on how to send RIX from Arisen to BitShares, as follows:
-- Bob is asked to send 20.0000 RIX to the @out account on Arisen, with a random SHA-256-based combination of letters and numbers to be entered in the transaction's memo.
- Bob sends the transaction.
- aExchange searches the Arisen network for a transaction matching 20.0000 RIX to the @out account on Arise, with a memo that matches the transaction's memo.
- Once found, aExchange sends 20.0000 RIX from the @out account on Arisen, to the BitShares username that Bob entered.
- Bob has moved 20.0000 RIX from Arisen to the BitShares network. The 20.0000 RIX on Arisen was moved to the @out account on Arisen, pulling the 20.0000 native RIX out of Arisen's overall circulation and then moving 20.0000 tokenized RIX from the arisen-out account on BitShares, into Bob's BitShares account.

## DEVELOPERS
[@shikhar](shikhar@arisen.network)
[@jared](jared@arisen.network)

## LICENSE
[MIT](LICENSE.md)

## COPYRIGHT
Copyright (C) 2020 - Peeps Labs. All rights reserved.
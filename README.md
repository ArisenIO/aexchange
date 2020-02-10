# aExchange
aExchange or "aEx" for short, is a simple application that allows users of the Arisen and BitShares networks to move ArisenCoin (RSN) between both networks. aExchange will launch on February 19th, 2020 at [https://aex.arisen.network](https://aex.arisen.network).

## How It Works
aEx easily allows holders of RSN to move their RSN from one blockchain to another. Below, we'll explain how the application works. For now aEx only allows RSN to be moved from Arisen to BitShares or from BitShares to Arisen.

NOTE: Soon, RSN will be issued on the EOS, Ethereum and TRON networks and these networks will soon be integrated with aExchange, so that RSN can be moved across 5 different blockchains.

### Moving RSN From BitShares to Arisen
- Alice is asked where she is moving RSN from. She selects "BitShares".
- Alice is then asked where she is moving RSN to. She selects "Arisen".
- Alice is then asked how much RSN she is moving. She types "500.0000" (RSN uses 4 decimals).
- Alice is then shown instructions on how to send RSN from BitShares to Arisen, as follows:
-- Alice is asked to send 500.0000 RSN to the arisen-out account on BitShares, with a random SHA-256-based combination of letters and numbers to be entered in the transaction's memo.
- Alice sends the transaction.
- aExchange searches the BitShares network for a transaction matching 500.0000 RSN to the "arisen-out" account on BitShares, with a memo that matches the transaction's memo.
- Once found, aExchange sends 500.0000 RSN from the @out account on Arisen, to the Arisen username that Alice entered.
- Alice has moved 500.0000 RSN from BitShares to the Arisen network. The 500.0000 RSN on BitShares was moved to the arisen-out account on BitShares, pulling the 500.0000 tokenized RSN out of Arisen's overall circulation and then moving 500.0000 native RSN from the @out account on Arisen into Alice's account.

### Moving RSN From Arisen To BitShares
- Bob is asked where he is moving RSN from. He selects "Arisen".
- Bob is then asked where he is moving RSN to. He selects "BitShares".
- Bob is then asked how much RSN he is moving. He types "20.0000" (RSN has 4 decimals).
- Bob is then shown instructions on how to send RSN from Arisen to BitShares, as follows:
-- Bob is asked to send 20.0000 RSN to the @out account on Arisen, with a random SHA-256-based combination of letters and numbers to be entered in the transaction's memo.
- Bob sends the transaction.
- aExchange searches the Arisen network for a transaction matching 20.0000 RSN to the @out account on Arise, with a memo that matches the transaction's memo.
- Once found, aExchange sends 20.0000 RSN from the @out account on Arisen, to the BitShares username that Bob entered.
- Bob has moved 20.0000 RSN from Arisen to the BitShares network. The 20.0000 RSN on Arisen was moved to the @out account on Arisen, pulling the 20.0000 native RSN out of Arisen's overall circulation and then moving 20.0000 tokenized RSN from the arisen-out account on BitShares, into Bob's BitShares account.

## DEVELOPERS
[@shikhar](shikhar@arisen.network)
[@jared](jared@arisen.network)

## LICENSE
[MIT](LICENSE.md)

## COPYRIGHT
Copyright (C) 2020 - The Satoshi Foundation. All rights reserved.
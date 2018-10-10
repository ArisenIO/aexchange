import { decorate, observable, action } from 'mobx'
import rsnAgent from '../RsnAgent'

class ArisenStore {
  aexchangewalletAccount = 'aexchange'
  info = null

  getInfo = async () => {
    try {
      const rsnInfo = await rsnAgent.getInfo()

      this.info = rsnInfo
    } catch (e) {}
  }

  getCurrencyBalance = async data => {
    return await rsnAgent.getCurrencyBalance(data)
  }

  buyToken = async (contract, data) => {
    //memo : {"type":"buyLimit","symbol": "IQ","market":"IQ_RSN","price":0.00101,"qty":100,"amount":0.101}
    const cb = tr => {
      const options = { authorization: [`${data.accountName}@${data.authority}`] }

      tr.transfer(
        {
          from: data.accountName,
          to: this.aexchangewalletAccount,
          quantity: `${Number(data.quantity)
            .toFixed(data.precision)
            .toString()} ${data.symbol}`,
          memo: data.memo
        },
        options
      )
    }

    return await rsnAgent.createTransactionWithContract(contract, cb)
  }

  sellToken = async (contract, data) => {
    //memo : {"type":"sellSimit","symbol": "IQ","market":"IQ_RSN","price":0.00255,"qty":44.89,"amount":0.1144}
    const cb = tr => {
      const options = { authorization: [`${data.accountName}@${data.authority}`] }

      tr.transfer(
        {
          from: data.accountName,
          to: this.aexchangewalletAccount,
          quantity: `${Number(data.quantity)
            .toFixed(data.precision)
            .toString()} ${data.symbol}`,
          memo: data.memo
        },
        options
      )
    }

    return await rsnAgent.createTransactionWithContract(contract, cb)
  }
}

decorate(ArisenStore, {
  info: observable,
  getInfo: action
})

export default new ArisenStore()

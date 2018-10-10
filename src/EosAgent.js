import Rsn from 'arisenjs'
import * as Values from './constants/Values'

const singleton = Symbol()
const singletonRsnAgent = Symbol()

const ENDPOINT = Values.NETWORK.protocol + '://' + Values.NETWORK.host + ':' + Values.NETWORK.port

class RsnAgent {
  constructor(rsnAgent) {
    if (rsnAgent !== singletonRsnAgent) {
      throw new Error('Cannot construct singleton')
    }

    this.arkid = null
    this._initialized = false
    this.identity = null
    this.arkidAccount = null

    this.rsn = Rsn({
      httpEndpoint: ENDPOINT,
      chainId: Values.NETWORK.chainId
    })
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new RsnAgent(singletonRsnAgent)
    }

    return this[singleton]
  }

  initArkId = arkid => {
    this.arkid = arkid
    this._initialized = true
  }

  isInitArkId = () => {
    return this._initialized
  }

  initRsnAgent = id => {
    if (id) {
      this.arkid.useIdentity(id)
      console.log('Possible identity', this.arkid.identity)
      const loginAccount = this.arkid.identity.accounts.find(
        acc => acc.blockchain === Values.NETWORK.blockchain
      )

      this.arkidAccount = loginAccount
      this.identity = id

      this.rsn = this.arkid.rsn(Values.NETWORK, Rsn, Values.CONFIG)

      return true
    }
  }

  loginWithArkId = async () => {
    if (!this.arkid) {
      return false
    }

    let id = await this.arkid.getIdentity(Values.requiredFields)

    return this.initRsnAgent(id)
  }

  logout = async () => {
    if (!this.arkid) {
      return
    }

    let res = await this.arkid.forgetIdentity()

    this._initialized = false
    this.identity = null
    this.loginAccount = null
    this.rsn = Rsn({
      httpEndpoint: ENDPOINT,
      chainId: Values.NETWORK.chainId
    })

    console.log('logout : ' + res)
  }

  getArkIdAccount = () => {
    return this.arkidAccount
  }

  getBlock = async blockNum => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.getBlock(blockNum)
  }

  getInfo = async () => {
    return this.rsn.getInfo({})
  }

  /**
   * query = {
      json: true,
      code: 'code',
      scope: 'scope',
      table: 'table name'
    }
   */
  getTableRows = async query => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.getTableRows(query)
  }

  getAccount = async accountName => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.getAccount({ account_name: accountName })
  }

  getKeyAccounts = async publicKey => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.getKeyAccounts({ public_key: publicKey })
  }

  getCurrencyBalance = async query => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.getCurrencyBalance(query)
  }

  getCurrencyStats = async query => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.getCurrencyStats(query)
  }

  getActions = async (account_name, pos, offset) => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.getActions({
      account_name,
      pos,
      offset
    })
  }

  /**
   * isProxy :
   * 1 : proxy
   * 0 : unproxy
   */
  regproxy = async (accountName, isProxy) => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.regproxy({
      proxy: accountName,
      isproxy: isProxy
    })
  }

  voteProducer = async (account, producers = [], proxy = '') => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.voteproducer(account, proxy, producers)
  }

  refund = async owner => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.refund({
      owner
    })
  }

  createTransaction = async cb => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.transaction(cb)
  }

  createTransactionWithContract = async (contract, cb) => {
    if (!this.rsn) {
      return
    }

    return await this.rsn.transaction(contract, cb)
  }

  signData = (data, pubKey) => {
    if (!this.arkid || !data || !pubKey) return null

    return this.arkid.getArbitrarySignature(pubKey, data, '', false)
  }
}

export default RsnAgent.instance

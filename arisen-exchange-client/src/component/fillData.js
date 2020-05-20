import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Spinner } from 'reactstrap';
import { inject, observer } from 'mobx-react';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';

import ArisenIdJS from 'arisenid-js/packages/core/dist';
import ArisenIdRSN from 'arisenid-js/packages/plugin-arisenjs/dist'

@inject('mainStore')
@observer
export default class FillData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            change: false,
            token: ["Arisen", "BitShare", "EOS", "TRON", "Ethereum"],
            value: 1,
            send: "Arisen",
            recieve: "BitShare",
            sender: [],
            reciever: "",
        }
    }

    handleSwap = () => {                         // swap fields value function
        this.setState({
            change: !this.state.change,
            send: this.state.recieve,
            recieve: this.state.send
        })
    }

    handleDrop = (name, e) => {                  // select drop downs value automatically
        this.setState({ [name]: e.target.value })
        if(name === 'send') {
            this.setState({sender:""})
            if(e.target.value && e.target.value === 'EOS') {
                this.handleEOSScatter('sender');
            } else if(e.target.value && e.target.value === 'Ethereum') {
                this.handleMetamask('sender');
            } else {
                this.setState({sender:[]})
                alert('Under process !!')
            }
        } else if(name === 'recieve') {
            this.setState({reciever:""})
            if(e.target.value && e.target.value === 'EOS') {
                this.handleEOSScatter('reciever');
            } else if(e.target.value && e.target.value === 'Ethereum') {
                this.handleMetamask('reciever');
            } else {
                this.setState({reciever:[]})
                alert('Under process !!')
            }
        }
    }

    handleChange = (e) => {                      // get amount value
        this.setState({
            value: e.target.value
        })
    }

    handleUsername = (e) => {                    // get usernames of the tokens
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async () => {                 // starts the exchange process
        const { sender, reciever, send, recieve, value } = this.state;
        if (sender !== "" && reciever !== "" && send !== "" && recieve !== "" && value > 0) {
            this.props.mainStore.checkUser(sender);
            this.props.mainStore.getFormValue(sender, reciever, send, recieve, value);
        } else {
            alert('Fields are missing !!');
        }
    }

    handleEOSScatter = (value) => {
        ScatterJS.plugins(new ScatterEOS());
        ScatterJS.scatter.connect("aExchange").then(connected => {
            // User does not have Scatter Desktop, Mobile or Classic installed.
            if (!connected) {
                this.setState({[value]:[]})
                alert('Please Open Scatter Wallet !!');
                return false;
            } else {
                alert('Connected');
                const scatter = ScatterJS.scatter;
                console.log('scatter value', scatter);
                scatter.getIdentity(scatter).then(identity => {
                    console.log('identity', identity)
                    this.setState({[value]: identity.accounts})
                    
                }).catch(error => {
                    console.log(error)
                })
            }
            window.ScatterJS = null;
        });
    }

    handleMetamask = (value) => {
        const metaConnection = window.ethereum;
        if (metaConnection === undefined) {
            this.setState({[value]:[]})
            alert('Install metamask !!')
        } else {
            metaConnection.enable();
            metaConnection.autoRefreshOnNetworkChange = false;
            window.web3.eth.getAccounts((err, accounts) => {
                if (accounts.length === 0) {
                    this.setState({[value]:[]})
                    alert('No account found !!')
                }
                else {
                    console.log('connected',accounts);
                    this.setState({[value]:accounts})
                }
            });
        }
    }

    handleAvote = () => {
        ArisenIdJS.plugins(new ArisenIdRSN());
        // ArisenIdJS.arisenid.connect("Put_Your_App_Name_Here").then(connected => {
        console.log('connected')
        //     if(!connected) {
        //         // User does not have ArisenId installed/unlocked.
        //         return false;
        //     }

        //     // Use `arisenid` normally now.
        //     ArisenIdJS.arisenid.getIdentity().then(res=> console.log('res',res))
        // });
    }

    render() {
        const { send, recieve, value, token } = this.state;
        return (
            <div className="col-lg-10 col-xl-10 mt-2">
                <div className="card">
                    <div className="card-body py-4">
                        <div className="py-3 mb-2">
                            <div className="d-flex flex-wrap justify-content-around">
                                <div className=" align-items-center flex4 mb-1">
                                    <p className="h6 color-voilet">Select Sender Network</p>
                                    <div className="d-flex">
                                        <UncontrolledDropdown>
                                            <DropdownToggle caret className="mb-0 text-left custom-select bg-grey br-ltb-dot3 br-0 h50 h6 fw-500 b-right-0">
                                                { typeof(this.state.sender) === 'string' &&
                                                    <div className="color-pink mb-0 fs-dot-7"><Spinner size="sm" color="danger" /></div>
                                                }
                                                {send !== '' ? send : 'Select'}
                                            </DropdownToggle>
                                            <DropdownMenu onClick={this.handleDrop.bind(this, 'send')} name="recieve">
                                                <DropdownItem value="">Select</DropdownItem>
                                                {
                                                    token.filter(item => item !== recieve).map(item => <DropdownItem key={item} value={item}>{item}</DropdownItem>)
                                                }
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={this.handleChange}
                                            className="flex4 b-right-0 b1solid h50 pl-2 pr-2 b-left-0"
                                        />
                                        <div className="br-rtb-dot3 b1solid h50 b-left-0 d-flex justify-content-center">
                                            <p className="align-self-center mb-0 pr-2">RIX</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-end mb-0 flex1 mb-1 mt-1">
                                    <a onClick={this.handleSwap} className="pointer w-50px h-50px shadow-cstm m-auto br-50 d-flex justify-content-center">
                                        <img className="w-50" src="/assets/img/arisen/exchange.svg" alt="icon" />
                                    </a>
                                </div>
                                <div className="align-items-center flex4 mb-1">
                                    <p className="h6 color-voilet">Select Reciever Network</p>
                                    <div className="d-flex">
                                        <UncontrolledDropdown className="flex2">
                                            <DropdownToggle caret className="mb-0 text-left custom-select bg-grey br-ltb-dot3 br-0 h50 h6 fw-500 b-right-0">
                                                {/* <p className="color-pink mb-0 fs-dot-7">RIX</p> */}
                                                {recieve !== '' ? recieve : 'Select'}
                                            </DropdownToggle>
                                            <DropdownMenu onClick={this.handleDrop.bind(this, 'recieve')} name="recieve">
                                                <DropdownItem value="">Select </DropdownItem>
                                                {
                                                    token.filter(item => item !== send).map(item => <DropdownItem key={item} value={item}>{item}</DropdownItem>)
                                                }
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={this.handleChange}
                                            className="flex4 b-right-0 b1solid h50 pl-2 pr-2 b-left-0"
                                        />
                                        <div className="flex1 br-rtb-dot3 b1solid h50 b-left-0 d-flex justify-content-center">
                                            <p className="align-self-center mb-0 pr-2">RIX</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                (send !== '' && recieve !== '') && <small className="ml-2">{`*${value} ${send} = ${value} ${recieve}`}</small>
                            }
                        </div>
                        <div className="d-flex justify-content-around">
                            <div className="form-group flex1 mr-2">
                                <label htmlFor="text">Enter Sender Username/Address</label>
                                <input
                                    type="text"
                                    name="sender"
                                    value={this.state.sender}
                                    onChange={this.handleUsername}
                                    className="form-control"
                                    placeholder={`Enter ${send} Username/Address`}
                                />
                            </div>
                            <div className="form-group flex1 ml-2">
                                <label htmlFor="text">Enter Reciever Username/Address</label>
                                <input
                                    type="text"
                                    name="reciever"
                                    className="form-control"
                                    value={this.state.reciever}
                                    onChange={this.handleUsername}
                                    placeholder={`Enter ${recieve} Username/Address`}
                                />
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-2">
                            <button className="btn btn-danger" onClick={this.handleSubmit}> Proceed Exchange </button>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <button className="btn btn-danger" onClick={this.handleAvote}> check Avote </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
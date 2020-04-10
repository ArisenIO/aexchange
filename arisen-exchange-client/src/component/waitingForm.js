import React from 'react';
import QRCode from 'qrcode.react';
import { inject, observer } from 'mobx-react';

@inject("mainStore")
@observer
export default class WaitingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 59,
            min: 19,
            popoverOpen: false,
        }
    }
    IsMount = false;

    componentDidMount() {
        this.IsMount = true;
        setInterval(() => {                 // suspend timer
            if (this.state.sec > 0 && this.state.min >= 0 && this.IsMount) {
                this.setState({ sec: this.state.sec - 1 })
            } else if (this.state.sec === 0 && this.state.min !== 0 && this.IsMount) {
                this.setState({ sec: 59, min: this.state.min - 1 })
            }
            if (this.state.min === 0 && this.state.sec === 0) {
                this.props.mainStore.nextStep(false);
            }
        }, 1000);
    }

    componentWillUnmount() {
        this.IsMount = false;
    }

    walletNameCopy = () => {                // copy to clipboard function
        const textField = document.createElement('textarea');
        textField.innerText = document.getElementById('walletName').innerText;
        document.body.appendChild(textField)
        textField.select();
        document.execCommand("copy");
        this.setState({ popoverOpen: true }, () => {
            setTimeout(() => {
                this.setState({ popoverOpen: false })
            }, 1000);
        })
        textField.remove();
    }

    render() {
        const { sec, min } = this.state;
        const sender = this.props.mainStore.send,
            amount = this.props.mainStore.value,
            newUser = this.props.mainStore.newUserForArisen;
        return (
            <React.Fragment>
                <div className="card mb-0">
                    <div className="card-body shadow">
                        <div>
                            <p className="w-80 pl-2 pr-2 text-center">Please send <span className="ml-1 mr-1 py-1 pl-1 pr-1 bg-voilet br-cstm h5">{amount} RSN</span> on {sender} wallet.</p>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <QRCode
                                className="br-cstm shadow b1solid p-2"
                                value={sender !== 'Arisen' ? 'arisen-out' : newUser}
                                size={180}
                            />
                        </div>
                        <div className="d-flex mt-2 justify-content-center">
                            <p className="h6 fw-500 clr-fnt text-center mb-0 align-self-center mr-1">{sender} Wallet: </p>
                            <h4 className="text-center mb-0 w-fit-content" id="walletName">{sender !== 'Arisen' ? 'arisen-out' : newUser}</h4>
                            <i
                                className="fas fa-clone align-self-center ml-2 color-voilet"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-original-title={'Copy to Clipboard'}
                                onClick={this.walletNameCopy}
                                id="tooltip1"
                            />
                        </div>
                        <hr className="mb-0" />
                        <div className="d-flex">
                            <p className=" flex2 h1 mb-0 w-fit-content"><small className="clr-fnt">TIME LEFT :</small><br />{min + ":" + sec}</p>
                            <div className=" flex4 py-2 inset-shadow pl-2 pr-2 w-100 mt-2 ml-3 br-cstm bg-fade-red mb-2">
                                <p className="h6 mb-0 clr-red fnt-tiny">Note:<span className="fw-500"> Transaction ID will be provided right after the exchange process done and dont refresh the page until you get the Transaction ID.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.popoverOpen && <p className="text-center clr-red fnt-tiny bg-red mb-0 mt-2">Copied to Clipboard !!</p>}
            </React.Fragment>
        )
    }
}
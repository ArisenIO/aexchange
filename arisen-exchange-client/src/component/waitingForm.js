import React from 'react';
import { inject, observer } from 'mobx-react';

@inject("mainStore")
@observer
export default class WaitingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 59,
            min: 19,
        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.sec > 0 && this.state.min >= 0) {
                this.setState({ sec: this.state.sec - 1 })
            } else if (this.state.sec === 0 && this.state.min !== 0) {
                this.setState({ sec: 59, min: this.state.min - 1 })
            }
        }, 1000);
    }

    render() {
        const { sec, min } = this.state;
        const sender = this.props.mainStore.send,
        value = this.props.mainStore.value;
        return (
            <div className="card col-md-6 col-11">
                <div className="card-body">
                    <div className="py-1 br-1 bg-blue w-fit-content pl-2 pr-1 ml-auto mr-auto">
                        <p className="mb-0 text-center">Exchange ID:
                            <small className="color-dark-blue fw-600 py-1 pl-1 pr-1 ml-1 bg-white br-1">123j1kjnnjk4435</small>
                        </p>
                    </div>
                    <div className="mt-3">
                        <p className="w-80 pl-2 pr-2 text-center">Please send <span className="ml-1 mr-1 py-1 pl-1 pr-1 bg-voilet br-cstm h5">{value} RSN</span> on {sender} wallet.</p>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <img className="py-2 pr-2 pl-2 br-cstm shadow b1solid" src="/assets/img/arisen/bitShare.png" alt="BitShare wattet (arisen-out)" />
                    </div>
                    <h4 className="text-center mt-2">arisen-out<br /><span className="h6 fw-500 clr-fnt">({sender} Wallet)</span></h4>
                    <hr className="mb-0" />
                    <div className="d-flex">
                        <p className=" flex2 h1 mb-0 w-fit-content"><small className="clr-fnt">TIME LEFT :</small><br />{min + ":" + sec}</p>
                        <div className=" flex4 py-2 inset-shadow pl-2 pr-2 w-100 mt-2 ml-3 br-cstm bg-fade-red mb-2">
                            <p className="h6 mb-0 clr-red fnt-tiny">Note:<span className="fw-500"> Transaction ID will be provided right after the exchange process done and dont refresh the page until you get the Transaction ID.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
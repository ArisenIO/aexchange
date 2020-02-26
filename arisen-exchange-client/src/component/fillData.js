import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { inject, observer } from 'mobx-react';

@inject('mainStore')
@observer
export default class FillData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            change: false,
            token: ["Arisen", "BitShare"],
            value: 0,
            send: "",
            recieve: "",
            sender: "",
            reciever: "",
        }
    }

    handleSwap = () => {
        this.setState({
            change: !this.state.change,
            send: this.state.recieve,
            recieve: this.state.send
        })
    }

    handleDrop = (name, e) => {
        this.setState({
            [name]: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleUsername = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    generateRandom = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    handleSubmit = () => {
        const { sender, reciever, send, recieve, value } = this.state
        if (sender !== "" && reciever !== "" && send !== "" && recieve !== "" && value > 0) {
            this.props.mainStore.getFormValue(sender, reciever, send, recieve, value);
            this.props.mainStore.nextStep(true);
            this.props.mainStore.getExchangeId(this.generateRandom(22))
        } else {
            alert('fill all fields');
        }
    }

    render() {
        const { token, send, recieve, value } = this.state;
        return (
            <div className="col-lg-12 col-xl-10 mt-4">
                <div className="card">
                    <div className="card-body py-4">
                        <div className="py-3 mb-2">
                            <div className="d-flex flex-wrap justify-content-around">
                                <form className="align-items-center flex4 mb-1">
                                    <p className="h6 color-voilet">Send</p>
                                    <div className="d-flex">
                                        <UncontrolledDropdown className="flex2">
                                            <DropdownToggle caret className="mb-0 custom-select bg-grey br-ltb-dot3 br-0 h50 h6 fw-500 b-right-0">
                                                {send !== '' ? send : 'Select'}
                                            </DropdownToggle>
                                            <DropdownMenu onClick={this.handleDrop.bind(this, 'send')} name="recieve">
                                                <DropdownItem value="">Select</DropdownItem>
                                                {
                                                    token.filter(res => res !== recieve).map(obj => <DropdownItem key={obj} value={obj}>{obj}</DropdownItem>)
                                                }
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={this.handleChange}
                                            className="flex4 b1solid h50 pl-2 b-right-0 pr-2 b-left-0"
                                        />
                                        <div className="flex1 br-rtb-dot3 b1solid h50 b-left-0 d-flex justify-content-center">
                                            <p className="align-self-center mb-0">RSN</p>
                                        </div>
                                    </div>
                                </form>
                                <div className="align-self-end mb-0 flex1 mb-1 mt-1">
                                    <a onClick={this.handleSwap} className="pointer w-50px h-50px shadow-cstm m-auto br-50 d-flex justify-content-center">
                                        <i className="fas fa-sync-alt align-self-center color-voilet" />
                                    </a>
                                </div>
                                <form className="align-items-center flex4 mb-1">
                                    <p className="h6 color-voilet">Recieve</p>
                                    <div className="d-flex">
                                        <UncontrolledDropdown className="flex2">
                                            <DropdownToggle caret className="mb-0 custom-select bg-grey br-ltb-dot3 br-0 h50 h6 fw-500 b-right-0">
                                                {recieve !== '' ? recieve : 'Select'}
                                            </DropdownToggle>
                                            <DropdownMenu onClick={this.handleDrop.bind(this, 'recieve')} name="recieve">
                                                <DropdownItem value="">Select </DropdownItem>
                                                {
                                                    token.filter(res => send !== res).map(obj => <DropdownItem key={obj} value={obj}>{obj}</DropdownItem>)
                                                }
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={this.handleChange}
                                            className="flex4 b-right-0 b1solid h50 pl-2  pr-2 b-left-0"
                                        />
                                        <div className="flex1 br-rtb-dot3 b1solid h50 b-left-0 d-flex justify-content-center">
                                            <p className="align-self-center mb-0">RSN</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {
                                (send !== '' && recieve !== '') && <small className="ml-2">{`*${value} ${send} = ${value} ${recieve}`}</small>
                            }
                        </div>
                        <form className="d-flex justify-content-around">
                            <div className="form-group flex1 mr-2">
                                <label htmlFor="text">Enter Sender Username</label>
                                <input
                                    type="text"
                                    name="sender"
                                    value={this.state.sender}
                                    onChange={this.handleUsername}
                                    className="form-control"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="form-group flex1 ml-2">
                                <label htmlFor="text">Enter Reciever Username</label>
                                <input
                                    type="text"
                                    name="reciever"
                                    className="form-control"
                                    value={this.state.reciever}
                                    onChange={this.handleUsername}
                                    placeholder="Enter username"
                                />
                            </div>
                        </form>
                        <div className="d-flex justify-content-center mt-2">
                            <button className="btn btn-danger" onClick={this.handleSubmit}> Proceed Exchange </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
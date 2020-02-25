import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class FillData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            change: false,
            token: ["Arisen", "BitShare"],
            value: 1,
            send: "",
            recieve: "",
        }
    }

    componentDidMount() {
        this.setState({
            send: this.state.token[0],
            recieve: this.state.token[1],
        })
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

    render() {
        const { token, send, recieve, value } = this.state;
        return (
            <section className="bg-gradient-2 h-100vh">
                <img src="assets/img/header-1.jpg" alt="header" className="bg-image opacity-10" />
                <div className="container height-md-20">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-9 col-xl-9">
                            <h1 className="display-4 text-white text-center">
                                <img src="/assets/img/arisen/arisenLogo.png" className="w-15" alt="logo" />
                                Arisen Exchange
                            </h1>
                        </div>
                        <div className="col-lg-10 col-xl-10">
                            <div className="card">
                                <div className="card-body py-4">
                                    <div className="align-self-center mb-0">
                                        <a onClick={this.handleSwap} className="pointer w-50px h-50px shadow-cstm m-auto br-50 d-flex justify-content-center">
                                            <i className="fas fa-sync-alt align-self-center color-voilet" />
                                        </a>
                                    </div>
                                    <div className="py-3 d-flex flex-wrap justify-content-around">
                                        <form className="align-items-center flex1">
                                            <p className="h6 color-voilet">Send</p>
                                            <div className="d-flex">
                                                <UncontrolledDropdown className="flex2">
                                                    <DropdownToggle caret className=" custom-select bg-grey br-ltb-dot3 br-0 h50 h6 fw-500 b-right-0">
                                                        {send !== '' ? send : token[0]}
                                                    </DropdownToggle>
                                                    <DropdownMenu onClick={this.handleDrop.bind(this, 'send')} name="recieve">
                                                        <DropdownItem value="Select">Select</DropdownItem>
                                                        {
                                                            token.filter(res => {
                                                                if (res !== recieve) {
                                                                    return -1;
                                                                }
                                                            }).map(obj => <DropdownItem key={obj} value={obj}>{obj}</DropdownItem>)
                                                        }
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                <input
                                                    type="number"
                                                    value={value}
                                                    onChange={this.handleChange}
                                                    className="flex3 b1solid h50 pl-2 br-rtb-dot3 pr-2 b-left-0"
                                                />
                                            </div>
                                            {
                                                (send !== 'Select' && recieve !== 'Select') && <small className="ml-2">{`*${value} ${send} = ${value} ${recieve}`}</small>
                                            }
                                        </form>
                                        <form className="align-items-center flex1 ml-2">
                                            <p className="h6 color-voilet">Recieve</p>
                                            <div className="d-flex">
                                                <UncontrolledDropdown className="flex2">
                                                    <DropdownToggle caret className=" custom-select bg-grey br-ltb-dot3 br-0 h50 h6 fw-500 b-right-0">
                                                        {recieve !== '' ? recieve : token[1]}
                                                    </DropdownToggle>
                                                    <DropdownMenu onClick={this.handleDrop.bind(this, 'recieve')} name="recieve">
                                                        <DropdownItem value="Select">Select </DropdownItem>
                                                        {
                                                            token.filter(res => {
                                                                if (send !== res) {
                                                                    return -1;
                                                                }
                                                            }).map(obj => <DropdownItem key={obj} value={obj}>{obj}</DropdownItem>)
                                                        }
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                <input
                                                    type="number"
                                                    value={value}
                                                    onChange={this.handleChange}
                                                    className="flex3 b1solid h50 pl-2 br-rtb-dot3 pr-2 b-left-0"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <form className="d-flex justify-content-around">
                                        <div className="form-group flex1">
                                            <label htmlFor="text">Enter Sender Username</label>
                                            <input type="text" className="form-control" placeholder="Enter username" />
                                        </div>
                                        <div className="form-group flex1 ml-2">
                                            <label htmlFor="text">Enter Reciever Username</label>
                                            <input type="text" className="form-control" placeholder="Enter username" />
                                        </div>
                                    </form>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-danger"> Make Transaction </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
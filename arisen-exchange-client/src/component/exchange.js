import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { inject, observer } from 'mobx-react';

import FillData from './fillData';
import WaitingForm from './waitingForm';

@inject('mainStore')
@observer
export default class Exchange extends React.Component {
    render() {
        return (
            <section className="bg-gradient-2 min-h-100vh">
                <img src="assets/img/header-1.jpg" alt="header" className="bg-image opacity-10" />
                <div className="container height-md-20">
                    <div className="row justify-content-center min-h-80">
                        <div className="col-md-9 col-lg-9 col-xl-9">
                            <h1 className="display-4 text-white text-center">
                                <img src="/assets/img/arisen/arisenLogo.png" className="w-15" alt="logo" />
                                Arisen Exchange
                            </h1>
                        </div>
                        <FillData />

                    </div>
                </div>

                <Modal isOpen={this.props.mainStore.firstStep}>
                    <ModalHeader className="py-2 d-flex justify-content-center mb-0">Transfer Details</ModalHeader>
                    <ModalBody className="py-2">
                        <WaitingForm />
                        <div className="d-flex justify-content-center mt-2">
                            <small className="mb-0 ml-auto mr-auto">Warning: Transfer can be done with in 20 minutes.</small>
                        </div>
                    </ModalBody>
                </Modal>
            </section>
        )
    }
}
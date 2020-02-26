import React from 'react';

import FillData from './fillData';
import WaitingForm from './waitingForm';
import { inject, observer } from 'mobx-react';

@inject('mainStore')
@observer
export default class Exchange extends React.Component {
    render() {
        return (
            <section className="bg-gradient-2 min-h-100vh">
                <img src="assets/img/header-1.jpg" alt="header" className="bg-image opacity-10" />
                <div className="container height-md-20">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-9 col-xl-9">
                            <h1 className="display-4 text-white text-center">
                                <img src="/assets/img/arisen/arisenLogo.png" className="w-15" alt="logo" />
                                Arisen Exchange
                        </h1>
                        </div>
                        {!this.props.mainStore.firstStep ?
                            <FillData /> :
                            <WaitingForm />
                        }
                    </div>
                </div>
            </section>
        )
    }
}
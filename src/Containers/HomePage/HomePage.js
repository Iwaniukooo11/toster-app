import React, { Component } from 'react';
import locStyles from './HomePage.module.scss'
import globStyles from '../../sass/App.module.scss'
import AddRemoverWrap from './AddRemoveWrap/AddRemoveWrap'
import Number from './Number/Number'
import TostsWrap from './TostsWrap/TostsWrap'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <main className={`${globStyles.Section}`}>
                <AddRemoverWrap />
                <Number />
                <TostsWrap />
            </main>
        );
    }
}

export default HomePage;
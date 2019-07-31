import React, { Component } from 'react';
import locStyles from './HomePage.module.scss'
import globStyles from '../../sass/App.module.scss'
import AddRemoverWrap from './AddRemoveWrap/AddRemoveWrap'
import Number from './Number/Number'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <main className={`${globStyles.Section}`}>
                <AddRemoverWrap />
                <Number />
            </main>
        );
    }
}

export default HomePage;
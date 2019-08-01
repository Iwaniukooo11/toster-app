import React, { Component } from 'react';
import globStyles from '../../sass/App.module.scss'
import AddRemoverWrap from './AddRemoveWrap/AddRemoveWrap'

class BuilderPage extends Component {
    state = {}
    render() {
        return (
            <main className={`${globStyles.Section}`}>
                <AddRemoverWrap />
            </main>
        );
    }
}

export default BuilderPage;
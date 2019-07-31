import React, { Component } from 'react';
import locStyles from './HomePage.module.scss'
import globStyles from '../../sass/App.module.scss'

import AddRemoverWrap from './AddRemoveWrap/AddRemoveWrap'
import Number from './Number/Number'

import TostsWrap from './TostsWrap/TostsWrap'
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actionTypes'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <main className={`${globStyles.Section}`}>
                <AddRemoverWrap breadStatus={this.props.isBreadSelect}
                    clicked={this.props.toggleBreadSelect} />
                <Number />
                <TostsWrap />
            </main>
        );
    }
}
const mapStateToProps = state => {
    return { isBreadSelect: state.homePage.isBreadSelect }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleBreadSelect: () => dispatch({ type: actionTypes.TOGGLE_SELECT_HOME_BREAD })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
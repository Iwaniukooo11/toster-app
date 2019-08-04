import React, { Component } from 'react';
// import locStyles from './HomePage.module.scss'
import globStyles from '../../sass/App.module.scss'

import AddRemoverWrap from './AddRemoveWrap/AddRemoveWrap'
import Number from './Number/Number'
import NextButton from '../../Components/Button/Button'

import TostsWrap from './TostsWrap/TostsWrap'
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actionTypes'

class HomePage extends Component {
    render() {
        return (
            <main className={`${globStyles.Section}`}>
                <AddRemoverWrap
                    breadStatus={this.props.isBreadSelect}
                    selectStatus={this.props.isSelectingEnded}
                    clicked={this.props.toggleBreadSelect}
                    endSelectingClicked={this.props.endSelecting} />
                <Number selectStatus={this.props.isSelectingEnded}
                    tostingStatus={this.props.isTostingDone}
                    doneTosting={this.props.doneTosting}
                />
                <TostsWrap
                    breadStatus={this.props.isBreadSelect}
                    selectStatus={this.props.isSelectingEnded} />
                {this.props.isTostingDone ?
                    <>
                        <hr className={globStyles.line} />
                        <NextButton link={'/builder'} >Dalej</NextButton>
                    </>
                    : null}

            </main>
        );
    }
}
const mapStateToProps = state => {
    return {
        isBreadSelect: state.homePage.isBreadSelect,
        isSelectingEnded: state.homePage.isSelectingEnded,
        isTostingDone: state.homePage.isTostingDone
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleBreadSelect: () => dispatch({ type: actionTypes.TOGGLE_SELECT_HOME_BREAD }),
        endSelecting: () => dispatch({ type: actionTypes.END_SELECTING }),
        doneTosting: () => dispatch({ type: actionTypes.DONE_TOSTING })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
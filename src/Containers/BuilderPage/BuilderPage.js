import React, { Component } from 'react';
import globStyles from '../../sass/App.module.scss'

import AddRemoverWrap from './AddRemoveWrap/AddRemoveWrap'
import Button from '../../Components/Button/Button'

import * as actionTypes from '../../store/actionTypes'
import { connect } from 'react-redux'
class BuilderPage extends Component {
    // render() {
    //     return (
    //         <h1> test</h1>
    //     )
    // }

    render() {
        return (
            <main className={`${globStyles.Section}`}>
                <AddRemoverWrap
                    clickedPlus={this.props.addIngr}
                    clickedMinus={this.props.removeIngr}
                    ingr={this.props.ingr}
                    buildingStatus={true}
                    showAddRemovers={true}
                />
                <Button link='/login'>Dalej</Button>
            </main>
        );
    }
}
const mapStateToProps = state => {
    return {
        ingr: {
            oil: state.builderPage.oil,
            tomato: state.builderPage.tomato,
            cheese: state.builderPage.cheese,
            olives: state.builderPage.olives,
            cucumber: state.builderPage.cucumber,
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addIngr: ingr => dispatch({ type: actionTypes.ADD_INGR, ingr: ingr }),
        removeIngr: ingr => dispatch({ type: actionTypes.REMOVE_INGR, ingr: ingr }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPage);
// export default BuilderPage
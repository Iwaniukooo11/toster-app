import React, { Component } from 'react';
import { connect } from 'react-redux'
import globStyles from '../../sass/App.module.scss'
import locStyles from './LoginPage.module.scss'
import * as actionTypes from '../../store/actionTypes'
import Tost from '../BuilderPage/AddRemoveWrap/AddRemoveWrap'
import Button from '../../Components/Button/Button'

class LoginPage extends Component {


    inputTextHandler = event => {
        const _name = event.target.value
        this.props.addName(_name)
    }

    render() {
        return (<main className={globStyles.Section}>
            <h2 className={`${globStyles.SectionHead} ${globStyles.SectionHeadBig} ${locStyles.SectionHead}`}>Tak wygląda twój tost</h2>

            <p className={globStyles.SectionHeadDesc}>Możesz wrócić do poprzedniej sekcji i jeszcze go zmienić.Jeśli podoba Ci się tost,podpisz się pod nim!</p>

            <Tost ingr={this.props.ingr} />

            <form action="" className={globStyles.SectionForm}>            
                <input type="text"
                    className={globStyles.SectionInput}
                    placeholder='Imię'
                    value={this.props.name}
                    onChange={this.inputTextHandler}
                />
            </form>

            <Button text={'Dalej'}
                // clicked={}
                 />
        </main>);
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
        },
        name: state.name
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addName: name => dispatch({ type: actionTypes.ADD_NAME, name: name })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
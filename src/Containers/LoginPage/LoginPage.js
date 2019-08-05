import React, { Component } from 'react';
import { connect } from 'react-redux'
import globStyles from '../../sass/App.module.scss'
import locStyles from './LoginPage.module.scss'
import * as actionTypes from '../../store/actionTypes'
import Tost from '../BuilderPage/AddRemoveWrap/AddRemoveWrap'
import Button from '../../Components/Button/Button'
import firebase from '../../firebase'

class LoginPage extends Component {
    state = {
        isValid: false,
        wasClicked: false,
    }
    clickedInputHandler = () => {
        this.setState({ wasClicked: true })
    }

    inputTextHandler = event => {
        const _name = event.target.value
        this.props.addName(_name)
        if (_name.length <= 12 && _name.length > 3) {
            this.setState({ isValid: true })
        }
        else {
            this.setState({ isValid: false })
        }
    }
    pushToDataBaseHandler = () => {
        const date = new Date()
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()

        const obj = {
            date: `${hours}:${minutes} ${date.toJSON().slice(0, 10).split('-').reverse().join('-')}`,
            name: this.props.name,
            ingr: { ...this.props.ingr }
        }
        firebase.database().ref('tosts/').push(obj)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        const classInput = []
        if (this.state.wasClicked) {
            if (this.state.isValid)
                classInput.push('SectionInputRight')
            else
                classInput.push('SectionInputWrong')
        }

        return (
            <main className={`${globStyles.Section} ${locStyles.Section}`}>

                <h2 className={`${globStyles.SectionHead}
                 ${globStyles.SectionHeadBig}
                  ${locStyles.SectionHead}`}>Tak wygląda twój tost</h2>

                <Button link={'/builder'} back={true}>
                    <i className="fas fa-arrow-left"></i>
                </Button>

                <p className={globStyles.SectionHeadDesc}>
                    Możesz wrócić do poprzedniej sekcji i jeszcze go zmienić.Jeśli podoba Ci się tost,podpisz się imieniem lub swoją ksywką!
                <br />
                    <span className={locStyles.SectionMiniTxt}>(od 4 do 12 znaków)</span>
                </p>

                <div className={locStyles.SectionTost}>
                    <Tost ingr={this.props.ingr} />
                </div>

                <form action=""
                    className={`${globStyles.SectionForm}
                    ${locStyles.SectionForm}`}>
                    <input type="text"
                        className={`${globStyles.SectionInput}
                        ${globStyles[classInput.join(' ')]} 
                       `}
                        placeholder='Podpisz się!'
                        value={this.props.name}
                        onChange={this.inputTextHandler}
                        onClick={this.clickedInputHandler}
                    />
                </form>

                <Button link={'./users'} clicked={this.pushToDataBaseHandler} disabled={!this.state.isValid}>Dalej</Button>
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
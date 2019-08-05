import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'
import globStyles from '../../sass/App.module.scss'
import locStyles from './UsersPage.module.scss'
import spinner from './spinners.module.scss'
import firebase from '../../firebase'
import TostCard from './TostCard/TostCard'
import Button from '../../Components/Button/Button'

class UsersPage extends Component {
    state = {
        tosts: [],
        isDone: false,
        isError: false,
    }

    componentDidMount() {
        this.props.reset()

        firebase.database().ref('tosts/').once('value')
            .then(e => {
                return e.val()
            })
            .then(e => {
                const test = Object.entries(e).map(el => {
                    return { name: el[1].name, ingr: el[1].ingr, date: el[1].date }
                })

                this.setState({ tosts: test.reverse(), isDone: true })
            })
            .catch(() => this.setState({ isError: true }))
    }


    render() {
        return (<main className={`${globStyles.Section}`}>
            <h2 className={`${globStyles.SectionHead} 
            ${locStyles.SectionHead}`}>Tosty innych użytkowników
            </h2>
            <Button link='/'>Upiecz Tosta</Button>

            {this.state.isDone && !this.state.isError ?

                <ul className={locStyles.SectionTostsList}>
                    {this.state.tosts.map(el =>
                        <TostCard key={el.name} name={el.name} date={el.date} ingr={el.ingr} />
                    )}
                </ul> :
                <div className={spinner.Loader}></div>}


            {this.state.isError ?
                <h2 className={`{${globStyles.SectionHead} ${globStyles.SectionHeadError}`}>
                    Error:coś poszło nie tak.Spróbuj ponownie później</h2> : null}
        </main>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        reset: () => dispatch({ type: actionTypes.RESET })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
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
        // this.props.endSelecting(false)
        // this.props.doneTosting(false)
        // this.props.toggleBreadSelect()
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
            {/* <div className={locStyles.SectionCardWrap}> */}
            <h2 className={`${globStyles.SectionHead} 
            ${locStyles.SectionHead}`}>Tosty innych użytkowników
            </h2>
            <Button link='/'>Upiecz Tosta</Button>

            {/*<p className={globStyles.SectionDesc}>Dzięki za zrobienie tosta,tu będzie link do od początku!</p> */}

            {this.state.isDone && !this.state.isError ?

                <ul className={locStyles.SectionTostsList}>
                    {this.state.tosts.map(el =>
                        <TostCard key={el.name} name={el.name} date={el.date} ingr={el.ingr} />
                    )}
                </ul> :
                <div className={spinner.Loader}></div>}


            {this.state.isError ?
                <h2 className={`{${globStyles.SectionHead} ${globStyles.SectionHeadError}`}>Error:coś poszło nie tak.Spróbuj ponownie później</h2> : null}
            {/* </div> */}
        </main>
        )
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
        toggleBreadSelect: (to = true) => dispatch({ type: actionTypes.TOGGLE_SELECT_HOME_BREAD, to: to }),
        endSelecting: (to = true) => dispatch({ type: actionTypes.END_SELECTING, to: to }),
        doneTosting: (to = true) => dispatch({ type: actionTypes.DONE_TOSTING, to: to }),
        reset: () => dispatch({ type: actionTypes.RESET })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
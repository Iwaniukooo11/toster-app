import React, { Component } from 'react';
import globStyles from '../../sass/App.module.scss'
import locStyles from './UsersPage.module.scss'
import spinner from './spinners.module.scss'
import firebase from '../../firebase'
import TostCard from './TostCard/TostCard'

class UsersPage extends Component {
    state = {
        tosts: [],
        isDone: false,
    }

    componentDidMount() {
        firebase.database().ref('tosts/').once('value')
            .then(e => {
                return e.val()
            })
            .then(e => {
                const test = Object.entries(e).map(el => {
                    return { name: el[1].name, ingr: el[1].ingr }
                })

                //ZROBIC OD TYŁU
                // setTimeout(() => this.setState({ tosts: test }), 500)
                this.setState({ tosts: test, isDone: true })

            })
    }


    render() {


        return (<main className={`${globStyles.Section}`}>
            {/* <div className={locStyles.SectionCardWrap}> */}
            {this.state.isDone ?
                this.state.tosts.map(el =>
                    <TostCard key={el.name} name={el.name} ingr={el.ingr} />
                ) : <div className={spinner.Loader}></div>}

            {/* </div> */}
        </main>
        )
    }
}

export default UsersPage;
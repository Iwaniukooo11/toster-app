import React, { Component } from 'react';
import globStyles from '../../sass/App.module.scss'
import locStyles from './UsersPage.module.scss'
import spinner from './spinners.module.scss'
import firebase from '../../firebase'
import TostCard from './TostCard/TostCard'

class UsersPage extends Component {
    state = {
        tosts: []
    }

    componentDidMount() {
        firebase.database().ref('tosts/').once('value')
            .then(e => {
                // console.log(e.val())
                return e.val()
            })
            .then(e => {
                // this.setState({ tosts: e })
                // console.log(this.state)
                // this.setState({ tosts: Object.entries(e) })
                // console.log(Object.entries(this.state.tosts))
                const test = Object.entries(e).map(el => {
                    // console.log(el[1].ingr)
                    // console.log(el[1].name)
                    return { name: el[1].name, ingr: el[1].ingr }
                })

                //ZROBIC OD TYŁU
                this.setState({ tosts: test })
                // console.log(this.state.tosts)
            })
    }


    render() {


        return (<main className={`${globStyles.Section}`}>
            {/* <div className={locStyles.SectionCardWrap}> */}
            {this.state.tosts ?
                this.state.tosts.map(el =>
                    <TostCard key={el.name} name={el.name} ingr={el.ingr} />
                ) : <div className={spinner.Loader}></div>}

            {/* </div> */}
        </main>
        )
    }
}

export default UsersPage;
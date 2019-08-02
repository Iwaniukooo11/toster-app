import React, { Fragment } from 'react';
import globStyles from '../../../sass/App.module.scss'
import locStyles from './AddRemoveWrap.module.scss'
import AddRemover from '../../../Components/AddRemover/AddRemover'

import Bread from '../../../Components/FoodElements/Bread/Bread'
import Oil from '../../../Components/FoodElements/Oil/Oil'
import Cheese from '../../../Components/FoodElements/Cheese/Cheese'
import Tomato from '../../../Components/FoodElements/Tomato/Tomato'
import Olives from '../../../Components/FoodElements/Olives/Olives'
import Cucumber from '../../../Components/FoodElements/Cucumber/Cucumber'

const AddRemoveWrap = props => {
    const addRemovers = [
        { title: 'Olej', type: 'oil', max: 1 },
        { title: 'Ser', type: 'cheese', max: 2 },
        { title: 'Pomidor', type: 'tomato', max: 2 },
        { title: 'Oliwki', type: 'olives', max: 4 },
        { title: 'Ogórek', type: 'cucumber', max: 2 },
    ]
    const ingr = Object.entries(props.ingr)
    const allIngr = []
    ingr.forEach(element => {
        switch (element[0]) {
            case 'oil':
                for (let i = 0; i < element[1]; i++) { allIngr.push(<Oil num={i + 1} />) }
                break
            case 'cheese':
                for (let i = 0; i < element[1]; i++) { allIngr.push(<Cheese num={i + 1} />) }
                break
            case 'tomato':
                for (let i = 0; i < element[1]; i++) { allIngr.push(<Tomato num={i + 1} />) }
                break
            case 'olives':
                for (let i = 0; i < element[1]; i++) { allIngr.push(<Olives num={i + 1} />) }
                break
            default:
                for (let i = 0; i < element[1]; i++) { allIngr.push(<Cucumber num={i + 1} />) }
                break// 'cucumber'
        }
    })


    return (

        <div className={globStyles.AddRemoveWrap}>

            {props.showAddRemovers ?
                <>
                    {addRemovers.map(obj => <AddRemover title={obj.title} key={obj.type} {...props} ingrType={obj.type} max={obj.max} />)}
                    < hr className={globStyles.line} />
                </>
                : null}

            <div className={locStyles.Bread}>
                <Bread breadStatus={true}
                    doneStyle={true}
                    bigStyle={true}
                    breadBig={true}
                />

                {allIngr.map((component, id) =>
                    <Fragment key={id}>
                        {component}
                    </Fragment>)}
            </div>
        </div>
    );
}

export default AddRemoveWrap;
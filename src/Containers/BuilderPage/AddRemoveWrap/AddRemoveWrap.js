import React from 'react';
import globStyles from '../../../sass/App.module.scss'
import locStyles from './AddRemoveWrap.module.scss'
import AddRemover from '../../../Components/AddRemover/AddRemover'

import Bread from '../../../Components/FoodElements/Bread/Bread'
import Oil from '../../../Components/FoodElements/Oil/Oil'
import Cheese from '../../../Components/FoodElements/Cheese/Cheese'
import Tomato from '../../../Components/FoodElements/Tomato/Tomato'

const AddRemoveWrap = props => {
    return (
        <div className={globStyles.AddRemoveWrap}>
            <AddRemover title={'Olej'} {...props} ingrType={'oil'} max={1} />
            <AddRemover title={'Ser'}  {...props} ingrType={'cheese'} max={2} />
            <AddRemover title={'Pomidor'}  {...props} ingrType={'tomato'} max={2} />
            <AddRemover title={'Oliwki'}  {...props} ingrType={'olives'} max={3} />
            <div className={locStyles.Bread}>
                <Bread breadStatus={true}
                    doneStyle={true}
                    bigStyle={true}
                    breadBig={true}
                />
                <Oil />
                <Cheese num={1} />
                <Cheese num={2} />
                <Tomato num={1} />
                <Tomato num={2} />
            </div>
        </div>
    );
}

export default AddRemoveWrap;
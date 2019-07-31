import React from 'react';
import locStyles from './TostsWrap.module.scss'
import Bread from '../../../Components/FoodElements/Bread/Bread'
import Toster from '../../../Components/FoodElements/Toster/Toster'

const TostsWrap = props => {
    return (
        <div className={locStyles.TostsWrap}>
            <Bread {...props} />
            <Toster />
        </div>

    );
}

export default TostsWrap;
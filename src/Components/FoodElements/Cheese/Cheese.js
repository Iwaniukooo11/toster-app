import React from 'react';
import locStyles from './Cheese.module.scss'

const Cheese = props => {
      return (
        <div className={`${locStyles.Cheese} ${locStyles['Cheese' + props.num]}`}></div>
    );
}

export default Cheese;
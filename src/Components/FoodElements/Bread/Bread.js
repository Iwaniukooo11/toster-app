import React from 'react';
import locStyles from './Bread.module.scss'

const Bread = props => {
    console.log('bread', props)
    return (<div className={`${locStyles.Bread}
     ${props.breadStatus ? locStyles.BreadActive : null}
      ${props.selectStatus ? locStyles.BreadonAnim : null}`}></div>);
}

export default Bread;
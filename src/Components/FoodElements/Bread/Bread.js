import React from 'react';
import locStyles from './Bread.module.scss'

const Bread = props => {
    return (<div className={`${locStyles.Bread}
     ${props.breadStatus ? locStyles.BreadActive : null}
      ${props.selectStatus ? locStyles.BreadonAnim : null}
      ${props.doneStyle ? locStyles.BreadDone : null}
      ${props.bigStyle ? locStyles.BreadBig : null}
`}></div>);
}

export default Bread;
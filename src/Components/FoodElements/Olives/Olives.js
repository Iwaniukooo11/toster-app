import React from 'react';
import locStyles from './Olives.module.scss'

const Olives = props => <div className={`${locStyles.Olives} ${locStyles['Olives' + props.num]}`}></div>

export default Olives


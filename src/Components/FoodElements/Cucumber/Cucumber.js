import React from 'react';
import locStyles from './Cucumber.module.scss'

const Cucumber = props => <div className={`${locStyles.Cucumber} ${locStyles['Cucumber' + props.num]}`}></div>



export default Cucumber;
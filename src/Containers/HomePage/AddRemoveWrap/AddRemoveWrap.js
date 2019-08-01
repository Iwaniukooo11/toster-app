import React from 'react';
import locStyles from './AddRemoveWrap.module.scss'
import globStyles from './../../../sass/App.module.scss'
import AddRemover from '../../../Components/AddRemover/AddRemover'

const AddRemoveWrap = props => {
    return (
        <div className={locStyles.AddRemoveWrap}>
            <AddRemover title={'dodaj tosta'} {...props} />
            <AddRemover title={'upiecz go'} oneSign={true}  {...props} />
            <hr className={globStyles.line}  />
        </div>
    );
}

export default AddRemoveWrap;
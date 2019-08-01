import React from 'react';
import globStyles from './../../../sass/App.module.scss'
import AddRemover from '../../../Components/AddRemover/AddRemover'

const AddRemoveWrap = props => {
    return (
        <div className={globStyles.AddRemoveWrap}>
            <AddRemover title={'dodaj tosta'} {...props} />
            <AddRemover title={'upiecz go'} oneSign={true}  {...props} />
            <hr className={globStyles.line} />
        </div>
    );
}

export default AddRemoveWrap;
import React from 'react';
import globStyles from './../../../sass/App.module.scss'
import AddRemover from '../../../Components/AddRemover/AddRemover'

const AddRemoveWrap = props => {
    return (
        <div className={globStyles.AddRemoveWrap}>
            <AddRemover title={'dodaj tosta'} max={1} {...props} />
            <AddRemover title={'upiecz go'} oneSign={true} {...props} />
            <hr className={globStyles.line} />
        </div>
    );
}

export default AddRemoveWrap;
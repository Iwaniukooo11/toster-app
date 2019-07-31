import React from 'react';
import locStyles from './AddRemoveWrap.module.scss'
import AddRemover from '../../../Components/AddRemover/AddRemover'

const AddRemoveWrap = () => {
    return (
        <div className={locStyles.AddRemoveWrap}>
            <AddRemover title={'dodaj tosta'} />
            <AddRemover title={'upiecz go'} oneSign={true} />
        </div>
    );
}

export default AddRemoveWrap;
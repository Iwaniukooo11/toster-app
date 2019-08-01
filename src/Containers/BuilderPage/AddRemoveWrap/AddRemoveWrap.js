import React from 'react';
import globStyles from '../../../sass/App.module.scss'
import locStyles from './AddRemoveWrap.module.scss'
import AddRemover from '../../../Components/AddRemover/AddRemover'
import Bread from '../../../Components/FoodElements/Bread/Bread'

const AddRemoveWrap = () => {
    return (
        <div className={globStyles.AddRemoveWrap}>
            <AddRemover title={'Olej'} />
            <AddRemover title={'Ser'} />
            <AddRemover title={'Pomidor'} />
            <AddRemover title={'Oliwki'} />
            <div className={locStyles.Bread}>
                <Bread breadStatus={true}
                    doneStyle={true}
                    bigStyle={true}
                    breadBig={true}
                />
            </div>
        </div>
    );
}

export default AddRemoveWrap;
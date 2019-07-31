import React from 'react';
import locStyles from './AddRemover.module.scss'
import Sign from './Signs/Sign'

const AddRemover = props => {

    // if(props.oneSign){}
    return (
        <div className={locStyles.AddRemover}>
            <h2 className={locStyles.AddRemoverText}>{props.title}</h2>
            <div className={locStyles.AddRemoverSignsWrap}>
                {props.oneSign ? <Sign type='One' {...props} /> :
                    <>
                        <Sign type='Plus' {...props} /> <Sign type='Minus' {...props} />
                    </>}
                {/* <Sign /> */}
            </div>

        </div>
    );
}

export default AddRemover;
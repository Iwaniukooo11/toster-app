import React from 'react';
import globStyles from '../../sass/App.module.scss'
import locStyles from './AddRemover.module.scss'
import Sign from './Signs/Sign'

const AddRemover = props => {
    return (
        <div className={locStyles.AddRemover}>
            <h2 className={`${locStyles.AddRemoverText} ${globStyles.SectionHead}`}>
                {props.title}
                <br />
                <span className={`${locStyles.AddRemoverTextLittle} ${globStyles.SectionMiniOpacityText}`}>{`(max ${props.max})`}</span>
            </h2>
            <div className={locStyles.AddRemoverSignsWrap}>
                {props.oneSign ?
                    <Sign type='One' {...props}><i className="fas fa-arrow-alt-circle-up"></i></Sign> :
                    <>
                        <Sign type='Plus' {...props} /> <Sign type='Minus' {...props} />
                    </>}
                {/* <Sign /> */}
            </div>

        </div>
    );
}

export default AddRemover;
import React from 'react';
import globStyles from '../../sass/App.module.scss'
import locStyles from './AddRemover.module.scss'
import Sign from './Signs/Sign'

const AddRemover = props => {
    return (
        <div className={locStyles.AddRemover}>
            <h2 className={`${locStyles.AddRemoverText} ${globStyles.SectionHead}
            ${props.max ? locStyles.AddRemovertextCenter : null}
            `}>
                {props.title}
                <span className={`${locStyles.AddRemoverTextLittle} ${globStyles.SectionMiniOpacityText}`}>
                    {props.max ? `(max ${props.max})` : null}
                </span>
            </h2>

            <div className={locStyles.AddRemoverSignsWrap}>
                {props.oneSign ?
                    <Sign type='One' {...props}><i className="fas fa-arrow-alt-circle-up"></i></Sign> :
                    <>
                        <Sign type='Plus' {...props} /> <Sign type='Minus' {...props} />
                    </>}
            </div>

        </div>
    );
}

export default AddRemover;
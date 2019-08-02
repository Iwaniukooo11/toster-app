import React from 'react';
import locStyles from './Sign.module.scss'

const Sign = props => {
    const type = props.type
    let disabled = false
    let clicked = props.clicked

    // if (props.type === 'Plus' && props.breadStatus)
    //     disabled = true
    // else if (props.type === 'Minus' && !props.breadStatus)
    //     disabled = true
    // else if (props.type === 'One' && !props.breadStatus)
    //     disabled = true

    switch (props.type) {
        case 'Plus':
            disabled = props.breadStatus
            break
        case 'Minus':
            disabled = !props.breadStatus
            break
        case 'One':
            disabled = !props.breadStatus
            break
        default:
    }

    if (props.selectStatus)
        disabled = true

    if (props.buildingStatus) {
        if (props.ingr[props.ingrType] === props.max && props.type === 'Plus')
            disabled = true
        else if (props.ingr[props.ingrType] === 0 && props.type === 'Minus')
            disabled = true
        else if (props.ingr[props.ingrType] !== 0 && props.type === 'Minus')
            disabled = false

        switch (props.type) {
            case 'Plus':
                clicked = () => props.clickedPlus(props.ingrType)
                break
            case 'Minus':
                clicked = () => props.clickedMinus(props.ingrType)
                break
            default:
        }
    }

    return (
        <button className={`${locStyles.Sign} ${locStyles['Sign' + type]}`}
            onClick={props.type === 'One' ? props.endSelectingClicked : clicked}
            disabled={disabled}>
            {props.children}
        </button>
    );
}

export default Sign;
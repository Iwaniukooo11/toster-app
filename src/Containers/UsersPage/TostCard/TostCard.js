import React from 'react';
import globStyles from '../../../sass/App.module.scss'
import locStyles from './TostCard.module.scss'


const TostCard = props => {
    const arr = Object.values(props.ingr)
    console.log(arr)

    return (
        <section className={locStyles.TostCard}>
            <h2 className={`${globStyles.SectionHead} ${globStyles.SectionHeadBig}`} >
                {props.name}</h2>
            <ul className={locStyles.TostCardList}>

                {arr.map((el, index) => {
                    let food = null
                    switch (index) {
                        case 0:
                            food = 'Ser'
                            break
                        case 1:
                            food = 'Ogórek'
                            break
                        case 2:
                            food = 'Oliwa'
                            break
                        case 3:
                            food = 'Oliwki'
                            break
                        default:
                            food = 'Pomidor'
                    }
                    return (
                        <li key={food}
                            className={locStyles.TostCardListElement}>
                            <span
                                className={`${locStyles.TostCardFood} 
                                ${globStyles.SectionMiniOpacityText}
                                ${globStyles.SectionMiniOpacityTextBig}`}>
                                {food}: </span>
                            <span className={`${locStyles.TostCardQuantity}
                             ${globStyles.SectionMiniOpacityText}
                             ${globStyles.SectionMiniOpacityTextBig}`}>
                                {arr[index]}</span>
                        </li>
                    )
                })
                }
            </ul>

        </section>
    );
}

export default TostCard;
import * as actionTypes from './actionTypes'
const initialState = {
    homePage: {
        isBreadSelect: false,
        isSelectingEnded: false,
        isTostingDone: false
    },
    builderPage: {
        oil: 0,
        cheese: 0,
        tomato: 0,
        olives: 0,
        cucumber: 0
    }
}
const reducer = (state = initialState, action) => {
    // console.log('reducer')
    // console.log(state)
    // console.log(action)
    switch (action.type) {
        case actionTypes.TOGGLE_SELECT_HOME_BREAD:
            return {
                ...state,
                homePage: {
                    ...state.homePage,
                    isBreadSelect: !state.homePage.isBreadSelect
                }
            }
        case actionTypes.END_SELECTING:
            return {
                ...state,
                homePage: {
                    ...state.homePage,
                    isSelectingEnded: true
                }
            }
        case actionTypes.DONE_TOSTING:
            return {
                ...state,
                homePage: {
                    ...state.homePage,
                    isTostingDone: true
                }
            }
        case actionTypes.ADD_INGR:
            return {
                ...state,
                builderPage: {
                    ...state.builderPage,
                    [action.ingr]: state.builderPage[action.ingr] + 1
                }
            }
        case actionTypes.REMOVE_INGR:
            return {
                ...state,
                builderPage: {
                    ...state.builderPage,
                    [action.ingr]: state.builderPage[action.ingr] - 1
                }
            }

        default: return state
    }
}
export default reducer
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
    },
    name: ''
}
const reducer = (state = initialState, action) => {
    // console.log('reducer')
    console.log(state.homePage)
    console.log(action)
    switch (action.type) {
        case actionTypes.TOGGLE_SELECT_HOME_BREAD:
            return {
                ...state,
                homePage: {
                    ...state.homePage,
                    isBreadSelect: !state.homePage.isBreadSelect
                    // isBreadSelect:action.to
                }
            }
        case actionTypes.END_SELECTING:
            return {
                ...state,
                homePage: {
                    ...state.homePage,
                    // isSelectingEnded: true
                    isSelectingEnded: action.to
                }
            }
        case actionTypes.DONE_TOSTING:
            return {
                ...state,
                homePage: {
                    ...state.homePage,
                    // isTostingDone: true
                    isTostingDone: action.to
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
        case actionTypes.ADD_NAME:
            return {
                ...state,
                name: action.name
            }

        case actionTypes.RESET:
            return {
                ...initialState
            }
        default: return state
    }
}
export default reducer
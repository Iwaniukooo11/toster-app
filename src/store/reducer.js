import * as actionTypes from './actionTypes'
const initialState = {
    homePage: {
        isBreadSelect: false,
        isSelectingEnded: false,
        isTostingDone: false
    }
}
const reducer = (state = initialState, action) => {
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
        default: return state
    }
}
export default reducer
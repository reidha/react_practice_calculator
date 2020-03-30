import { actionTypes } from '../utils/actionTypes';

const initialAppState = {
    inputValue: 0,
    resultValue: 0,
    showingResult: false,
    previousOperator: actionTypes.PLUS
};

const calcWithPrevOperator = (previousOperator, resultValue, inputValue) => {
    switch (previousOperator) {
        case actionTypes.PLUS:
            return resultValue + inputValue;
        case actionTypes.MINUS:
            return resultValue - inputValue;
        default:
            return null;
    }
}

const calculator = (state = initialAppState, action) => {
    console.log('calculator');
    if (action.type === actionTypes.INPUT_NUMBER) {
        return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false
        };
    } else if (action.type === actionTypes.PLUS) {
        return {
            ...state,
            inputValue: 0,
            resultValue: calcWithPrevOperator(state.previousOperator, state.resultValue, state.inputValue),
            showingResult: true,
            previousOperator: action.type
        };
    } else if (action.type === actionTypes.MINUS) {
        return {
            ...state,
            inputValue: 0,
            resultValue: calcWithPrevOperator(state.previousOperator, state.resultValue, state.inputValue),
            showingResult: true,
            previousOperator: action.type
        }
    } else {
        return state;
    }
};

export default calculator;
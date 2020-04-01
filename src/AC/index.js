import {CHANGE_COLUMN_NUMBER, CHANGE_STRINGS_NUMBER, SET_SELL_VALUE} from '../constants'

export function changeColumnsNumber(number){
    return ({
        type: CHANGE_COLUMN_NUMBER,
        payload: number
    })
}

export function changeStringsNumber(number){
    return ({
        type: CHANGE_STRINGS_NUMBER,
        payload: number
    })
}

export function setSellValue(number, index){
    return ({
        type: SET_SELL_VALUE,
        payload: {
            number,
            index
        }
    })
}
import { CHANGE_COLUMN_NUMBER, CHANGE_STRINGS_NUMBER, SET_SELL_VALUE } from '../constants'
import { Record, List } from 'immutable'

const MatrixRecord = Record({
    size: {
        columns: 0,
        strings: 0
    },
    values: new List([])
})

const defaultState = new MatrixRecord()

export default (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_COLUMN_NUMBER:
            console.log('Payload --- ', payload)
            if (payload) {
                const strings = state.getIn(['size', 'strings'])
                const valuesArr = new Array(payload * strings).fill(0)
                return state
                    .setIn(['size', 'columns'], payload)
                    .set('values', new List(valuesArr))
            }
            if(payload === ''){
                return state
                    .setIn(['size', 'columns'], 0)
                    .set('values', new List([]))
            }
            break

        case CHANGE_STRINGS_NUMBER:
            if (payload) {
                const columns = state.getIn(['size', 'columns'])
                const valuesArr = new Array(payload * columns).fill(0)
                return state
                    .setIn(['size', 'strings'], payload)
                    .set('values', new List(valuesArr))
            }
            if(payload === ''){
                return state
                    .setIn(['size', 'strings'], 0)
                    .set('values', new List([]))
            }
            break

        case SET_SELL_VALUE:
            if(payload.number) {
                return state
                    .set('values', state.get('values').set(payload.index, payload.number))
            }
            break
        
        default:
            return state
    }
}
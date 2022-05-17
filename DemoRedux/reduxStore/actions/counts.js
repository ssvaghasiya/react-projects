import { COUNTER_CHANGE } from '../constants';

export function changeCount(count) {
    console.log("action", count)
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}
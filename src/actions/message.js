import {SET_MESSAGE, CLEAR_MESSAAGE} from './type.js';
export const setMessage = (message) => ({
    type: setMessage,
    payload: message,
});
export const clearMessage = () => ({
    type: CLEAR_MESSAAGE,
});

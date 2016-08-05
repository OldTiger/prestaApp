import {ACTION_TYPES}  from '../constants';
export const goToHome = () => {
    return function(dispatch) {
        dispatch({
            type: ACTION_TYPES.GOTO_HOME,
            text: 'Build my first Redux app'
        });
    }
};

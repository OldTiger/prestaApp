export const GOTO_HOME = () => {
    return function(dispatch) {
        dispatch({
            type: 'GOTO_HOME',
            text: 'Build my first Redux app'
        });
    }
};

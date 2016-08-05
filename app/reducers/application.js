const initialState = {
    name: "prestaApp",
};
export default function appliaction(state = initialState, action) {
    if(action.type === 'GOTO_HOME')
        alert('get action!');
    return state;
}
import {Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');
const actionTypes = {
    GOTO_HOME:'GOTO_HOME'
}

export  {
    width as WINDOW_WIDTH,
    height as WINDOW_HEIGHT,
    actionTypes as ACTION_TYPES
}

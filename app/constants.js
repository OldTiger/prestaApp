import {Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');
const actionTypes = {
    GOTO_HOME:'GOTO_HOME'
};
const styles = {
    TAB:{
        ICON_SIZE:28,
        SELECTED_COLOR:'#4F8EF7',
        COLOR:'#3d3d3d',
        TAB_HEIGHT:42
    }
};
export  {
    width as WINDOW_WIDTH,
    height as WINDOW_HEIGHT,
    actionTypes as ACTION_TYPES,
    styles as STYLES
}

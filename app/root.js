/*导入公共库*/
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import React, {
    Component
} from 'react';

/*导入私有*/
import APP from "./containers/app";
import reducers  from './reducers';

/*create redux store*/
const createStoreWithMW = applyMiddleware(thunk)(createStore);
const store = createStoreWithMW(reducers);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <APP/>
            </Provider>
        )
    }
}


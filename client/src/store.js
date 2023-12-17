import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'
import { userLoginReducer, userRegisterReducer } from './redux/reducers/authReducer';
import { taskReducer } from './redux/reducers/taskReducer';

const reducer = combineReducers({
    // all reducers
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    task: taskReducer,
})


const initialState = {
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;
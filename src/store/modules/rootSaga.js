import { all } from 'redux-saga/effects';
import addToCart from './cart/sagas';


export default function* rootSaga() {
    return yield all([addToCart])
}
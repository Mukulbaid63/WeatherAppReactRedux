import {take,call,all} from 'redux-saga/effects'


import {fetchDataSaga} from './fetchDataSaga'


export default function* RootSagas(){

    yield all([
        fetchDataSaga()

    ])
}
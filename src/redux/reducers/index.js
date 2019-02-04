import { combineReducers } from 'redux';
import requests from './requests';
import lessons from './lessons';

export default combineReducers({ requests, lessons });
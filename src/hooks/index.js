import hookx from './hookx';

import * as actions from '../actions';

const initialstate = { counter: 0 };

const useGlobal = hookx(initialstate, actions);

export default useGlobal;

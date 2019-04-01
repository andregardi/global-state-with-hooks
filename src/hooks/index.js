import React from 'react';
import useGlobalHook from 'use-global-hook';

import * as actions from '../actions';

const initialstate = { counter: 0 };

const useGlobal = useGlobalHook(React, initialstate, actions);

export default useGlobal;

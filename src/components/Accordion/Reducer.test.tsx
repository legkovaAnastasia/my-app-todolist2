import React from 'react';
import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('reducer change state', () => {
    const state:StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
  expect(newState.collapsed).toBe(true )
})
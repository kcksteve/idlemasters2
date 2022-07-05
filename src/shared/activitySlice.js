import { createSlice } from '@reduxjs/toolkit';
import ACTIVITYINFO from "./activityInfo.js"
import { STATINFO } from './statInfo.js';

const initialState = {
    currentActivity: 0,
    activities: ACTIVITYINFO,
    stats: STATINFO
}

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setCurrentActivity: (state, action) => {
            state.currentActivity = action.payload;
        }
    }
});

export const activityReducer = activitySlice.reducer;

export const { setCurrentActivity } = activitySlice.actions;

export const selectCurrentActivity = (state) => {
    return state.activity.activities.find(cur => cur.id === state.activity.currentActivity);
}

export const selectActivities = (state) => {
    return state.activity.activities;
}

export const selectActivityById = (id) => (state) => {
    return state.activity.activities.find((cur) => cur.id === parseInt(id));
}

export const selectStats = (state) => {
    return state.activity.stats;
}
import { createSlice } from '@reduxjs/toolkit';
import ACTIVITYINFO from "./activityInfo.js"
import { STATINFO } from './statInfo.js';
import SAVES from './saves.js';

const initialState = {
    currentActivity: 0,
    currentPage: 0,
    currentSave: 0,
    activities: ACTIVITYINFO,
    stats: STATINFO,
    saves: SAVES
}

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setCurrentActivity: (state, action) => {
            state.currentActivity = action.payload;
        },
        setCurrentSave: (state, action) => {
            state.currentSave = action.payload;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        loadSaves: (state, action) => {
            state.saves.forEach(save => {
                const slot = localStorage.getItem('SLOTNAME' + save.slotId)

                if (slot) {
                    save.slotName = slot;
                }
            });
        },
        deleteSaveById: (state, action) => {
            let found = state.saves.find(save => save.slotId === action.payload)
            found.slotName = '';
            localStorage.setItem('SLOTNAME' + action.payload, '');
        },
        setSaveNameById: (state, action) => {
            let found = state.saves.find(save => save.slotId === action.payload[0])
            found.slotName = action.payload[1];
            localStorage.setItem('SLOTNAME' + action.payload[0], action.payload[1]);
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

export const selectPage = (state) => {
    return state.activity.currentPage;
}

export const { setPage } = activitySlice.actions;

export const selectSlotById = (id) => (state) => {
    return state.activity.saves.find((cur) => cur.slotId === parseInt(id));
}

export const { loadSaves } = activitySlice.actions;

export const selectCurrentSave = (state) => {
    return state.activity.currentSave;
}

export const { setCurrentSave } = activitySlice.actions;

export const { deleteSaveById } = activitySlice.actions;

export const { setSaveNameById } = activitySlice.actions;

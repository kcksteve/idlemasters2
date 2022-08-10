import { createSlice } from '@reduxjs/toolkit';
import ACTIVITYINFO from "./activityInfo.js"
import { STATINFO } from './statInfo.js';
import SAVES from './saves.js';

const initialState = {
    currentActivity: 0,
    currentActivityRunning: false,
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
        setCurrentActivityRunning: (state, action) => {
            state.currentActivityRunning = action.payload;
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
        loadAllStats: (state, action) => {
            state.activities.forEach(act => {
                const xp = localStorage.getItem(statStorageKey(state.currentSave, act.title, 'xp'))
                if (act.hasOwnProperty('xp') && xp) {
                    act.xp = parseInt(xp);
                }

                const lvl = localStorage.getItem(statStorageKey(state.currentSave, act.title, 'level'))
                if (act.hasOwnProperty('level') && lvl) {
                    act.level = parseInt(lvl);
                }

                const res = localStorage.getItem(statStorageKey(state.currentSave, act.title, 'resource'))
                if (act.hasOwnProperty('resource') && res) {
                    act.resource = parseInt(res);
                }
            });
            state.stats.forEach(stat => {
                const res = localStorage.getItem(statStorageKey(state.currentSave, stat.title, 'resource'))
                if (stat.hasOwnProperty('resource') && res) {
                    stat.resource = parseInt(res);
                }
            });
        },
        resetAllStats: (state, action) => {
            state.activities.forEach(act => {
                if (act.hasOwnProperty('xp')) {
                    localStorage.setItem(statStorageKey(state.currentSave, act.title, 'xp'), '0');
                    act.xp = 0;
                }

                if (act.hasOwnProperty('level')) {
                    localStorage.setItem(statStorageKey(state.currentSave, act.title, 'level'), '1');
                    act.level = 1;
                }

                if (act.hasOwnProperty('resource')) {
                    localStorage.setItem(statStorageKey(state.currentSave, act.title, 'resource'), '0');
                    act.resource = 0;
                }
            });
            state.stats.forEach(stat => {
                if (stat.hasOwnProperty('resource')) {
                    localStorage.setItem(statStorageKey(state.currentSave, stat.title, 'resource'), '100');
                    stat.resource = 100;
                }
            });
        },
        updateStat: (state, action) => {
            let stat = state.activities.find(act => act.title === action.payload.title);
            if (!stat) {
                stat = state.stats.find(act => act.title === action.payload.title);
            }

            if (stat.hasOwnProperty(action.payload.property)) {
                stat[action.payload.property] += action.payload.amount;
                localStorage.setItem(statStorageKey(state.currentSave, action.payload.title, action.payload.property), stat[action.payload.property]);
            }
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

const statStorageKey = (saveId, name, property) => {
    return saveId + '-' + name + '-' + property;
}

export const activityReducer = activitySlice.reducer;

export const { setCurrentActivity } = activitySlice.actions;

export const selectCurrentActivity = (state) => {
    return state.activity.activities.find(cur => cur.id === state.activity.currentActivity);
}

export const selectCurrentActivityRunning = (state) => {
    return state.activity.currentActivityRunning;
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

export const selectCanStartActivity = (state) => {
    console.log('canstart?')
    let canStart = true;
    const activity = state.activity.activities.find((cur) => cur.id === parseInt(state.activity.currentActivity));

    if (activity.title === 'Combat') {
        const health = state.activity.stats.find((cur) => cur.title === 'Health');
        if (health.resource <= 0) {
            return false;
        }
    }

    activity.cost.forEach(el => {
        if (el.title !== 'None') {
            let activityConsumable = state.activity.activities.find((cur) => cur.consumableTitle === el.title);
            if (!activityConsumable) {
                activityConsumable = state.activity.stats.find((cur) => cur.consumableTitle === el.title);
            }
            if (activityConsumable.resource < el.amount) {
                console.log('not enough');
                canStart = false;
            }
        }
    });

    return canStart;
}

export const { setPage } = activitySlice.actions;

export const selectSlotById = (id) => (state) => {
    return state.activity.saves.find((cur) => cur.slotId === parseInt(id));
}

export const { loadSaves } = activitySlice.actions;

export const { loadAllStats } = activitySlice.actions;

export const { resetAllStats } = activitySlice.actions;

export const { updateStat } = activitySlice.actions;

export const selectCurrentSave = (state) => {
    return state.activity.currentSave;
}

export const { setCurrentSave } = activitySlice.actions;

export const { setCurrentActivityRunning } = activitySlice.actions;

export const { deleteSaveById } = activitySlice.actions;

export const { setSaveNameById } = activitySlice.actions;

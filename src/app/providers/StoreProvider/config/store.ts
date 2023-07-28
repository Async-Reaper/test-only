import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit';
import {type StateSchema} from './StateSchema';
import {timeLapseReducer} from "entities/Time";

// import { createSocketClient } from 'shared/protocols/websocket';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        timeLapse: timeLapseReducer
    };


    const store = configureStore({
        reducer: rootReducers,
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

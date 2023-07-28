import {type StateSchema} from "app/providers/StoreProvider";

export const currentTimeLapse = (state: StateSchema) => state.timeLapse.currentTimeLaps;

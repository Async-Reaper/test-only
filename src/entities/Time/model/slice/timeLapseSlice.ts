import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

import {TimeLapse} from "../data/TimeLaps";
import {type ITimeLapse, type TimeLapseSchema} from "../types";

const initialState: TimeLapseSchema = {
   data: TimeLapse,
   currentTimeLaps: TimeLapse[0]
}

export const timeLapseSlice = createSlice({
   name: 'time',
   initialState,
   reducers: {
      setCurrentTimeLapse(state, action: PayloadAction<ITimeLapse>) {
         state.currentTimeLaps = action.payload;
      }
   }
})


export const { actions: timeLapseActions } = timeLapseSlice;
export const { reducer: timeLapseReducer } = timeLapseSlice;

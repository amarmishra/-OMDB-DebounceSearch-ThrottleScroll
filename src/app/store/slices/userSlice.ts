import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  userApi: string
}

const initialState: CounterState = {
  userApi: "",
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    validate: (state) => {
        
      state.userApi
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { validate } = counterSlice.actions

export default counterSlice.reducer
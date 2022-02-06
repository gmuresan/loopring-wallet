import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HiddenTokensState {
  tokenIds: number[]
}

const initialState: HiddenTokensState = {
  tokenIds: []
}

export const hiddenTokensSlice = createSlice({
  name: 'hiddenTokens',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.tokenIds.push(action.payload)
    }
  }
})

export const { add } = hiddenTokensSlice.actions
export default hiddenTokensSlice.reducer

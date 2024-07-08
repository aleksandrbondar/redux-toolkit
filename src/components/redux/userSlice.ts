import { createSlice } from "@reduxjs/toolkit"

export type UserState = {
  name: string
}

const initialState: UserState = {
  name: 'Some name'
}

export const userSlice = createSlice({
  name: 'userStorage',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { setName } = userSlice.actions

export default userSlice.reducer
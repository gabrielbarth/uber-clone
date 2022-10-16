import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface NavState {
  origin: any
  destination: any
  travelTimeInformation: any
}

const initialState: NavState = {
  origin: null,
  destination: 'Testing',
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload
    }
  }
})

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions

export const selectOrigin = (state: RootState) => state.origin
export const selectDestination = (state: RootState) => state.destination
export const selectTravelTimeInformation = (state: RootState) =>
  state.travelTimeInformation

export default navSlice.reducer

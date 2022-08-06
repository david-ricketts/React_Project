import { bindActionCreators, createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null
}

const userSlice = () => {
    return createSlice({
        name: 'user',
        initialState,
        reducer: {
            setCurrentUser: (state, action) => {
                return {...state, currentUser: action.payload}
            }
        }
    });
}

export const selectCurrentUser = userSlice.reducer;
export const {setCurrentUser} = userSlice.actions;
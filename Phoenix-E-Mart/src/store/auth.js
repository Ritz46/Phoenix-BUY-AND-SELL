import { createSlice } from "@reduxjs/toolkit";


const initialAuthState={
    isAuthenticated:localStorage.getItem('isAuth')??false,
    user:JSON.parse(localStorage.getItem('user'))??null,
    token:localStorage.getItem('token')??null
}

const authSlice=createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers:{
        login(state,actions){
            state.isAuthenticated=true;
            state.user=actions.payload.userdata;
            state.token=actions.payload.token;
            // console.log(state);
            localStorage.setItem('user',JSON.stringify(state.user))
            localStorage.setItem('isAuth',state.isAuthenticated)
            localStorage.setItem('token',state.token)
        },
        logout(state){
            state.isAuthenticated=false;
            state.user=null
            
        }
    }
})

export const authActions=authSlice.actions;
export default authSlice.reducer;
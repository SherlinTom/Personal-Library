import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loggedUser: null
}


const UserSlice = createSlice({
    name:'User Slice',
    initialState,
    reducers:{
        addUser: (state,action) => {
           const existingData = JSON.parse(localStorage.getItem('users')) || [];

           const newId = existingData.length + 1;
     
           const newUserData = { ...action.payload, id: newId , isAuthenticated: true};
            state.users.push(newUserData);
           const updatedData = [...existingData, newUserData];
           localStorage.setItem('users', JSON.stringify(updatedData));
        },
        getUsers: (state) => {
            const all_users = JSON.parse(localStorage.getItem("users")) || [];
        
            if (all_users) {
                state.users = all_users; 
            }
        },
        deleteUser: (state,action) => {
         const index = state.users.findIndex((user) => user.id === action.payload);
         if(index !== -1){
            state.users.splice(index,1);
         }
         localStorage.setItem('users' , JSON.stringify(state.users));
        },
        setLoggedUser: (state,action) => {
            const loggedUser = {...action.payload};
            state.loggedUser = loggedUser;
            localStorage.setItem('loggedUser',JSON.stringify(loggedUser));
        },
        getLoggedUser: (state) => {
            const logged_users = JSON.parse(localStorage.getItem("loggedUser"));
            if (logged_users) {
                state.loggedUser = logged_users; 
            }
        },
        logoutUser: (state,action) => {
            state.loggedUser = null;
            
            localStorage.removeItem('loggedUser');
        },
        updateUser: (state, action) => {
           const index = state.users.findIndex((item) => item.id === action.payload.id);
           if(index !== -1){
            state.users[index]=action.payload;
           }
           localStorage.setItem('users',JSON.stringify(state.users));
            },
    }
})
export const {addUser,getUsers,deleteUser,setLoggedUser,getLoggedUser,logoutUser,updateUser} = UserSlice.actions;
export default UserSlice.reducer
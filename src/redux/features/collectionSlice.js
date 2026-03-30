import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name:"collection",
    initialState:[],
    reducers:{
        addItem(state , action){
            let checkExists =state.some((el=>el.id === action.payload.id))
            if(!checkExists){
                state.push(action.payload);
            }
        },
        deleteItem(state,action){
            return state.filter((item)=> item.id != action.payload.id);
        },
        clearItems(state){
            return [];
        }
    }
}) 

export const {addItem , deleteItem , clearItems} = collectionSlice.actions;
export default collectionSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => { return action.payload; console.log("add initialitems", state) }
    }
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;

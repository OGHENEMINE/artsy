import { alertState } from "@/lib/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: alertState = {
  type: null,
  message: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<alertState>) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },

    clearAlert: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;
export const alertSelector = (state: RootState) => state.alert;
export default alertSlice.reducer;

// store/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserDetails = createAsyncThunk("user/fetchUserDetails", async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        deviceId: null,
        details: {},
        status: "idle",
        error: null,
    },
    reducers: {
        setDeviceId: (state, action) => {
            state.deviceId = action.payload;
        },
    },
});

export const { setDeviceId } = userSlice.actions;

export default userSlice.reducer;

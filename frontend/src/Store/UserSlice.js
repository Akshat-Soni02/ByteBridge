import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadRoute, loginRoute, logoutRoute, signupRoute } from "../api/APIRoutes";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const response = await axios.post(loginRoute, userCredentials, config);
            return response.data;
        }
        catch (error) {
            if (error.response) {
                // If the server responds with an error status
                const errorMessage = error.response.data.message;
                throw new Error(errorMessage);
              } else if (error.request) {
                // If the request was made but no response was received
                throw new Error('No response received from the server.');
              } else {
                // If something else triggered the error
                throw new Error('An error occurred while making the request.');
              }
        }
    }
)

export const signupUser = createAsyncThunk(
    'user/singupUser',
    async (userCredentials) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            }
            //
            const response = await axios.post(signupRoute, userCredentials, config);
            return response.data;
        }
        catch (error) {
            if (error.response) {
                // If the server responds with an error status
                const errorMessage = error.response.data.message;
                throw new Error(errorMessage);
              } else if (error.request) {
                // If the request was made but no response was received
                throw new Error('No response received from the server.');
              } else {
                // If something else triggered the error
                throw new Error('An error occurred while making the request.');
              }
        }
    }
)

export const loadUser = createAsyncThunk(
    'user/loadUser',
    async () => {
        const response = await axios.get(loadRoute);
        return response.data;
    }
)

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async () => {
        const response = await axios.get(logoutRoute);
        return response.data;
    }

)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null,
        isAuthenticated: false,
    },
    reducers: {
        clearError: (state) => {
          state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error.message;
                state.isAuthenticated = false;
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(signupUser.fulfilled, (state,action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(signupUser.rejected, (state,action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error.message;
                state.isAuthenticated = false;
            })
            .addCase(loadUser.pending,(state) => {
                state.loading = true;
                
            })
            .addCase(loadUser.fulfilled, (state,action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(loadUser.rejected, (state,action) => {
                // state.loading = false;
                // state.user = null;
                // state.error = null;
                // state.isAuthenticated = false;
            })
            .addCase(logoutUser.pending,(state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state,action) => {
                state.loading = false;
                state.user = null;
                state.error = null;
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.rejected, (state,action) => {
                state.loading = false;
                state.error = null;
            });
    }
});
export const { clearError } = userSlice.actions;
export default userSlice.reducer;
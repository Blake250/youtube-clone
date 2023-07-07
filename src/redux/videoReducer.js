

// the maekedOut extraReducer.js



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "./request";
import axios from "axios";

export const fetchNextPage = createAsyncThunk(
  "youDataSlice/fetchVideos",
  async (group, { rejectWithValue }) => {
    try {
      let params = {
        part: "snippet",
        maxResults: 20,
        pageToken: "",
        type: "video",
      };

      if (group !== "All") {
        params.q = group;
      }

      const response = await request.get("/search", { params });
     // return response.data
     const nextPageToken = response.data.nextPageToken; // Extract nextPageToken from the response

      return { videos: response.data.items, nextPageToken };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  movies: [],
  isLoading: false,
  nextPageToken: null,
  activeCategory: "All"
};

const youTubeData = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNextPage.pending, (state) => {
        state.isLoading = true;
        console.log('Fetching videos pending...');
      })
      .addCase(fetchNextPage.fulfilled, (state, action) => {
        state.obj = action.payload.videos;
        state.nextPageToken = action.payload.nextPageToken;
        state.activeCategory = action.payload;
        state.isLoading = false;
        console.log('Fetching videos fulfilled...');
      })
      .addCase(fetchNextPage.rejected, (state) => {
        state.isLoading = false;
        console.log('Fetching videos rejected...');
      });
  }
});


export default youTubeData.reducer
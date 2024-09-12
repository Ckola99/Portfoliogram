import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const githubToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const headers = {
	Authorization: `token ${githubToken}`
}

const initialState = {
	repos: 0,
	commits: 0,
	status: 'idle',
	error: null,
}

export const fetchRepos = createAsyncThunk(
  'github/fetchRepos',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
      return response.data.length;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);


export const fetchCommits = createAsyncThunk(
	'github/fetchCommits', async(username, { rejectWithValue }) => {
		try {

			const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
			const repos = reposResponse.data;

			let totalCommits = 0;
			const commitPromises = repos.map(async (repo) => {
				const commitsResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits`, { headers });
				return commitsResponse.data.length;
			});

			const commitsPerRepo = await Promise.all(commitPromises);
			totalCommits = commitsPerRepo.reduce((sum, commitCount) => sum + commitCount, 0);

			return totalCommits;
		} catch (error) {
			return rejectWithValue(error.response ? error.response.data : error.message);
		}
	}
);

const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepos.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchRepos.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.repos = action.payload;
			})
			.addCase(fetchRepos.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(fetchCommits.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCommits.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.commits = action.payload;
			})
			.addCase(fetchCommits.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default githubSlice.reducer;
export const numberCommits = (state) => state.github.commits;
export const numberRepos = (state) => state.github.repos;

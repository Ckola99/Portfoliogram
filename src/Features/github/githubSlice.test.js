import { configureStore } from '@reduxjs/toolkit';
import githubReducer, { fetchRepos, fetchCommits } from './githubSlice';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('githubSlice async thunks', () => {
	let store;

	beforeEach(() => {
		store = configureStore({
			reducer: {
				github: githubReducer,
			}
		});
	});

	it('should handle fetchRepos successfully', async () => {
		const mockRepos = [{ id: 1, name: 'Repo 1' }];
		axios.get.mockResolvedValueOnce({ data: mockRepos });

		await store.dispatch(fetchRepos('Ckola99'));

		const state = store.getState().github;
		expect(state.status).toBe('succeeded');
		expect(state.repos).toEqual(mockRepos.length);
	});

	it('should handle fetchCommits Successfully', async () => {
		const mockRepos = [{ id: 1, name: 'Repo 1' }];
		const mockCommits = [{ sha: 'commit1' }, { sha: 'commit2' }];

		// Use `mockResolvedValueOnce` to mock both the repos and commits API calls
		axios.get
			.mockResolvedValueOnce({ data: mockRepos }) // Mock the repos request
			.mockResolvedValueOnce({ data: mockCommits }); // Mock the commits request

		await store.dispatch(fetchCommits('CKola99'));

		const state = store.getState().github;
		expect(state.status).toBe('succeeded');
		expect(state.commits).toEqual(mockCommits.length);

	})
})

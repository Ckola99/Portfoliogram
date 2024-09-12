import proPic from '../assets/Avi.png'
import {fetchCommits, fetchRepos, numberCommits, numberRepos } from '../Features/github/githubSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const Home = () => {
	const dispatch = useDispatch();
	const commits = useSelector(numberCommits);
	const repos = useSelector(numberRepos);

	useEffect(() => {
		dispatch(fetchCommits('Ckola99'));
		dispatch(fetchRepos('Ckola99'))
	})

	return (
		<div className="mx-[14px] grid gap-5">
			<div className=" grid grid-cols-[25%_75%] mt-5">
				<img src={proPic} alt="avatar" className="border h-[100px] w-[100px] rounded-full "/>
				<div className="grid grid-cols-3 place-items-center text-center font-bold">
					<p>0 <span className="block">projects</span></p>
					<p>{repos} <span className="block">repositories</span></p>
					<p> {commits}<span className="block">commits</span></p>

				</div>
			</div>
			<div className="text-[12px] font-bold">
				<h2 className="uppercase">christopher kola | frontend developer</h2>
				<p className="uppercase text-[10px]">a display of skills and creativity</p>
				<div className="text-[10px] uppercase">
					<p>Johannesburg, ZA</p>
				</div>
				<div className="uppercase text-[10px] ">
					<p>st(e)m</p>
				</div>
				<div className="text-[10px] uppercase">
					<p>christopherkola@gmail.com</p>
				</div>
				<div className="text-[10px] uppercase">
					<p>link to resume</p>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-5 text-[10px] font-bold">
				<button className="bg-[#405DE6] h-[35px] text-white rounded-[8px]">Social Links</button>
				<button className="bg-[#405DE6] h-[35px] text-white rounded-[8px]">Message</button>
			</div>
			<div className="">
				{}
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
export default Home;

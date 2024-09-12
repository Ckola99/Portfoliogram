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
		<div className="">
			<div className="mx-[14px] mt-5">
				<img src={proPic} alt="avatar" className="border h-[100px] w-[100px] rounded-full "/>
				<div className="">
					<p>{commits}</p>
					<p>{repos}</p>
					<p></p>
				</div>
			</div>
			<div className="">
				<h2>christopher kola | frontend developer</h2>
				<p>a display of skills and creativity</p>
				<div className="">
					<p>Johannesburg, ZA</p>
				</div>
				<div className="">
					<p>st(e)m</p>
				</div>
				<div className="">
					<p>christopherkola@gmail.com</p>
				</div>
				<div className="">
					<p>link to resume</p>
				</div>
			</div>
			<div className="">
				<button>social links</button>
				<button>message</button>
			</div>
			<div className=""></div>
		</div>
	);
};
export default Home;

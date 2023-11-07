/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../layout/Navbar';
import abhi from '../Secretariat/Images/abhi.jpg';
import omu from '../Secretariat/Images/omu.jpeg';
import adi from '../Secretariat/Images/adi.jpeg';
import ullu from '../Secretariat/Images/ullu.jpeg';
import vivin from '../Secretariat/Images/vivin.png';
import aashna from '../Secretariat/Images/aashna.jpeg';
import narayan from '../Secretariat/Images/narayan.jpeg';
import tommy from '../Secretariat/Images/tommy.jpeg';
import samu from '../Secretariat/Images/samu.jpeg';
import arnav from '../Secretariat/Images/arnav.webp';
import dafoe from '../Secretariat/Images/dafoe.webp';
import ameya from '../Secretariat/Images/ameya.jpeg';
import lasya from '../Secretariat/Images/lasya.jpeg';
import abbay from '../Secretariat/Images/abbay.jpeg';
import barman from '../Secretariat/Images/barman.jpeg';
import hari from '../Secretariat/Images/hari.jpeg';
import sud from '../Secretariat/Images/sud.webp';
import ananya from '../Secretariat/Images/ananya.jpeg';
import ali from '../Secretariat/Images/ali.jpeg';
import bbmp from '../../icons/IBBMP.png';
import lok from '../../icons/ILOK.png';
import rajya from '../../icons/IRAJYA.png';
import unep from '../../icons/IUNEP.png';
import unhcr from '../../icons/IUNHCR.png';
import union from '../../icons/IUNION.png';
import jcc from '../../icons/IJCC.png';
import x from '../../icons/IX.png';

// background images
import vietnam from '../Secretariat/Images/vietnam.png';
import bluestar from '../Secretariat/Images/bluestar.jpeg';
import wwii from '../Secretariat/Images/heil_hitler.jpeg';
import bangalore from '../Secretariat/Images/bengaluru.jpeg';
import health from '../Secretariat/Images/health.jpeg';
import refugees from '../Secretariat/Images/refugees.jpeg';
import env from '../Secretariat/Images/unep.jpeg';
import Footer from '../../layout/Footer';
import { isMobile } from 'react-device-detect';

const DetComm = ({ match, dropDown, drop, height, name }) => {
	const data = [
		{
			commName: 'UNHCR',
			agenda: 'Access to jobs and financial services',
			icon: unhcr,
			background: refugees,
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			directors: [
				{
					name: 'Aditya Narayan',
					image: narayan,
					post: 'Chairperson',
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
			ads: [
				{
					name: 'Ananya Jain',
					image: ananya,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Tom Thomas',
					image: tommy,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'UNEP',
			icon: unep,
			agenda:
				'Addressing the problems that arise from land degradation and deforestation',
			background: env,
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			directors: [
				{
					name: 'Ali Oez',
					image: ali,
					post: 'Chairperson',
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
			ads: [
				{
					name: 'Ananya Jain',
					image: ananya,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Tom Thomas',
					image: tommy,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Lok Sabha',
			icon: lok,
			agenda: 'Achieving the 2030 goal of universal health coverage in India',
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			background: health,
			directors: [
				{
					name: 'Aashna Kumar',
					image: aashna,
					post: 'Chairperson',
					des: 'My name Is Aashna Kumar and it is my absolute honour to be your Director for INYP’s Civil Society this year. MUNning has been a central part of my high school life. I’ve bagged placements at HMUN, DSMUN, CJCMUN etc. have even had the honour of being part of the EB at HMUN so I’m looking forward to bringing my experience to INYP this year! A bit about myself: I absolutely love playing the piano, becoming friends with every dog I see, reading books, and bingeing every possible show on Netflix! I hope to see you guys in October, and I’m so excited to hear your views and ideas!',
				},
			],
			ads: [
				{
					name: 'Abhimanyu Balagopal',
					image: abbay,
					des: "Hi, I am Abhimanyu Balagopal from grade 11 and I will be your assistant director for the Rajya Sabha. I have been participating in MUNs for the past 4 years, this is my 7th MUN and first time as a part of the EB. I have had the opportunity to participate in conferences in the Middle East and at the United Nations in New York. I look forward to seeing a lot of enlightening conversations and productive discourse during committee and of course some fun outside of committee. I truly believe that this year's Youth Parliament format will open every delegate's eyes to the problems we face as a country and as a world, and how they can be solved democratically.",
				},
				{
					name: 'Tom Thomas',
					image: tommy,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Rajya Sabha',
			icon: rajya,
			agenda: 'Deliberation over the reservation system in India',
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			background: bangalore,
			directors: [
				{
					name: 'Prady',
					image: ameya,
					post: 'Chairperson',
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
			ads: [
				{
					name: 'Lasya Verma',
					image: lasya,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Tom Thomas',
					image: tommy,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'BBMP',
			icon: bbmp,
			agenda: 'The impact of unplanned urbanisation in the whitefield area ',
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			background: bangalore,
			directors: [
				{
					name: 'Ameya Mundkur',
					image: ameya,
					post: 'Chairperson',
					des: 'Hi delegates! I’m Ameya Mundkur. Music is one of my biggest passions, I love animals. I also enjoy talking to people. I can have the most random conversations ranging from 60’s rock bands and Harry Styles to issues around the world to how Phil from Modern Family is the wisest character. I never really enjoyed debates, but as soon as I started MUNing, my opinion on that completely changed. I’ve been MUNing for 2 years now, it’s been one of the most life changing, educational and incredibly fun experiences I’ve had. I’m super excited to see unique, divergent views lined with interesting debates to get the most inclusive, holistic and productive outcome in committee.',
				},
			],
			ads: [
				{
					name: 'Lasya Verma',
					image: lasya,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Tom Thomas',
					image: tommy,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Committee X',
			icon: x,
			agenda: 'The Vietnam War',
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			background: vietnam,
			directors: [
				{
					name: 'Abhinav Vallur',
					image: abhi,
					post: 'Chairperson',
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
			ads: [
				{
					name: 'Hari Sai Harish',
					image: hari,
					des: 'My name is Hari, and I am an 11th grader at Inventure. My hobbies range from sports to public speaking to coding and I do my work very passionately. In pre-covid times I was an active MUNer and I’m looking forward to getting back into MUN. I have attended 4 MUNs physically, across various committees and have won Best Delegate in two of them, and Honourable Mentions in the others. I have never been part of the Executive Board before, and being an Assistant Director will give me the opportunity I have always craved for. It will be a new experience and I am greatly looking forward to make the most of it. I hope to help with hosting an eventful, disciplined, successful committee and for it to arrive at a favorable end resolution which we can proudly present later on.',
				},
				{
					name: 'Tom Thomas',
					image: tommy,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Union Cabinet',
			icon: union,
			agenda: 'Operation Bluestar',
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			background: bluestar,
			directors: [
				{
					name: 'Gautam Chari',
					image: samu,
					post: 'Prime Minister',
					des: 'Hi delegates, I am Gautam and am a student from grade 11 AS. It is my distinct honour to serve as the director of the Rajya Sabha this year. Through the years MUN has given me the opportunity to develop a unique set of skills, including public speaking, debating and most importantly the courage to think on my feet and be confident in what I say. As such, I hope to create an atmosphere that enhances your development and safeguards the legacy left behind by my very competent seniors. Cannot wait to see you all in committee and may the force be with you!',
				},
			],
			ads: [
				{
					name: 'Arnav Agarwal',
					image: arnav,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Willem Dafoe',
					image: dafoe,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Joint Crisis Committee',
			icon: jcc,
			agenda: 'World War II',
			background: wwii,
			commDesc:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			directors: [
				{
					name: 'Aditya Sundar',
					image: adi,
					post: 'Director of the Allies',
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Johann Ulatill',
					image: vivin,
					post: 'Crisis Director',
					des: "Hey delegates! I'm Vivin Anand, co-director for INMUN's JCC this year. While I have MUNned for years, participating in many conferences across India, Youth Parliament - as it is for many of you - is completely new for me, as well! I am looking forward to seeing how every delegate uniquely attempts to solve the the challenges facing Indian education. Outside of MUN, I am a huge sports fan, especially Cricket and MMA. I am also a massive metalhead. See you in committee!",
				},
				{
					name: 'Vivin Anand',
					image: vivin,
					post: 'Director of the Axis',
					des: "Hey delegates! I'm Vivin Anand, co-director for INMUN's JCC this year. While I have MUNned for years, participating in many conferences across India, Youth Parliament - as it is for many of you - is completely new for me, as well! I am looking forward to seeing how every delegate uniquely attempts to solve the the challenges facing Indian education. Outside of MUN, I am a huge sports fan, especially Cricket and MMA. I am also a massive metalhead. See you in committee!",
				},
			],
			ads: [
				{
					name: 'Sudyotman Sudershan',
					image: sud,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Ashutosh Barman',
					image: barman,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
	];

	const [currState, setComm] = useState({});

	useEffect(() => {
		name = match.params.committee;
		switch (name) {
			case 'United-Nations-Environmental-Program':
				setComm(data[0]);
				window.scrollTo(0, 0);
				break;
			case 'United-Nations-High-Commissioner-for-Refugees':
				setComm(data[1]);
				window.scrollTo(0, 0);
				break;
			case 'Lok-Sabha':
				setComm(data[2]);
				window.scrollTo(0, 0);
				break;
			case 'BBMP':
				setComm(data[3]);
				window.scrollTo(0, 0);
				break;
			case 'Rajya-Sabha':
				setComm(data[4]);
				window.scrollTo(0, 0);
				break;
			case 'Joint-Crisis-Committee':
				setComm(data[5]);
				window.scrollTo(0, 0);
				break;
			case 'Committee-X':
				setComm(data[6]);
				window.scrollTo(0, 0);
				break;
			case 'Union-Cabinet':
				setComm(data[7]);
				window.scrollTo(0, 0);
				break;
		}
		// eslint-disable-next-line
	}, []);

	const Down = (comms) => {
		dropDown(comms);
	};

	const heightfunc = (comms) => {
		height(comms);
	};

	const namefunc = (comms) => {
		name(comms);
	};

	// Scrolling Navbar
	const [show, setShow] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const controlNavbar = () => {
		if (window.scrollY > lastScrollY && window.scrollY > 300) {
			setShow(false);
		} else {
			setShow(true);
		}

		setLastScrollY(window.scrollY);
	};
	useEffect(() => {
		setShow(true);
	}, []);
	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	const comm = data[2];

	return (
		<Fragment>
			<Navbar
				dropDown={Down}
				drop={drop}
				height={heightfunc}
				name={namefunc}
				classname='navbarpage'
				show={show}
			/>{' '}
			<div style={{ position: 'relative', top: '120px' }}>
				<div style={{ backgroundColor: 'white' }}>
					<div
						className='container text-center '
						style={p1}>
						<img
							className='img round-img stylea center'
							src={comm.icon}
							alt='Alt...'></img>
						<div className='large text-center headfont'>{comm.commName}</div>
						<h1
							className='headfont'
							style={{ fontWeight: 'normal', fontSize: '30px' }}>
							{comm.agenda}
						</h1>
						<br />
						<h2
							className='generalfont2'
							style={mainbody}>
							{comm.commDesc}
						</h2>
						<div
							style={{
								margin: 'auto',
							}}>
							<div
								className='btn btn-primary '
								style={{
									width: '200px',
									height: '50px',
									borderRadius: '20px',
								}}>
								<a>
									<h3>Background Guide</h3>
								</a>
							</div>
							<div
								className='btn btn-secondary '
								style={{
									width: '200px',
									height: '50px',
									borderRadius: '20px',
								}}>
								<a>
									<h3>Country Matrix</h3>
								</a>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />

				<div
					style={{ position: 'relative' }}
					className='comm-div'>
					<div className='overlay-comm' />
					<img
						src={comm.background}
						alt='not working lmao'
						style={{
							position: 'absolute',
							height: '100%',
							zIndex: '-5',
							opacity: '0.3',
							margin: 'auto',
						}}
					/>
					<div style={{ zIndex: '100', positve: 'relative' }}>
						<div className='eb-title'>
							<h1>Executive Board</h1>
						</div>
						<div
							className={`grid-${comm.directors.length} all-center directorBox`}
							style={{ gridGap: '3rem' }}>
							{comm.directors.map((director, idx) => (
								<div key={idx}>
									<img
										src={director.image}
										className='directorImage'
									/>
									<h1 style={{ color: 'white' }}>{director.name}</h1>
									<h3>{director.post}</h3>
									<p style={{ color: 'white' }}>{director.des}</p>
								</div>
							))}
						</div>
						<div
							className={`grid-${comm.ads.length} all-center directorBox`}
							style={{ gridGap: '3rem' }}>
							{comm.ads.map((ad, ind) => (
								<div key={ind}>
									<img
										src={ad.image}
										className='directorImage'
									/>
									<h1 style={{ color: 'white' }}>{ad.name}</h1>
									<h3 style={{ color: 'white' }}>Assistant Director</h3>
									<p style={{ color: 'white' }}>{ad.des}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div style={p3}>
					<div
						className='container text-center'
						style={{ backgroundColor: 'white' }}>
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

const p1 = {
	fontFamily: 'Times New Roman, Times, serif',
	backgroundColor: '#white',
};

const mainbody = {
	fontSize: '20px',
	fontWeight: 'lighter',
	textAlign: 'justify',
	textJustify: 'inter-word',
	color: 'black',
};

const p2 = {
	height: '1305px',
	width: '100%',
	fontFamily: 'Times New Roman, Times, serif',
};

const p3 = {
	fontFamily: 'Times New Roman, Times, serif',
	backgroundColor: 'white',
};

const bgimage = {
	position: 'absolute',
	width: '100%',
	height: '1305px',
	opacity: '0.2',
	objectFit: 'cover',
};

export default DetComm;

// <div
// 					className='tint'
// 					style={p2}>
// 					<img
// 						className='imgForOverlay'
// 						src={inventure}
// 						alt=''
// 						style={bgimage}
// 					/>
// 					<br />
// 					<br />
// 					<div className='container text-center'>
// 						<div className='x-large text-center headfont'>EXECUTIVE BOARD</div>
// 						<br />
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.dirIcon.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.dirIcon.map((icon) => (
// 								<img
// 									className='img round-img center stylez'
// 									src={icon}
// 									alt='lmao ded'
// 								/>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.commDir.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commDir.map((director) => (
// 								<h1 style={{ paddingTop: '15px' }}>{director}</h1>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.commDir.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commDir.map((director) => (
// 								<h1
// 									style={{
// 										fontWeight: 'normal',
// 										color: '#000b3a',
// 									}}>
// 									Director
// 								</h1>
// 							))}
// 							<br />
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.ADIcons.map((icon) => (
// 								<img
// 									className='img round-img center stylez'
// 									src={icon}
// 									alt=''
// 								/>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commAD.map((assistantlmao) => (
// 								<h1 style={{ paddingTop: '15px' }}>{assistantlmao}</h1>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commAD.map((assistantlmao) => (
// 								<h1 style={{ fontWeight: 'normal', color: '#000b3a' }}>
// 									Assistant Director
// 								</h1>
// 							))}
// 						</div>
// 						<br />
// 						<br />
// 					</div>
// 				</div>

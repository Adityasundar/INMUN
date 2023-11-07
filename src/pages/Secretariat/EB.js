/** @format */

import React, { useEffect, useState } from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import akshay from './Images/akshay4.png';
import abhi from './Images/abhi2.jpg';
import shivam from './Images/shivam.jpeg';
import omu from '../../om.jpeg';
import zaid from './Images/zaid.jpeg';
import adi from './Images/adi1.jpg';
import siddharth from './Images/siddharth3.png';
import johann from './Images/johannnew.cr2';
import vivin from './Images/vivin.jpeg';
import eshan from './Images/eshan.jpeg';
import praty from './Images/praty.jpeg';
import aashna from './Images/aashna2.jpeg';
import narayan from './Images/narayan1.jpg';
import tommy from './Images/tommy.jpeg';
import chari from './Images/chari1.jpg';
import chari2 from './Images/chari.jpeg';
import vivek from './Images/vivek1.jpeg';
import dafoe from './Images/dafoe.webp';
import ameya from './Images/ameya1.jpg';
import lasya from './Images/lasya1.jpg';
import abhimanyu from './Images/abhimanyu1.jpeg';
import prady from './Images/prady.jpeg';
import ashutosh from './Images/ashutosh2.jpeg';
import hari from './Images/hari1.jpg';
import sud from './Images/sud.jpeg';
import ananya1 from './Images/ananya1.jpeg';
import ali from './Images/ali1.jpeg';
import placeholder from './Images/ali.jpeg';
import yash from './Images/yashiyer1.jpeg';
import krisha from './Images/krishareddy1.jpeg';
import muhammad from './Images/muhammadhafesjee1.jpeg';
import abhinavathrey from './Images/abhinavathrey1.jpeg';
import tanvi from './Images/tanvi.jpeg';
import arushi from './Images/arushi.jpeg';
import treia from './Images/Treia.JPG';
import arav from './Images/aravb1.jpeg';
import ayush from './Images/ayushnair1.jpeg';
import arnav from './Images/arnav1.jpeg';
import saravanan from './Images/saravanan.jpeg';
import bs from './Images/bs.jpeg';
import gunav from './Images/gunav.jpeg';
// background images
import vietnam from './Images/vietnam.png';
import bluestar from './Images/bluestar.jpeg';
import wwii from './Images/heil_hitler.jpeg';
import bangalore from './Images/bengaluru.jpeg';
import rajyabg from './Images/rajyasabhabg.jpeg';
import health from './Images/health.jpeg';
import refugees from './Images/refugees.jpeg';
import unep from './Images/unep.jpeg';
import { isMobile } from 'react-device-detect';

const Sec = ({ dropDown, drop, height, name }) => {
	const usgs = [
		{
			post: 'Entertainment',
			names: ['Abhinav Vallur', 'Vivin Anand'],
			imgs: [abhi, vivin],
		},
		{
			post: 'Communication',
			names: ['Aditya Sundar', 'Johann Ullatil'],
			imgs: [adi, johann],
		},
	];

	const financesocials = [
		{
			post: 'Finance',
			names: ['Aditya Narayan', 'Aashna Kumar'],
			imgs: [narayan, aashna],
		},
		{
			post: 'Social Media',
			names: ['Ashutosh Barman'],
			imgs: [ashutosh],
		}
	];

	const logistics = {
		post: 'Deputy USG',
		names: ['Tanvi Iyer', 'Akshay Satish'],
		posts: ['Head of Logistics', 'Head of Logistics'],
		imgs: [tanvi, akshay],
	};

	const logisticsADs = {
		post: 'Deputy USG',
		names: ['Arushi Patel', 'Treia Menon'],
		posts: ['Deputy USG', 'Deputy USG'],
		imgs: [arushi, treia],
	}

	const commsEb = [
		{
			commName: 'UNHCR',
			agenda: 'Access to jobs and financial services',
			background: refugees,
			directors: [
				{
					name: 'Aditya Narayan',
					image: narayan,
					post: 'Chairperson',
					des: 'Greetings delegates, I’m Aditya Narayan, a student from Grade 11 and it is my honor to serve as the director for UNHCR this year. I have always loved the realm of debate and public speaking, and chose Model UN as a means of communicating passionately and ardently about the critical issues in modern society. This has allowed me to succeed at several MUNs, including Harvard MUN, SISMUNand EHMUN to name a few. Through the years Model UN has given me the opportunity to engage in constructive dialogue, and productive discourse as well as the ability to think freely and have the confidence to voice out my opinions. I hope to create an atmosphere that allows for a high level of debate, dialogue and diplomacy. I look forward to interacting with everyone soon! May the force be with you!',
				},
			],
			ads: [
				{
					name: 'Siddhanth Saravanan',
					image: saravanan,
					des: 'Hey there delegates! My name is Siddhanth Saravanan from the 11th Grade and I will be your assistant director for the UNHCR. My interest in MUN conferences has grown rapidly, as I’ve attended and gained experience through different events. These events have allowed me to gain exposure to settings that involve passionate and spirited debate, yet the diplomacy that is present has always made it an incredibly complex and invigorating environment that I truly find fascinating. With that being said, I am honoured to be a part of your chair for INMUN 2023. Apart from the MUN gatherings, some of my interests lie in playing football and listening to music. I hope that as your Assistant Director, I get to see everyone give it their all to make committee as fun as it can be, while remaining as productive to reach rational and thought provoking solutions to our agenda at hand.',
				},
				{
					name: 'Ayush Nair',
					image: ayush,
					des: 'Currently doing his 2nd PUC  at St. Joseph’s Pre-university college, you will find this delegate making powerful speeches to get the entire committee on his side. He has placements at conferences like CJCMUN, DWMUN, GEARMUN etc. He is a marketing geek who is often found running google ad campaigns for companies, and is also an SEO specialist. He engages in multiple community service activities. He enjoys movies, football and fiction.',
				},
			],
			dir2: [],
		},
		{
			commName: 'UNEP',
			agenda:
				'Addressing the problems that arise from land degradation and deforestation',
			background: unep,
			directors: [
				{
					name: 'Shivam',
					image: shivam,
					post: 'Chairperson',
					des: "'Whoever appeals to the law against his fellow man is either a fool or a coward, Whoever cannot take care of himself without that law is both' - Randy Blythe; Despite commencing his MUN career amidst the challenges posed by the COVID era, he swiftly adapted to offline MUNs, showcasing his fastidious nature and astute thinking. His approach to committees is holistic, where he consistently maintains an unwavering presence and exerts unyielding dominance. His competence shines through his multiple accolades, triumphing in conferences like NCFEMUN, SNISMUN, DWMUN, and more. Besides MUNs, he fervently embraces the role of music, which holds a significant place in his life and is not something he neglects. His diverse musical palette encompasses a wide spectrum, ranging from the intensity of heavy metal to the soulful melodies of jazz. With his presence in the committee, you can assuredly anticipate a productive and enjoyable experience.'",
				},
			],
			ads: [
				{
					name: 'Hari Sai Harish',
					image: hari,
					des: "Hey delegates! I'm Hari and I'm very honored to help chair the UNEP committee this year. I enjoy playing and following a variety of sports and am also very passionate about the fields of coding and public speaking. The MUNs I have taken part in have helped with my confidence and my communication and my experience chairing them has helped me better understand people too. I wish you all the best of luck and hope you cherish your time on this committee!",
				},
				{
					name: 'Yash Iyer',
					image: yash,
					des: "'Man, what the hell!' - This was said by one of Yash's fellow delegates at INYP last year when he shook the committee. Whether it is launching ballistic missiles at a person, attaining global domination or covering the world with concentration camps, Yash finds a way to keep the spirit of all his committees alive. He truly did so at INYP last year where he won the best delegate award for convincing an entire committee to adopt Chinese-operated concentration camps in their own countries. He has served on the Executive Board at multiple conferences and will ensure that INVMUN 2023 is filled with heated and entertaining debates. Yash is unbeatable and direct debates and holds a position at India's National Debate Team Camp for WSDC and was chosen to represent India in British-Parliamentary Debate at the prestigious ICYD competition. He values turning your position in a conference around the most, he values rising up the ranks as you gain an undisputable position of relevance from a precarious position, he values hard work, determination and confidence. At INVMUN, with his experience, he will help you achieve this. Whether it may be through Spiderman and Ronaldo quotes or via other means, with him you are guaranteed to leave the conference with valuable lessons.",
				},
			],
			dir2: [],
		},
		{
			commName: 'ECOSOC',
			agenda:
				'Addressing the global debt crisis',
			background: unep,
			directors: [
				{
					name: 'Siddharth Dey',
					image: siddharth,
					post: 'Chairperson',
					des: "'Whoever appeals to the law against his fellow man is either a fool or a coward, Whoever cannot take care of himself without that law is both' - Randy Blythe; Despite commencing his MUN career amidst the challenges posed by the COVID era, he swiftly adapted to offline MUNs, showcasing his fastidious nature and astute thinking. His approach to committees is holistic, where he consistently maintains an unwavering presence and exerts unyielding dominance. His competence shines through his multiple accolades, triumphing in conferences like NCFEMUN, SNISMUN, DWMUN, and more. Besides MUNs, he fervently embraces the role of music, which holds a significant place in his life and is not something he neglects. His diverse musical palette encompasses a wide spectrum, ranging from the intensity of heavy metal to the soulful melodies of jazz. With his presence in the committee, you can assuredly anticipate a productive and enjoyable experience.'",
				},
			],
			ads: [
				{
					name: 'Pratyush Mittal',
					image: praty,
					des: "Hey Guys! This is your other deputy speaker here, Pratyush, and I just want to say how excited I am to be a part of this committee. I can’t wait to interact with each and every one of you and hopefully by the end help you make a difference. A difference in the world we live in, a difference in our lives and most importantly a difference in the issue we are trying to solve through our agenda. I hope to help you become better munners, help you step outside your comfort zone and most of all take away something from this fulfilling experience. I am a passionate individual with a love for sports, particularly basketball. When I'm not on the court, I indulge in public speaking and debating, relishing the art of expressing ideas and persuading others. Additionally, my fondness for Model United Nations allows me to engage in international relations and collaborative problem-solving on a global scale. With a diverse range of interests encompassing sports, public speaking, economics, and MUN, I am eager to embark on a journey of self-discovery and making a positive impact in the world. So let us embark on this journey, grow and learn together!",
				},
			],
			dir2: [],
		},
		{
			commName: 'Lok Sabha',
			agenda: 'Achieving the 2030 goal of universal health coverage in India',
			background: health,
			directors: [
				{
					name: 'Aashna Kumar',
					image: aashna,
					post: 'Chairperson',
					des: "Heyy delegates! I am Aashna, and am honoured to be the director of Lok Sabha this year. I have an immense passion for music, economics, and social change. When I'm not immersed in economics books or playing the piano, I'm actively involved in initiatives promoting social justice and equity. I equally spend my time praying for the W14 to perform and binge-watching every sitcom on Netflix! MUNning has always been a central part of my high school life, I’ve bagged placements at conferences such as HMUN, and CJCMUN while also having the honour of being part of the EB at HMUN so I’m looking forward to bringing my experience to INMUN this year! As your director, I want you to push yourselves beyond your comfort zones and be comfortable voicing out your ideas and opinions. I am incredibly excited to meet you all and have an amazing committee, see you soon!!",
				},
			],
			ads: [
				{
					name: 'Abhimanyu Balagopal',
					image: abhimanyu,
					des: "I'm Abhimanyu from Grade 12 at Inventure and I will be one of your Assistant Directors for the Lok Sabha at INMUN 2023.Model United Nations to me is a great opportunity to understand how decisions are made, may that be, at any committee simulating the United Nations, the Parliament or the Lok Sabha. By taking part in this crucial decision-making process as delegates, you have the opportunity to learn about different perspectives on certain issues while of course using diplomacy to make sure the decision you want is taken. I hope that every delegate can learn and take away knowledge that you can use not just at your next MUN conference, but even in the real world.I look forward to seeing a lot of enlightening conversations during our committee sessions and of course a lot of fun outside of the committee.",
				},
				{
					name: 'Eshaan Bharath',
					image: eshan,
					des: "Since joining the circuit in 2023, my keen interest in global policies and international relations has not only flourished, but it has also led to my successful participation in MUNs, earning me notable awards from FISMUN, GEARMUN, MAISMUN, and more. My first engagement with a crises committee earlier this year sparked an enduring passion that has only grown with time. In this conference, I'll be serving as your Assistant Director for the Union Cabinet. Beyond MUNs, I like to spend my time in the gym or playing cricket. I am truly excited about the opportunity to interact with all of you, and I am committed to facilitating a productive and rewarding conference.",
				},
			],
			dir2: [],
		},
		{
			commName: 'Rajya Sabha',
			agenda: 'Deliberation over the reservation system in India',
			background: rajyabg,
			directors: [
				{
					name: 'Vivek MK',
					image: vivek,
					post: 'Chairperson',
					des: 'This lad is famous for his aggressive style of munning and no committee is boring when he is around. From the very first mun of his life, Vivek has been placed around 12 times in muns which include AJMUN and GearMun. Apart from munning, Vivek is a die-hard fan of Liverpool and Max Verstappen.',
				},
			],
			ads: [
				{
					name: 'Ananya Jain',
					image: ananya1,
					des: "Hello delegates, I am really looking forward to the conference and meeting all of you. A little bit about me, I have done 5 MUN's, and on the Executive board for the second time. I love the band The Script and play the piano and guitar. I also love to play basketball, football, tennis and frisbee, and can't wait to meet all of you.",
				},
				{
					name: 'Abhinav Athrey',
					image: abhinavathrey,
					des: "'When diplomacy ends, War begins' - Hi, I'm Abhinav, and I'm passionate about chess and MUNs. I love debating and putting forward my opinion on global issues which I feel is quite necessary with other individuals.I love press conferences.",
				},
			],
			dir2: [],
		},
		{
			commName: 'BBMP',
			agenda: 'The impact of unplanned urbanisation in the whitefield area ',
			background: bangalore,
			directors: [
				{
					name: 'Ameya Mundkur',
					image: ameya,
					post: 'Chairperson',
					des: "Hi, delegates! I'm Ameya, your Chairperson for BBMP. I've been actively participating in MUNs for a few years now, my best memories from MUN are when committees spew into complete chaos and still come up with impactful ideas, and  hope to see that in committee. My interests include Public policy and International Relations, and in my free time, you might find me playing instruments, listening to music, watching shows, or having random, useless debates with my friends. Feel free to ask me any questions. Excited to meet you all!",
				},
			],
			ads: [
				{
					name: 'Lasya Varma',
					image: lasya,
					des: "Hello delegates! I'm Lasya Mohan Varma, a 10th grader, and I am honored to be part of the Bruhat Bengaluru Mahanagara Palike. I love literature and movies, and I'm a huge fan of theater. I started MUNning less than two years ago but it has been a magical and enriching experience. I have been able to engage in some of my favorite activities through MUN: public speaking, debate, writing, and analyzing pertinent social issues. I am eager to participate in several more MUNs, and broaden my debate horizons. I hope to see some fierce debate in committee ultimately leading to constructive solutions we can implement not only in Whitefield but throughout the city.",
				},
				{
					name: 'Krisha Reddy',
					image: krisha,
					des: "'Diplomacy is the velvet glove that cloaks the fist of power.' - This Executive Board member is no stranger to MUNs. With a placement at every conference she’s attended and even a BD in her first ever committee, she’s been through all munning has to offer. Whether it be arguing for climate rights or against China’s hold on economies, she is confident, well researched and knows how to build her bloc. Her achievements speak for her, and her ability to speak and argue points prove her caliber. Presenting the Assistant Director of the Bruhat Bengaluru Mahanagara Palike, Krisha Reddy.",
				},
			],
			dir2: [],
		},
		{
			commName: 'Committee X',
			agenda: 'The Vietnam War',
			background: vietnam,
			directors: [
				{
					name: 'Abhinav Vallur',
					image: abhi,
					post: 'Chairperson',
					des: '“Wake up to reality” - Madara Uchiha. With a keen eye for detail and an ability to foster meaningful discussions, Abhinav always found MUN to be a platform where he could fervently debate topics that impacted the world’s immediate reality. This zeal for debate coupled with his adaptability has earned him a range of accolades from prestigious conferences such as Harvard MUN and DSMUN, across various committee types. He is also an adept athlete who enjoys multiple sports, and is actively involved in the field of cancer research. In his free time you will most likely find him at the gym listening to metal, or binging Naruto (again). While he certainly enjoys all facets of MUN, he is innately biased toward fast paced, thrilling crisis committees that demand unparalleled versatility from delegates. To that end, he hopes to create a similar committee experience for you at INMUN. Presenting to you the director of Committee X, Abhinav Vallur.',
				},
			],
			ads: [
				{
					name: 'Arav Bhojashettar',
					image: arav,
					des: "'It's been said politics is the second oldest profession and I've come to realize over the last few years, it bears a great similarity to the first.' - Ronald Reagan; Arav is known for being cocky and humorous. He highly values communication skills and logic. Arav tends to slip out of tricky situation just as simply as he creates chaos around himself. He bring high quality of debate and environment of unpredictablity into every committee.",
				},
				{
					name: 'BS Chetan Swaroop Reddy',
					image: bs,
					des: 'BS Chetan is a passionate MUNner who has been active in the circuit since Grade 6. He has been to about 15 MUNs since then. Having been to MUNs since a young age, He has grown into diplomacy, politics and negotiations. Nevertheless, He always yearns for full-scale chaos in committee. He holds accolades from AJMUN, CISMUN, GMUN, and OxfordMUN among others.',
				},
			],
			dir2: [],
		},
		{
			commName: 'Union Cabinet',
			agenda: 'Operation Bluestar',
			background: bluestar,
			directors: [
				{
					name: 'Gautam Chari',
					image: chari,
					post: 'Prime Minister',
					des: 'Hi delegates, I am Gautam and am a student from grade 12. It is my distinct honour to serve as the Prime Minister of the Union Cabinet this year. Through the years MUN has given me the opportunity to develop a unique set of skills, including public speaking, debating and most importantly the courage to think on my feet and be confident in what I say. As such, I hope to create an atmosphere that enhances your development and safeguards the legacy left behind by my very competent seniors. Cannot wait to see you all in committee and may the force be with you!',
				},
			],
			ads: [
				{
					name: 'Arnav Aggarwal',
					image: arnav,
					des: 'Hello Delegates! My name is Arnav Raj Aggarwal and I am ecstatic to serve on the executive board for this committee. The opportunity to participate in MUN has served as a bridge between my love for public speaking and debate along with my interest in regional and international affairs, awarding me a placement in every conference thus far. Participating in spirited debate has allowed me to connect with like-minded individuals, and I sincerely hope this committee provides you the same. Outside the realm of MUN, my interests lie in the fields of medicine and research, whilst I am simultaneously invested entrepreneurship and the general logos behind STEM. During my spare time, I enjoy playing sports competitively and am also an active pursuer of the performing arts, specifically speech and drama.',
				}
			],
			dir2: [],
		},
		{
			commName: 'Joint Crisis Committee',
			agenda: 'World War II',
			background: wwii,
			directors: [
				{
					name: 'Aditya Sundar',
					image: adi,
					post: 'Co-director of the Allies',
					des: 'Greetings delegates, this is Aditya Sundar from 12A and I will be serving as Director for the Allies. I have done a number of MUNs, from HMUN India to DSMUN and have developed a certain attitude towards Crisis Committees specifically, which is why I am looking forward to see how you delegates decide to move through one of the most significant events in history. Apart from doing MUNs, I am also a musician and a science student, so that’s 3 things I am really passionate about. Hope to see you in committee and may the force be with you!',
				},
				{
					name: 'Johann Ulatill',
					image: johann,
					post: 'Crisis Director',
					des: 'I am thrilled to introduce myself as the Crisis Director for INMUN 2023 and the International Head of Press. With over 4 years of exceptional MUN experience, I have accomplished significant milestones both within and outside the MUN community. As the founder of MUNwala, a successful soft skills training company, I have empowered individuals to enhance their personal and professional growth. With this wealth of experience, I am committed to creating a competitive and enriching environment at INMUN 2023. Get ready for an unforgettable journey!',
				},
				{
					name: 'Vivin Anand',
					image: vivin,
					post: 'Co-director of the Axis',
					des: "Hey delegates! I'm Vivin Anand, co-director for INMUN's JCC this year. I am looking forward to seeing how each and every delegate uniquely attempts to tackle the greatest and arguably most consequential war in modern history, from both sides! Outside of MUN, I am a huge sports fan, especially Cricket and Mixed Martial Arts and I love listening to and playing music. See you in committee!",
				},
			],
			dir2: [
				{
					name: 'Zaid Sherif',
					image: zaid,
					post: 'Co-director of the Axis',
					des: "'I'll always help topple a government' - Alex 'Technoblade'; Having been in the circuit since 2017, Zaid has definitely earned himself the reputation of being one of the most indomitable delegates in Banglore . He has attended over 25 conferences, which includes a diverse experience as an Executive Member or a member of the Secreteriat. With numerous accolades to his name with Best Delegate awards from conferences such as SJCMUN, CoMUN, AMUN and CJCMUN, him and his iconic bow-tie never fail to unnerve those around him. Presenting to you the co-director of JCC, Zaid Sheriff.",
				},
				{
					name: 'Gunav Menon',
					image: gunav,
					post: 'Co-director of the Allies',
					des: "Opinionated and never hesitant to elucidate his point of view, Gunav is as firm as he is considerate. Having been to more than 50 conferences, Gunav has an impressive placement record to say the least. Awards to his name include the likes of the Best Delegate Awards at MUNs such as CLMUN, GWHMUN, SMUN, SJBHSMUN and HMUN India to name a few and also accolades from MUNs such as TISBMUN, KMUN and BMUN. With a penchant for fast-paced debate and being skilled at handling situations that would make even the most seasoned MUNners uncomfortable, Gunav enjoys challenges and is adept at using a diplomatic approache to tackle even the most unnerving predicaments. Apart from MUN, Gunav is an avid debater and a passionate lover of Motorsport. Gunav actively participates in parliamentary debates and ADR Competitions at college and has even represented India in Sri Lanka at the Motorcross Championships twice. His perfervid appreciation for sport and speed is what, among other things, Gunav is known for."
				},
			],
			ads: [
				{
					name: 'Sudyotman Sudershan',
					image: sud,
					des: 'Hello delegates, I am Sudyotman Sudershan. I have been part of the MUN community for half a decade. I am absolutely excited to see our Joint Crisis Committee in action. I am looking forward to seeing how our committee will progress, and how the changing situation of the war will impact your decisions in face of threats both external and internal. See you in the War Room',
				},
				{
					name: 'Ashutosh Barman',
					image: ashutosh,
					des: 'I’ve always enjoyed a good debate, and am known to everyone close to me as the guy who argues too much - but it comes from a place of love. I’m passionate about sports, music, and anything to do with physics, and have been cursed by being a Ferrari fan. I love movies and games and really any sort of entertainment. Although I’ve been told otherwise, I firmly believe I have a good sense of humour. So if I make a “bad” joke - just laugh for my sanity. I am really looking forward to being on the board for this JCC, and if it lives up to my expectations, I promise it will be an unforgettable experience.',
				},
			],
		},
	];

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

	// JSX

	if (isMobile) {
		return (
			<div style={{ position: 'relative' }}>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<div className='sec-box'>
					<h1 className='sec'>Secretariat</h1>
					<div style={{ marginTop: '50px' }}>
						<div
							className='all-center sec-gen-sec'
							style={{ marginBottom: '50px' }}>
							<img
								className='usg-pic'
								src={omu}
								alt=''
							/>
							<h1>Om Mehta</h1>
							<h3>Secretary General</h3>
						</div>
						<div
							className='all-center sec-gen-sec'
							style={{ marginBottom: '50px' }}>
							<img
								className='usg-pic'
								src={chari2}
								alt=''
							/>
							<h1>Gautam Chari</h1>
							<h3>Director General</h3>
						</div>
						<h3 className={'usgMobile usg-title'}>Under Secretary Generals</h3>

						<div className='grid-2 usg-box all-center'>
							{usgs.map((usg, idx) => (
								<div
									className='usg-category '
									key={idx}>
									<h1 className='all-center usg-post'>{usg.post}</h1>
									<div className='grid-2 all-center pic-box'>
										{usg.imgs.map((pic, index) => (
											<div
												key={index}
												className='usg-pics'>
												<img
													className='usg-pic'
													src={pic}
													alt=''
												/>
												<h1 className='usg-name'>{usg.names[index]}</h1>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
								
						<div className='usg-box all-center usgBoxMobile'>
							{financesocials.map((finsoc, idx) => (
								<div className='usg-category ' key={idx}>
									<h1 className='all-center usg-post'>{finsoc.post}</h1>
									<div className='grid-2 all-center pic-box'>
										{finsoc.imgs.map((pic, index) => (
											<div
												key={index}
												className='usg-pics'>
												<img
													className='usg-pic'
													src={pic}
													alt=''
												/>
												<h1 className='usg-name'>{finsoc.names[index]}</h1>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
						<div className='usg-box all-center usgBoxMobile'>
							<div className='usg-category'>
								<h1 className='all-center usg-post'>Logistics</h1>
								<div className='all-center pic-box'>
									<div className='usg-pics'>
										<img
											className='usg-pic'
											src={placeholder}
											alt=''
										/>
										<h1 className='usg-name'>Tanvi Iyer</h1>
										<h3>Head of Logistics</h3>
									</div>
								</div>
								<div className='grid-2 all-center pic-box'>
									{logistics.imgs.map((pic, index) => (
										<div
											key={index}
											className='usg-pics'>
											<img
												className='usg-pic'
												src={pic}
												alt=''
											/>
											<h1 className='usg-name'>{logistics.names[index]}</h1>
											<h3>Deputy USG</h3>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='eb-box '>
					<h1 className='sec'>Executive Board</h1>
					<br />
					{commsEb.map((comm, index) => (
						<div
							key={index}
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
									objectFit: 'cover',
								}}
							/>
							<div style={{ zIndex: '100', positve: 'relative' }}>
								<div className='eb-title ebMobile'>
									<h1>{comm.commName} </h1>
									<h6>Agenda: {comm.agenda}</h6>
								</div>
								<div
									className={`grid-${comm.directors.length} all-center directorBox`}>
									{comm.directors.map((director, idx) => (
										<div key={idx}>
											<img
												src={director.image}
												className='directorImage'
											/>
											<h1>{director.name}</h1>
											<h3>{director.post}</h3>
											<p style={{ maxWidth: '90%' }}>{director.des}</p>
										</div>
									))}
								</div>
								<div
									className={`grid-1 all-center directorBox`}>
									{comm.dir2.map((director, idx) => (
										<div key={idx}>
											<img
												src={director.image}
												className='directorImage'
											/>
											<h1 style={{ color: 'white' }}>{director.name}</h1>
											<h3>{director.post}</h3>
											<p style={{ maxWidth: '90%', color: 'white' }}>
												{director.des}
											</p>
										</div>
									))}
								</div>
										<div
									className={`grid-${comm.ads.length} all-center directorBox`}>
									{comm.ads.map((ad, ind) => (
										<div key={ind}>
											<img
												src={ad.image}
												className='directorImage'
											/>
											<h1>{ad.name}</h1>
											<h3 style={{ color: 'white' }}>Assistant Director</h3>
											<p style={{ maxWidth: '90%' }}>{ad.des}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div style={{ position: 'relative' }}>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<div className='sec-box'>
					<h1 className='sec'>Secretariat</h1>
					<div style={{ marginTop: '50px' }}>
						<div
							className='grid-2'
							style={{ maxWidth: '900px', margin: 'auto' }}>
							<div
								className='all-center sec-gen-sec'
								style={{ marginBottom: '50px' }}>
								<img
									className='usg-pic'
									src={omu}
									alt=''
								/>
								<h1>Om Mehta</h1>
								<h3>Secretary General</h3>
							</div>
							<div
								className='all-center sec-gen-sec'
								style={{ marginBottom: '50px' }}>
								<img
									className='usg-pic'
									src={chari2}
									alt=''
								/>
								<h1>Gautam Chari</h1>
								<h3>Director General</h3>
							</div>
						</div>
						<h3 className={'usg-title'}>Under Secretary Generals</h3>

						<div className='grid-2 usg-box all-center'>
							{usgs.map((usg, idx) => (
								<div
									className='usg-category '
									key={idx}>
									<h1 className='all-center usg-post'>{usg.post}</h1>
									<div className='grid-2 all-center pic-box'>
										{usg.imgs.map((pic, index) => (
											<div
												key={index}
												className='usg-pics'>
												<img
													className='usg-pic'
													src={pic}
													alt=''
												/>
											</div>
										))}
										{usg.names.map((name, ind) => (
											<h1
												className='usg-name'
												key={ind}>
												{name}
											</h1>
										))}
									</div>
								</div>
							))}
						</div>
						<div className='usg-box all-center'>
							{financesocials.map((finsoc, idx) => (
								<div
									className='usg-category ' 
									key={idx}
									style={{ marginTop: '0px' }}>
									<h1 className='all-center usg-post'>{finsoc.post}</h1>
									<div className='grid-2 all-center pic-box'>
										{finsoc.imgs.map((pic, index) => (
											<div
												key={index}
												className='usg-pics'>
												<img
													className='usg-pic'
													src={pic}
													alt=''
												/>
											</div>
										))}
										{finsoc.names.map((name, ind) => (
											<h1
												className='usg-name'
												key={ind}>
												{name}
											</h1>
										))}
									</div>
								</div>
							))}
						</div>
						<div
							className='usg-box all-center'
							style={{ width: '560px' }}>
							<h1 className='all-center usg-post'>Logistics</h1>
							<div className='usg-category '>
								<div className='grid-2 all-center pic-box grid-2'>
									{logistics.imgs.map((pic, index) => (
										<div
											key={index}
											className='usg-pics'>
											<img
												className='usg-pic'
												src={pic}
												alt=''
											/>
											<h1 className='usg-name'>{logistics.names[index]}</h1>
											<h3>{logistics.posts[index]}</h3>
										</div>
									))}
								</div>
								<br />
								<div className='grid-2 all-center pic-box grid-2'>
									{logisticsADs.imgs.map((pic, index) => (
										<div
											key={index}
											className='usg-pics'>
											<img
												className='usg-pic'
												src={pic}
												alt=''
											/>
											<h1 className='usg-name'>{logisticsADs.names[index]}</h1>
											<h3>{logisticsADs.posts[index]}</h3>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='eb-box'>
					<h1 className='sec'>Executive Board</h1>
					<br />
					{commsEb.map((comm, index) => (
						<div
							key={index}
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
									<h1>{comm.commName} </h1>
									<h6>Agenda: {comm.agenda}</h6>
								</div>
								<div
									className={`grid-${comm.directors.length} all-center directorBox`}
									style={{ alignItems: 'start', margin: 'auto' }}>
									{comm.directors.map((director, idx) => (
										<div
											key={idx}
											style={{ margin: '0px auto' }}>
											<img
												src={director.image}
												className='directorImage'
											/>
											<h1>{director.name}</h1>
											<h3>{director.post}</h3>
											<p>{director.des}</p>
										</div>
									))}
								</div>
								<div
									className={`grid-1 all-center directorBox`}>
									{comm.dir2.map((director, idx) => (
										<div key={idx}>
											<img
												src={director.image}
												className='directorImage'
											/>
											<h1 style={{ color: 'white' }}>{director.name}</h1>
											<h3>{director.post}</h3>
											<p style={{ maxWidth: '90%', color: 'white' }}>
												{director.des}
											</p>
										</div>
									))}
								</div>
								<div
									className={`grid-${comm.ads.length} all-center directorBox`}
									style={{ alignItems: 'start', margin: 'auto' }}>
									{comm.ads.map((ad, ind) => (
										<div
											key={ind}
											style={{ margin: '0px auto' }}>
											<img
												src={ad.image}
												className='directorImage'
											/>
											<h1>{ad.name}</h1>
											<h3 style={{ color: 'white' }}>Assistant Director</h3>
											<p>{ad.des}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				<Footer />
			</div>
		);
	}
};

export default Sec;

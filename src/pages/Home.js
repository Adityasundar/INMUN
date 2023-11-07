/** @format */

import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import om from '../om.jpeg';
import '../App.css';
import Navbar from '../layout/Navbar';
import chari from '../goodam.jpeg';
import Gallery from './Gallery';
import logo from '../inmun-logo.png';
import Footer from '../layout/Footer';

const Home = ({ dropDown, drop, height, name }) => {
	const Down = (comms) => {
		dropDown(comms);
	};

	const heightfunc = (comms) => {
		height(comms);
	};

	const namefunc = (comms) => {
		name(comms);
	};

	if (isMobile) {
		return (
			<div>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					show={true}
				/>
				<div className='firsthome background'>
					<div
						className='firsthomeContent'
						style={{ top: '-50px' }}>
						<img
							src={logo}
							alt='dont work'
							className='inmun-logo'
						/>
						<h1 style={{ postion: 'relative', top: '-50px' }}>INMUN 2023</h1>
						<h3 style={{ postion: 'relative', top: '-50px' }}>
							28th-30th August, 2023
						</h3>
						<a
							href='https://forms.gle/P4GTFMBo2qVGtdAF6'
							target='_blank'
							className='register'>
							Register Now!
						</a>
					</div>
				</div>
				<div
					className='letter-secgen mobileDiv'
					style={{ marginBottom: '0px' }}>
					<div className='container container-letter'>
						<div className='letter-text mobile'>
							<h1
								style={{
									marginTop: '50px',
									marginBottom: '20px',
								}}>
								Letter from Secretary General
							</h1>
							<div className='letter-img-mobile'>
								<a
									href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
									target='_blank'>
									<img
										src={om}
										alt=''
										style={{ width: '100%' }}
									/>
									<div className='overlay text-center'>
										<h2 className='OM'>
											Secretary General:
											<br />
											Om Mehta
										</h2>
									</div>
									<hr
										style={{
											marginTop: '10px',
											backgroundColor: 'blue',
										}}
									/>
								</a>
							</div>

							<p>Dear Delegates,</p>
							<br />
							<p>
								It is my immense pleasure to welcome you to the 11th edition of
								Inventure Academy Model United Nations. From its inception 18
								years ago, Inventure has set its sights on creating
								changemakers. Our flourishing history with change-making through
								dialogue began with the Our Voice platform back in 2014 and has
								continued since. Conferences held in previous years have
								directly impacted society in many ways - from shaping the
								Karnataka Child Shaping and Protection law to helping clean up
								our once beautiful lakes. INMUN continues in its journey to help
								delegates become critical thinkers, leaders and most importantly
								- changemakers.
							</p>
							<br />
							<p>
								The theme of INMUN 2023 revolves around a “Morally Just World”.
								To this end, it is high time that we, as citizens of this world,
								rise above the myopia and disaffection that beset us, and chart
								a new course towards a more equitable, just, and compassionate
								future. A future where the inherent dignity and worth of every
								person are upheld, where justice is not a privilege but a right,
								and where the common good is elevated above narrow
								self-interest.
							</p>
							<br />
							<p>
								The world that was born from a system of balance has descended
								into turmoil. Tragedy exists on every street corner; misery in
								every household; and plentiful corruption in governments
								worldwide. The baleful consequences of this egregious state of
								affairs are manifold and widespread. The dishonest and deceitful
								actions of those in power have resulted in deterioration of the
								public trust, and a corrosive cynicism that destroys the very
								foundations of our democratic institutions. The blatant
								ignorance of the rule of law, the disregard for the common good,
								and the indifference toward the rights and dignity of all people
								have led to a toxic and intractable situation, one that seems to
								ensure further calamity. However, as Martin Luther King Jr once
								said “Out of a Mountain of Despair, A stone of hope”
							</p>
							<br />
							<p>
								INMUN 2023 explores agendas that will help shape a better
								tomorrow; a tomorrow that hopes to have greater equality,
								justice and peace. Our wide array of agendas ranging from
								operation blue star to the impact of urbanization in the
								Whitefield area, aim to push delegates to their limits in
								invigorating and enthralling debate. To the budding delegates
								planning to join us in August - I hope INMUN acts as a catalyst
								to your journey as a MUNner and helps you grow and appreciate
								the intricacies of the world we live in.
							</p>
							<br />
							<p>Carpe Diem,</p>
							<p style={{ marginBottom: '0px' }}>
								<strong>Om Mehta,</strong>
							</p>
							<p style={{ fontStyle: 'italic' }}>
								<strong>
									Secretary General, Inventure Model United Nations 2023
								</strong>
							</p>
						</div>
					</div>
				</div>
				<div
					className='letter-secgen mobileDiv dgBG'
					style={{ marginTop: '-135px' }}>
					<div className='container container-letter'>
						<div className='letter-text mobile'>
							<h1
								style={{
									marginTop: '50px',
									marginBottom: '20px',
								}}>
								Letter from the Director General
							</h1>
							<div className='letter-img-mobile'>
								<a
									href='https://www.reddit.com/r/RajasthanRoyals/comments/12w9r51/rr_management_sucks/'
									target='_blank'>
									<img
										src={chari}
										style={{ width: '100%' }}
										alt=''
									/>
									<div className='overlay text-center'>
										<h2 className='OM'>
											Director General:
											<br />
											Gautam Chari
										</h2>
									</div>
									<hr
										style={{
											marginTop: '10px',
											backgroundColor: 'blue',
										}}
									/>
								</a>
							</div>

							<p>Dear Delegates,</p>
							<br />
							<p>
								It is with pride and pleasure that I serve as your Director
								General for INMUNs 11th edition. My first INMUN, my first MUN
								ever, was in 2018, 5 years ago. I remember myself as a timid
								boy, unable to articulate his thoughts and convey his opinions
								with confidence. It was then where my journey to become who I am
								today began. MUN has taught me how to negotiate, deliberate,
								give rousing speeches, and not least of all listen and
								understand others' perspectives. Creating this “INMUN effect”
								for this year's delegates is my aim as part of the Secretariat.
								As I reflect upon the past 5 years, I understand it is my duty
								and responsibility to carry on the legacy of INMUN. It is a
								hefty challenge, but one I am excited to undertake in my final
								year both as a student and as a part of INMUN.
							</p>
							<br />
							<p>
								MUN is a platform for people to voice their opinion. It is a
								congregation of people holding various ideologies and it is that
								variation that makes MUN exciting. Through taking part in MUNs,
								I have learnt about various social, cultural, economic and
								political issues that have plagued the people, both in the past
								and present. This learning has prepared me for the future,
								helping me form informed opinions based on facts and data. Doing
								MUNs has encouraged me to keep up with current affairs, taking
								note of policy making that affects me. Being aware of my
								situation and voicing my opinion either through protests or
								through voting is the backbone of democracy, especially when it
								comes to being the biggest democracy in the world.
							</p>
							<br />
							<p>
								In the past few years, it has become necessary for people to
								start large movements to achieve justice. Some examples would be
								the “Black Lives Matter” movements and “Fridays for Future” led
								by Greta Thunberg. These examples show the state of our current
								institutions, one in which achieving justice is becoming harder
								and harder. At INMUN 2023, we aim to shed light upon this
								situation and conduct productive debate on what should be done.
								These situations are differing in scale, ranging from Universal
								Health Coverage to discussing the Unplanned Urbanisation of
								Bengaluru.
							</p>
							<br />
							<p>
								As we try to do our little bit in trying to create a positive
								change, we hope you take on the spirit of the conference while
								enjoying its various aspects. I hope you experience growth as a
								person and as a MUNner through this conference.
							</p>
							<br />
							<p>
								Looking forward to meeting all of you and hope you have an
								amazing time here at INMUN 2023! ,
							</p>
							<br />
							<p style={{ marginBottom: '0px' }}>
								<strong>Gautam Chari,</strong>
							</p>
							<p style={{ fontStyle: 'italic' }}>
								<strong>
									Director General, Inventure Model United Nations 2023
								</strong>
							</p>
						</div>
					</div>
				</div>
				<div>
					<Gallery />
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<head>
					<title>INMUN 2023</title>
				</head>
				<body>
					<Navbar
						dropDown={Down}
						drop={drop}
						height={heightfunc}
						name={namefunc}
						show={true}
					/>
					<div>
						<div className='firsthome background'>
							<div className='firsthomeContent'>
								<img
									src={logo}
									alt='dont work'
									className='inmun-logo'
								/>
								<h1>INMUN 2023</h1>
								<h3>28th-30th August, 2022</h3>
								<a
									href='https://forms.gle/P4GTFMBo2qVGtdAF6'
									target='_blank'
									className='register'>
									Register Now!
								</a>
							</div>
						</div>
						<div className='letter-secgen'>
							<div className='container container-letter'>
								<div className='letter-text'>
									<h1
										style={{
											marginTop: '50px',
											marginBottom: '20px',
										}}>
										Letter from Secretary General
									</h1>
									<p>Dear Delegates,</p>
									<p>
										It is my immense pleasure to welcome you to the 11th edition
										of Inventure Academy Model United Nations. From its
										inception 18 years ago, Inventure has set its sights on
										creating changemakers. Our flourishing history with
										change-making through dialogue began with the Our Voice
										platform back in 2014 and has continued since. Conferences
										held in previous years have directly impacted society in
										many ways - from shaping the Karnataka Child Shaping and
										Protection law to helping clean up our once beautiful lakes.
										INMUN continues in its journey to help delegates become
										critical thinkers, leaders and most importantly -
										changemakers.
									</p>
									<p>
										The theme of INMUN 2023 revolves around a “Morally Just
										World”. To this end, it is high time that we, as citizens of
										this world, rise above the myopia and disaffection that
										beset us, and chart a new course towards a more equitable,
										just, and compassionate future. A future where the inherent
										dignity and worth of every person are upheld, where justice
										is not a privilege but a right, and where the common good is
										elevated above narrow self-interest.
									</p>
									<p>
										The world that was born from a system of balance has
										descended into turmoil. Tragedy exists on every street
										corner; misery in every household; and plentiful corruption
										in governments worldwide. The baleful consequences of this
										egregious state of affairs are manifold and widespread. The
										dishonest and deceitful actions of those in power have
										resulted in deterioration of the public trust, and a
										corrosive cynicism that destroys the very foundations of our
										democratic institutions. The blatant ignorance of the rule
										of law, the disregard for the common good, and the
										indifference toward the rights and dignity of all people
										have led to a toxic and intractable situation, one that
										seems to ensure further calamity. However, as Martin Luther
										King Jr once said “Out of a Mountain of Despair, A stone of
										hope”
									</p>
									<p>
										INMUN 2023 explores agendas that will help shape a better
										tomorrow; a tomorrow that hopes to have greater equality,
										justice and peace. Our wide array of agendas ranging from
										operation blue star to the impact of urbanization in the
										Whitefield area, aim to push delegates to their limits in
										invigorating and enthralling debate. To the budding
										delegates planning to join us in August - I hope INMUN acts
										as a catalyst to your journey as a MUNner and helps you grow
										and appreciate the intricacies of the world we live in.
									</p>
									<p>Carpe Diem,</p>
									<p style={{ marginBottom: '0px' }}>
										<strong>Om Mehta,</strong>
									</p>
									<p style={{ fontStyle: 'italic' }}>
										<strong>
											Secretary General, Inventure Model United Nations 2023
										</strong>
									</p>
									<div className='letter-img'>
										<a
											href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
											target='_blank'
											style={{ width: '350px', marginTop: '10px' }}>
											<img
												src={om}
												style={{ width: '400px' }}
												alt=''
											/>
											<div className='overlay text-center'>
												<h2 className='OM'>
													Secretary General:
													<br />
													Om Mehta
												</h2>
											</div>
											<hr
												style={{
													marginTop: '10px',
													width: '400px',
													backgroundColor: 'blue',
												}}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='letter-dg'>
							<div className='container container-letter'>
								<div className='letter-text2'>
									<h1
										style={{
											marginTop: '50px',
											marginBottom: '20px',
										}}>
										Letter from Director General
									</h1>
									<p>Dear Delegates,</p>
									<p>
										It is with pride and pleasure that I serve as your Director
										General for INMUNs 14th edition. My first INMUN, my first
										MUN ever, was in 2018, 5 years ago. I remember myself as a
										timid boy, unable to articulate his thoughts and convey his
										opinions with confidence. It was then where my journey to
										become who I am today began. MUN has taught me how to
										negotiate, deliberate, give rousing speeches, and not least
										of all listen and understand others' perspectives. Creating
										this “INMUN effect” for this year's delegates is my aim as
										part of the Secretariat. As I reflect upon the past 5 years,
										I understand it is my duty and responsibility to carry on
										the legacy of INMUN. It is a hefty challenge, but one I am
										excited to undertake in my final year both as a student and
										as a part of INMUN.
									</p>
									<p>
										MUN is a platform for people to voice their opinion. It is a
										congregation of people holding various ideologies and it is
										that variation that makes MUN exciting. Through taking part
										in MUNs, I have learnt about various social, cultural,
										economic and political issues that have plagued the people,
										both in the past and present. This learning has prepared me
										for the future, helping me form informed opinions based on
										facts and data. Doing MUNs has encouraged me to keep up with
										current affairs, taking note of policy making that affects
										me. Being aware of my situation and voicing my opinion
										either through protests or through voting is the backbone of
										democracy, especially when it comes to being the biggest
										democracy in the world.
									</p>
									<p>
										In the past few years, it has become necessary for people to
										start large movements to achieve justice. Some examples
										would be the “Black Lives Matter” movements and “Fridays for
										Future” led by Greta Thunberg. These examples show the state
										of our current institutions, one in which achieving justice
										is becoming harder and harder. At INMUN 2023, we aim to shed
										light upon this situation and conduct productive debate on
										what should be done. These situations are differing in
										scale, ranging from Universal Health Coverage to discussing
										the Unplanned Urbanisation of Bengaluru.
									</p>
									<p>
										As we try to do our little bit in trying to create a
										positive change, we hope you take on the spirit of the
										conference while enjoying its various aspects. I hope you
										experience growth as a person and as a MUNner through this
										conference.
									</p>
									<p>
										Looking forward to meeting all of you and hope you have an
										amazing time here at INMUN 2023!
									</p>
									<p style={{ marginBottom: '0px' }}>
										<strong>Gautam Chari,</strong>
									</p>
									<p style={{ fontStyle: 'italic' }}>
										<strong>
											Director General, Inventure Model United Nations 2023
										</strong>
									</p>
								</div>
								<div className='letter-img2'>
									<a
										href='https://www.reddit.com/r/RajasthanRoyals/comments/12w9r51/rr_management_sucks/'
										target='_blank'
										style={{ width: '350px', marginTop: '10px' }}>
										<img
											src={chari}
											style={{
												width: '350px',
												height: '290px',
												objectFit: 'cover',
											}}
											alt=''
										/>
										<div className='overlay2 text-center'>
											<h2 className='CHAR'>
												Director General:
												<br />
												Gautam Chari
											</h2>
										</div>
										<hr
											style={{
												marginTop: '10px',
												width: '350px',
												backgroundColor: 'blue',
											}}
										/>
									</a>
								</div>
							</div>
						</div>
						<div>
							<Gallery />
						</div>
					</div>
					<Footer />
				</body>
			</div>
		);
	}
};

export default Home;

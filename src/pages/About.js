/** @format */

import React, { useState, useEffect } from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import pic from './aboutUsBg.jpeg';
import pic2 from './inmunpic.png';
import { isMobile } from 'react-device-detect';

const About = ({ dropDown, drop, height, name }) => {
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

	if (!isMobile) {
		return (
			<div>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<div className='about-us'>
					<h1 style={{ marginTop: '20px' }}>History of INMUN</h1>
					<div className='historyINMUN container'>
						<div style={{ position: 'relative' }}>
							<p>
								INMUN has multiple success stories which led to the formation of
								a permanent platform for children’s participation, namely “Our
								Voice”. One project that utilised this platform was “Our Safety,
								Our Voice”(OSOV), aiming to ensure physical security and
								eradicate abuse of school going students. With over 1000
								students sharing their suggestions, the charter formed as a
								result of OSOV became the foundation for Karnataka’s Child
								Safety and Protection Law in 2018. Another such initiative was
								the “Our Future, Our Voice” symposium. As the product of student
								discussion of the Draft NEP 2019, a charter with recommendations
								was presented to the then in charge of Education at the PMO.
							</p>
							<br />
							<p>
								INMUN’s aim has always been to tackle relevant challenges in our
								current society and produce actionable solutions. High school
								students from across India bring fresh new perspectives as they
								deliberate over complex issues.
							</p>
							<img
								src={pic2}
								className='aboutUsImage'
							/>
						</div>
					</div>
					<div
						className='whatINMUNdiv'
						style={{ marginTop: '50px' }}>
						<h1
							style={{
								color: 'white',
								marginTop: '100px',
								fontSize: '40px',
								paddingBottom: '5px',
							}}>
							What is INMUN
						</h1>
						<div className='whatINMUN container'>
							<p>
								Inventure Academy Model United Nations (INMUN) is Inventure’s
								annual national conference meant for high school students. At
								Inventure, a vital part of education is empowering students to
								become changemakers and INMUN has been an avenue for this
								learning. Through regional bodies such as the Lok Sabha, Rajya
								Sabha and the BBMP, we hope to give students an opportunity to
								“be socially responsible”, which is one of Inventure's Core
								Purposes. To create positive change in our society, it is
								important to possess a few key skills, such as critical
								thinking, innovation and collaboration. INMUN imbues these
								skills amongst its participants through experience.
							</p>
							<p>
								The UN Convention on the Rights of Child clearly states that the
								youth have the right to participate in all matters that affect
								them. INMUN is the product of having utilised this right to
								voice our opinions. While the desire to participate is
								important, equally important is knowing how to participate
								effectively. INMUN teaches through trial and error the concepts
								behind doing so. Communication, problem solving and policy
								drafting are a few such skills that participants get to put to
								practice, and practice makes perfect. This practice happens
								through debate that often leaves one pondering, fostering
								curiosity to learn more about societal affairs, both past and
								present. As students partake in fun debate, they will also have
								the opportunity to put their interpersonal skills to use,
								networking with participants coming from different parts of
								India.
							</p>
						</div>
					</div>
					<h1 style={{ marginTop: '50px' }}>About Inventure Academy</h1>
					<div
						className='about-body'
						style={{ height: 'auto' }}>
						<div
							className='container'
							style={{ position: 'relative' }}>
							<p>
								Founded in 2005, Inventure began with the hope to make every
								child achieve their full potential and excel. The “Inventure
								Way” is to create a nurturing environment where students can
								push their limits, while enjoying themselves thoroughly.
								Inventure aims to teach through an excellently designed
								curriculum that perfectly balances academic rigour with the
								creative arts, sports and community service. Our excellent
								facilities for the arts, design and tech, and our Maker Space
								give learners a rounded learning experience to jump headlong
								into the real world. Inventure deems it necessary for there to
								be an everyday focus on life skills that will give children an
								edge in the complex world of the 21st century.
							</p>
							<br />
							<p style={{ marginTop: '30px' }}>
								While we nurture the distinct identity of each child, we also
								foster a sense of belonging where everyone learns to work and
								play together. Inventure is guided by a set of Core Values that
								translate into tangible and measurable school practices.
								Inventure’s Core Purpose is to teach students how to “be
								socially responsible” and be the drivers of positive change in
								society. Diligent efforts in achieving this purpose has led to
								Inventure winning the ‘Most Innovative Practice’ award by Tata
								Communications and Parikrma Foundation for our Changemaker
								Program in 2018. INMUN pillar’s embody the characteristics we
								hope to imbue in our participants. “Leadership”, “Diplomacy”,
								“Dialogue”, “Communication” and “Problem-solving”
							</p>
							<br />
							<div
								className='historyINMUN2'
								style={{ marginTop: '50px' }}>
								<p>
									Inventure’s Core Purpose is to teach students how to “be
									socially responsible” and be the drivers of positive change in
									society. Diligent efforts in achieving this purpose has led to
									Inventure winning the ‘Most Innovative Practice’ award by Tata
									Communications and Parikrma Foundation for our Changemaker
									Program in 2018. INMUN pillar’s embody the characteristics we
									hope to imbue in our participants. “Leadership”, “Diplomacy”,
									“Dialogue”, “Communication” and “Problem-solving”.
								</p>
								<br />
								<p>
									Imagine a world where every child can excel. Where they are
									free to express themselves and discover their innate potential
									and inventiveness. Where confidence, happiness and compassion
									are part of the timetable.
								</p>
								<br />
								<br />
								<p>
									This is the world of Inventure Academy. An enabling and
									nurturing environment with world-class infrastructure and
									facilities that places our learners at the centre of
									everything we do. Through constant reflection and review, we
									determine how and what we teach based on these defining
									questions: Is it relevant to the lives of our learners? Will
									it help them thrive in an interdependent, globalised and
									rapidly changing world? Will it help them make it a better
									world?
								</p>
								<br />
								<p>
									Inventure’s education philosophy believes in empowering
									children to be positive changemakers in the world they have
									inherited. Our nurturing environment and experiential learning
									strives at providing opportunities that encourage Inventurers
									to discover and realize their individual potential, in both
									academics and beyond academics. We aim to catalyse students
									into becoming critical thinkers, self-directed learners and
									believers in the pursuit of excellence in their chosen
									field(s), anywhere in the world.
								</p>
								<br />
								<p>
									Inventure is today recognised as a thought leader in the
									education sector. We are looking to increase our impact and
									move closer to our dream of 100,000 change makers.
								</p>
							</div>
							<img
								src={pic}
								className='aboutUsImage'
							/>
						</div>
					</div>
				</div>
				<div style={{ position: 'relative', top: '1200px' }}>
					<Footer />
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<br />
				<br />
				<br />
				<br />
				<div className='about-us-mobile'>
					<h1>Inventure Academy</h1>
					<div className='about-body-mobile'>
						<div
							className='container'
							style={{ position: 'relative' }}>
							<p>
								Founded in 2005, Inventure began with the hope to make every
								child achieve their full potential and excel. The “Inventure
								Way” is to create a nurturing environment where students can
								push their limits, while enjoying themselves thoroughly.
								Inventure aims to teach through an excellently designed
								curriculum that perfectly balances academic rigour with the
								creative arts, sports and community service. Our excellent
								facilities for the arts, design and tech, and our Maker Space
								give learners a rounded learning experience to jump headlong
								into the real world. Inventure deems it necessary for there to
								be an everyday focus on life skills that will give children an
								edge in the complex world of the 21st century. While we nurture
								the distinct identity of each child, we also foster a sense of
								belonging where everyone learns to work and play together.
								Inventure is guided by a set of Core Values that translate into
								tangible and measurable school practices. Inventure’s Core
								Purpose is to teach students how to “be socially responsible”
								and be the drivers of positive change in society. Diligent
								efforts in achieving this purpose has led to Inventure winning
								the ‘Most Innovative Practice’ award by Tata Communications and
								Parikrma Foundation for our Changemaker Program in 2018. INMUN
								pillar’s embody the characteristics we hope to imbue in our
								participants. “Leadership”, “Diplomacy”, “Dialogue”,
								“Communication” and “Problem-solving”
							</p>
							<img
								src={pic2}
								className='aboutUsImage-mobile'
							/>
						</div>
					</div>
					<div className='whatINMUNdiv-mobile'>
						<h1
							style={{
								color: 'white',
								marginTop: '40px',
								fontSize: '40px',
								paddingBottom: '5px',
							}}>
							What is INMUN
						</h1>
						<div className='whatINMUN-mobile container-mobile'>
							<p>
								Inventure Academy Model United Nations (INMUN) is Inventure’s
								annual national conference meant for high school students. At
								Inventure, a vital part of education is empowering students to
								become changemakers and INMUN has been an avenue for this
								learning. Through regional bodies such as the Lok Sabha, Rajya
								Sabha and the BBMP, we hope to give students an opportunity to
								“be socially responsible”, which is one of Inventure's Core
								Purposes. To create positive change in our society, it is
								important to possess a few key skills, such as critical
								thinking, innovation and collaboration. INMUN imbues these
								skills amongst its participants through experience.
							</p>
							<p>
								The UN Convention on the Rights of Child clearly states that the
								youth have the right to participate in all matters that affect
								them. INMUN is the product of having utilised this right to
								voice our opinions. While the desire to participate is
								important, equally important is knowing how to participate
								effectively. INMUN teaches through trial and error the concepts
								behind doing so. Communication, problem solving and policy
								drafting are a few such skills that participants get to put to
								practice, and practice makes perfect. This practice happens
								through debate that often leaves one pondering, fostering
								curiosity to learn more about societal affairs, both past and
								present. As students partake in fun debate, they will also have
								the opportunity to put their interpersonal skills to use,
								networking with participants coming from different parts of
								India.
							</p>
						</div>
					</div>
					<h1 style={{ marginTop: '20px' }}>History of INMUN</h1>
					<div className='historyINMUN-mobile container'>
						<div>
							<p>
								INMUN has multiple success stories which led to the formation of
								a permanent platform for children’s participation, namely “Our
								Voice”. One project that utilised this platform was “Our Safety,
								Our Voice”(OSOV), aiming to ensure physical security and
								eradicate abuse of school going students. With over 1000
								students sharing their suggestions, the charter formed as a
								result of OSOV became the foundation for Karnataka’s Child
								Safety and Protection Law in 2018. Another such initiative was
								the “Our Future, Our Voice” symposium. As the product of student
								discussion of the Draft NEP 2019, a charter with recommendations
								was presented to the then in charge of Education at the PMO.
								INMUN’s aim has always been to tackle relevant challenges in our
								current society and produce actionable solutions. High school
								students from across India bring fresh new perspectives as they
								deliberate over complex issues.
							</p>
							<p>
								Inventure Academy, Whitefield was established in 2005 by the
								India Learning Foundation (ILF), a dedicated group of
								changemakers and entrepreneurs committed to education and the
								learning community.
							</p>
						</div>
					</div>
					<img
						src={pic}
						className='aboutUsImage2-mobile'
					/>
					<div className='historyINMUN-mobile container'>
						<div className='historyINMUN2-mobile '>
							<p>
								Inventure’s education philosophy believes in empowering children
								to be positive changemakers in the world they have inherited.
								Our nurturing environment and experiential learning strives at
								providing opportunities that encourage Inventurers to discover
								and realize their individual potential, in both academics and
								beyond academics. We aim to catalyse students into becoming
								critical thinkers, self-directed learners and believers in the
								pursuit of excellence in their chosen ﬁeld(s), anywhere in the
								world. After 18+ years of translating our Core Purpose and Core
								Values at the Whitefield – Sarjapur Campus into tangible
								results, which include:
							</p>
							<br />
							<p>
								Inventure is today recognised as a thought leader in the
								education sector. We are looking to increase our impact and move
								closer to our dream of 100,000 change makers. Imagine a world
								where every child can excel. Where they are free to express
								themselves and discover their innate potential and
								inventiveness. Where confidence, happiness and compassion are
								part of the timetable.
							</p>
							<br />
							<p>
								This is the world of Inventure Academy. An enabling and
								nurturing environment with world-class infrastructure and
								facilities that places our learners at the centre of everything
								we do. Through constant reflection and review, we determine how
								and what we teach based on these defining questions: Is it
								relevant to the lives of our learners? Will it help them thrive
								in an interdependent, globalised and rapidly changing world?
								Will it help them make it a better world?
							</p>
							<br />
							<p>
								True to our Core Purpose – that learners should be able to
								‘excel anywhere in the world’ – our admissions statistics show
								that our learners have been admitted to top colleges in the US,
								UK, Europe, Australia, Singapore, Canada and in India. We offer
								exams in different sessions, as permitted by CAIE
								(May/Nov/March), to allow learners to compete in competitive
								exams in India. And going beyond exams, as we consistently do,
								our lush campus with its superlative sports avenues and
								equipment produces State level and National level athletes
								regularly.
							</p>
							<br />
							<p>
								The learning community we have built embraces learners, parents,
								educators, the people that surround us, and the wider world. The
								school culture is friendly and empowering, and so we attract,
								develop & retain passionate educators. These values enable us to
								offer teaching-learning experiences that are compelling and
								lifelong.
							</p>
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default About;

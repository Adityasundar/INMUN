/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import amber from '../galleryImages/amber.JPG';
import alba from '../galleryImages/alba.jpeg';
import portman from '../galleryImages/madison.JPG';
import maddie from '../galleryImages/maddie.jpg';
import emma from '../galleryImages/emma.JPG';
import sophie from '../galleryImages/sophie.JPG';
import carly from '../galleryImages/carly.JPG';
import zoe from '../galleryImages/zoe.JPG';
import shreya from '../galleryImages/shreya.JPG';
import kavita from '../galleryImages/kavita.JPG';
import madhavi from '../galleryImages/madhavi.JPG';
import randhavi from '../galleryImages/randhavi.JPG';
import bhaidavi from '../galleryImages/bhaidavi.JPG';
import kundavi from '../galleryImages/kundavi.JPG';
import boi from '../galleryImages/boi.JPG';
import loi from '../galleryImages/loi.JPG';
import doi from '../galleryImages/doi.JPG';
import koi from '../galleryImages/koi.JPG';

const Gallery = () => {
	const [index, setIndex] = useState(0);

	const images = [kavita, alba, sophie, amber, koi, portman, maddie, boi, emma, zoe, carly, loi, shreya, kundavi, madhavi, doi, randhavi, bhaidavi];
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			setIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 3500);

		return () => {
			resetTimeout();
		};
	}, [index]);

	if (isMobile) {
		return (
			<div className='galleryBackground'>
				<h1 className='gallery'>Gallery</h1>
				<div className='slideshow'>
					<div
						className='slides'
						style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
						{images.map((image, index) => (
							<img
								src={image}
								alt="doesn't work"
								key={index}
								className='slide slideShowMobile'
							/>
						))}
					</div>
					<div className='slideFrame frameMobile'></div>

					<div className='slideShowDots'>
						{images.map((_, idx) => (
							<div
								key={idx}
								className={`slideShowDot${index === idx ? ' active' : ''}`}
								onClick={() => {
									setIndex(idx);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='galleryBackground'>
				<h1 className='gallery'>Gallery</h1>
				<div className='slideshow'>
					<div
						className='slides'
						style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
						{images.map((image, index) => (
							<img
								src={image}
								alt="doesn't work"
								key={index}
								className='slide'
							/>
						))}
					</div>
					<div className='slideFrame'></div>

					<div className='slideShowDots'>
						{images.map((_, idx) => (
							<div
								key={idx}
								className={`slideShowDot${index === idx ? ' active' : ''}`}
								onClick={() => {
									setIndex(idx);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
};

export default Gallery;

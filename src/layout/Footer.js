/** @format */

import React, { Fragment } from 'react';
import inv from '../invLogo.png';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Footer = () => {
	if (!isMobile) {
		console.log('not mobile');
		return (
			<Fragment>
				<div style={footStyle}>
					<br />
					<img
						style={imgStyle}
						src={inv}
						alt=''
					/>
					<div style={addressStyle}>
						<div style={{ maxWidth: '100%' }}>
							<p>Inventure Academy, Whitefield</p>
							<p>SH 35, Near Dommasandra Circle,</p>
							<p>Kachamaranahalli, Bengaluru,</p>
							<p>Karnataka 562125</p>
						</div>
						<div style={{ maxWidth: '100%' }}>
							<b>MUN Coordinator</b>
							<p>Aparajita Bannerjee:</p>
							<p>aparajita@inventureacademy.com</p>
						</div>
						<div style={{ maxWidth: '100%' }}>
							<b>Secretariat</b>
							<p>Om Mehta:</p>
							<p>om.mehta@inventureacademy.com</p>
							<p>Gautam Chari:</p>
							<p>gautam.chari@inventureacademy.com</p>
						</div>
					</div>
					<ul
						className='socials'
						style={socialsStyle}>
						<li>
							<a
								href='https://www.facebook.com/InventureAcademy/'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
						</li>
						<li>
							<a
								href='https://twitter.com/InventureK12'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/@InventureAcademy1'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/school/inventure-academy/'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/inventureacademy/'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
					</ul>
				</div>
				<div style={footStyle2}>
					<a
						style={footerBottom}
						href='https://www.youtube.com/watch?v=tyJPrZzpwcU'
						target='_blank'
						rel='noopener noreferrer'>
						Designed and Coded by Aditya Sundar and Vivin Anand
					</a>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div style={mobileFootStyle}>
					<br />
					<img
						style={mobileImgStyle}
						src={inv}
						alt=''
					/>
					<div style={mobileAddressStyle}>
						<p>Inventure Academy, Whitefield</p>
						<p>SH 35, Near Dommasandra Circle,</p>
						<p>Kachamaranahalli, Bengaluru,</p>
						<p>Karnataka 562125</p>
					</div>
					<div style={mobileContactStyle}>
						<b>MUN Coordinator</b>
						<p>Aparajita Bannerjee:</p>
						<p>aparajita@inventureacademy.com</p>
					</div>
					<div style={mobileOtherStyle}>
						<b>Secretariat</b>
						<p>Om Mehta:</p>
						<p>om.mehta@inventureacademy.com</p>
						<p>Gautam Chari:</p>
						<p>gautam.chari@inventureacademy.com</p>
					</div>
					<ul
						className='socials'
						style={mobileSocialsStyle}>
						<li>
							<a
								href='https://www.facebook.com/InventureAcademy/'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
						</li>
						<li>
							<a
								href='https://twitter.com/InventureK12'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/@InventureAcademy1'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/school/inventure-academy/'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/inventureacademy/'
								target='_blank'
								rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
					</ul>
				</div>
				<div style={mobileFootStyle2}>
					<a
						style={mobileFooterBottom}
						href='https://www.youtube.com/watch?v=tyJPrZzpwcU'
						target='_blank'
						rel='noopener noreferrer'>
						Coded by Aditya Sundar and Vivin Anand
					</a>
				</div>
			</Fragment>
		);
	}
};

const footStyle = {
	backgroundColor: '#101010',
	height: '180px',
	position: 'relative',
	top: '100%',
	width: '100%',
	maxWidth: '100%',
};

const footerBottom = {
	// 4, 3, 14
	paddingTop: '28.5%',
	position: 'relative',
	top: '9%',
	fontSize: '14px',
	color: 'white',
	fontFamily: 'Arial, Helvetica, sans-serif',
};

const footStyle2 = {
	backgroundColor: '#000000',
	paddingTop: '12px',
	paddingLeft: '20px',
	height: '60px',
	width: '100%',
	maxWidth: '100%',
};

const imgStyle = {
	//250, -70, 510
	height: '140%',
	objectFit: 'contain',
	position: 'relative',
	top: '-70px',
	right: '510px',
};

const socialsStyle = {
	position: 'relative',
	left: '0%',
	top: '-120%',
};

const addressStyle = {
	color: 'white',
	position: 'relative',
	top: '-140%',
	display: 'grid',
	left: '31%',
	gridTemplateColumns: 'repeat(3, 1fr)',
	maxWidth: '70%',
};

const mobileFootStyle = {
	backgroundColor: '#101010',
	height: '260px',
	width: '100%',
	maxWidth: '100%',
};

const mobileImgStyle = {
	height: '55%',
	objectFit: 'contain',
	position: 'relative',
	bottom: '40px',
	right: '30%',
};

const mobileAddressStyle = {
	position: 'relative',
	left: '4%',
	bottom: '21%',
	color: 'white',
	fontSize: '11px',
};

const mobileContactStyle = {
	position: 'relative',
	left: '52%',
	bottom: '80%',
	color: 'white',
	fontSize: '11px',
};

const mobileOtherStyle = {
	position: 'relative',
	left: '52%',
	bottom: '71%',
	color: 'white',
	fontSize: '11px',
};

const mobileSocialsStyle = {
	position: 'relative',
	left: '-1.5%',
	bottom: '68.5%',
};

const mobileFootStyle2 = {
	backgroundColor: '#000000',
	paddingTop: '3%',
	paddingLeft: '5%',
	height: '50px',
	width: '100%',
	maxWidth: '100%',
};

const mobileFooterBottom = {
	paddingTop: '4px',
	paddingLeft: '10%',
	fontSize: '14px',
	color: 'white',
	fontFamily: 'Arial, Helvetica, sans-serif',
};

export default Footer;


/** @format */

import React, { Component } from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Committees from './pages/Committees';
import Category from './pages/Category';
import ConDet from './pages/ConDet';
import Uncab from './pages/IndividualComms/Uncab';
import Lok from './pages/IndividualComms/LOKComm';
import Rajya from './pages/IndividualComms/RAJYAComm';
import BBMP from './pages/IndividualComms/BBMPComm';
import JCC from './pages/IndividualComms/JCCComm';
import UNEP from './pages/IndividualComms/UNEPComm';
import UNHCR from './pages/IndividualComms/UNHCRComm';
import ECOSOC from './pages/IndividualComms/ECOSOCComm';
import X from './pages/IndividualComms/COMMX';
import Home from './pages/Home';
import Sec from './pages/Secretariat/EB';
import Resources from './pages/Resources';
import About from './pages/About';
import PropTypes from 'prop-types';
import abhi from './pages/Secretariat/Images/abhi.jpg';
import omu from './pages/Secretariat/Images/omu.jpeg';
import adi from './pages/Secretariat/Images/adi.jpeg';
import vivin from './pages/Secretariat/Images/vivin.png';
import aashna from './pages/Secretariat/Images/aashna.jpeg';
import narayan from './pages/Secretariat/Images/narayan.jpeg';
import tommy from './pages/Secretariat/Images/tommy.jpeg';
import samu from './pages/Secretariat/Images/samu.jpeg';
import arnav from './pages/Secretariat/Images/arnav.webp';
import dafoe from './pages/Secretariat/Images/dafoe.webp';
import ameya from './pages/Secretariat/Images/ameya.jpeg';
import lasya from './pages/Secretariat/Images/lasya.jpeg';
import abbay from './pages/Secretariat/Images/abbay.jpeg';
import barman from './pages/Secretariat/Images/barman.jpeg';
import hari from './pages/Secretariat/Images/hari.jpeg';
import sud from './pages/Secretariat/Images/sud.webp';
import ananya from './pages/Secretariat/Images/ananya.jpeg';
import ali from './pages/Secretariat/Images/ali.jpeg';

import bbmp from './icons/IBBMP.png';
import lok from './icons/ILOK.png';
import rajya from './icons/IRAJYA.png';
import unep from './icons/IUNEP.png';
import ecosoc from './icons/IECOSOC.jpeg';
import unhcr from './icons/IUNHCR.png';
import union from './icons/IUNION.png';
import jcc from './icons/IJCC.png';
import x from './icons/IX.png';
import Footer from './layout/Footer';

export class App extends Component {
	state = {
		drop: false,
		height: '5',
		committeename: '',
		hoverImage: false,
		currState: {},
		commStuff: {
			UNHCR: {
				commName: 'United-Nations-High-Commissioner-for-Refugees',
				commDisplay: 'United Nations High Commissioner for Refugees',
				commIcon: unhcr,
				commAgenda: 'Refugee Challenge: Access to Jobs and Financial Services',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Aditya Narayan'],
				commAD: ['Ananya Jain', 'John Cena'],
				dirIcon: [narayan],
				ADIcons: [tommy, ananya],
				commClass: 'GA',
				bgImage: omu,
			},

			UNEP: {
				commName: 'united-nations-environmental-program',
				commDisplay: 'United Nations Environmental Program',
				commIcon: unep,
				commAgenda:
					'Addressing the Problems that Arise from Land Degradation and Deforestation',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Nandita Dey'],
				commAD: ['Lasya Verma', 'Joseph Stalin'],
				dirIcon: [ali],
				ADIcons: [tommy, tommy],
				commClass: 'GA',
				bgImage: omu,
			},
			
			ECOSOC: {
				commName: 'economic-and-social-council',
				commDisplay: 'Economic and Social Council',
				commIcon: ecosoc,
				commAgenda:
					'Addressing the global debt crisis',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Nandita Dey'],
				commAD: ['Lasya Verma', 'Joseph Stalin'],
				dirIcon: [ali],
				ADIcons: [tommy, tommy],
				commClass: 'GA',
				bgImage: omu,
			},
				
			LOK: {
				commName: 'Lok-Sabha',
				commName: 'lok-sabha',
				commDisplay: 'Lok Sabha',
				commIcon: lok,
				commAgenda: 'Universal Health Coverage in India',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Aashna Kumar'],
				commAD: ['Abhimanyu Balagopal', 'Dale Steyn'],
				dirIcon: [aashna],
				ADIcons: [abbay, tommy],
				commClass: 'Regional',
				bgImage: omu,
			},
			BBMP: {
				commName: 'BBMP',
				commName: 'bbmp',
				commDisplay: 'BBMP',
				commIcon: bbmp,
				commAgenda: 'Impact of Unplanned Urbanisation in Whitefield',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Ameya Mundkur'],
				commAD: ['Arushi Paul', 'Kurt GÃ¶del'],
				dirIcon: [ameya],
				ADIcons: [tommy, tommy],
				commClass: 'Regional',
				bgImage: omu,
			},
			RAJYA: {
				commName: 'Rajya-Sabha',
				commName: 'rajya-sabha',
				commDisplay: 'Rajya Sabha',
				commIcon: rajya,
				commAgenda: 'Deliberation Over the Reservation System',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Madison Beer'],
				commAD: ['King George', 'Alexander Hamilton'],
				dirIcon: [tommy],
				ADIcons: [tommy, tommy],
				commClass: 'Regional',
				bgImage: omu,
			},
			JCC: {
				commName: 'Joint-Crisis-Committee',

				commDisplay: 'Joint Crisis Committee',
				commIcon: jcc,
				commAgenda: 'World War II',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Aditya Sundar', 'Vivin Anand'],
				commAD: ['Ashutosh Barman', 'Sudyotman Sudarshan'],
				dirIcon: [adi, vivin],
				ADIcons: [barman, sud],
				commClass: 'Crisis',
				bgImage: omu,
			},
			X: {
				commName: 'Committee-X',

				commDisplay: 'Committee X',
				commIcon: x,
				commAgenda: 'Vietnam War',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Abhinav Vallur'],
				commAD: ['Hari Harish', 'Thom Thomas'],
				dirIcon: [abhi],
				ADIcons: [hari, tommy],
				commClass: 'Crisis',
				bgImage: omu,
			},
			UNION: {
				commName: 'Union-Cabinet',

				commDisplay: 'Union Cabinet',
				commIcon: union,
				commAgenda: 'Operation Blue Star',
				commDesc: `Lorem ipsum dolor sit amet, cibo ubique eligendi id eos, eu cum tollit suscipiantur. Paulo virtute sententiae ex mea. Et graece intellegam instructior usu, et summo conceptam mei. Te vulputate mediocritatem pri, ex mel iudico quando disputationi. Vocent vidisse mei ut, in vis modus vocibus persecuti.

				Cu vim fierent voluptua salutandi. Vis in modus augue ceteros. Oratio repudiare consetetur at pri, sed officiis qualisque definitionem eu. Vim fugit munere aliquip an, cu mentitum sententiae deterruisset nec, cu nam utinam atomorum tincidunt. Nec ad omnes sadipscing scriptorem, regione tritani ius in, duo ei dicta putent bonorum.
				
				Latine scripta vis in, est electram constituam ut. Id quo sint facilis fastidii, in graece scaevola pertinacia duo, duo an veniam postulant. Eam id diam officiis. Unum veri cu est, dico corrumpit honestatis nec cu. Aperiam fuisset vituperata mel no, errem aliquid facilisi ut sed, tempor aliquid admodum mea te. Legimus maiorum eos ut.
				
				Torquatos reprimique an quo, timeam sensibus inimicus cum an, sea cu sadipscing scribentur repudiandae. Maiestatis neglegentur pri ne, sea vitae exerci an. Perfecto expetendis cu qui, ius inani eruditi consulatu ex. Solum ocurreret deseruisse an ius. Sit nusquam eligendi placerat ne, his ex alii adhuc libris, te diam prima vel. Vis sonet populo te, mei id feugiat labores ocurreret.
				
				Mel ea tibique temporibus, eam impetus phaedrum molestiae ex. Sea at semper scripta euismod. Vix legere fabellas patrioque at. Feugiat molestie sea ea, labore tamquam ne eam. Soluta putant iriure mei ad. Ad eos eleifend reformidans, eu pro probo tantas. Has at amet concludaturque, no velit accumsan usu.`,
				commDir: ['Gautam Chari'],
				commAD: ['Arnav Aggarval', 'Joe Biden'],
				dirIcon: [samu],
				ADIcons: [arnav, tommy],
				commClass: 'Crisis',
				bgImage: omu,
			},
		},
	};

	static propTypes = {
		dropDown: PropTypes.func,
		dropOver: PropTypes.func,
		dropbool: PropTypes.func,
	};

	dropDown = (bool) => {
		if (bool) {
			this.setState({ drop: true });
		} else {
			this.setState({ drop: false });
		}
	};

	height = (h) => {
		this.setState({ height: h });
	};

	name = (n) => {
		this.setState({ committeename: n });
	};

	render() {
		return (
			<BrowserRouter>
				<div>
					<div>
						<Switch>
							<Route
								exact
								path='/'
								component={() => (
									<Home
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/committees'
								render={(props) => (
									<Committees
										{...props}
										dropDown={this.dropDown}
										commStuff={this.state.commStuff}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/conference-details'
								render={() => (
									<ConDet
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/executive-board'
								render={() => (
									<Sec
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/resources'
								component={Resources}
							/>
							<Route
								exact
								path='/about-us'
								render={(props) => (
									<About
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/committees/:category'
								render={(props) => (
									<Category
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/union-cabinet'
								render={(props) => (
									<Uncab
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/lok-sabha'
								render={(props) => (
									<Lok
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/rajya-sabha'
								render={(props) => (
									<Rajya
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/bbmp'
								render={(props) => (
									<BBMP
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/joint-crisis-committee'
								render={(props) => (
									<JCC
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/united-nations-high-commissioner-for-refugees'
								render={(props) => (
									<UNHCR
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/economic-and-social-council'
								render={(props) => (
									<ECOSOC
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
 							<Route
								exact
								path='/united-nations-environmental-program'
								render={(props) => (
									<UNEP
										{...props}
										getCommDetails={this.getCommDetails}
										currState={this.state.currState}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/committee-x'
								render={(props) => (
									<X
										{...props}
										getCommDetails={this.getCommDetails}
										currState={this.state.currState}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

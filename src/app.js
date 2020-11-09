
import React from 'react'
import ReactDom from 'react-dom'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import './styles/style.scss'
import backgroundImage from './images/image.jpg'
import backgroundImage2 from './images/backgroundimage2.jpg'
import skills from './images/skills.png'
import education from './images/education.png'
import unlock from './images/unlock.png'
import esportcentral from './images/esportcentral.png'
import movify from './images/movify.png'
import movingtomars from './images/movingtomars.png'
import logo from './images/logo.png'
import justImobiliare from './images/just-imobiliare.png'

import './styles/style.scss'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalSkillsIsOpen: false,
      modalEducationIsOpen: false,
      scrolled: false,
      selectedMenu: 'home',
      isMobile: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }

  toggleModalSkills() {
    this.setState({ modalSkillsIsOpen: !this.state.modalSkillsIsOpen })
  }

  toggleModalEducation() {
    this.setState({ modalEducationIsOpen: !this.state.modalEducationIsOpen })
  }

  render() {
    console.log(this.state.isMobile)
    return <div className="main-container">
      <div className="img-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">


          <div className={this.state.scrolled ? 'container-navbar scrolled' : 'container-navbar'}>
            <a className="toggle-button" href="#"
              onClick={() => this.setState({ isMobile: !this.state.isMobile })}
            >
              <span className={this.state.isMobile === true ? 'bar open' : 'bar'}></span>
              <span className={this.state.isMobile === true ? 'bar open' : 'bar'}></span>
              <span className={this.state.isMobile === true ? 'bar open' : 'bar'}></span>
            </a>


            <ul className={this.state.isMobile === true ? 'active' : null}>
              <li>
                <div className={this.state.selectedMenu === 'home' ? 'underline' : null}
                  onClick={() => this.setState({ selectedMenu: 'home' })} ><a href="#home">home</a>
                </div>
              </li>
              <li>
                <div className={this.state.selectedMenu === 'about' ? 'underline' : null}
                  onClick={() => this.setState({ selectedMenu: 'about' })} ><a href="#about">about</a>
                </div>
              </li>
              <li>
                <div className={this.state.selectedMenu === 'experience' ? 'underline' : null}
                  onClick={() => this.setState({ selectedMenu: 'experience' })} ><a href="#experience">experience</a>
                </div>
              </li>
              <li>
                <div className={this.state.selectedMenu === 'projects' ? 'underline' : null}
                  onClick={() => this.setState({ selectedMenu: 'projects' })} ><a href="#projects">projects</a>
                </div>
              </li>
              <li>
                <div className={this.state.selectedMenu === 'contact' ? 'underline' : null}
                  onClick={() => this.setState({ selectedMenu: 'contact' })} ><a href="#contact">contact</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="description">
            <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
            <h2>junior software engineer</h2>
            <div className="border-line"></div>
          </div>
        </div>
      </div>
      <div className="about-container"><span id="about"></span>
        <div className="personal-bio">
          <div className="about">
            <h3 >about</h3>
            <div className="border-line"></div>
          </div>
          <h4>Hi, I&apos;m Marius Zerni</h4>
          <p>I was always curious about computers and programming and as I started studying web technologies on my own, I grew more passionate and determined to improve my knowledge about web development. I’m curious and open to learning new things. <br />
            I’m now looking to progress as a Junior Web Developer to enhance my current skills and also develop new ones based on the industry expectations.
          </p>
          <h5>When I&apos;m not coding </h5>
          <p> I practice winter sports. I started to snowboard from a young age, being on the slopes makes me feel free and energised. For the past few years, I have discovered the French and Austrian Alps resorts to be amazing places for enjoying mountains sports.</p>
          <h5>One of the ideas I explored recently</h5>
          <p className="advice"><em>Fail fast and be precise about it.</em></p>
          <p>It looks like a paradox, but it actually makes sense. If you fail fast you will have the time and the knowledge to correct yourself and try a new way. So, rather than waiting to take a decision and postponing action to avoid making a mistake, it is wiser to act after weighing the consequences, so that you can learn from your current failed attempt and try again with a more informed decision.</p>
          <div className="skills-education-container">
            <div className="skills-education-section">
              <h4>Skills</h4>
              <div onClick={this.toggleModalSkills.bind(this)} className="skills"
                style={{ backgroundImage: `url(${skills})` }}>
                <Modal isOpen={this.state.modalSkillsIsOpen}
                  size="lg"
                  centered>
                  <ModalHeader toggle={this.toggleModalSkills.bind(this)}><h2>Skills</h2> </ModalHeader>
                  <ModalBody>
                    <section className="icons-section">
                      <div className="skill-icon">
                        <i className="fab fa-react "></i>
                        <h5>React</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-js "></i>
                        <h5>JavaScript</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-html5 "></i>
                        <h5>HTML</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-css3 "></i>
                        <h5>CSS3</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-node "></i>
                        <h5>Node.js</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-python "></i>
                        <h5>Python</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-git "></i>
                        <h5>Git</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-github "></i>
                        <h5>Github</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-sass "></i>
                        <h5>SASS</h5>
                      </div>
                      <div className="skill-icon">
                        <i className="fab fa-bootstrap "></i>
                        <h5>Bootstrap</h5>
                      </div>
                    </section>
                  </ModalBody>
                </Modal>
              </div>
            </div>
            <div className="skills-education-section">
              <h4>Education</h4>
              <div onClick={this.toggleModalEducation.bind(this)} className="education" style={{ backgroundImage: `url(${education})` }}>
                <Modal isOpen={this.state.modalEducationIsOpen}
                  size="lg"
                  centered>
                  <ModalHeader toggle={this.toggleModalEducation.bind(this)}>
                    <h2> Education</h2>
                  </ModalHeader>
                  <ModalBody>
                    <section className="education">
                      <div className="education-section">
                        <i className="fas fa-angle-double-right fa-2x"></i>
                        <h4>General Assembly - Software Engineering Immersive, Jan - April 2020</h4>
                      </div>
                      <div className="education-section">
                        <i className="fas fa-angle-double-right fa-2x"></i>
                        <h4> Codecademy - JavaScript, HTML, CSS, October - Jan 2019</h4>
                      </div>
                      <div className="education-section">
                        <i className="fas fa-angle-double-right fa-2x"></i>
                        <h4> Bachelor Degree in Geography of Tourism - Babes Bolyai University, Cluj-Napoca, Romania - 2009 - 2012</h4>
                      </div>
                    </section>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-container" style={{ backgroundImage: `url(${backgroundImage2})` }}><span id="experience"></span>
        <div className="second-overlay">
          <div className="experience-title">
            <h3>experience</h3>
            <div className="border-line"></div>
          </div>
          <div className="experience-section">
            <div className="experience-content">
              <i className="fas fa-angle-double-right fa-2x"></i>
              <h4>Crescent Soft, Freelancer - Remote Junior Front End Developer</h4>
              <h4>APR 2020 - present</h4>
              <p>I am currently working on a CRM project for an Estate Agency which allows the agents to authenticate, create accounts, manage property types and client information. I am using the following technologies: - on the back end: MongoDB, Mongoose, Node.js /Express.js; - on the front end: React / React Hooks, Javascript, SCSS, Axios</p>
              {/* <p>Abstract Photography is a company based in Romania that I created with my business partner in 2017. Working as a photographer and also managing this company helped me develop my leadership skills, getting experience in managing people, communicating with clients and delivering contracts under pressure.  </p> */}
            </div>
            <div className="experience-content">
              <i className="fas fa-angle-double-right fa-2x"></i>
              <h4>Software Engineering Immersive Bootcamp, General Assembly, London</h4>
              <h4>JAN 2020 - APR 2020</h4>
              <p>Attending this intensive bootcamp allowed me to develop my software engineering and communication skills by working on projects using different web technologies and frameworks such as React, Express or Django.</p>
            </div>
            <div className="experience-content">
              <i className="fas fa-angle-double-right fa-2x"></i>
              <h4>Crescent Soft, Freelancer - Remote Junior Front End Developer</h4>
              <h4>SEP 2019 - JAN 2020</h4>
              <p>Responsabilities: Worked on creating and improving website templates, using HTML, CSS, Photoshop. Liasing with clients, fixing template or design issues.</p>
            </div>
            <div className="experience-content">
              <i className="fas fa-angle-double-right fa-2x"></i>
              <h4>Crescent Soft, Website administrator, Romania</h4>
              <h4>JAN 2019 - MAR 2019</h4>
              <p>Managing website content and administration.</p>
            </div>
            <div className="experience-content">
              <i className="fas fa-angle-double-right fa-2x"></i>
              <h4>Manager and photographer at Abstract Photography, Romania</h4>
              <h4>2017 - JAN 2020</h4>
              <p>Abstract photography is a company based in Romania that I started with my business partner in 2017. Working as a photographer and also managing this company helped me develop my leadership skills, getting experience in managing people, communicating with clients and delivering contracts under pressure.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container"><span id="projects"></span>
        <div className="projects-inner-container">
          <div className="projects-title">
            <h3>projects</h3>
            <div className="border-line"></div>
          </div>
          <div className="projects-section">
            <div className="project-card" style={{ backgroundImage: `url(${justImobiliare})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="http://nonnagon.net:9000/home" target="_blanck"> Just Imobiliare</a></h4>
                  <p>A CRM project developed for an estate agency which allows the agents to authenticate, create accounts, manage property types and client information. </p>
                </div>
              </figure>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${unlock})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="//unlockself.herokuapp.com" target="_blanck"> Unlock</a></h4>
                  <p>A platform where where people can share their stories of changing their career paths, allowing other people to get inspiration from this. </p>
                </div>
              </figure>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${esportcentral})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="//esportcentral.herokuapp.com" target="_blanck"> EsportCentral</a></h4>
                  <p>Created to support the gaming community in finding the latest games, watching live games via the Twitch platform and also checking the teams that are currently playing.</p>
                </div>
              </figure>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${movify})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="//mariuszerni.github.io/movify" target="_blanck"> Movify</a></h4>
                  <p>An app that could help people find more easily the movies they are interested in.</p>
                </div>
              </figure>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${movingtomars})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="//mariuszerni.github.io/moving-to-mars" target="_blanck"> MovingToMars</a></h4>
                  <p> It is a game created using plain JavaScript, HTML and CSS.</p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container"><span id="contact"></span>
        <div className="contact-border">
          <h3>contact</h3>
          <div className="border-line"></div>
        </div>
        <div className="contact-section">
          <a href="//linkedin.com/in/marius-zerni" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin fa-2x "></i>
            <h4>linkedin.com/in/marius-zerni</h4>
          </a>
        </div>
        <div className="contact-section">
          <a href="//github.com/mariuszerni" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github fa-2x "></i>
            <h4>github.com/mariuszerni</h4>
          </a>
        </div>
        <div className="contact-section">
          <a> <i className="far fa-envelope fa-2x "></i>
            <h4>mariuszerni90@gmail.com</h4>
          </a>
        </div>
      </div>
      <footer>
        <div className="border-line"></div>
        <p>&copy; 2020 Marius Zerni</p>
      </footer>
    </div>
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)

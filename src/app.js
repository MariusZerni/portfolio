
import React from 'react'
import ReactDom from 'react-dom'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import './styles/style.scss'
// import { Link } from 'react-router-dom'
import backgroundImage from './images/image.jpg'
import backgroundImage2 from './images/backgroundimage2.jpg'
import skills from './images/skills.png'
import education from './images/education.png'
import unlock from './images/unlock.png'
import esportcentral from './images/esportcentral.png'
import movify from './images/movify.png'
import movingtomars from './images/movingtomars.png'

import './styles/style.scss'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalSkillsIsOpen: false,
      modalEducationIsOpen: false,
      scrolled: false
    }

    console.log('App')
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
    console.log('render')
    return <div className="main-container">
      <div className="img-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
        <div id="home" className="overlay">
          <div className={this.state.scrolled ? 'container-navbar scrolled' : 'container-navbar'}>
            <ul>
              <li><a href="#home">home</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#experience">experience</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
          <div className="description">
            <h2>junior software engineer</h2>
            <div className="border-line"></div>
            {/* <h4>looking for new opportunities</h4> */}
          </div>
        </div>
      </div>
      <div className="about-container"><span id="about"></span>
        <div className="personal-bio">
          <div className="about">
            <h3 >about</h3>
            <div className="border-line"></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, maxime aliquam ex harum impedit voluptatibus natus, repudiandae numquam, ab laborum nemo recusandae delectus perspiciatis dolores eos! Mollitia quis dolore beatae! Ducimus possimus molestias ratione voluptatibus non? Ipsam qui modi aliquid?</p>
          <div className="skills-education-container">

            <div onClick={this.toggleModalSkills.bind(this)} className="skills" 
              style={{ backgroundImage: `url(${skills})` }}>
              <Modal isOpen={this.state.modalSkillsIsOpen}
                size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                centered>
                <ModalHeader toggle={this.toggleModalSkills.bind(this)}><h2>Skills</h2> </ModalHeader>
                <ModalBody>
                  <section className="icons-section">
                    <i className="fab fa-react fa-5x"></i>
                    <i className="fab fa-js fa-5x"></i>
                    <i className="fab fa-html5 fa-5x"></i>
                    <i className="fab fa-css3 fa-5x"></i>
                    <i className="fab fa-node fa-5x"></i>
                    <i className="fab fa-python fa-5x"></i>
                    <i className="fab fa-git fa-5x"></i>
                    <i className="fab fa-github fa-5x"></i>
                    <i className="fab fa-sass fa-5x"></i>
                    <i className="fab fa-bootstrap fa-5x"></i>
                  </section>
                </ModalBody> 
              </Modal>
            </div>

            <div onClick={this.toggleModalEducation.bind(this)} className="education" style={{ backgroundImage: `url(${education})` }}> 
              <Modal isOpen={this.state.modalEducationIsOpen}
                size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                centered>
                <ModalHeader toggle={this.toggleModalEducation.bind(this)}>Education</ModalHeader>
                <ModalBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint fugiat odit aperiam, nam libero assumenda necessitatibus error incidunt fugit?</ModalBody> 
              </Modal>
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
              <h4>Abstract Photography</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, optio iste ipsum at asperiores perspiciatis deserunt officiis dignissimos eos! Asperiores!</p>
            </div>
            <div className="experience-content">
              <h4>General Assembly</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus ipsam consectetur quaerat adipisci consequuntur exercitationem explicabo repudiandae sit impedit.</p>
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
            <div className="project-card" style={{ backgroundImage: `url(${unlock})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="#"> Unlock</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.</p>
                </div>
              </figure>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${esportcentral})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="#"> EsportCentral</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.</p>
                </div>
              </figure>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${movify})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="#"> Movify</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.</p>
                </div>
              </figure>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${movingtomars})` }}>
              <figure className="effect-marley">
                <div className="overlay">
                  <h4 id="h2"><a href="#"> MovingToMars</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.</p>
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
            <h4>marius_zerni@yahoo.com</h4>
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

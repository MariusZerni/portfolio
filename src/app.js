
import React from 'react'
import ReactDom from 'react-dom'
import { Modal, Button } from 'react-bootstrap'
import './styles/style.scss'
// import { Link } from 'react-router-dom'
import backgroundImage from './images/image.jpg'
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

    }

    console.log('App')
  }




  render() {
    console.log('render')
    return <div className="main-container">
      <div className="img-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
        <div className="overlay">
          <div className="container-navbar">
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/projects">projects</a></li>
              <li><a href="/contact">contact</a></li>
            </ul>
          </div>
          <div className="description">
            <h2>junior software engineer</h2>
            <div className="border-line"></div>
            {/* <h4>looking for new opportunities</h4> */}
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="personal-bio">
          <div className="about">
            <h3 id="about">about</h3>
            <div className="border-line"></div>
            <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
             >
               <Modal.Header closeButton>
                 <Modal.Title id="contained-modal-title-vcenter">
                   Modal heading
                 </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <h4>Centered Modal</h4>
                 <p>
                   Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                   dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                   consectetur ac, vestibulum at eros.
                 </p>
               </Modal.Body>
               <Modal.Footer>
                 <Button >Close</Button>
               </Modal.Footer>
             </Modal>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, maxime aliquam ex harum impedit voluptatibus natus, repudiandae numquam, ab laborum nemo recusandae delectus perspiciatis dolores eos! Mollitia quis dolore beatae! Ducimus possimus molestias ratione voluptatibus non? Ipsam qui modi aliquid?</p>
          <div className="skills-education-container">
            <a href="/skills"><div className="skills" 
              style={{ backgroundImage: `url(${skills})` }}>
            
            </div></a>
            <a href="/education"><div className="education" style={{ backgroundImage: `url(${education})` }}></div></a>
          </div>
        </div>
      </div>
      <div className="projects-container">
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
      <div className="contact-container">
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
          <a href="#" target="_blank" rel="noopener noreferrer"> <i className="far fa-envelope fa-2x "></i>
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

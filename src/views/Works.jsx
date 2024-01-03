import React from 'react'
import './css/work.css'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projectData = [
    {
      image_url:
        'https://imgur.com/mG9lHxF.jpg',
      project_name: 'TreatsDelight',
      description:
        `Embark on a journey into the heart of TreatsDelight, an exemplary project redefining the landscape of 
        canteen management. Offering more than just an Inventory Management and Ordering System, TreatsDelight encapsulates a 
        meticulous blend of innovation and functionality, ensuring an unparalleled experience for both canteen staff and customers.`,
      tech_stack: ['ReactJS','TypeScript','Tailiwind','Vite','Redux', 'NodeJS', 'ExpressJS','MongoDB'],
      source_link: 
      'https://www.flickr.com/photos/199834763@N06/albums/72177720313777132/'
        
    },
    {
      image_url: 'https://imgur.com/BaXcmCL.jpg',
      project_name: 'TreatsDelightMobile',
      description:
        `TreatsDelight Mobile, a standout mobile version of Treats Delight reshaping the canteen management scene. Beyond being a mere 
        Inventory Management and Ordering System, TreatsDelight intricately weaves innovation and functionality for an unmatched experience tailored to both canteen staff and customers.`,
      tech_stack: ['React Native', 'Redux', 'Expo', 'Galio Framework', 'NodeJS', 'ExpressJS'],
      source_link:
        'https://www.flickr.com/photos/199834763@N06/albums/72177720313781491/',
    },
    {
      image_url: 'https://imgur.com/WGjOX2H.jpg',
      project_name: 'ResQme',
      description:
        `ResQme is a versatile emergency web app delivering real-time data on weather, fires, earthquakes, and other crises. With an alert button for swift assistance, it ensures users receive timely and accurate information during emergencies.`,
      tech_stack: ['React', 'Material UI', 'Real Data', 'External APIs'],
      source_link:
        'https://www.flickr.com/photos/199834763@N06/albums/72177720313798863/',
    },
    {
      image_url: 'https://imgur.com/kTaDFY8.jpg',
      project_name: 'ShipTrack',
      description:
        `Shiptrack is a versatile web app for parcel tracking and furniture shopping. Integrated with ChatGPT (although its not free anymore), it provides intelligent assistance and includes a messaging app for seamless communication`,
      tech_stack: ['PHP', 'Laravel', 'JQuery', 'CSS','Bootstrap', 'ChatGPT','JavaScript',],
      source_link:
        'https://www.flickr.com/photos/199834763@N06/albums/72177720313815844/',
    },
  ]

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
        Developed responsive websites and mobile projects, prioritizing scalability, user-friendliness, and adherence to industry standards.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects

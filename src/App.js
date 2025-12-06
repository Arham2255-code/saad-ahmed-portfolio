import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Image } from 'react-bootstrap';

// ====================================================================
// YOUR DEFINED IMAGE PATHS
// ====================================================================
const IMAGE_PATHS = {
    profile: "/images/profile.jpg.png",
    project1: "/images/project1_3d_logo.jpg.png", 
    project2: "/images/project2_poster.jpg.png", 
    project3: "/images/project3_motion.gif.jpeg",
};

// Generic fallback placeholder
const FALLBACK_PLACEHOLDER_URL = "https://placehold.co/400x400/212529/f8f9fa?text=Image+Unavailable";

// ===================== HEADER Component =====================
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-lg py-3 border-bottom border-secondary">
      <Container>
        <Navbar.Brand href="#home" className="text-info fw-bold fs-4">
          Saad Ahmed
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link href="#skills" className="mx-2 text-light text-hover-info">Skills</Nav.Link>
            <Nav.Link href="#projects" className="mx-2 text-light text-hover-info">Work</Nav.Link>
            <Nav.Link href="#about" className="mx-2 text-light text-hover-info">About</Nav.Link>
            <Nav.Link href="#contact" className="btn btn-outline-info rounded-pill ms-lg-3 px-3 py-1 fw-bold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// ===================== HERO Component =====================
const Hero = () => {
  return (
    <section id="home" className="min-vh-100 pt-5 bg-dark text-white d-flex align-items-center justify-content-center">
      <Container className="my-5 pt-5">
        <Row className="align-items-center justify-content-between g-5">
          <Col lg={7} className="text-center text-lg-start">
            <h1 className="display-3 fw-bolder mb-3">
              Hello, I'm <span className="text-info">Saad Ahmed</span><br />
              Professional Graphic Designer
            </h1>
            <p className="lead text-secondary mb-4">
              I specialize in creating visually stunning brand identities, motion graphics, and digital content.
            </p>
            <Button variant="info" href="#projects" className="btn-lg rounded-pill fw-bold shadow-lg text-dark">
              View My Portfolio
            </Button>
          </Col>
          <Col lg={5} className="d-flex justify-content-center justify-content-lg-end">
            <div className="p-3 rounded-circle shadow-lg" style={{ background: 'linear-gradient(to top right, #6610f2, #20c997)' }}>
              <Image
                  src={IMAGE_PATHS.profile}
                  alt="Saad Ahmed Profile Picture"
                  roundedCircle
                  style={{ width: '320px', height: '320px', objectFit: 'cover' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_PLACEHOLDER_URL; }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// ===================== SKILLS Component =====================
const Skills = () => {
  const skills = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Logo Design', '3D Modeling (Blender)',
    'Video Editing (Premiere Pro)', 'Motion Graphics (After Effects)', 'Brand Identity', 
    'UI/UX Concepts', 'Photography Editing', 'Typography'
  ];

  return (
    <section id="skills" className="py-5 bg-secondary text-white">
      <Container className="py-4">
        <h2 className="text-center mb-5 text-info fw-bold display-5">
          Core Skills
        </h2>
        <Row className="justify-content-center g-3">
          {skills.map((skill, index) => (
            <Col xs="auto" key={index}>
              <div 
                className="px-4 py-2 bg-dark text-light rounded-pill shadow-sm skill-pill"
                style={{ cursor: 'pointer' }}
              >
                {skill}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

// ===================== PROJECTS Component =====================
const ProjectCard = ({ title, description, imageSrc }) => {
  const fallbackUrl = `https://placehold.co/400x250/212529/ffffff?text=${title.replace(/\s/g, '+')}`;
    
  return (
    <Col md={6} lg={4} className="d-flex">
      <Card className="bg-dark text-white rounded-3 shadow-lg w-100 project-card-hover">
        <Card.Img 
          variant="top" 
          src={imageSrc} 
          className="h-100" 
          style={{ objectFit: 'cover', height: '200px' }}
          onError={(e) => { e.target.onerror = null; e.target.src = fallbackUrl; }}
        />
        <Card.Body>
          <Card.Title className="text-info fw-bold">{title}</Card.Title>
          <Card.Text className="text-muted small">{description}</Card.Text>
          <Button variant="link" className="text-info p-0 fw-bold">
            View Case Study &rarr;
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-dark text-white">
      <Container className="py-4">
        <h2 className="text-center mb-5 text-info fw-bold display-5">
          Recent Projects
        </h2>
        <Row className="g-4">
          <ProjectCard
            title="VPN Landing Page Design"
            description="Designed a modern and user-friendly landing page for Privacy Hero, utilizing a dark mode aesthetic with neon green accents."
            imageSrc={IMAGE_PATHS.project1}
          />
          <ProjectCard
            title="E-commerce Headphones Campaign"
            description="Created e-commerce website headers and promotional graphics for a wireless headphone launch, incorporating 3D elements."
            imageSrc={IMAGE_PATHS.project2}
          />
          <ProjectCard
            title="Animated Water Bottle Ad"
            description="Produced a short motion graphic/video ad for a natural mineral water brand, focusing on purity and fluid movement."
            imageSrc={IMAGE_PATHS.project3}
          />
        </Row>
      </Container>
    </section>
  );
};

// ===================== ABOUT Component =====================
const About = () => {
  return (
    <section id="about" className="py-5 bg-secondary text-white">
      <Container className="p-4 rounded-4 shadow-lg bg-dark">
        <h2 className="text-center mb-5 text-info fw-bold display-5">About Saad</h2>
        <Row className="align-items-center flex-lg-row-reverse g-5">
          <Col lg={5} className="d-flex justify-content-center mb-4 mb-lg-0">
            <div className="p-2 rounded-4 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #20c997, #6610f2)' }}>
              <Image
                src={IMAGE_PATHS.profile}
                alt="Saad Ahmed Profile Picture"
                fluid
                rounded
                style={{ width: '288px', height: '384px', objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/212529/ffffff?text=Saad+Ahmed"; }}
              />
            </div>
          </Col>
          <Col lg={7} className="text-light">
            <p className="fs-5 fw-semibold lead text-info">
                I am Saad Ahmed, a young and passionate Graphic Designer specializing in digital media and modern aesthetics.
            </p>
            <p className="lead text-secondary">
                My design journey began with a keen curiosity for digital tools, quickly evolving into a strong passion for visual storytelling. I thrive on transforming a raw idea into a polished, professional piece of art. Whether it's a dynamic 3D logo or an elegant poster, my core objective is to deliver designs that are both effective and memorable.
            </p>
            <blockquote className="blockquote border-start border-info ps-3 mt-4 text-light fst-italic">
                 "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// ===================== CONTACT Component =====================
const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-secondary text-white">
      <Container className="py-4 text-center">
        <h2 className="text-info fw-bold mb-4 display-5">Contact Me</h2>
        <p className="lead mb-2">
          Email: <a href="mailto:saad.ahmed.khan321@gmail.com" className="text-info">saad.ahmed.khan321@gmail.com</a>
        </p>
        <p className="lead mb-2">
          Phone: <a href="tel:+923162772823" className="text-info">+923162772823</a>
        </p>
        <p className="lead">
          WhatsApp: <a href="https://wa.me/923001234567" className="text-info">Chat with me</a>
        </p>
      </Container>
    </section>
  );
};

// ===================== FOOTER Component =====================
const Footer = () => {
  return (
    <footer className="bg-dark text-muted py-3 text-center small border-top border-secondary">
      <Container>
        <p className="mb-1">&copy; 2025 Saad Ahmed — All Rights Reserved.</p>
        <p className="mb-0">
          Email: <a href="mailto:saad.ahmed.khan321@gmail.com" className="text-info">saad.ahmed.khan321@gmail.com</a> | 
          Phone: <a href="tel:+923162772823" className="text-info">+923162772823</a>
        </p>
      </Container>
    </footer>
  );
};

// ===================== MAIN APP Component =====================
export default function App() {
  return (
    <div className="min-vh-100 bg-dark" style={{paddingTop: '66px'}}>
      <style>{`
        .text-info { color: #20c997 !important; }
        .btn-info { background-color: #20c997 !important; border-color: #20c997 !important; }
        .btn-info:hover { background-color: #17a2b8 !important; border-color: #17a2b8 !important; }
        .btn-outline-info { color: #20c997 !important; border-color: #20c997 !important; }
        .btn-outline-info:hover { color: #fff !important; background-color: #20c997 !important; }
        .bg-secondary { background-color: #343a40 !important; }
        .text-hover-info:hover { color: #20c997 !important; transition: color 0.3s; }
        .project-card-hover { transition: box-shadow 0.3s, transform 0.3s; }
        .project-card-hover:hover { 
          box-shadow: 0 0 1rem rgba(32, 201, 151, 0.5) !important;
          transform: translateY(-5px);
        }
        .skill-pill { transition: background-color 0.3s, color 0.3s; }
        .skill-pill:hover { background-color: #20c997 !important; color: #111 !important; }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

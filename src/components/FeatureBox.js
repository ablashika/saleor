import React,{useEffect} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSync, faMapMarkerAlt, faFileAlt, faMoneyBill, faTruck, faCreditCard,
  faFileInvoiceDollar, faBoxes, faFileSignature, faHandshake, faCommentDollar,
  faStore, faCalendarCheck, faEnvelopeOpenText, faCheckSquare, faCashRegister,
} from '@fortawesome/free-solid-svg-icons';

import { motion,useAnimation, useMotionValue} from 'framer-motion';

const FeatureBox = ({ icon, title }) => (
  <Col md={4}  style={{marginLeft:"70px"}}>
     <motion.div
      style={{
        border: '1px solid black',
        borderRadius: '50px',
        padding: '15px',
        backgroundColor: '#fffff',
        width: '400px',
        display: 'flex',
        justifyContent: 'space-around',
    
      }} 


      animate={{
        x: [-400, 100],
        transition: { duration: 20, ease:'linear', repeat: Infinity, repeatType: 'loop' },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}

      
           >
      <FontAwesomeIcon icon={icon} size="2x" />
      <h3>{title}</h3>
    </motion.div>
  </Col>
);

const FeatureBoxDetails = () => {
  const features = [
    { icon: faSync, title: "Subscriptions" },
    { icon: faMapMarkerAlt, title: "Address validation" },
    { icon: faFileAlt, title: "Order quotes" },
    { icon: faMoneyBill, title: "Pay later" },
     
  ];


  const scrollY = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateScroll = () => {
      scrollY.set(window.scrollY);
      controls.start({ x: [-400, 400] }); 
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [scrollY, controls]);

  return (
    <Container>
      <Row className='feature-container' >
   
        <motion.div
          className=''
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '150px',
            width:'100%',
            // whiteSpace: 'nowrap', 
           
          }}
             >
          {features.map(({ icon, title }, index) => (
            <FeatureBox key={index} icon={icon} title={title} control={controls}  />
          ))}
        </motion.div>
      </Row>
  
    </Container>
  );
};

export default FeatureBoxDetails;

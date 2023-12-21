import React,{useEffect} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { motion} from 'framer-motion';

export const FeatureBox = ({ icon, title }) => (
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
        x: [-400, 600],
        transition: { duration: 20, ease:'linear', repeat: Infinity, repeatType: 'loop' },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}

      
           >
      <FontAwesomeIcon icon={icon} size="2x" />
      <h3>{title}</h3>
    </motion.div>
  </Col>
);

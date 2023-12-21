import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  faSync, faMapMarkerAlt, faFileAlt, faMoneyBill
} from '@fortawesome/free-solid-svg-icons';

import { motion} from 'framer-motion';
import { FeatureBox } from './FeatureBox';


const FeatureBoxDetails = () => {
  const features = [
    { icon: faSync, title: "Subscriptions" },
    { icon: faMapMarkerAlt, title: "Address validation" },
    { icon: faFileAlt, title: "Order quotes" },
    { icon: faMoneyBill, title: "Pay later" },
     
  ];

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
         <FeatureBox key={index} icon={icon} title={title}/>
          ))}
        </motion.div>
      </Row>
  
    </Container>
  );
};

export default FeatureBoxDetails;

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSync, faMapMarkerAlt, faFileAlt, faMoneyBill, faTruck, faCreditCard,
  faFileInvoiceDollar, faBoxes, faFileSignature, faHandshake, faCommentDollar,
  faStore, faCalendarCheck, faEnvelopeOpenText, faCheckSquare, faCashRegister,
} from '@fortawesome/free-solid-svg-icons';

import { motion, useAnimation } from 'framer-motion';

const FeatureBox = ({ icon, title }) => (
  <Col md={4} style={{marginLeft:"70px"}}>
     <motion.div
      style={{
        border: '1px solid black',
        borderRadius: '50px',
        padding: '15px',
        backgroundColor: '#fffff',
        width: '400px',
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '630px '
      }}
      animate={{ x: '100%', transition: { duration: 10, repeat: Infinity, repeatType: 'loop' } }}
      whileHover={{ scale: 1.05, transition: { duration: 20 } }}
     
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
    { icon: faTruck, title: "Multi-fulfillment" },
    { icon: faCreditCard, title: "Split payments" },
    { icon: faFileInvoiceDollar, title: "Single page" },
    { icon: faBoxes, title: "Multi-gateway" },
    { icon: faFileSignature, title: "Pre-orders" },
    { icon: faHandshake, title: "Order approvals" },
    { icon: faCommentDollar, title: "Custom payment" },
    { icon: faStore, title: "Pick-up in store" },
    { icon: faCalendarCheck, title: "Reservations" },
    { icon: faEnvelopeOpenText, title: "Pay by invoice" },
    { icon: faCheckSquare, title: "Express checkout" },
    // { icon: faCashRegister, title: "Cash on delivery" },
    // { icon: faSync, title: "Subscriptions" },
    // { icon: faMapMarkerAlt, title: "Address validation" },
    // { icon: faFileAlt, title: "Order quotes" },
    // { icon: faMoneyBill, title: "Pay later" },
    // { icon: faTruck, title: "Multi-fulfillment" },
    // { icon: faCreditCard, title: "Split payments" },
    // { icon: faFileInvoiceDollar, title: "Single page" },
    // { icon: faBoxes, title: "Multi-gateway" },
    // { icon: faFileSignature, title: "Pre-orders" },
    // { icon: faHandshake, title: "Order approvals" },
    // { icon: faCommentDollar, title: "Custom payment" },
    // { icon: faStore, title: "Pick-up in store" },
    // { icon: faCalendarCheck, title: "Reservations" },
    // { icon: faEnvelopeOpenText, title: "Pay by invoice" },
    // { icon: faCheckSquare, title: "Express checkout" },
    // { icon: faCashRegister, title: "Cash on delivery" },
  ];

  return (
    <Container>
      <Row className='feature-container' >
   
        <motion.div
          className=''
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            overflowX:"scroll",
            margin:'20px',
            height: '150px',
            whiteSpace: 'nowrap',
            flexWrap:"initial"
           
          }}
             >
          {features.map(({ icon, title }, index) => (
            <FeatureBox key={index} icon={icon} title={title} />
          ))}
        </motion.div>
      </Row>
  
    </Container>
  );
};

export default FeatureBoxDetails;

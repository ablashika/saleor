import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSync, faMapMarkerAlt, faFileAlt, faMoneyBill, faTruck, faCreditCard,
  faFileInvoiceDollar, faBoxes, faFileSignature, faHandshake, faCommentDollar,
  faStore, faCalendarCheck, faEnvelopeOpenText, faCheckSquare, faCashRegister,
} from '@fortawesome/free-solid-svg-icons';

const FeatureBox = ({ icon, title }) => (
  <Col md={4}>
    <div className="feature-box">
      <FontAwesomeIcon icon={icon} size="2x" />
      <h3>{title}</h3>
      <p>Feature description goes here.</p>
    </div>
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
    { icon: faCashRegister, title: "Cash on delivery" },
  ];

  return (
    <Container>
      <Row>
        {features.map(({ icon, title }, index) => (
          <FeatureBox key={index} icon={icon} title={title} />
        ))}
      </Row>
    </Container>
  );
};

export default FeatureBoxDetails;

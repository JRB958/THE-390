import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { useProperty } from '../../utils/hooks/PropertyContext';
import { useNavigate } from "react-router-dom";

const PropertyPage = ({ id }) => {
  let navigate = useNavigate();

  //TODO to be implemented into the Card and Page components once API is confirmed
  //FIXME joijaoijfaiwejf
  let {propertyId} = useParams();
  const { properties } = useProperty();

  function findPropertyById(propertiesObj, propertyId) {
    // Convert the properties object into an array of its values
    const propertiesArray = Object.values(propertiesObj);
    const matchingProperty = propertiesArray.find(property => property.id === propertyId);
    return matchingProperty;
  }

  const property = findPropertyById(properties, id)
  const renderStyle = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }

  const renderUnits = () => {
    return property.units.map((unit) => (
      <ListGroup variant="flush" key={unit.id} style={{ width: '250px', height: '180px', margin: '5px', fontSize: '13px' }} className=" h-25 shadow">
        <ListGroup.Item style={{ marginBottom: "-10px" }}><strong>{unit.name}</strong></ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Address: {unit.address}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Location: {unit.location}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Price: ${unit.price}</ListGroup.Item>
        <ListGroup.Item >Size: {unit.size} sqft</ListGroup.Item>
      </ListGroup>
    ));
  };

  const renderParkingSpots = () => {
    return property.parkingSpots.map((spot) => (
      <ListGroup variant="flush" key={spot.id} style={{ width: '250px', height: '150px', margin: '5px', fontSize: '13px' }} className=" h-25 shadow">
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Level: {spot.level}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Size: {spot.size} sqft</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Price: ${spot.price}</ListGroup.Item>
        <ListGroup.Item >Slot Number: {spot.slotNumber}</ListGroup.Item>
      </ListGroup>
    ));
  };

  const renderLockers = () => {
    return property.lockers.map((locker) => (
      <ListGroup key={locker.id} style={{ width: '250px', height: '110px', margin: '5px', fontSize: '13px' }} className=" h-25 shadow">
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Location: {locker.location}</ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "-15px" }}>Size: {locker.size} sqft</ListGroup.Item>
        <ListGroup.Item >Number: {locker.number}</ListGroup.Item>
      </ListGroup>
    ));
  };

  function handleBackToDashboard() {
    navigate('/dashboard');
  }
  function handleGoToUnitCreate()
  {
    navigate('/create-unit')
  }
  function handleGoToParkingCreate()
  {
    navigate('/create-parking')
  }
  function handleGoToLockerCreate(){
    navigate('/create-locker')
  }
  return (
    <Container fluid>
      <Row>
        <Col md={4} style={{ padding: '0' }}>
          <img src={property.image} alt={property.name} style={{ width: '100%', height: '40vh', objectFit: 'cover', marginTop: '28px' }} />
          <Card className="mt-4 h-25 shadow">
            <Card.Title className="fw-bold">This is where property finances go?</Card.Title>
            This is where the finanical details will go
          </Card>
          <Card className="mt-4 h-25 shadow">
            <Card.Title className="fw-bold">This is where property Requests go?</Card.Title>
            This is where the requests details will go
          </Card>
        </Col>
        <Col md={8} style={{ padding: '20px', overflowY: 'auto' }}>
          <Row>
            <Col>
              <h2>{property.name}</h2>
              <p>{property.location}</p>
            </Col>

            <Col>
              <Button >
                Make Request?
              </Button>
              <Button onClick={handleBackToDashboard}>
                Dashboard
              </Button>

            </Col>
          </Row>

          <h5 className="mt-3">Units <Button variant="primary" onClick={handleGoToUnitCreate} data-testid="create-unit-button">+</Button></h5>
          <div style={renderStyle}>
            {renderUnits()}
          </div>
          <h5 className="mt-3">Parking Spots <Button variant="primary" onClick={handleGoToParkingCreate} data-testid="create-parking-button">+</Button></h5>
          <div style={renderStyle}>
            {renderParkingSpots()}
          </div>
          <h5 className="mt-3">Lockers <Button variant="primary" onClick={handleGoToLockerCreate} data-testid="create-locker-button">+</Button></h5>
          <div style={renderStyle}>
            {renderLockers()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyPage;

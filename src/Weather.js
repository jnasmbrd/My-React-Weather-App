import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { WiDaySunnyOvercast } from "weather-icons-react";
import ReactAnimatedWeather from "react-animated-weather";

function Weather() {
  return (
    <Container className="Container">
      <Form className="WeatherSearch">
        <Row>
          <Col xs={8}>
            <Form.Control placeholder="Enter city..." />
          </Col>
          <Col xs={1.5}>
            <Button className="Search-Button" variant="outline-primary">
              Search
            </Button>
          </Col>
          <Col>
            <Button className="Current-Button" variant="outline-success">
              Current
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="Weather-Details">
        <div className="form-row">
          <div className="col-6">
            <h1 className="City">Edmonton</h1>
            <ul className="Weather-Description">
              <li>
                Monday <span className="Date-Time">14:00</span>
              </li>
              <li className="Description">clear sky</li>
              <li>
                <WiDaySunnyOvercast
                  size={65}
                  color="#30accc"
                  className="Icon"
                />
                <span className="Temperature">20</span>{" "}
                <span className="Units">°C | ° F</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="Overview">
              <li>Humidity: 30 %</li>
              <li>Wind: 8.0 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Weather;

import React from 'react';
import { Link } from 'react-router';
import { Container, Jumbotron, Row, Col, Progress, Button } from 'reactstrap';
import '../css/main.css';

export default function ApplicationListing() {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, Jane!</h1>
        <p>You are the #5 reviewer, keep at it!</p>
        <Button tag={Link} to='/applications/1234' color="primary">Start Reviewing</Button>
        <Button tag={Link} to='/applications' size="large" color="success">See all Applications</Button>
      </Jumbotron>
      <Row>
        <Col md="6">
          Group target:
          <Progress value="25" max="100" color="success"/>
          Personal target:
          <Progress value="25" max="100" color="warning"/>
        </Col>
        <Col md="6">
          Leaderboard:
          <ol>
            <li class="h4">
              Steve
            </li>
            <li>
              Alice
            </li>
            <li>
              Joe
            </li>
            <li>
              Jane
            </li>
          </ol>
        </Col>
      </Row>
    </div>
  );
}

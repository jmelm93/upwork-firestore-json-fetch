import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom';


// import './home.styles.scss'

const HomePage = (props) => (
  <Container fluid className="">
    <Row className="border-b">
      <Col className="d-flex">
      <div className="">
        <h1 className="ml-3">Welcome</h1>
        <p className="ml-3 ">Welcome</p>
        <Link to="/opportunity/competitive-keyword-analysis">Example Page</Link>

        { Array.isArray(props.tools) && <ul>
          { props.tools.map((tool, i) => <li key={i}>
            <Link to={tool.urlPath}>{tool.titleTag}</Link>
          </li>) }
        </ul> }
      </div>
      </Col>
    </Row>
  </Container>
);

export default HomePage;

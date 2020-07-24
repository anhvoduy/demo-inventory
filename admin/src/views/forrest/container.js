import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LineChart from './lineChart';
import LineTable from './lineTable';

class Container extends Component {
  render() {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <Col md={12} sm={6} >
              <LineChart />
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={6} >
              <LineTable />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Container;
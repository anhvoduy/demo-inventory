import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LineChart from './lineChart';
import LineTable from './lineTable';
import PriceUp from './priceUp';
import PriceDown from './priceDown';

class Container extends Component {
  render() {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <PriceUp />
            </Col>
            <Col lg={3} sm={6}>
              <PriceDown />
            </Col>
          </Row>
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
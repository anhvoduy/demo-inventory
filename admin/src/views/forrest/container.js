import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from '../../components/base/card';
import StatsCard from '../../components/base/statsCard';
import { dataSales, optionsSales, responsiveSales, legendSales } from 'variables';

const createLegend = function(json) {
  var legend = [];
  for (var i = 0; i < json['names'].length; i++) {
    var type = 'fa fa-circle text-' + json['types'][i];
    legend.push(<i className={type} key={i} />);
    legend.push(' ');
    legend.push(json['names'][i]);
  }
  return legend;
}
class Container extends Component {
  render() {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className='pe-7s-wallet text-success' />}
                statsText='Revenue'
                statsValue='$1,345'
                statsIcon={<i className='fa fa-calendar-o' />}
                statsIconText='Last day'
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className='pe-7s-graph1 text-danger' />}
                statsText='Errors'
                statsValue='23'
                statsIcon={<i className='fa fa-clock-o' />}
                statsIconText='Last hour'
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                statsIcon='fa fa-history'
                id='chartHours'
                title='Users Behavior'
                category='24 Hours performance'
                stats='Updated 3 minutes ago'
                content={
                  <div className='ct-chart'>
                    <ChartistGraph
                      data={dataSales}
                      type='Line'
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={ <div className='legend'>{createLegend(legendSales)}</div> }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Container;
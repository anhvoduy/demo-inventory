import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import Card from '../../../components/base/card';
import { dataSales, optionsSales, responsiveSales, legendSales } from '../../../variables';

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
      <Card statsIcon='fa fa-history'
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
    );
  }
}

export default Container;
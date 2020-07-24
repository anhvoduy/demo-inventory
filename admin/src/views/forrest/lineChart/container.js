import React from 'react';
import ChartistGraph from 'react-chartist';
import Card from '../../../components/base/card';
import { dataGolds, optionsGolds, responsiveGolds, legendGolds } from '../../../variables';
import { useTranslation } from 'react-i18next';

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

const LineChart = () => {
  const { t } = useTranslation();
  return (
    <Card statsIcon='fa fa-history'
          id='chartHours'
          title='Users Behavior'
          category='24 Hours performance'
          stats='Updated 3 minutes ago'
          content={
            <div className='ct-chart'>
              <ChartistGraph
                data={dataGolds}
                type='Line'
                options={optionsGolds}
                responsiveOptions={responsiveGolds}
              />
            </div>
          }
      legend={ <div className='legend'>{createLegend(legendGolds)}</div> }
    />
  );  
}

export default LineChart;
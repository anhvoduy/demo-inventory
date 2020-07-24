import React from 'react';
import StatsCard from '../../../components/base/statsCard';

const PriceDown =  () => {
  return (
    <StatsCard  bigIcon={<i className='pe-7s-graph1 text-danger' />}
                statsText='Errors'
                statsValue='23'
                statsIcon={<i className='fa fa-clock-o' />}
                statsIconText='Last hour' />
  );  
}

export default PriceDown;
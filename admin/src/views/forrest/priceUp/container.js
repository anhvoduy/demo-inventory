import React from 'react';
import StatsCard from '../../../components/base/statsCard';

const PriceUp = () => {  
  return (
    <StatsCard  bigIcon={<i className='pe-7s-wallet text-success' />}
                statsText='Revenue'
                statsValue='$1,345'
                statsIcon={<i className='fa fa-calendar-o' />}
                statsIconText='Last day' />
  );  
}

export default PriceUp;
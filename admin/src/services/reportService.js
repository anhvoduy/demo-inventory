import api_inv from './api_inv';

const reportService = function() {
}

reportService.queryReport0001 = function (keyword) {
  let url = 'api/getTicketsWithStatus';
  return api_inv.post(url, {keyword})
  .then(res => {
    const tickets = res.data.data.results;
    return tickets;
  }).catch(err => {
    throw err;
  });
}

export default reportService;
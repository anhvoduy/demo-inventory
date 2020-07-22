import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Card from '../../components/base/card';
import { thReport, tdReport } from '../../variables';

const Reports = function() {  
  const { t } = useTranslation();
  return (
    <div className='content'>
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card title={t('report_list')}
                  category={t('report_list_detail')}
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>
                        <tr>
                          { thReport.map((prop, key) => { return <th key={key}>{prop}</th>; }) }
                        </tr>
                      </thead>
                      <tbody>
                        { tdReport.map((prop, key) => {
                            return (
                              <tr key={key}>
                                { 
                                  prop.map((item, index) => {
                                    if(item === 'Action') {
                                      return <td key={index}><Link to={`/admin/${prop[1]}`}>{item}</Link></td>;
                                    }
                                    else {
                                      return <td key={index}>{item}</td>;
                                    }
                                  })
                                }
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </Table>
                  }
              />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Reports;
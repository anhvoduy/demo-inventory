import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Card from '../../components/base/card';
import { thReport, tdReport } from '../../variables/Variables';

const Reports = function() {
  const { t } = useTranslation();
  const selectReport = (prop) => {
    const code = prop[1];
    console.log('report code:', code);
  }
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
                                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                      return <td key={index}><a href="#" onClick={() => selectReport(prop)}>{item}</a></td>;
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
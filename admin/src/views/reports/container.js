import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Card from '../../components/base/card';
import { thReport, tdReport } from '../../variables/Variables';

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
                                { prop.map((prop, key) => { return <td key={key}>{prop}</td>; }) }
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
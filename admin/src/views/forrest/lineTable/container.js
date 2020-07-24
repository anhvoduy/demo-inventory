import React from 'react';
import { Table } from 'react-bootstrap';
import Card from '../../../components/base/card';
import { thGold, tdGold } from '../../../variables';

const LineTable = () => {  
  return (
    <Card statsIcon='fa fa-history'
          id='goldTable'
          title='Gold Prices'
          category='Today'
          stats='Updated 3 minutes ago'
          content={
            <Table striped hover>
              <thead>
                <tr>
                  {
                    thGold.map((prop, key) => {
                      return <th key={key}>{prop}</th>;
                    })
                  }
                </tr>
              </thead>
              <tbody>
                {
                  tdGold.map((prop, key) => {
                    return (
                      <tr key={key}>
                        {
                          prop.map((prop, key) => {
                            return <td key={key}>{prop}</td>;
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
  );  
}

export default LineTable;
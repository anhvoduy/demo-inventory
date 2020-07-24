import React from 'react';
import { Table } from 'react-bootstrap';
import Card from '../../../components/base/card';
import { thGold, tdGold } from '../../../variables';
import { useTranslation } from 'react-i18next';

const LineTable = () => {
  const { t } = useTranslation();
  return (
    <Card statsIcon='fa fa-history'
          id='goldTable'
          title={t('gold_prices')}
          category='Today'
          stats='Updated 1 minutes ago'
          content={
            <Table striped hover>
              <thead>
                <tr>
                  {
                    thGold.map((title, key) => {
                      return <th key={key}>{title}</th>;
                    })
                  }
                </tr>
              </thead>
              <tbody>
                {
                  tdGold.map((row, key) => {
                    return (
                      <tr key={key}>
                        {
                          row.map((col, key) => {
                            return <td key={key}>{col}</td>;
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
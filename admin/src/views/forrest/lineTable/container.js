import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Card from '../../../components/base/card';
import { thArray, tdArray } from '../../../variables';

class Container extends Component {
  render() {
    return (
      <Card statsIcon='fa fa-history'
            id='chartHours'
            title='Users Behavior'
            category='24 Hours performance'
            stats='Updated 3 minutes ago'
            content={
              <Table striped hover>
                <thead>
                  <tr>
                    {thArray.map((prop, key) => {
                      return <th key={key}>{prop}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {tdArray.map((prop, key) => {
                    return (
                      <tr key={key}>
                        {prop.map((prop, key) => {
                          return <td key={key}>{prop}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            }
      />
    );
  }
}

export default Container;
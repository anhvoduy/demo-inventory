import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from '../../../components/base/card';
import FormInputs from '../../../components/base/formInputs';
import Button from '../../../components/base/customButton';
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';

const Rpt001 = function() {  
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: 'ANH', 
      price1: 5000, 
      price2: 8000, 
      receiptId: 'RPT-001'
    }
    axios.post('http://localhost:8080/api/create-pdf', data).then(function(){
      axios.get('http://localhost:8080/api/fetch-pdf', { responseType: 'blob' }).then(function(res){
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
          saveAs(pdfBlob, 'new-pdf.pdf');
      });
    }, function(e) {
      console.log(e);
    });
  }
  return (
    <div className='content'>
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card title={t('rpt001')}
                  category={''}
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <form id='rptForm' onSubmit={handleSubmit}>
                      <FormInputs
                        ncols={['col-md-6', 'col-md-6']}
                        properties={[
                          {
                            label: t('from_date'),
                            type: 'text',
                            bsClass: 'form-control',
                            placeholder: '',
                            defaultValue: ''
                          },
                          {
                            label: t('to_date'),
                            type: 'text',
                            bsClass: 'form-control',
                            placeholder: '',
                            defaultValue: ''
                          }
                        ]}
                      />
                      <Button bsStyle='info' pullRight fill type='submit'>{t('btnPrint')}</Button>
                    </form>  
                  }
              />
          </Col>
        </Row>
      </Grid>      
    </div>
  );
}

export default Rpt001;
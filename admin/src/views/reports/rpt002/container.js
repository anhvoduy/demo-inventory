import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import RptTemplate from './rptTemplate';

// https://react-pdf.org/
const Container = function() {  
  return (    
    <PDFViewer>
      <RptTemplate />
    </PDFViewer>
  );
}

export default Container;
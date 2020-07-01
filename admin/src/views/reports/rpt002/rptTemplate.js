import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// https://react-pdf.org/
const RptTemplate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1x</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2x</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #3x</Text>
      </View>
    </Page>
  </Document>
);

export default RptTemplate;
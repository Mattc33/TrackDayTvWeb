import React, { useState, useEffect } from 'react'
import styles from './Grid.module.sass'

// Third Party
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

// API
import { _firebase_database } from '../../API/firebase/firebase.index'

const Grid: React.FC = () => {

   const [columnDefs] = useState([
      { headerName: 'Year', field: 'year' },
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Modifiers', field: 'modifier' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Model', field: 'model' },
   ])

   const [rowData, setRowData] = useState([])

   useEffect(() => {
      // Fetch fastlist collection
      _firebase_database.doPullCollection('fastlist')
         .then( data => {
            let firebaseRowData = [] as any;
            data.forEach( doc => {
               doc.data().doc = doc.id
               firebaseRowData.push(doc.data())
            })
            setRowData(firebaseRowData);
         })
         .catch( error => console.log(error))
   }, []);

   return (
      <div className={styles.GridContainer}>
         <div
         className="ag-theme-balham"
         style={{
         height: '500px',
         width: 'inherit' }}
         >
         <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}>
         </AgGridReact>
         </div>
      </div>
   )
}

export default Grid
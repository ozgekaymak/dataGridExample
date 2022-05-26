import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';





function SuppliersTable() {

    const [suppliers,setSuppliers] = useState([]);

     
    const columns = [
      {
        field: 'id',
        headerName: 'Company Id',
        width: 150
      },
      {
        field: 'companyName',
        headerName: 'Company Name',
        width: 150
        
      },
      {
        field: 'contactName',
        headerName: 'Contact Name',
        width: 150,


      },
      {
        field: 'contactTitle',
        headerName: 'Contact Title',
        width: 150,

      }
    ]

    useEffect(() => {

      axios.get("https://northwind.vercel.app/api/suppliers")
            .then(res => setSuppliers(res.data))
    }, [])
  

    return (
      <>
      <div style={{ height: 600, width: '100%'}}>
      <DataGrid
        columns={columns}
        rows={suppliers}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        sx = {{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        
      >
      </DataGrid>
      
      </div>

      
      </>
    )
}

export default SuppliersTable
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../pages/theme";
import Header from "../../components/Header";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@mui/material";
const Contacts = () => {

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "owner",
      headerName: "Owner",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Delete",
      flex: 0.5,
      renderCell: (params) => (
        <Box display="flex" justifyContent="center">
          <IconButton
            onClick={() => handleDelete(params.row._id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const [isFetching, setIsFetching] = useState(false);
  const [deleteStatus, setdeleteStatus] = useState(null);
  const idRef = useRef(null);
  const [toggle, setToggle] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setIsFetching(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/getAllProducts`);

        if (!response.ok) {
          throw new Error("Some error occured while fetching list of products!");
        }
        const data = await response.json();
        // console.log(data.products)
        if (data.length === 0) {
          console.log("No Products found.");
        }

        // data.users.map((ele) => {
        //   let temp = ele;
        //   return temp;
        // });

        console.log(data.products);
        setProducts(data.products);
        setIsFetching(false);
      } catch (error) {
        setError(error.message);
        // console.log(error.message);
      }
    };
    setIsFetching(false);
    fetchUsers();
  }, [toggle]);

  const handleDelete = async (id) => {
    console.log(id);
    setToggle(false);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deleteProduct/?id=` + id,
        {
          method: "DELETE",
        }
      );

      if (response.status != 201) {
        throw new Error("Error while deleting User!");
      }

      const resp = await response.json();
      setdeleteStatus(resp.message);
      console.log(resp.message);
    
    setToggle(true);
  };
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="PRODUCTS"
        subtitle="List of all Prducts"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
           
            // color: colors.blueAccent[500]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700], // Specify your desired color here
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400], // Specify your desired color here
          },
          
          "& .MuiCheckbox-root": {
            color: "green !important", // Specify your desired color here
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "grey !important", // Specify your desired color here
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          rows={products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;

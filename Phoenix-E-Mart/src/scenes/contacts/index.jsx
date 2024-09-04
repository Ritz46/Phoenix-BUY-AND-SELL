import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../pages/theme";
// import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import loader from "../../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // { field: "id", headerName: "ID", flex: 0.5 },
    { field: "_id", headerName: "User ID", flex: 1 },
    {
      field: "uname",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "contactNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
  ];

  const [isFetching, setIsFetching] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  // const [deleteStatus, setdeleteStatus] = useState(null);
  const idRef = useRef(null);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    setIsFetching(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/getAllUsers`);

        if (!response.ok) {
          throw new Error("Some error occured while fetching list of users!");
        }
        const data = await response.json();
        if (data.length === 0) {
          console.log("No users found.");
        }

        data.users.map((ele) => {
          let temp = ele;

          if (!ele.contactNumber) {
            temp.contactNumber = "Contact number not added yet.";
          }

          if (!ele.adress) {
            temp.address = ele.address[0];
          } else if (ele.adress.length == 0)
            temp.address = "Address not added yet";
          else temp.address = ele.adress[0];
          // console.log(temp);
          return temp;
        });

        console.log(data.users);
        setUsers(data.users);
        setIsFetching(false);
      } catch (error) {
        setError(error.message);
        // console.log(error.message);
      }
    };
    setIsFetching(false);
    fetchUsers();
  }, [toggle]);

  const handleDelete = async () => {
    setToggle(false);
    const id = idRef.current.value;
    if (id.length == 0) {
      toast.error("User ID field cannot be empty!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    } else {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deleteUser/?id=` + id,
        {
          method: "DELETE",
        }
      );

      if (response.status != 201) {
        throw new Error("Error while deleting User!");
      }

      const resp = await response.json();
      // setdeleteStatus(resp.message);
      console.log(resp.message);
      toast.info(`${resp.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    }
    setToggle(true);
  };

  return (
    <>
      <Box m="20px">
        <Header
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference"
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
              color: colors.blueAccent[500],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            getRowId={(row) => row._id}
            rows={users}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
          {error && <p>{error}</p>}
        </Box>
      </Box>

      <div className="flex items-center justify-center h-50 w-auto bg-inherit border-2 border-blue-600">
        {!toggle && <img src={loader} className="h-28 bg-inherit" />}
        {toggle && (
          <section className="flex flex-col">
            <h2 className="pl-20 mb-4">Delete Users</h2>
            <section className="flex flex-row">
              <label className="pt-4 text-sky-500 italic mb-5">
                Enter User ID
              </label>
              <input
                type="text"
                className="m-3 h-8 w-48 bg-white rounded-md"
                ref={idRef}
              ></input>
            </section>
            <button
              onClick={handleDelete}
              className="m-3 bg-red-600 text-white"
            >
              Delete User
            </button>
          </section>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Contacts;

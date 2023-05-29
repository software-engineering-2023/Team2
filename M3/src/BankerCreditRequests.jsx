import React, { useState } from "react";
import DataTable from "./Datatable";
import Navbar from "./Navbar";
import Second from "./SecondNav";
import "./banker.css";
import { MDBBtn } from "mdb-react-ui-kit";
import BankerNavBar from "./BankerNavBar";

const BankerCreditRequests = () => {
  const [requests, setRequests] = useState([
    {
        requestid: "1",
        firstname: "John",
        secondname: "Doe",
        nationalID: "1234567890",
        accountnumber: "ABC123",
        date: "2023-05-20",
        status: "Pending",
        actions: (
          <>
            <button onClick={() => handleAccept("1")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("1")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
          </>
        ),
      },
      {
        requestid: "2",
        firstname: "Alice",
        secondname: "Smith",
        nationalID: "9876543210",
        accountnumber: "DEF456",
        date: "2023-05-21",
        status: "Pending",
        actions: (
          <>
            <button onClick={() => handleAccept("2")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("2")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
          </>
        ),
      },
      {
        requestid: "3",
        firstname: "Emma",
        secondname: "Johnson",
        nationalID: "5432167890",
        accountnumber: "GHI789",
        date: "2023-05-22",
        status: "Pending",
        actions: (
          <>
            <button onClick={() => handleAccept("3")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("3")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
          </>
        ),
      },
      {
        requestid: "4",
        firstname: "Michael",
        secondname: "Brown",
        nationalID: "0987654321",
        accountnumber: "JKL012",
        date: "2023-05-23",
        status: "Pending",
        actions: (
          <>
            <button onClick={() => handleAccept("4")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("4")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
          </>
        ),
      },
      {
        requestid: "5",
        firstname: "Olivia",
        secondname: "Davis",
        nationalID: "6789012345",
        accountnumber: "MNO345",
        date: "2023-05-24",
        status: "Pending",
        actions: (
          <>
            <button onClick={() => handleAccept("5")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("5")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
          </>
        ),
      },
      // Add more entries here...
  ]);

  const handleAccept = (requestId) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.requestid === requestId
          ? { ...request, status: "Accepted", actions: "" }
          : request
      )
    );
  };

  const handleReject = (requestId) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.requestid === requestId
          ? { ...request, status: "Rejected", actions: "" }
          : request
      )
    );
  };

  const columns = [
    {
      Header: "Request ID",
      accessor: "requestid",
    },
    {
      Header: "Client First Name",
      accessor: "firstname",
    },
    {
      Header: "Client Last Name",
      accessor: "secondname",
    },
    {
      Header: "Client National ID",
      accessor: "nationalID",
    },
    {
      Header: "Account Number",
      accessor: "accountnumber",
    },
    {
      Header: "Request Date",
      accessor: "date",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Actions",
      accessor: "actions",
      disableFilters: true,
      Cell: ({ row }) => row.original.actions,
    },
  ];

  return (
    <div className="fo2">
      <BankerNavBar></BankerNavBar>
      {/* <Second></Second> */}
      <DataTable columns={columns} data={requests}></DataTable>
    </div>
  );
};

export default BankerCreditRequests;

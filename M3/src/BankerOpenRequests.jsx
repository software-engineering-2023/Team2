import React, { useState } from "react";
import DataTable from "./Datatable";
import Navbar from "./Navbar";
import Second from "./SecondNav";
import "./banker.css";
import { MDBBtn } from "mdb-react-ui-kit";
import BankerNavBar from "./BankerNavBar";

const BankerOpenRequests = () => {
  const [requests, setRequests] = useState([
    {
        requestid: "1",
        firstname: "John",
        secondname: "Doe",
        nationalID: "1234567890",
        date: "2023-05-20",
        dob: "1990-01-01",
        address: "123 Main St",
        place: "Company XYZ",
        salary: 5000,
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
        firstname: "Jane",
        secondname: "Smith",
        nationalID: "0987654321",
        date: "2023-05-21",
        dob: "1985-02-10",
        address: "456 Elm St",
        place: "Company ABC",
        status: "Pending",
        salary: 4000,
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
        firstname: "Michael",
        secondname: "Johnson",
        nationalID: "5432109876",
        date: "2023-05-22",
        dob: "1982-09-15",
        address: "789 Oak St",
        place: "Company PQR",
        salary: 6000,
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
        firstname: "Emily",
        secondname: "Anderson",
        nationalID: "7890123456",
        date: "2023-05-23",
        dob: "1995-07-20",
        address: "987 Pine St",
        place: "Company LMN",
        salary: 5500,
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
      Header: "Request Date",
      accessor: "date",
    },
    {
      Header: "Date of Birth",
      accessor: "dob",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
        Header: "Place of Occupation",
        accessor: "place",
    },
    {
        Header: "Current Salary",
        accessor: "salary",
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

export default BankerOpenRequests;

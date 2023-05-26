import React, { useState } from "react";
import DataTable from "./Datatable";
import Navbar from "./Navbar";
import Second from "./SecondNav";
import "./banker.css";
import { MDBBtn } from "mdb-react-ui-kit";
import BankerNavBar from "./BankerNavBar";

const BankerReplacementRequests = () => {
  const [requests, setRequests] = useState([
    {
        requestid: "1",
        firstname: "John",
        secondname: "Doe",
        nationalID: "1234567890",
        date: "2023-05-20",
        cardnumber: "**** **** **** 1234",
        purpose: "Loss",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("1")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("1")} rounded color="secondary">
              Reject
            </MDBBtn>
          </>
        ),
      },
      {
        requestid: "2",
        firstname: "Jane",
        secondname: "Smith",
        nationalID: "0987654321",
        date: "2023-05-21",
        cardnumber: "**** **** **** 5678",
        purpose: "Theft",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("2")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("2")} rounded color="secondary">
              Reject
            </MDBBtn>
          </>
        ),
      },
      {
        requestid: "3",
        firstname: "Michael",
        secondname: "Johnson",
        nationalID: "5432109876",
        date: "2023-05-22",
        cardnumber: "**** **** **** 9012",
        purpose: "Damaged",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("3")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("3")} rounded color="secondary">
              Reject
            </MDBBtn>
          </>
        ),
      },
      {
        requestid: "4",
        firstname: "Emily",
        secondname: "Wilson",
        nationalID: "9876543210",
        date: "2023-05-23",
        cardnumber: "**** **** **** 3456",
        purpose: "Theft",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("4")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("4")} rounded color="secondary">
              Reject
            </MDBBtn>
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
        Header: "Card Number",
        accessor: "cardnumber",
    },
    {
        Header: "Purpose",
        accessor: "purpose",
    },
    {
      Header: "Uploaded Documents",
      accessor: "doc",
      disableFilters: true,
      Cell: () => <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
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

export default BankerReplacementRequests;

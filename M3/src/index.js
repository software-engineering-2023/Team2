import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import LoginForm from './Login';
import Register from './Register';
import MultiStepForm from './Loan';
import Credit from './Credit';
import Open from './Open';
import CreditTrans from './CreditTrans';
import Replacement from './Replacement';
import Account from './Account';
import BillingPage from './BillingPage';
import BankerHome from './bankerHome';
import BankerCreditRequests from './BankerCreditRequests';
import BankerLoanRequests from './BankerLoanRequests';
import BankerOpenRequests from './BankerOpenRequests';
import BankerReplacementRequests from './BankerReplacementRequests';
import BankerRequests from './BankerRequests';
import ReportIssues from './ReportIssues';
import NewDesign from './NewDesign';
import NewLoan from './newLoans';
import NewCreditCard from './NewCreditCard';
import BankTrans from './BankTrans';
import CarLoan from './CarLoan';
import BankerIssues from './BankerIssues'
import BankerSettings from './BankerAccount';
import Close from './Close';
import LoginAdmin from './LoginAdmin'
import HomeAdmin from './HomeAdmin'
import Announce from './Announce'
import Issues from './Issues'
import BankerClose from './BankerCloseRequests'
import BankerClientInfo from './BankerClientInfo'
import Search from './SearchForClient'
import BankerLogin from './BankerLogin'
import BankerCar from './BankerCar'
import ViewTheft from './ViewCardReports'
import ProtoCredit from './ProtoCredit'
import ProtoBank from './ProtoBank'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/applyforpersonalloan" element={<MultiStepForm />} />
        <Route path="/applyforcredit" element={<Credit />} />
        <Route path="/open" element={<Open />} />
        <Route path="/close" element={<Close />} />
        <Route path="/creditcardtransactions" element={<CreditTrans />} />
        <Route path="/bankaccounttransactions" element={<BankTrans />} />
        <Route path="/applyforreplacement" element={<Replacement />} />
        <Route path="/mycreditcards" element={<NewCreditCard />} />
        <Route path="/acc" element={<Account />} />
        <Route path="/mybills" element={<BillingPage />} />
        <Route path="/myaccounts" element={<NewDesign/>} />
        <Route path="/myloans" element={<NewLoan/>} />
        <Route path="/banker" element={<BankerLogin/>}/>
        <Route path="/bankerHome" element={<BankerHome></BankerHome>} />
        <Route path="/bankerrequests" element={<BankerRequests></BankerRequests>} />
        <Route path="/bankerLoanrequests" element={<BankerLoanRequests></BankerLoanRequests>} />
        <Route path="/bankerCCrequests" element={<BankerCreditRequests></BankerCreditRequests>} />
        <Route path="/bankerOpenrequests" element={<BankerOpenRequests></BankerOpenRequests>} />
        <Route path="/bankerReplacementrequests" element={<BankerReplacementRequests></BankerReplacementRequests>} />
        <Route path="/reports" element={<ReportIssues/>} />
        <Route path="/applyforcar" element={<CarLoan/>} />
        <Route path="/bankerissues" element={<BankerIssues/>} />
        <Route path="/bankeraccount" element={<BankerSettings/>} />
        <Route path="/admin" element={<LoginAdmin />}/>
        <Route path="/adminhome" element={<HomeAdmin />}/>
        <Route path="/announce" element={<Announce />}/>
        <Route path="/issues" element={<Issues />}/>
        <Route path="/bankerclose" element={<BankerClose/>}/>
        <Route path="/bankerclientinfo" element={<BankerClientInfo/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/bankercar" element={<BankerCar/>}/>
        <Route path="/clientcredit" element={<ProtoCredit/>}/>
        <Route path="/clientbank" element={<ProtoBank/>}/>
        <Route path="/viewreports" element={<ViewTheft/>}/>
        







      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


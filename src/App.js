import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ProtectedRoute from "./Components/CommonComponents/ProtectedRoute";
import Navbar from "./Components/CommonComponents/Navbar";
import Login from "./Components/CommonComponents/Login";
import RingGroups from "./Components/Pages/RingGroups/RingGroups";
import RingGroupAdd from "./Components/Pages/RingGroups/RingGroupAdd";
import RingGroupEdit from "./Components/Pages/RingGroups/RingGroupEdit";
import Users from "./Components/Pages/Accounts/Users";
import Extensions from "./Components/Pages/Extensions/Extensions";
import ExtensionsAdd from "./Components/Pages/Extensions/ExtensionsAdd";
import ExtensionsEdit from "./Components/Pages/Extensions/ExtensionsEdit";
import ExtensionsExport from "./Components/Pages/Extensions/ExtensionsExport";
import ExtensionsImport from "./Components/Pages/Extensions/ExtensionsImport";
import ExtensionsSettings from "./Components/Pages/Extensions/ExtensionsSettings";
import ExtensionSettingsEdit from "./Components/Pages/Extensions/ExtensionSettingsEdit";
import ExtensionSummary from "./Components/Pages/Extensions/ExtensionSummary";
import SuperAdminDashboard from "./Components/Pages/Dashboard/SuperAdminDashboard";
import Profile from "./Components/Pages/Profile/Profile";
import Gateway from "./Components/Pages/Gateway/Gateway";
import GatewayAdd from "./Components/Pages/Gateway/GatewayAdd";
import GatewayEdit from "./Components/Pages/Gateway/GatewayEdit";
import Master from "./Components/Pages/Setting/Master";
import Destination from "./Components/Pages/Dialplan/Destination";
import DestinationAdd from "./Components/Pages/Dialplan/DestinationAdd";
import DestinationEdit from "./Components/Pages/Dialplan/DestinationEdit";
import Socket from "./Components/GlobalFunction/Socket";
import SofiaStatus from "./Components/Pages/Sofia/SofiaStatus";
import SipAdd from "./Components/Pages/SIP/SipAdd";
import SofiaSetting from "./Components/Pages/Sofia/SofiaSetting";
import SofiaAddSetting from "./Components/Pages/Sofia/SofiaAddSetting";
import SofiaEditSetting from "./Components/Pages/Sofia/SofiaEditSetting";
import Call from "./Components/Pages/WebRtc/Call";
import OngoingCall from "./Components/Pages/WebRtc/OngoingCall";
import CdrReport from "./Components/Pages/WebRtc/CdrReport";
import InboundRoute from "./Components/Pages/Dialplan/InboundRouteAdd";
import CallSettings from "./Components/CommonComponents/CallSettings";
import ChangePassword from "./Components/CommonComponents/ChangePassword";
import PackageAdd from "./Components/Pages/Setting/PackageAdd";
import Package from "./Components/Pages/Setting/Package";
import PackageEdit from "./Components/Pages/Setting/PackageEdit";
import Feature from "./Components/Pages/Setting/Feature";
import PendingRequest from "./Components/Pages/Admin/PendingDocument";
import UserDetails from "./Components/Pages/Admin/UserDetails";
import PaymentVerification from "./Components/Pages/Admin/PendingPayment";
import ApprovedCustomer from "./Components/Pages/Admin/ApprovedCustomer";
import UserDocumentDetails from "./Components/Pages/Admin/UserDocumentDetails";
import RateChargeAdd from "./Components/Pages/NumberManagement/RateChargeAdd";
import AddVendors from "./Components/Pages/NumberManagement/AddVendors";
import Vendors from "./Components/Pages/NumberManagement/Vendors";
import EditVendor from "./Components/Pages/NumberManagement/EditVendor";
import RateCharge from "./Components/Pages/NumberManagement/RateCharge";
import RateChargeEdit from "./Components/Pages/NumberManagement/RateChargeEdit";
import GetDid from "./Components/Pages/NumberManagement/GetDid";
import { setNavigate } from "./Components/GlobalFunction/Navigation";
import { useEffect } from "react";
import PaymentGatewayAdd from "./Components/Pages/Payment/PaymentGatewayAdd";
import PaymentGateway from "./Components/Pages/Payment/PaymentGateway";
import PaymentGatewayEdit from "./Components/Pages/Payment/PaymentGatewayEdit";
import CallCenterQueue from "./Components/Pages/CallCenter/CallCenterQueue";
import CallCenterQueueAdd from "./Components/Pages/CallCenter/CallCenterQueueAdd";
import CallCenterQueueEdit from "./Components/Pages/CallCenter/CallCenterQueueEdit";
import Roles from "./Components/Pages/Setting/Roles";
import CustomerDetails from "./Components/Pages/Profile/CustomerDetails";
import DocumentUpload from "./Components/Pages/Profile/DocumentUpload";
import { useSelector } from "react-redux";
import ConfigDetails from "./Components/Pages/Admin/ConfigDetails";
import AccountDetails from "./Components/Pages/Accounts/AccountDetails";
import AccountSettings from "./Components/Pages/Accounts/AccountSettings";
import SupportTicketList from "./Components/Pages/Accounts/SupportTicketList";
import DocumentList from "./Components/Pages/Setting/DocumentList";
import UserExtension from "./Components/Pages/Accounts/UserExtension";
import CustomerUser from "./Components/Pages/Accounts/CustomerUser";
import PendingConfig from "./Components/Pages/Admin/PendingConfig";
import Lead from "./Components/Pages/Admin/Lead";
import LeadDetails from "./Components/Pages/Admin/LeadDetails";
import BillingDestinationAdd from "./Components/Pages/Billing/BillingDestinationAdd";
import BillingDestination from "./Components/Pages/Billing/BillingDestination";
import BillingDestinationEdit from "./Components/Pages/Billing/BillingDestinationEdit";
import BillingRates from "./Components/Pages/Billing/BillingRates";
import BillingRateAdd from "./Components/Pages/Billing/BillingRateAdd";
import BillingRateEdit from "./Components/Pages/Billing/BillingRateEdit";
import DestRate from "./Components/Pages/Billing/DestRate";
import DestRateEdit from "./Components/Pages/Billing/DestRateEdit";
import DestRateAdd from "./Components/Pages/Billing/DestRateAdd";
import GlobalCalls from "./Components/GlobalFunction/GlobalCalls";
import RatePlans from "./Components/Pages/Billing/RatePlans";
import RatePlansAdd from "./Components/Pages/Billing/RatePlansAdd";
import RatePlansEdit from "./Components/Pages/Billing/RatePlansEdit";
import RatingProfile from "./Components/Pages/Billing/RatingProfile";
import RatingProfileAdd from "./Components/Pages/Billing/RatingProfileAdd";
import RatingProfileEdit from "./Components/Pages/Billing/RatingProfileEdit";

// Unlock this if want push notification
// import { generateToken, messaging } from "./Components/GlobalFunction/PushNotification";
// import { getToken, onMessage } from "@firebase/messaging";
// import { useSelector } from "react-redux";

const NavigationSetter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);
  return null; // This component doesn't render anything
};

function App() {
  const account = useSelector((state) => state.account)
  Socket();

  // Unlock this if want push notification add account edit here if id is available
  // useEffect(()=>{
  //   const token = generateToken().then((res)=>console.log("This is from response",res))
  //   if(token){
  //     console.log(account,"This is token from app",token);
  //   }

  //   onMessage(messaging,(payload)=>{
  //     console.log(payload);
  //   })
  // },[account])
  return (
    <>
      <Router>
        <GlobalCalls />
        <NavigationSetter />
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/master" element={<Master />} />
            <Route path="/document-list" element={<DocumentList />} />
            <Route path="/change-password" element={<ChangePassword />} />

            {/* Ring Groups Path Start */}
            <Route path="/ring-groups" element={<RingGroups />} />
            <Route path="/ring-groups-add" element={<RingGroupAdd />} />
            <Route path="/ring-groups-edit" element={<RingGroupEdit />} />
            {/* Ring Groups Path End */}

            {/* Accounts Path Start */}
            <Route path="/users" element={<Users />} />
            <Route path="/approved-customer-details" element={<AccountDetails />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/support-ticket-list" element={<SupportTicketList />} />
            <Route path="/user-extension" element={<UserExtension />} />
            <Route path="/customer-user" element={<CustomerUser/>} />
            {/* Accounts Path End */}

            {/* Extensions Path Start */}
            <Route path="/extensions" element={<Extensions />} />
            <Route path="/extensions-add" element={<ExtensionsAdd />} />
            <Route path="/extensions-edit" element={<ExtensionsEdit />} />
            <Route path="/extensions-export" element={<ExtensionsExport />} />
            <Route path="/extensions-import" element={<ExtensionsImport />} />
            <Route path="/extension-summary" element={<ExtensionSummary />} />
            <Route
              path="/extension-settings"
              element={<ExtensionsSettings />}
            />
            <Route
              path="/extension-settings-edit"
              element={<ExtensionSettingsEdit />}
            />
            <Route path="/call-settings" element={<CallSettings />} />
            {/* Extensions Path End */}

            {/* Gateway path start */}
            <Route path="/gateway" element={<Gateway />} />
            <Route path="/gateway-add" element={<GatewayAdd />} />
            <Route path="/gateway-edit" element={<GatewayEdit />} />
            {/* Gateway path end */}

            {/* Dialplan path start */}
            <Route path="/destination" element={<Destination />} />
            <Route path="/inbound-route" element={<InboundRoute />} />
            <Route path="/destination-add" element={<DestinationAdd />} />
            <Route path="/destination-edit" element={<DestinationEdit />} />
            {/* Dialplan path end */}

            {/* Sip path start */}
            <Route path="/sip-add" element={<SipAdd />} />
            {/* Sip path End */}

            {/* Sofia path start */}
            <Route path="/sofia-setting" element={<SofiaSetting />} />
            <Route path="/sofia-status" element={<SofiaStatus />} />
            <Route path="/sofia-add-setting" element={<SofiaAddSetting />} />
            <Route path="/sofia-edit-setting" element={<SofiaEditSetting />} />
            {/* Sofia path end */}

            {/* WebRtc path start */}
            <Route path="/call" element={<Call />} />
            <Route path="/ongoing-call" element={<OngoingCall />} />
            <Route path="/cdr-report" element={<CdrReport />} />
            {/* WebRtc path end */}

            {/* Admin Packages path start */}
            <Route path="/document-verification" element={<PendingRequest />} />
            <Route path="/pending-config" element={<PendingConfig />} />
            <Route
              path="/payment-verification"
              element={<PaymentVerification />}
            />
            <Route path="/document-details" element={<UserDocumentDetails />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/approved-customer" element={<ApprovedCustomer />} />
            <Route path="/config-details" element={<ConfigDetails />} />
            <Route path="/lead" element={<Lead />} />
            <Route path="/lead-details" element={<LeadDetails />} />
            {/* Admin Packages path end */}

            {/* Number Management Path Start */}
            <Route path="/did-add-rate" element={<RateChargeAdd />} />
            <Route path="/add-vendor" element={<AddVendors />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/edit-vendor" element={<EditVendor />} />
            <Route path="/rate-card" element={<RateCharge />} />
            <Route path="/edit-rate-charge" element={<RateChargeEdit />} />
            <Route path="/get-did" element={<GetDid />} />
            {/* Number Management Path End */}

            {/* Payment path start */}
            <Route
              path="/add-payment-gateway"
              element={<PaymentGatewayAdd />}
            />
            <Route path="/payment-gateway" element={<PaymentGateway />} />
            <Route
              path="/payment-gateway-edit"
              element={<PaymentGatewayEdit />}
            />
            {/* Payment path end */}

            {/* Call Center queue path start */}
            <Route path="/cal-center-queue" element={<CallCenterQueue />} />
            <Route
              path="/cal-center-queue-edit"
              element={<CallCenterQueueEdit />}
            />
            <Route
              path="/cal-center-queue-add"
              element={<CallCenterQueueAdd />}
            />
            {/* Call Center queue path End */}

            {/* Setting path start */}
            <Route path="/admin/package" element={<Package />} />
            <Route path="/admin/package-add" element={<PackageAdd />} />
            <Route path="/admin/package-edit" element={<PackageEdit />} />
            <Route path="/admin/feature" element={<Feature />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/customer-details" element={<CustomerDetails />} />
            <Route path="/upload-document" element={<DocumentUpload />} />
            {/* Setting path end */}

            {/* Billing path start */}
            <Route path="/billing-destination-add" element={<BillingDestinationAdd />} />
            <Route path="/billing-destination" element={<BillingDestination />} />
            <Route path="/billing-destination-edit" element={<BillingDestinationEdit />} />
            <Route path="/billing-rates" element={<BillingRates />} />
            <Route path="/billing-rate-add" element={<BillingRateAdd />} />
            <Route path="/billing-rate-edit" element={<BillingRateEdit />} />
            <Route path="/billing-destination-rate" element={<DestRate />} />
            <Route path="/billing-destination-rate-edit" element={<DestRateEdit />} />
            <Route path="/billing-destination-rate-add" element={<DestRateAdd />} />
            <Route path="/billing-rate-plan" element={<RatePlans />} />
            <Route path="/billing-rate-plan-add" element={<RatePlansAdd />} />
            <Route path="/billing-rate-plan-edit" element={<RatePlansEdit />} />
            <Route path="/biling-rate-profile" element={<RatingProfile />} />
            <Route path="/biling-rate-profile-add" element={<RatingProfileAdd />} />
            <Route path="/biling-rate-profile-edit" element={<RatingProfileEdit />} />

            {/* Billing path end */}
          </Route>
          {/* 404 Redirection */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
          {/* 404 Redirection */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

// reducer.js
var account = JSON.parse(localStorage.getItem("account"));
var registerUser = [];
var loginUser = [];
var callState = [];
var channelHangupComplete = [];
var allCall = [];
var billingDest= [];
var billingRates= [];
var billingRatesRefresh = 0
var billingDestRefresh = 0

const initialState = {
  account,
  registerUser,
  loginUser,
  callState,
  channelHangupComplete,
  allCall,
  billingDest,
  billingDestRefresh,
  billingRates,
  billingRatesRefresh,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return { ...state, account: action.account };
    case "SET_REGISTERUSER":
      return { ...state, registerUser: action.registerUser };
    case "SET_LOGINUSER":
      return { ...state, loginUser: action.loginUser };
    case "SET_CALLSTATE":
      return { ...state, callState: action.callState };
    case "SET_CHANNELHANGUP":
      return { ...state, channelHangupComplete: action.channelHangupComplete };
    case "SET_ALLCALL":
      return { ...state, allCall: action.allCall };
    case "SET_BILLINGDEST":
      return { ...state, billingDest: action.billingDest };
    case "SET_BILLINGRATES":
      return { ...state, billingRates: action.billingRates };
    case "SET_BILLINGRATESREFRESH":
      return { ...state, billingRatesRefresh: action.billingRatesRefresh };
    case "SET_BILLINGDESTREFRESH":
      return { ...state, billingDestRefresh: action.billingDestRefresh };
    default:
      return state;
  }
};

export default counterReducer;

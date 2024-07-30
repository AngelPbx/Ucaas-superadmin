import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalGetFunction } from "./globalFunction";

function GlobalCalls() {
  const rateRefresh = useSelector((state) => state.billingRatesRefresh);
  const destRefresh = useSelector((state) => state.billingDestRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getDestData() {
      const destData = await generalGetFunction(`/destination/all`);
      if (destData.status) {
        dispatch({
          type: "SET_BILLINGDEST",
          billingDest: destData.data,
        });
      }
    }

    async function getRateData() {
      const rateData = await generalGetFunction(`/rate/all`);
      if (rateData.status) {
        dispatch({
          type: "SET_BILLINGRATES",
          billingRates: rateData.data,
        });
      }
    }
    if (destRefresh > 0) {
      getDestData();
    }

    if (rateRefresh > 0) {
      getRateData();
    }
  }, [destRefresh, rateRefresh, dispatch]);
  return <div></div>;
}

export default GlobalCalls;

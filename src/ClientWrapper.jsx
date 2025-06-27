"use client";
import React, { useEffect, useState } from "react";
import Loading from "./components/Sub_Componets/Loading";

const ClientWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  return loading ? <Loading /> : <>{children}</>;
};

export default ClientWrapper;

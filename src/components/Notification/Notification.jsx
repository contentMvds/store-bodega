import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Notification({ show, message }) {
  useEffect(() => {
    if (show) {
      toast(message);
    }
  }, [show]);

  return (
    <div>
      <ToastContainer
        osition="bottom-right"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function App() {
    return (
      <FloatingWhatsApp
        phoneNumber="123456789"
        email="example@email.com"
        style={{
          backgroundColor: "#00a4f5",
          right: "unset",
          left: "10px",
        }}
      />
    )
  }

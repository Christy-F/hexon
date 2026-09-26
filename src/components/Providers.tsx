"use client";

import React from "react";
import { ConfigProvider, theme } from "antd";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#00ADB3",
          fontFamily: "var(--font-inter)",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

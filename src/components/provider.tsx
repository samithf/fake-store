"use client";

import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";

export const Providers = ({ children }: any) => {
  return (
    <Provider>
      <DevTools />
      {children}
    </Provider>
  );
};

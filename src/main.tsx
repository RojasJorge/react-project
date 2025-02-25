import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider
  // theme={{
  //   token: {
  //     // Seed Token
  //     colorPrimary: "#00b96b",
  //     borderRadius: 2,

  //     // Alias Token
  //     colorBgContainer: "#f6ffed",
  //   },
  // }}
  >
    <App />
  </ConfigProvider>
);

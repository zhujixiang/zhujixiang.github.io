import React, { PureComponent } from "react";
import { Outlet } from "umi";

import { ConfigProvider, Radio, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
console.log(StyleProvider);

class Index extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <StyleProvider hashPriority="high">
        <Radio>Radio</Radio>
        {/* <Outlet /> */}
      </StyleProvider>
    );
    return (
      <>
        <ConfigProvider
          //   theme={{
          //     components: {
          //       Radio: {
          //         colorPrimary: "#000",
          //       },
          //     },
          //   }}
          theme={{
            token: {
              colorPrimary: "lightgreen",
            },
          }}
          //   theme={{
          //     algorithm: theme.defaultAlgorithm,
          //   }}
        >
          <div
            className="bg-lightgray"
            style={{ width: "100%", height: "100%" }}
          >
            <Radio>Radio</Radio>
            <Outlet />
          </div>
        </ConfigProvider>
      </>
    );
  }
}

export default Index;

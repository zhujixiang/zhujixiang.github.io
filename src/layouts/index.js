import React, { PureComponent } from "react";
import { Outlet } from "umi";

import { ConfigProvider, Radio, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
console.log(StyleProvider);

import { Button } from "antd-mobile";

class Index extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <Button color="primary">123123123</Button>;
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

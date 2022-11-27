import { PureComponent } from "react";

import { Button } from "antd";

class Index extends PureComponent {
  render() {
    return (
      <>
        {Array.from({ length: 999 }).map((it, idx) => (
          <Button key={idx} type="primary">
            这就很good，let`s begning！！！
          </Button>
        ))}
      </>
    );
  }
}

export default Index;

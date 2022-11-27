import { PureComponent } from "react";
import { history } from "umi";
import { connect } from "dva";

class Index extends PureComponent {
  componentDidMount() {
    console.log(connect);

    history.replace("HomePage");
  }
  render() {
    console.log(this);
    return <>homepage</>;
  }
}

export default Index;

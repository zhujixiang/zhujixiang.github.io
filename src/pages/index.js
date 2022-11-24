import { PureComponent } from "react";

import { Button } from 'antd'

class Index extends PureComponent {
    render() {
        console.log(this)
        return <>
            homepage
            <Button type="primary">这就很good，let`s begning！！！</Button>
        </>
    }
}

export default Index
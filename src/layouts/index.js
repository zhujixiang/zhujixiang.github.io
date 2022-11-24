import React, { PureComponent } from 'react'
import { Outlet } from 'umi'
console.log(React)

class Index extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return <>
            <Outlet />
        </>
    }
}

export default Index
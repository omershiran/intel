import React from 'react'
import Content from './content'
import Menu from './menu'

const Body=()=>{


    return (<div style={{ display: "flex",
    flexDirection: "row"
    }}>
        <Menu />
<Content  />

    </div>)
}

export default Body
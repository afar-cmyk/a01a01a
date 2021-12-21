import React from 'react'
import { Layout } from 'antd'
import logo from './assets/logo/logo.svg'
import logob from './assets/logo/logo_b.svg'
import './App.css'

const { Content } = Layout

function App() {
  const [cambioLogo, setCambioLogo] = React.useState()
  return (
    <>
      <Layout>
        {/* <Header>header</Header> */}
        <Layout>
          {/* <Sider>left sidebar</Sider> */}
          <Content className="main-content">
            <center>
              <div
                onMouseEnter={() => setCambioLogo(false)}
                onMouseLeave={() => setCambioLogo(true)}
                className="main-logo"
              >
                <img src={cambioLogo ? logob : logo} alt="logo" />
              </div>
            </center>
            <span>
              <strong>¡En desarrollo!</strong>
            </span>
            <br />
            <div className="text-container">
              <h1>Lorem ipsum dolor</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
                amet varius ante. Pellentesque pretium, risus eu dictum pulvinar,
                neque nibh laoreet mi, aliquet <strong>gravida</strong> urna sem quis
                ligula. Nullam quis dui malesuada, facilisis nibh eu, volutpat
                sapien. Nulla tempus ornare purus, vel lobortis mi malesuada maximus.
              </span>
            </div>
          </Content>
        </Layout>
        {/* <Footer>footer</Footer> */}
      </Layout>
    </>
  )
}

export default App

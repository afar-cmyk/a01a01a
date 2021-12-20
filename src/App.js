import React from 'react'
import { Layout } from 'antd'
import logo from './assets/logo/logo.svg'
import './App.css'

const { Content } = Layout

function App() {
  return (
    <>
      <Layout>
        {/* <Header>header</Header> */}
        <Layout>
          {/* <Sider>left sidebar</Sider> */}
          <Content className="main-content">
            <center>
              <div className="main-logo">
                <img src={logo} alt="logo" />
              </div>
              ¡En desarrollo!
            </center>
            <br />
            <div className="texto-principal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
              varius ante. Pellentesque pretium, risus eu dictum pulvinar, neque nibh
              laoreet mi, aliquet gravida urna sem quis ligula. Nullam quis dui
              malesuada, facilisis nibh eu, volutpat sapien. Nulla tempus ornare
              purus, vel lobortis mi malesuada maximus.
            </div>
          </Content>
        </Layout>
        {/* <Footer>footer</Footer> */}
      </Layout>
    </>
  )
}

export default App

import React from 'react'
import { Image, Layout } from 'antd'
import logo from '../../assets/logo/logo.svg'
import '../../App.css'

const { Content } = Layout

function Blog() {
  const [cambioLogo] = React.useState(logo)

  return (
    <>
      <Layout>
        {/* <Header>header</Header> */}
        <Layout>
          {/* <Sider>left sidebar</Sider> */}
          <Content className="main-content">
            <center>
              <div
                // onMouseEnter={() => setCambioLogo(false)}
                // onMouseLeave={() => setCambioLogo(true)}
                className="main-logo"
              >
                <img src={cambioLogo} alt="logo" />
                <span>
                  <strong>Dev Blog</strong>
                </span>
              </div>
            </center>
            <div className="blog-post">
              <div className="text-container">
                <div className="title-container">
                  <span className="date">20/12/2021</span>
                  <h1>First Commit</h1>
                </div>

                <span>
                  <p>
                    Lo mas dificil es dar el primer paso, ya sea abriendo el{' '}
                    <em>IDE</em> para cambiar unas cuantas lineas de codigo, o
                    tomarse unas horas para plantear el diseño del sitio, estas son
                    tareas que consumen tiempo y esfuerzo, aunque es un proceso que
                    va de la mano con la programación del sitio y la necesidad de
                    seguir aprendiendo constantemente; como{' '}
                    <strong>
                      <i>first commit</i>
                    </strong>{' '}
                    quisiera hablar un poco sobre el desarrollo del logo y el
                    concepto, el cual esperamos que sea rediseñado en un futuro
                    cercano:
                  </p>
                </span>
                <br />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '30px'
                  }}
                >
                  <Image
                    width="20vh"
                    alt="lluvia de ideas"
                    src="https://i.imgur.com/4mxworq.jpg"
                    preview={{
                      src: 'https://i.imgur.com/q9Iv6mx.jpg'
                    }}
                  />
                  <Image
                    width="20vh"
                    alt="fuente"
                    src="https://i.imgur.com/A7oXTyT.jpg"
                    preview={{
                      src: 'https://i.imgur.com/tmrzBtR.png'
                    }}
                  />
                </div>
                <br />
                <span>
                  Definiendo las características más importantes de las marca se pudo
                  establecer un estilo y una personalidad, se utilizó esta
                  información para encontrar una fuente acorde a las necesidades de
                  la marca y de ahí se realizaron diferentes conceptos, aunque no muy
                  satisfechos con el resultado se pudo definir una identidad de marca
                  para el sitio, se espera realizar una revisión más adelante, por el
                  momento se trabajará con todo lo establecido en esta primera
                  investigación y esperamos que sea de su agrado.
                </span>
                <br />
                <br />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    width="80vw"
                    alt="lluvia de ideas"
                    src="https://i.imgur.com/MtrKu5y.png"
                  />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
        {/* <Footer>footer</Footer> */}
      </Layout>
    </>
  )
}

export default Blog

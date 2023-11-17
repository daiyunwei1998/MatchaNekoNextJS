'use client'

import React from 'react';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import Image from 'next/image'
import Link from 'next/link';
import './globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter,faYoutube,faTwitch} from '@fortawesome/free-brands-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { Layout, Menu, ConfigProvider,Image as AntdImage,Typography,Space} from 'antd';
import MusicPlayer from './components/musicPlayer'

const { Header, Content, Footer, Sider } = Layout;
const { Title , Text } = Typography;


config.autoAddCss = false; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <StyledComponentsRegistry>
    <html lang="en">
      <head>
        <title>Matcha Neko @typhon</title>
        <link rel="icon" href="/images/site/icon.webp" />

        <meta property="og:title" content="Matcha Neko @ Typhon"/>
        <meta property="og:description" content="The story of me and those friends I've met, the story of us - warriors of light."/>
        <meta property="og:image" content="/images/site/ogCover.webp"/>
        <meta property="og:url" content="www.matchaneko.com"/>
        <meta property="og:type" content="website"/>

      </head>
      <body style={{height:100}}>
      <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FFAEBC',
      },
      components: {
        Menu:{
          "colorPrimary": "#ffaebc",
          itemSelectedBg:"white",
          itemSelectedColor:"#FFAEBC",
          itemHoverBg:'white',
          itemActiveBg:'whtie',
          itemColor:"#8E8E8E"
      },
      
    },
    }}
  >

      <Layout style={{
        backgroundColor:'white',
      }}>
      
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          top:0,
          left:0,
          position:'sticky',
          minHeight: '100vh',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
          zIndex: 1,
          height:100,
          backgroundColor:'white',
        }}

      >
        <div className="demo-logo-vertical" />
        
        <AntdImage width={200} src= "/images/site/avatar.png" 
        alt='Matcha Neko, illustrated by Litan Bellveil @Aegis'/>

        <Title level={3} style={{textAlign:"center",color:"#FFAEBC"}}> Matcha Neko </Title>
        
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['about']}
          items = {[
          { label:  <Link href={`/about`}>About</Link>, key: 'about'},
          { label: <Link href={`/milestones`}>Milestones</Link>, key: 'milestones'},
          { label:  <Link href={`/gposes`}>Gposes</Link>,key: 'gposes'},
          { label: <Link href={`/stories`}>Stories</Link>, key: 'stories'},
          { label: <Link href={`/guides`}>Guides</Link>, key: 'guides'},
          ]}
          style={{itemActiveBg:'#F5F5F5', overflow: "initial",textAlign:'center',fontSize:'1.1rem'}}
        />

     

        <Text type="secondary" style={{marginTop:'50%',marginBottom:'12px',display: "flex",justifyContent: 'center'}}>Elemental/Typhon</Text>
        <Space style={{textAlign:"center",display: "flex",justifyContent: 'center'}}>
          <Link href="https://www.youtube.com/channel/UCzt5utbnOmDZzqKxp_Utg5A" target="_blank">
            <FontAwesomeIcon icon={faYoutube} style={{color: "#ffaebc",}} />
          </Link>
          <Link href="https://www.twitch.tv/matchanekoffxiv" target="_blank">
            <FontAwesomeIcon icon={faTwitch} style={{color: "#ffaebc",}} />
          </Link>
          <Link href="https://twitter.com/MatchaNekoFFXIV" target="_blank">
            <FontAwesomeIcon icon={faTwitter} style={{color: "#ffaebc",}} />
          </Link>
          <Link href="https://www.fflogs.com/character/id/17514901" target="_blank">
            <Image src='/images/site/fflog_pink.png' alt='icon for fflogs' width='20' height='20' />
          </Link>
        </Space>
       
       
       
      </Sider>
      
      

      <Layout>
        <Content style={{ 
        padding: '24px 16px 0',
        overflow: "initial",
        backgroundColor:'white'}}>
          {children}
        </Content>
        <MusicPlayer></MusicPlayer>
        
       <Footer style={{ textAlign: 'center', backgroundColor:'white' }}>Matcha Neko @ Typhon</Footer>
      </Layout>
      
      </Layout>
    </ConfigProvider>

    
        
      
      
      </body>
    </html>
    </StyledComponentsRegistry>
  )
}

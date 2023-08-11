'use client'


import Image from 'next/image'
import Link from 'next/link';
import './globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter,faYoutube,faTwitch} from '@fortawesome/free-brands-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import React from 'react';
import { Layout, Menu, ConfigProvider,Image as AntdImage,Typography,Space} from 'antd';
import { useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;
const { Title , Text } = Typography;


config.autoAddCss = false; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const  router = useRouter();
  const handleMenuClick = ({key}) => {
    
    if (key){
      router.push('/'+key);
    }
  }
  
  
  return (
    <html lang="en">
      <body style={{height:100}}>
      <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FFAEBC',
      },
      components: {
        Menu:{
          "colorPrimary": "#ffaebc",
          itemSelectedBg:"#F5F5F5",
          itemSelectedColor:"#FFAEBC",
      },
      
    },
    }}
  >

      <Layout style={{
        backgroundColor:'white'
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
          height:100
        }}

      >
        <div className="demo-logo-vertical" />
        
        <AntdImage width={200} src= "/images/site/avatar.png" 
        alt='Matcha Neko, illustrated by Litan Bellveil @Aegis'/>

        <Title level={3} style={{textAlign:"center",color:"#FFAEBC"}}> Matcha Neko </Title>
        
        <Menu
          onClick= {handleMenuClick}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['about']}
          items = {[
            {label:'About',key:'about'},
            {label:'Milestones',key:'milestones'},
            {label:'Gposes',key:'gposes'},
            {label:'Stories',key:'stories'},
          ]}
          style={{itemActiveBg:'#F5F5F5', overflow: "initial"}}
        />

     

        <Text type="secondary" style={{marginTop:'50%',marginBottom:'12px',display: "flex",justifyContent: 'center'}}>Elemental/Typhon</Text>
        <Space style={{textAlign:"center",display: "flex",justifyContent: 'center'}}>
          <Link href="https://www.youtube.com/channel/UCzt5utbnOmDZzqKxp_Utg5A">
            <FontAwesomeIcon icon={faYoutube} style={{color: "#ffaebc",}} />
          </Link>
          <Link href="https://www.twitch.tv/matchanekoffxiv">
            <FontAwesomeIcon icon={faTwitch} style={{color: "#ffaebc",}} />
          </Link>
          <Link href="https://twitter.com/MatchaNekoFFXIV">
            <FontAwesomeIcon icon={faTwitter} style={{color: "#ffaebc",}} />
          </Link>
          <Link href="https://www.fflogs.com/character/id/17514901">
            <Image src='/images/site/fflog_pink.png' alt='icon for fflogs' width='20' height='20' />
          </Link>
        </Space>
       
       
       
      </Sider>
      
      

      <Layout>
        <Header style={{ padding: 0, backgroundColor:'#F5F5F5'}} />
        <Content style={{ 
        margin: '24px 16px 0',
        overflow: "initial"}}>
          {children}
        </Content>
        
        <Footer style={{ textAlign: 'center' }}>Matcha Neko @ Typhon</Footer>
      </Layout>
      </Layout>
    </ConfigProvider>

        
        
      
      
      </body>
    </html>
  )
}

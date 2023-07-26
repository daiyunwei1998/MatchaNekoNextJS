'use client'

import './globals.css'

import { Inter } from 'next/font/google'
import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, ConfigProvider,Image,Typography,Space} from 'antd';
import SizeContext from 'antd/es/avatar/SizeContext';

const { Header, Content, Footer, Sider } = Layout;
const { Title , Text } = Typography;

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FFAEBC',
      },
      components: {
        Menu:{
          itemSelectedBg:"#F5F5F5",
          itemSelectedColor:"#FFAEBC",
      },
      
    },
    }}
  >

      <Layout>
      
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{backgroundColor:'white',position:'fixed',minHeight:'100vh'}}
      >
        <div className="demo-logo-vertical" />
        
        <Image width={200} src= "/images/site/avatar.png" 
        alt='Matcha Neko, illustrated by Litan Bellveil @Aegis'/>

        <Title level={3} style={{textAlign:"center",color:"#FFAEBC"}}> Matcha Neko </Title>
        <Text type="secondary" style={{textAlign:"center",marginBottom:'12px',display:'block'}}>Elemental / Typhon</Text>


        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['about']}
          items = {[
            {label:'About',key:'about'},
            {label:'Milestones',key:'milestones'},
            {label:'Gposes',key:'gposes'},
            {label:'Stories',key:'stories'},
          ]}
          style={{backgroundColor:'transparent',itemActiveBg:'#F5F5F5'}}
        />

        <Space>
          
        </Space>


      </Sider>


      <Layout>
        <Header style={{ padding: 0, backgroundColor:'#F5F5F5'}} />
        <Content style={{ margin: '24px 16px 0',minHeight: '100vh'}}>
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

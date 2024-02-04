import React from 'react'
import Header from '../../components/header'
import { Tabs } from 'antd';
//import AdminIntro from './AdminIntro';
//import AdminAbout from './AdminAbout';
const { TabPane } = Tabs;
function Admin() {
  return (
    <>
      <Header />
      <div className='mt-5'>
        
      </div>
    </>
  )
}

export default Admin;
/*
<Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Intro" key="1" >
            <AdminIntro/>
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout/>
          </TabPane>
        </Tabs>
*/
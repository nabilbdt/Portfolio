import React from 'react'
import Header from '../../components/header'
import AdminIntro from './adminIntro';
import AdminAbout from './adminAbout';
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import Experiences from './adminExperiences';
import AdminProjects from './adminProjects';
import AdminCourses from './adminCourses';

const items = [
  {
    key: '1',
    label: 'Intro',
    children: <AdminIntro />
  },
  {
    key: '2',
    label: 'About',
    children: <AdminAbout/>
  },
  {
    key: '3',
    label: 'Projects',
    children: <AdminProjects/>
  },
  {
    key: '4',
    label: 'Experiences',
    children: <Experiences/>
  },
  {
    key: '5',
    label: 'Courses',
    children: <AdminCourses/>
  },
];
function Admin() {
  const {portfolioData} = useSelector((state) => state.root)
  return (
    <div>
      <Header />
      {portfolioData && <div className='mt-5 p-5'>
      <Tabs defaultActiveKey="1" items={items} />
      </div>
      }
      
    </div>
  )
}
export default Admin;

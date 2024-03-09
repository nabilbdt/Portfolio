import React from 'react'
import Header from '../../components/header'
import AdminIntro from './adminIntro';
import AdminAbout from './adminAbout';
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import Experiences from './adminExperiences';
import AdminProjects from './adminProjects';
import AdminCourses from './adminCourses';
import AdminContact from './adminContact';

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
  {
    key: '6',
    label: 'Contact',
    children: <AdminContact/>
  },
];
function Admin() {
  const {portfolioData} = useSelector((state) => state.root)
  return (
    <div>
      <Header />
      <h1 className='text-2xl text-primary px-5 py-2'>Portfolio Manager</h1>
      {portfolioData && <div className='p-5'>
      <Tabs  defaultActiveKey="1" items={items} />
      </div>
      }
      
    </div>
  )
}
export default Admin;

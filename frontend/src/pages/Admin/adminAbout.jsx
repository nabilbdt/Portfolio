import React from 'react';
import {Form} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {ShowLoading,HideLoading} from '../../redux/rootSlice'
import axios from 'axios';
import {message}  from "antd";
function AdminAbout() {
  const dispatch = useDispatch();
  const {portfolioData} = useSelector((state) => state.root)
  const onFinish = async(values) => {
    try {
      const tempskills = values.skills.split(",");
      values.skills = tempskills;
      dispatch(ShowLoading());
      const response = await axios.post('api/portfolio/update-about',{
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading());
      if (response.data.success){
        message.success(response.data.message);
      }else{
        message.error(response.data.message);
        dispatch(HideLoading());
      }
    } catch (error) {
      message.error(error.message)
    }
  }
  return (
    <div>
      <Form 
        onFinish={onFinish} 
        layout='vertical'
        initialValues={{
          ...portfolioData?.about,
          skills: portfolioData.about.skills.join(' , '),
        }}
      >
        <Form.Item name='lottiURL' label='Lottie URL' >
          <input placeholder='Lottie URL'/>
        </Form.Item>
        <Form.Item name='description1' label='Description 1'>
          <textarea placeholder='Description 1'/>
        </Form.Item>
        <Form.Item name='description2' label='Description 2'>
          <textarea placeholder='Description 2'/>
        </Form.Item>
        <Form.Item name='skills' label='skills'>
          <textarea placeholder='skills'/>
        </Form.Item>
        <div className='flex justify-end'>
          <button className='px-10 py-2 bg-primary text-white'type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout
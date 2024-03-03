import React from 'react';
import {Form} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {ShowLoading,HideLoading} from '../../redux/rootSlice'
import axios from 'axios';
import {message}  from "antd";
function AdminContact() {
  const dispatch = useDispatch();
  const {portfolioData} = useSelector((state) => state.root)
  const onFinish = async(values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('api/portfolio/update-contact',{
        ...values,
        _id: portfolioData.contact._id,
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
        initialValues={portfolioData?.contact}
      >
        <Form.Item name='name' label='Name'>
          <input placeholder='Full Name'/>
        </Form.Item>
        <Form.Item name='age' label='Age'>
          <input placeholder='Age'/>
        </Form.Item>
        <Form.Item name='email' label='Email'>
          <input placeholder='Email'/>
        </Form.Item>
        <Form.Item name='mobile' label='Mobile'>
          <textarea placeholder='Mobile'/>
        </Form.Item>
        <Form.Item name='address' label='Address'>
          <textarea placeholder='Address'/>
        </Form.Item>
        <div className='flex justify-end'>
          <button className='px-10 py-2 bg-primary text-white'type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminContact;
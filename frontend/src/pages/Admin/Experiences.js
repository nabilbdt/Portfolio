import { Form, Modal, message } from 'antd';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function Experiences() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;
    const [showAddEditModal, setshowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setselectedItemForEdit] = React.useState(null);


    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post('api/portfolio/add-experience',
              values
            );
            dispatch(HideLoading());
            if (response.data.success){
              message.success(response.data.message);
              setshowAddEditModal(false);
              dispatch(HideLoading());
              dispatch(ReloadData(true));
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
            <div className='flex justify-end'>
                        <button className='px-5 py-2 bg-primary text-white' onClick={() => {
                            setselectedItemForEdit(null);
                            setshowAddEditModal(true);
                        }}
                        >Add Experience</button>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {experiences.map((experience) => {
                    return (<div className='shadow border p-5 border-gray-400 flex flex-col'>
                        <h1 className='text-primary text-xl font-bold'>{experience.period}</h1><br/>
                        <h1>Company: {experience.company}</h1><br/>
                        <h1>Role: {experience.title}</h1><br/>
                        <h1>{experience.description}</h1><br/>
                        <div className='flex justify-end gap-5 mt-5'>
                            <button className='px-5 py-2 bg-red-500 text-white '>Delete</button>
                            <button className='px-5 py-2 bg-primary text-white '>Edit</button>
                        </div>
                    </div>)
                })}
            </div>
            <Modal 
                visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                footer={null}
                onCancel={() => setshowAddEditModal(false)}
            >
                <Form layout='vertical'onFinish={onFinish}>
                    <Form.Item name='period' label='Period'>
                        <input placeholder='Period' />
                    </Form.Item>
                    <Form.Item name='company' label='Company'>
                        <input placeholder='Company' />
                    </Form.Item>
                    <Form.Item name='title' label='Role'>
                        <input placeholder='Role' />
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <input placeholder='Description' />
                    </Form.Item>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className='px-5 py-2 border-primary text-primary' onClick={() => {
                            setshowAddEditModal(false)
                        }}
                        >Cancel</button>
                        <button className='px-5 py-2 bg-primary text-white '>{selectedItemForEdit ? "Update" : "Add"}</button>
                    </div>
                </Form>

            </Modal>
        </div>
    )
}

export default Experiences
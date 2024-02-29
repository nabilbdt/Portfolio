import { Form, Modal, message } from 'antd';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminProjects() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    const [showAddEditModal, setshowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setselectedItemForEdit] = React.useState(null);
    const [type , setType] = useState('add');

    const onFinish = async (values) => {
        try {
            const temptechnologies = values.technologies.split(",");
            values.technologies = temptechnologies;
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post('api/portfolio/update-project', {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post('api/portfolio/add-project', values);
            }
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setshowAddEditModal(false);
                setselectedItemForEdit(null)
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                dispatch(HideLoading());
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message)
        }
    };
    const onDelete = async (item) =>{
        try {
            dispatch(ShowLoading());
            const response = await axios.delete("api/portfolio/delete-project",{
                data: {_id: item._id}
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else{
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }};



  return (
        <div>
            <div className='flex justify-end'>
                <button className='px-5 py-2 bg-primary text-white' onClick={() => {
                    setselectedItemForEdit(null);
                    setshowAddEditModal(true);
                    setType("add")
                }}
                >Add Project</button>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-5'>
                {projects.map((project) => {
                    return (<div className='shadow border p-5 border-gray-400 flex flex-col'>
                        <h1 className='text-primary text-xl font-bold'>{project.title}</h1><br/>
                        <img src={project.image} alt='' className='h-60 w-80'/>
                        <h1>Technologies: {project.technologies?.join(" , ")} </h1><br/>
                        <h1>Link: {project.link} </h1><br/>
                        <h1>Description: {project.description}</h1><br/>
                        <div className='flex justify-end gap-5 mt-5'>
                            <button className='px-5 py-2 bg-red-500 text-white '
                            onClick={() => {
                                onDelete(project);
                            }}
                            >Delete</button>
                            <button className='px-5 py-2 bg-primary text-white '
                                onClick={() => {
                                    setselectedItemForEdit(project);
                                    setshowAddEditModal(true);
                                    setType('edit')
                                }}
                            >Edit</button>
                        </div>
                    </div>)
                })}
            </div>
            {
                (selectedItemForEdit || type === "add") &&
                <Modal
                visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                footer={null}
                onCancel={() => {
                    setshowAddEditModal(false)
                    setselectedItemForEdit(null);
                }}
            >
                <Form layout='vertical' onFinish={onFinish}
                    initialValues={{
                        ...selectedItemForEdit,
                        technologies : selectedItemForEdit?.technologies.join(" , ")
                    } || {}}
                >
                    <Form.Item name='title' label='Title'>
                        <input placeholder='Title' />
                    </Form.Item>
                    <Form.Item name='image' label='Image URL'>
                        <input placeholder='Image' />
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <textarea placeholder='Description' />
                    </Form.Item>
                    <Form.Item name='technologies' label='Technologies'>
                        <input placeholder='Technologies' />
                    </Form.Item>
                    <Form.Item name='link' label='Link'>
                        <input placeholder='Link' />
                    </Form.Item>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className='px-5 py-2 border-primary text-primary' onClick={() => {
                            setshowAddEditModal(false)
                            setselectedItemForEdit(null);
                        }}
                        >Cancel</button>
                        <button className='px-5 py-2 bg-primary text-white '>{selectedItemForEdit ? "Update" : "Add"}</button>
                    </div>
                </Form>

                </Modal>
            }
            
        </div>
    )
}

export default AdminProjects




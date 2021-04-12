import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input,  Button } from '../../components';
import { Modal } from 'antd';
import { Formik, Form} from 'formik';
import { deletePost, editPost, retrievePost } from '../../redux/action/list';
import { POST } from '../../constants/routes';

import './style.scss';

export default function Post({item}) {

    const dispatch = useDispatch()
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { id, title, body } = item;
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    const handlSubmit = (values) => {
        const value = {
            title: values.title,
            body: values.body,
        };
        const id = {
            id:  values.id,
        }
        dispatch(editPost(id, value));
        handleOk();
    }
    
    return (
        <div>
            <Link to={`${POST}${id}`} >
                <div onClick={() => dispatch(retrievePost(id))}>
                    {id}/ {title}/ {body}
                </div>
            </Link>
            <Button onClick={() => dispatch(deletePost(id))}>detele</Button>
            <Button onClick={showModal}>Up Date</Button>
            <Modal className='modal' title='Basic Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Formik
                    initialValues={{
                        title: '',
                        body: '',
                        id: id,
                    }}
                    onSubmit={handlSubmit}
                    >
                    <Form>
                        <Input name='title' label='Title' /> 
                        <Input name='body' label='Body' />
                        {/* <Button type="submit">Add</Button> */}
                        <button type="submit">Add</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}
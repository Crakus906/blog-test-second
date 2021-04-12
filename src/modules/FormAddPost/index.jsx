import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form} from 'formik';
import { Input,  Button } from '../../components';
import { createPost } from '../../redux/action/list';

import './style.scss';

export default function FormAddPost() {

    const dispatch = useDispatch();

    const handlSubmit = (values) => {
        const value = {
            title: values.title,
            body: values.body,
        };
        dispatch(createPost(value));
    }

    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
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
        </div>
    );
}
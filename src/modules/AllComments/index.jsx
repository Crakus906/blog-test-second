import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Comment, Input } from '../../components';
import { ROOT } from '../../constants/routes';
import { Formik, Form} from 'formik';
import { createComment } from '../../redux/action/list';
import { commentSelector, detailSelector} from '../../redux/selector';

import './style.scss';

export default function AllComments() {

    const dispatch = useDispatch();

    const comments = useSelector(commentSelector);

    const detail = useSelector(detailSelector);
    
    const handlSubmit = (values) => {
        const value = {
            postId: 1,
            body: values.body,
        }
        dispatch(createComment(value));
    }

    return (
        <div>
            <div className='content'>
                {detail.body}
                <Formik
                    initialValues={{
                        body: '',
                    }}
                    onSubmit={handlSubmit}
                    >
                    <Form>
                        <Input name='body' label='Enter comment' />
                        {/* <Button type="submit">Add</Button> */}
                        <button type="submit">Add</button>
                    </Form>
                </Formik>
                <div>
                    {comments && comments.map(comment => (
                        <Comment item={comment} />
                    ))}
                </div>
            </div>
           <Link to={ROOT}><button className='back'>Back</button></Link>
        </div>
    );
}
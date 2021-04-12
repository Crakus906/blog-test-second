import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input,  Button } from '..';
import { Modal } from 'antd';
import { Formik, Form} from 'formik';
import { deletePost, editPost, retrievePost } from '../../redux/action/list';
import { POST } from '../../constants/routes';

import './style.scss';

export default function Comment({item}) {

    const { body } = item;
    
    console.log(item);
    return (
        <div>
           {body}
        </div>
    );
}
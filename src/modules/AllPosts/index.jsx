import React from 'react';
import { useSelector } from 'react-redux';
import { getPostSelector } from '../../redux/selector';
import { Post } from '../../components';

import './style.scss';

export default function AllPosts() {

    const allPost = useSelector(getPostSelector);

    return (
        <div>
            {
                allPost && allPost.map((item) => (
                    <Post item={item} />
                ))
            }
        </div>
    );
}
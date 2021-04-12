import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper } from '../../components';
import { FormAddPost, AllPosts } from '../../modules';
import { getPosts } from '../../redux/action/list';

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    return (
        <Wrapper>
            <FormAddPost />
            <AllPosts />
        </Wrapper>
    )
}
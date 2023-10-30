

import Head from 'next/head';
import { Fragment } from 'react';

import PostContent from '../../components/postContent';
import { getPostData, getAllPosts } from '../../../lib/posts-util';


async function PostDetailPage({ params }) {
   const postData = await getPostData(params.slug);


  return (
    <Fragment>
      <PostContent post={postData} />
    </Fragment>
  );
}



export default PostDetailPage;
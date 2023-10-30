import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import {Typography} from 'antd';
import style from './markdown-styles.module.css';
import { Fragment } from 'react';
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../fonts/KleeOne-SemiBold-TC.ttf' })

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
     img(image) {
       return (
         <Image
           src={`/images/posts/${post.slug}/${image.src}`}
           alt={image.alt}
           width={600}
           height={300}
         />
       );
     },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div style ={{textAlign:'center'}}>
            <Image
              src={`/images/stories/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto'}} 
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    blockquote(blockquote) {
      return  <Typography><blockquote>{blockquote.children}</blockquote></Typography>;
    },
   
  };

  return (
 <Fragment>
     <h1 style={{color:'#FFAEBC',fontSize:'2em',textAlign:'center'}}>{post.title}</h1>
    <article className={myFont.className}>
      
      <ReactMarkdown 
      className={style.reactMarkDown}
      components={customRenderers}>{post.content}
      </ReactMarkdown>
    </article>

 </Fragment>
  );
}

export default PostContent;
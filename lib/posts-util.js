const fs = require('fs');
const path = require('path');

import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(),'app','stories','content');

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
  }

export function getPostData(slug){
    const filePath = path.join(postDirectory,`${slug}.md`);
    const fileContent =  fs.readFileSync(filePath,'utf-8');
    const {data, content} = matter(fileContent);

    const postData = {
        slug,
        ...data,
        content,
      };

    return postData
}

export function getAllPosts(){
    
    const postFiles = fs.readdirSync(postDirectory);
    
    const allPosts = postFiles.map(postFile => {
        const postSlug = postFile.replace(/\.md$/, '');
        return getPostData(postSlug);
      });

    //sort post accroding to date
    const  sortedPosts  = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return sortedPosts ;
}

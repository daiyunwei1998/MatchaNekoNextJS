---
title: Story of this site
avatar: /images/fficon/MSQ.png
date: 2023-10-28
description: '2023-10-28'
image: /images/stories/story-of-this-site/VSCode.webp
excert: The story behind matchaneko.com
slug: story-of-this-site
---

## The idea
Everytime I signed up for a static, I always have to pull out a Google doc to showcase my past experience. It was then an idea struck me to build a website for my character. It will be a slick resume of sort. Also I wanted a place to store memories, and those gposes I took or received from others. Like I wrote in the index page.

> This site contains my memory of being Matcha the neko. The story of me and those friends I've met.

That was how the website came about. The [previous version](https://magnificent-madeleine-bc99ae.netlify.app/index.html##about) was done by adapting free templates. It was a fruitful attempt but limited in functionalities. I had to spent quite some time figuring out how to implement a timeline using pure html and css. The contents were also hard-coded. For gposes it became a huge issue where I had to add a few lines of html codes for a single image. The html file will become long and messy in the end, rendering painful to maintain.

![The previous version of matchaneko.com](ver1.webp)

## NextJS came to my rescue
I was fortunate to encounter a front-end engineer who showed me latest trend in website development, including the use of nextjs framework. It turned out to be the answer I'm been looking for. NextJS is a front-end library for React framework, which is just a paradigm of writing code. 

In Nextjs, instead of writing html files, developers work with JSX, which is similar to html but essentially javascript code. The use of JSX enables programatically generate codes, especially useful in creating a image gallery for my gposes. With the help of server-side javascript programs run in build time, I no longer need to hard-code every image file path. I only need to put them in a folder and everything will be handled programatically.

I also received tremendous help from ant design, a popular front-end UI component library. It provided aesthetic components I built my website upon. It prevent my from writing css on my own and make a terribly looking website in the end. It's one of the benefit using a framework like nextjs, where some problems were already solved by others, and you don't have to re-do all their work again.

## Generative AI
I have doubted whether a Large Language Model will actually aid a real-life project. There was news about how it can make a simple program or website with prompt, but most projects are more complicated than that. However, ChatGPT (GPT 3.5) changed my mind.

When working on this project, I was only starting to learn javascript. It was a lot harder to get used to as a Python programmer. ChatGPT saved me a lot of time like a experienced programmer helping a novice.
The code used to read all files from one folder recursively and label it according to given rules were written by no other than chatGPT itself. This problem involves an understanding of useful function ('fs') and javascript object minipulation, which I'm not familiar with. What surprised me is the generative AI's ability to implement this with the context in mind, with little prompt needed. The code it generated can be plugged in my function directly with little or no change necessary.


![Example of chatGPT solving my problem](chatgpt.webp)
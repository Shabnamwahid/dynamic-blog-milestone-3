import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../components/userinterface/card';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string; 
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${isDarkBackground ? 'bg-stone-500 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
        width={1920}
        height={1080}
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>

      <CardContent className="text-center">
        <p className="description">{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/post/${post.id}`}
          className={`w-full px-6 text-white rounded hover:bg-slate-500 ${isDarkBackground ? 'bg-black' : 'bg-stone-500'}`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}


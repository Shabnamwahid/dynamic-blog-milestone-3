import React from 'react';
import BlogCard from '../components/BlogCard';

const Mega = () => {
  const Posts = [
    {
      id: "1",
      title: "The Secret to a Healthy Mind: Simple Daily Habits",
      description: "By incorporating small yet effective habits into your daily routine, you can unlock the secret to a healthy mind and a fulfilled life.",
      date: "2025/01/03",
      imageUrl: "/images/walk.jpg",
    },
    {
      id: "2",
      title: "10 Superfoods for a Vibrant Lifestyle",
      description: "These 10 superfoods will help fuel your energy and keep you vibrant and healthy throughout the day.",
      date: "2025/01/03",
      imageUrl: "/images/food.jpg",
    },
    {
      id: "3",
      title: "How to Stay Fit with Just 10 Minutes a Day",
      description: "All it takes is just 10 minutes a day to stay fit and active. Learn the quick exercises that can transform your life.",
      date: "2025/01/03",
      imageUrl: "/images/tea.jpg",
    },
    {
      id: "4",
      title: "Healthy Snacking: A Guide for Busy Days",
      description: "For those busy days, keep healthy snacks handy. Learn easy ideas to stay energized while eating nutritious treats.",
      date: "2025/01/03",
      imageUrl: "/images/water.jpg",
    },
    {
      id: "5",
      title: "Top 5 Home Remedies for Better Sleep",
      description: "Try these simple home remedies to enhance your sleep and wake up feeling refreshed every morning.",
      date: "2025/01/03",
      imageUrl: "/images/bed.jpg",
    },
    {
      id: "6",
      title: "Yoga: Your Path to a Stress-Free Life",
      description: "Yoga offers a journey towards relaxation and stress relief. Discover the calming benefits that yoga brings into your daily routine.",
      date: "2025/01/03",
      imageUrl: "/images/yoga.jpg",
    },
  ];

  return (
    <div className="my-6">
      <h1 className="text-3xl font-bold text-center my-6 text-stone-500 animate-color-change">
        Health and Wellness
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;

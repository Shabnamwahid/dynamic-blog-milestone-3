"use client";

import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";
import Image from "next/image";

const Posts = [
  {
    id: "1",
    title: "The Secret to a Healthy Mind: Simple Daily Habits",
    description:
      "By incorporating small yet effective habits into your daily routine, you can unlock the secret to a healthy mind and a fulfilled life.In our fast-paced world, maintaining a healthy mind has become just as crucial as caring for our physical health. The journey to mental well-being doesn’t require monumental changes—small, consistent daily habits can make all the difference. Let’s explore some effective habits that can lead to a healthier and more fulfilled life.Physical activity isn’t just about staying fit—it’s a mood booster! Exercise releases endorphins, the body’s natural feel-good chemicals.Sleep deficits can lead to irritability, stress, and reduced cognitive performance.Sleep is the cornerstone of mental health. During sleep, your brain processes emotions, consolidates memories, and rejuvenates itself.A healthy mind starts with small, consistent actions integrated into your daily routine. Begin your day with mindfulness or meditation to set a positive tone and reduce stress. Incorporate regular physical activity, like a 15-minute walk or yoga, to release endorphins and boost mental clarity. Stay hydrated and choose balanced meals to nourish your brain and body. Limit screen time, especially before bed, to improve sleep quality. Cultivate gratitude by reflecting on positive moments each day, fostering a happier mindset. Engage in hobbies or activities that spark joy and creativity. Strengthen social connections by staying in touch with loved ones. Prioritize quality sleep to recharge your brain for the day ahead. By making these small changes, you can create a sustainable path toward mental wellness and fulfillment.",

    image: "/images/walk.jpg",
  },
  {
    id: "2",
    title: "10 Superfoods for a Vibrant Lifestyle",
    description:
      "These 10 superfoods will help fuel your energy and keep you vibrant and healthy throughout the day.Incorporating superfoods into your diet is an excellent way to boost your energy levels, support overall health, and maintain a vibrant lifestyle. Superfoods are nutrient-dense and packed with vitamins, minerals, antioxidants, and other essential compounds. Blueberries, often termed as brain berries, are rich in antioxidants and support cognitive health. Kale and spinach provide a powerhouse of vitamins, including A, C, and K, promoting immunity and bone health. Salmon, loaded with omega-3 fatty acids, supports heart health and cognitive function. Quinoa, a gluten-free grain, offers a complete protein source essential for muscle repair and sustained energy. Chia seeds are tiny but mighty, packed with fiber and omega-3s to support digestion and heart health. Sweet potatoes, with their natural sweetness and beta-carotene content, aid in vision and immunity. Nuts like almonds and walnuts deliver healthy fats that are great for brain and heart health. Turmeric, with its active compound curcumin, helps fight inflammation and boosts the immune system. Greek yogurt, rich in probiotics, promotes gut health and provides an excellent source of calcium. Lastly,",

    image: "/images/food.jpg",
  },
  {
    id: "3",
    title: "How to Stay Fit with Just 10 Minutes a Day",
    description:
      "All it takes is just 10 minutes a day to stay fit and active. Learn the quick exercises that can transform your life.Finding time for fitness in a busy schedule can be challenging, but dedicating just 10 minutes daily can make a significant difference. Short, high-intensity workouts like jumping jacks, squats, or burpees can get your heart rate up and boost cardiovascular health. Bodyweight exercises such as push-ups and planks strengthen muscles without requiring equipment. A quick yoga flow or stretching routine can improve flexibility, balance, and mental clarity. Try brisk walking or jogging in place for a quick cardio session. Incorporating mindful breathing or a short meditation can also enhance overall well-being. For variety, consider rotating activities daily to target different muscle groups. Climbing stairs or doing lunges while brushing your teeth adds movement to your day. Even dancing to your favorite song can burn calories and uplift your mood. With consistency, these small bursts of activity can improve endurance, enhance metabolism, and contribute to weight management. The key is to prioritize these 10 minutes and perform exercises with focus and effort. Over time, this habit will lead to increased energy, better mental health, and a fitter, more confident you—proving that a little effort every day goes a long way.",

    image: "/images/tea.jpg",
  },
  {
    id: "4",
    title: "Healthy Snacking: A Guide for Busy Days",
    description:
      "For those busy days, keep healthy snacks handy. Learn easy ideas to stay energized while eating nutritious treats.For those with packed schedules, snacking can be both a savior and a challenge. Opting for healthy snacks helps maintain energy levels and prevents overeating at main meals. Nuts and seeds, like almonds, walnuts, and sunflower seeds, are nutrient-dense and easy to carry. Greek yogurt paired with fresh fruits offers a balance of protein and natural sugars to sustain you through the day. Whole-grain crackers or rice cakes with a smear of nut butter make for a quick and satisfying bite. Keep pre-cut vegetables like carrots, cucumbers, and bell peppers in your fridge, paired with hummus or guacamole for added flavor. Trail mixes, free from added sugar, are great for munching on the go. Energy bars with minimal processed ingredients can be lifesavers during long workdays. Boiled eggs or cheese sticks provide a high-protein, low-carb option. If you crave sweets, opt for dried fruits like dates or apricots, ensuring they’re unsweetened. Hydration is key too; pair snacks with water or herbal teas to stay refreshed. Preparing snack packs in advance helps avoid unhealthy choices. The goal is balance—combining fiber, protein, and healthy fats to keep cravings at bay and energy steady. Snacking smartly during busy days not only supports physical health but also enhances focus and productivity.",

    image: "/images/water.jpg",
  },
  {
    id: "5",
    title: "Top 5 Home Remedies for Better Sleep",
    description:
      "Try these simple home remedies to enhance your sleep and wake up feeling refreshed every morning.Achieving restful sleep is vital for overall health and well-being, and home remedies can provide natural solutions to enhance your sleep quality. One effective remedy is drinking a warm cup of chamomile tea before bedtime, as it contains apigenin, a compound that promotes relaxation and reduces insomnia. Lavender essential oil is another popular remedy; placing a few drops on your pillow or in a diffuser can create a calming environment. Maintaining a consistent sleep schedule is crucial—go to bed and wake up at the same times daily to regulate your internal clock. A warm bath with Epsom salts before sleep helps relax muscles and reduce stress, preparing your body for rest. Including magnesium-rich foods like almonds, spinach, and bananas in your diet supports muscle relaxation and reduces nighttime disruptions. Avoid caffeine and heavy meals in the evening, as they can interfere with falling asleep. Practice deep breathing exercises or meditation to calm your mind and reduce anxiety before bed. Using blackout curtains or an eye mask can eliminate disruptive light, aiding melatonin production. Reducing screen time at least an hour before bedtime minimizes blue light exposure, which hinders sleep-inducing hormones. Lastly, creating a comfortable sleep environment with a cool room temperature and cozy bedding ensures undisturbed rest. With these simple remedies, you can naturally enhance the quality of your sleep and wake up rejuvenated.",

    image: "/images/bed.jpg",
  },
  {
    id: "6",
    title: "Yoga: Your Path to a Stress-Free Life",
    description:
      "Yoga offers a journey towards relaxation and stress relief. Discover the calming benefits that yoga brings into your daily routine.In today’s fast-paced world, stress is a common challenge, but yoga offers a natural and effective path to a calmer, more balanced life. Combining physical poses, breathing techniques, and mindfulness, yoga helps reduce the body’s stress response. Regular practice of asanas like Child’s Pose and Downward Dog promotes relaxation, releases tension, and improves overall flexibility. Pranayama, or controlled breathing exercises, such as deep diaphragmatic breathing, calms the mind, lowers cortisol levels, and fosters emotional stability. Meditation, a core aspect of yoga, enhances self-awareness and trains the mind to stay present, reducing anxiety and negative thought patterns. Beyond mental benefits, yoga improves physical health by lowering blood pressure, enhancing immune function, and improving cardiovascular health, all of which are affected by stress. A consistent practice fosters resilience, making it easier to navigate life’s challenges. Moreover, group yoga classes or practicing in serene environments create a sense of community and peace. Whether through gentle restorative yoga or more vigorous styles like Vinyasa, each practice aligns the body and mind, cultivating inner peace. Yoga is not just an exercise; it is a holistic approach to a healthier and happier life. With time, dedication, and consistency, yoga can become a transformative tool for lasting stress relief and well-being.",

    image: "/images/yoga.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = Posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-3xl font-bold text-center mt-10 bg-stone-400">
        Post not found
      </h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 justify-center">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-xl font-bold text-stone-500 text-center">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={100}
          className="w- h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-stone-500">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postid={post.id} />
      <AuthoreCard />
    </div>
  );
}

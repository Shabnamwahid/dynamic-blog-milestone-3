import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-center animate-fed-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[5px] hover:text-red-500 text-stone-500 ">
          Mind, Body, Balance: A Wellness Journey Blog
        </h2>

        <p className="text-center m-4 mt-4 text-sm  text-black sm:text-base md-mb-12  lg-mb-16  animate-fed-in-up delay-75">
          Embarking on the path to wellness is more than just a fleeting
          commitment; it is a transformative journey to align the mind, body,
          and spirit. True balance comes from nurturing every aspect of your
          being—fueling your body with nutritious foods, calming your mind with
          mindfulness practices, and embracing daily movements to strengthen
          your physical health. This journey is not about perfection but about
          small, intentional steps that bring harmony to your life. By staying
          present, listening to your needs, and cultivating positivity, you can
          unlock a deeper sense of well-being. Let’s explore how we can make
          this journey a fulfilling part of your everyday life, one mindful
          choice at a time.
        </p>
        {/* <div className=" max-auto max-w-7xl px-5">
      <h1 className="text-3xl font-bold text-center my-8 text-red-800 animate-color-change">Explore our Category</h1>
      <div className="grid grid-col-1  gap-6 sm:grig-col-2 lg-grid-col-3 animate-fed-in-up delay-100">
        {[
             "The Secret to a Healthy Mind",
             "10 Superfoods",
             "Stay Fit with Just 10 Minutes",
             "Healthy Snacking",
             "Home Remedies for Better Sleep",
             "Stress-Free Life",
             ].map((category, index) =>(
<div key={index}
className="relative group p-6 bg-stone-400 rounded-lg shadow-lg hover:bg-red-400 text-black hover:text-white border-stone-600 border-2 hover:border-red-500 transition duration-300 ease-in-out transform hover:scale-105 curser-pointer flex items-center justify-center ">
  <p className="text-center text-lg font-semibold">
{category}
  </p>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 rounded-lg transition duration-300 ease-in-out">

</div>
</div>
             ))}

      </div>
        </div>
      </section>
    </div>
  );
} */}
<div className="max-auto max-w-7xl px-5">
  <h1 className="text-3xl font-bold text-center my-8 text-red-800 animate-color-change">
    Explore our Category
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-100">
    {[
      "The Secret to a Healthy Mind",
      "10 Superfoods",
      "Stay Fit with Just 10 Minutes",
      "Healthy Snacking",
      "Home Remedies for Better Sleep",
      "Stress-Free Life",
    ].map((category, index) => (
      <div
        key={index}
        className="relative group p-4 bg-stone-400 rounded-lg shadow-lg hover:bg-red-400 text-black hover:text-white border-stone-600 border-2 hover:border-red-500 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center"
      >
        <p className="text-center text-lg font-semibold">{category}</p>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 rounded-lg transition duration-300 ease-in-out"></div>
      </div>
    ))}
  </div>
</div>
</section>
    </div>
  );
} 

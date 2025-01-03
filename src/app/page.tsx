import AuthoreCard from "@/components/AuthoreCard";
import Navbar from "@/components/Navbar";
import Mega from "@/components/Mega";
import React from "react";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div>

      
    <Navbar />
<Feature />
    <Mega />
    <AuthoreCard />
    <Footer />
    </div>
  );
}

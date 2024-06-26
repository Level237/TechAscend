import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import { Button } from "@/components/ui/button";
import CardRsv from "@/components/ui/card-rsv";
import Value from "@/components/Value";
import { MoveRight } from "lucide-react";
import Testimonials from '../components/Testimonials';
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StartedBloc from "@/components/StartedBloc";
import store from "@/store/store";
import Modal from "@/components/Modal";


export default function Home() {
  const s=store;
  const isVisible=s.getState().StartedSlice.isVisible;
  return (
    <main className=" flex-col items-center  ">
      
      <Modal/>
      <section className="mx-[3rem] max-sm:mx-0">
      <Hero/>
      
      <CardRsv/>
      <div className="mt-36">
       <div className="flex justify-center">
        <h2 className="text-[#003366] max-sm:text-2xl text-4xl font-bold">
        Our Core Values
        </h2>
      
       </div>
      <Value/>
      </div>
     <div className="mt-5">
      <div className="flex max-sm:flex-col justify-between items-center">
        <div className="max-sm:text-center">
        <h2 className="text-[#003366] max-sm:text-2xl  text-4xl font-bold">
        Our Services
        </h2>
        </div>
      
        <Button className="flex gap-2 max-sm:hidden" variant="ghost">View more<MoveRight/></Button>
      </div>
     <Service/>
     </div>
     <div className="mt-[5rem] mx-12">
     <div className="text-center">
      <h2 className="text-[#003366] max-sm:text-2xl text-4xl font-bold">
        Our Testimonials
        </h2>
       
      </div>
      <Testimonials/>
     </div>
     <div className="mt-12 mr-12 max-sm:mr-0">
     <div className="text-center">
      <h2 className="text-[#003366]  max-sm:text-2xl text-4xl font-bold">
      Latest from Our Blog
        </h2>
       
      </div>
     <Blog/>
     </div>

      </section>
     <section className="w-[100%] bg-gray-200  mt-8  py-16 ">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-[#003366] text-3xl mt-5 font-bold">Let’s Connect!</h2>
        <Contact/>
      </div>
     
     </section>
     
    </main>
  );
}

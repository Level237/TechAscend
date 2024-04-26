import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import { Button } from "@/components/ui/button";
import CardRsv from "@/components/ui/card-rsv";
import Value from "@/components/Value";
import { MoveRight } from "lucide-react";


export default function Home() {
  return (
    <main className=" flex-col items-center ">
      <Header/>
      <section className="mx-[3.2rem]">
      <Hero/>
      <CardRsv/>
      <div className="mt-36">
       <div className="flex justify-center">
        <h2 className="text-[#003366] text-4xl font-bold">
        Our Core Values
        </h2>
      
       </div>
      <Value/>
      </div>
     <div className="mt-5">
      <div className="flex justify-between items-center">
      <h2 className="text-[#003366] text-4xl font-bold">
        Our Services
        </h2>
        <Button className="flex gap-2" variant="ghost">View more<MoveRight/></Button>
      </div>
     <Service/>
     </div>
      </section>
     
    </main>
  );
}

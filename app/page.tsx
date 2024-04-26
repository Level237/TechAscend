import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardRsv from "@/components/ui/card-rsv";
import Value from "@/components/Value";


export default function Home() {
  return (
    <main className=" flex-col items-center ">
      <Header/>
      <section className="mx-[3.2rem]">
      <Hero/>
      <CardRsv/>
      <div className="mt-36">
       <div className="flex justify-center">
        <h2 className="text-[#003366] text-3xl">
        Our Core Values
        </h2>
      
       </div>
      <Value/>
      </div>
     
      </section>
     
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardRsv from "@/components/ui/card-rsv";


export default function Home() {
  return (
    <main className=" flex-col items-center ">
      <Header/>
      <section className="mx-[3.2rem]">
      <Hero/>
      <CardRsv/>
      </section>
     
    </main>
  );
}

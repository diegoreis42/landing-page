import { Hero } from "@/app/components/hero";
import Faq from "./components/accordion";

export default function Home() {
  return (
    <main>
      <Hero
        mainText="Eius et voluptatem et ut."
        subText="At quas ab aspernatur et ut."
        image={{
          path: "/img/team-xl.svg",
          alt: "essa eh a logo principal",
          size: 700,
        }}
        buttonText="Saiba mais"
      />

      <Faq></Faq>
    </main>
  );
}

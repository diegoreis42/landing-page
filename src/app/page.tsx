import { Hero, Carousel } from "@/app/components";
import Faq from "./components/accordion";
import { Forms } from "./components/Forms";

export default function Home() {
  const services = [
    {
      image: {
        path: "/img/sla.jpg",
        alt: "serviço sla",
      },
      mainText: "isso eh um serviço sla",
      subText: "nos bla bla",
    },
    {
      image: {
        path: "/img/sla.jpg",
        alt: "serviço sla",
      },
      mainText: "isso eh um serviço sla",
      subText: "nos sadgvasfd bla",
    },

    {
      image: {
        path: "/img/sla.jpg",
        alt: "serviço sla",
      },
      mainText: "isso eh um serviço sla",
      subText: "nos bla bla",
    },
    {
      image: {
        path: "/img/sla.jpg",
        alt: "serviço sla",
      },
      mainText: "isso eh um serviço sla",
      subText: "nos sadgvasfd bla",
    },
  ];

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

      <Carousel serviceList={services} />

      <Faq />
      <Forms />
    </main>
  );
}

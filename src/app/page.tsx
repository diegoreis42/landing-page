import { Hero } from '@/app/components/hero'

export default function Home() {
  return (
    <main>
      <Hero 
        mainText="Eius et voluptatem et ut."
        subText='At quas ab aspernatur et ut.'
        image={{
          path: '/img/mainlogo-xs.svg',
          alt: 'essa eh a logo principal',
          size: 300
        }}
        buttonText='Saiba mais'
      />
    </main>
  )
}

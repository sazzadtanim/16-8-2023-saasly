import Features from '@/components/index/Features'
import Hero from '@/components/index/Hero'
import WhyUs from '@/components/index/WhyUs'

export default function Home() {
  return (
    <main className='font-dmSans mx-auto text-5xl'>
      <Hero />
      <WhyUs />
      <Features />
      {/* <RR /> */}
      {/* <Article /> */}
      {/* <Footer /> */}
    </main>
  )
}

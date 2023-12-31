import Article from '@/components/index/Article'
import Features from '@/components/index/Features'
import Footer from '@/components/index/Footer'
import Hero from '@/components/index/Hero'
import RR from '@/components/index/RR'
import WhyUs from '@/components/index/WhyUs'

export default function Home() {
  return (
    <main className='font-dmSans text-5xl mx-auto'>
      <Hero />
      <WhyUs />
      <Features />
      <RR />
      <Article />
      <Footer />
    </main>
  )
}

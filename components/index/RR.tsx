import DynamicCard from '../dynamic/DynamicCard'

const RR = () => (
  <div className='bg-background-rr bg-contain bg-center bg-no-repeat'>
    <div className='py-72'>
      <h2 className='mb-16 text-center text-desktopH2 text-white'>
        Integrated with Social Media
      </h2>
      <div className='cardlisting flex flex-col items-center justify-center gap-6 mobile:flex-row'>
        <DynamicCard company='facebook' />
        <DynamicCard company='google' />
        <DynamicCard company='twitter' />
      </div>
    </div>
  </div>
)

export default RR

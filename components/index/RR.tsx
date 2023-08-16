import DynamicCard from '../DynamicCard'

const RR = () => (
  <div className='bg-background-rr bg-contain bg-center bg-no-repeat'>
    <div className='py-72'>
      <h2 className='text-desktopH2 mb-16 text-center text-white'>
        Integrated with Social Media
      </h2>
      <div className='cardlisting mobile:flex-row flex flex-col items-center justify-center gap-6'>
        <DynamicCard company='facebook' />
        <DynamicCard company='google' />
        <DynamicCard company='twitter' />
      </div>
    </div>
  </div>
)

export default RR

import Feature from './Feature'

export default function Features() {
  return (
    <section className='mx-auto mt-40 max-w-[1100px]'>
      <h2 className='mx-auto my-20 text-center text-desktopH2 font-bold text-deepBlue-600'>
        We make it easy to track all <br />
        data analytics
      </h2>
      <div>
        {[1, 2, 3].map((item, index) => (
          <Feature
            key={index}
            className={`flex justify-between ${
              item == 2 && 'flex-row-reverse'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

import Feature from './Feature'

export default function Features() {
  return (
    <div className='mx-auto mt-40 max-w-[1100px]'>
      <h2 className='text-desktopH2 text-deepBlue-600 mx-auto my-20 text-center font-bold'>
        We make it easy to track all <br />
        data analytics
      </h2>
      <section>
        {[1, 2, 3].map(item => (
          <Feature
            key={item}
            className={`flex justify-between ${
              item == 2 && 'flex-row-reverse'
            }`}
          />
        ))}
      </section>
    </div>
  )
}

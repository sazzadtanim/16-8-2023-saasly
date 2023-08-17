import SingleArticle from './SingleArticle'

export default function Article() {
  return (
    <div className='my-20 flex flex-col gap-16'>
      <h2 className='text-center text-desktopH2 font-bold text-deepBlue-800'>
        Our article on grow & tech
      </h2>

      <div className='flex flex-col gap-16'>
        {[1, 2].map((item, index) => (
          <SingleArticle key={index} />
        ))}
      </div>
    </div>
  )
}

import { articles } from '@/data/articles'
import Image from 'next/image'
import DynamicLabel from '../DynamicLabel'
import DynamicButton from '../dynamic/DynamicButton'

export default function SingleArticle() {
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex justify-center gap-6'>
        {articles.map(item => (
          <div
            className='relative flex max-w-[351px] flex-col gap-6'
            key={item.id}
          >
            <div>
              <Image
                src={`/assets/png/article-${item.id}.png`}
                alt={`article ${item.id} image`}
                width={351}
                height={196}
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
              />
            </div>
            <div className='absolute left-4 top-4'>
              <DynamicLabel
                boxcolor={item.labelColor}
                text={item.label}
                textcolor='White'
              />
            </div>
            <div>
              <h4 className='text-desktopH4 flex flex-col gap-3 font-bold text-blue-600 '>
                {item.heading}
              </h4>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <DynamicButton size='medium' state='primary' text='Learn more' />
      </div>
    </div>
  )
}

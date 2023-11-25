import Image from 'next/image'

const Card = () => {
  return (
    <div className='shadow-md flex flex-col md:flex-row bg-blue-50 justify-center items-center rounded-xl w-11/12 md:w-2/4 h-5/6 md:h-3/4'>
      {/* image */}
      <div className='w-full md:w-2/4 md:h-full flex items-start'>
        <Image
          width='500'
          height='500'
          className='block md:hidden xl:hidden w-full rounded-t-xl'
          src='/mobile.jpg'
          alt='mobile'
        />

        <Image
          width='500'
          height='500'
          className='hidden md:block xl:block w-full h-full rounded-s-xl'
          src={'/desktop.jpg'}
          alt='desktop'
        />
      </div>

      <div className='flex flex-col h-3/5 w-5/6 md:w-2/4 md:justify-center md:items-center md:h-full'>
        <div className='flex flex-col w-full md:w-4/5 md:h-full md:py-6 xl:justify-between'>
          <h2 className='text-sm mt-3 text-gray-500 tracking-widest font-montse md:py-6'>
            PERFUME
          </h2>

          <h1 className='text-3xl text-[#1C232B] font-fran'>
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className='font-montse text-sm my-3 text-gray-500 font-[500] md:py-6'>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>

          <div className='my-3 flex justify-between w-2/3'>
            <span className='font-fran text-3xl text-[#3C8067]'>
              $149.99
            </span>

            <span className='font-montse line-through text-sm text-gray-500 sub'>
              $169.99
            </span>
          </div>

          <button className='transition-colors duration-1000 bg-[#3C8067] hover:bg-[#255040] text-white rounded-lg mb-6 py-3 md:py-5 md:my-6'>
            <div className='flex justify-center'>
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg>
              <span className='font-montse text-xs font-[500] ml-2'>
                Add to Cart
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
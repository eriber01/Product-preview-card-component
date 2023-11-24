import Image from 'next/image'

const Card = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded-xl w-11/12 bg-white h-5/6'>
      {/* image */}
      <div className='w-full flex items-start h-2/5'>
        <Image
          width='500'
          height='500'
          className='block md:hidden xl:hidden w-full rounded-t-xl'
          src='/mobile.jpg'
          alt='mobile'
        />

        {/* <Image
          width='160'
          height='160'
          className='hidden md:block xl:block'
          src={'/desktop.jpg'}
          alt='desktop'
        /> */}
      </div>

      <div className='flex flex-col h-3/5 mt-4 w-5/6'>

        <h2 className='text-lg my-4 text-gray-500'>
          Perfume
        </h2>

        <h1 className='text-2xl font-bold'>
          Gabrielle Essence Eau De Parfum
        </h1>

        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.

        $149.99
        $169.99

        Add to Cart
      </div>
    </div>
  )
}

export default Card
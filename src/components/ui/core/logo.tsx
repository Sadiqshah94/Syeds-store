import { AppImages } from '@/constants/AppImages'

const Logo = () => {
  return (
    <div className='px-2 py-1 flex items-center'>
        <img src={AppImages.logo} className="w-12 h-12 contain" />
        <h2 className="text-lg font-semibold">Syed's Store</h2>
    </div>
  )
}

export default Logo

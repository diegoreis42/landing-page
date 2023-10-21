import { IImage } from '@/app/components';
import Image from 'next/image';

interface Props {
    mainText: string;
    subText: string;
    buttonText: string;
    image: IImage;
}

export const Hero = ({mainText, image, subText, buttonText}: Props) => {

    return (
        <div className='flex flex-col pt-3 md:flex-row mx-auto max-w-sm'>
            <div className='flex flex-col items-center md:pr-4'>
                <h1 className='text-2xl font-bold self-start'>{mainText}</h1>
                <h3 className='text-lg text-semibold'>{subText}</h3>
                <button type="button" className=" invisible m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium md:visible rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {buttonText}
                </button>
            </div>

            
            <Image
                src={image.path}
                alt={image.alt}
                width={image.size}
                height={image.size}
                priority
            />
        </div>
    )
}
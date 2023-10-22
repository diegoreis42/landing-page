import { IImage } from '@/app/components/interfaces';
import Image from 'next/image';

interface Props {
    mainText: string;
    subText: string;
    buttonText: string;
    image: IImage;
}

export const Hero = ({ mainText, image, subText, buttonText }: Props) => {

    return (
        <div className="flex flex-col pt-4 items-center lg:flex-row mx-auto md:justify-evenly bg-[url('/img/waves.svg')] bg-no-repeat  h-[55rem]">
            <div className='flex flex-col pt-11 md:pr-4'>
                <h1 className='text-4xl text-stone-900 self-start'>{mainText}</h1>
                <h3 className='text-xl text-stone-500 self-start max-w-md m-2.5'>{subText}</h3>
                <button type="button" className="visible md:invisible m-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 focus:outline-none">
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
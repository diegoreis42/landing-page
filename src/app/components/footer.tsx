import { IImage } from '@/app/components/interfaces';
import { Facebook, Instagram, LinkedIn } from 'iconoir-react'
import Image from 'next/image'


interface Props {
    iconsSize: number;
    links: IconsLinks
    email: string;
    image: IImage;
}

interface IconsLinks {
    instagram: string;
    facebook: string;
    linkedIn: string;
}

export const Footer = ({iconsSize, image, email, links}: Props) => {
    return (
        <footer className='bg-sky-800 flex-col p-4 md:flex-row'>
            
            <div className='flex justify-center'>
                <a href={links.instagram}><Instagram width={iconsSize} height={iconsSize}/></a>            
                <a href={links.facebook}><Facebook width={iconsSize} height={iconsSize}/></a>
                <a href={links.linkedIn}><LinkedIn width={iconsSize} height={iconsSize}/></a>                
            </div>  

            <p>{email}</p>

            <div className='flex justify-center'>
                <Image
                    src={image.path}
                    alt={image.alt}
                    width={image.size}
                    height={image.size}
                />
            </div>
        </footer>
    )
}
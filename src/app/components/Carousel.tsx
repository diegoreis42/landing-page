'use client'

import { IImage } from '@/app/components';
import { useState } from 'react';
import BootstrapCarousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


interface Service {
    mainText: string;
    subText: string;
    image: IImage;
}

interface ServiceGrid {
    services: Service[][];
}


export const Carousel = ({ services }: ServiceGrid) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };



    return (
        <BootstrapCarousel activeIndex={index} onSelect={handleSelect} className="w-screen h-[35rem] lg:h-[40rem] bg-gray-900 pt-15">
          {services.map((list)=>(
          <BootstrapCarousel.Item className='items-center p-12'>
            <div className='flex justify-evenly'>
                {list.map((service) => (
                  <Card className=' md:w-[16rem] lg:w-[20rem]'>
                      <Card.Img variant="top" src={service.image.path} />
                        <Card.Body>
                        <Card.Title>{service.mainText}</Card.Title>
                        <Card.Text>
                            {service.subText}
                        </Card.Text>
                        <Button variant="primary">Contratar</Button>
                        </Card.Body>
                    </Card>
            ))}
            </div>
          </BootstrapCarousel.Item>  
        ))}
        </BootstrapCarousel>
      );
}
'use client'

import { IImage } from '@/app/components/interfaces';
import { useState } from 'react';
import BootstrapCarousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useWindowSize } from "@uidotdev/usehooks";

interface Service {
  mainText: string;
  subText: string;
  image: IImage;
}

interface ServiceList {
  serviceList: Service[];
}

export const Carousel = ({ serviceList }: ServiceList) => {
  let NUMBER_PER_PAGE = 1;
  let size = useWindowSize();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  let services: Service[][] = []

  if (size.width >= 1024) {
    NUMBER_PER_PAGE = 3
  } else if (size.width >= 768) {
    NUMBER_PER_PAGE = 2
  }

  let internalService = []
  serviceList.forEach((service, idx) => {
    internalService.push(service)

    if (internalService.length === NUMBER_PER_PAGE || idx === serviceList.length - 1) {
      services.push(internalService)
      internalService = []
    }
  })


  return (
    <div className='w-screen bg-sky-200 pt-15'>
      <h2 className='text-sky-800 font-bold text-3xl flex justify-center p-5 '>Serviços</h2>

      <BootstrapCarousel activeIndex={index} onSelect={handleSelect} className="">
        {services.map((list: Service[], idx) => (
          <BootstrapCarousel.Item key={idx} className='items-center p-12'>
            <div className='flex justify-evenly'>
              {list.map((service: Service, idx) => (
                <Card key={idx} className='w-[20rem] shadow-lg hover:bg-slate-200'>
                  <Card.Img variant="top" src={service.image.path} />
                  <Card.Body>
                    <Card.Title>{service.mainText}</Card.Title>
                    <Card.Text>
                      {service.subText}
                    </Card.Text>
                    <Button variant="primary" className="visible md:invisible m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 focus:outline-none">
                      Contratar
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
    </div>
  );
}
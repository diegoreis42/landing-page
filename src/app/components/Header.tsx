"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { AlignJustify } from "iconoir-react";
import { IImage, Link } from '@/app/components/interfaces';


interface Props {
  links: Link[];
  image: IImage;
}


const Header = ({ links, image }: Props) => {
  return (
    <header className=" bg-white p-4 container w-full top-0">
      <div className="flex flex-row justify-between w-full items-center px-4">
        <div className="flex w-1/2 sm:w-auto">
          <a href={image.link?.link}>
            <Image
              src={image.path}
              alt={image.alt}
              width={image.size}
              height={image.size}
              priority
            />
          </a>
        </div>

        <div className="flex items-center space-x-4 sm:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center">
              <AlignJustify color="#2c9ce4" height={36} width={36} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 flex flex-col text-white bg-sky-500 p-2 rounded w-48">
                {links.map((link, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        className={`block py-2 ${active && "bg-blue-500"}`}
                        href={link.link}
                      >
                        {link.text}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="hidden sm:flex space-x-4">
          {links.map((link) => (
            <a href={link.link} className="text-sky-500">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

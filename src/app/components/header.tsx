"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { AlignJustify } from "iconoir-react";

export const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="flex flex-row justify-between items-center px-4">
        <div className="flex w-1/2 sm:w-auto">
          <a href="/">
            <Image
              src="/img/bsol.png"
              alt="byron Logo"
              width={200}
              height={200}
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
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`block py-2 ${active && "bg-blue-500"}`}
                      href="/"
                    >
                      Planos
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`block py-2 ${active && "bg-blue-500"}`}
                      href="/"
                    >
                      Carreira
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`block py-2 ${active && "bg-blue-500"}`}
                      href="/"
                    >
                      Entre em contato
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="hidden sm:flex space-x-4">
          <a href="/" className="text-sky-500">
            Planos
          </a>
          <a href="/" className="text-sky-500">
            Carreira
          </a>
          <a href="/" className="text-sky-500">
            Entre em contato
          </a>
        </div>
      </div>
    </header>
  );
};

"use client";

import { Disclosure } from "@headlessui/react";
import { TiPlus, TiTimes } from "react-icons/ti";

const faqData = [
  {
    Pergunta: "O que significa ter o horário flexível?",
    Resposta:
      "Por acreditarmos na autogestão, você tem a liberdade de gerenciar os seus horários de trabalho de acordo com as suas necessidades. A ideia é que você consiga conciliar, da melhor forma, as atividades propostas pelo programa com outros compromissos importantes para você, como consulta médica, atividades físicas, trabalhos acadêmicos, entre outros.",
  },
  {
    Pergunta: "Qual o modelo de trabalho que adotam?",
    Resposta:
      "Por sermos uma empresa de flexibilidade adotamos o modelo híbrido de trabalho.",
  },
];

export default function Faq() {
  return (
    <div className=" pt-3 items-center  md:m-16">
      <h1 className="flex justify-center pb-5 text-sky-800 font-bold  text-xl md:text-3xl">
        Perguntas Frequentes
      </h1>
      {faqData.map((faq, index) => (
        <div key={index} className="my-2">
          <Disclosure>
            {({ open }) => (
              <>
                <hr />
                <Disclosure.Button className="flex w-full justify-between items-center p-2.5 gap-1">
                  <div className="flex justify-end">
                    <span
                      className={`flex flex-wrap ${
                        open ? "text-sky-500" : "text-sky-800"
                      } text-base font-montserrat font-semibold justify-start text-start desktop:text-2xl tablet:text-2xl`}
                    >
                      {faq.Pergunta}
                    </span>
                  </div>
                  <div>
                    {open ? (
                      <TiTimes color="#0ea5e9" size={24} />
                    ) : (
                      <TiPlus color="#0ea5e9" size={24} />
                    )}
                  </div>
                </Disclosure.Button>

                {open && (
                  <Disclosure.Panel
                    static
                    className={`flex text-blue w-full items-center p-2.5 gap-4 text-sm font-normal desktop:text-2xl tablet:text-2xl`}
                  >
                    {faq.Resposta}
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}

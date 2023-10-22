"use client";

export const Forms = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 h-screen px-8 mx-4">
            <div className="max-w-7xl flex flex-col">
                <h1 className="flex justify-center text-sky-800 font-bold  text-xl md:text-3xl">
                    Entre em contato conosco!
                </h1>
                <div className="flex flex-col gap-3 justify-between">
                    <form className="flex flex-col gap-2">
                        <label className="text-sky-800" htmlFor="email">
                            E-mail:
                        </label>
                        <input
                            className="flex items-center justify-center gap-4 py-2 px-6 w- text-xl border-1 border-sky-800 rounded-xl text-blue"
                            id="email"
                            type="email"
                            name="email"
                        />
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 ">
                            <div className="flex flex-col">
                                <label className="text-sky-800" htmlFor="Nome">
                                    Nome:
                                </label>
                                <input
                                    className="flex items-center justify-center gap-4 py-2 px-6 w- text-xl border-1 border-sky-800 rounded-xl text-blue"
                                    id="nome"
                                    type="nome"
                                    name="nome"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sky-800" htmlFor="Sobrenome">
                                    Sobrenome:
                                </label>
                                <input
                                    className="flex items-center justify-center gap-4 py-2 px-6 w- text-xl border-1 border-sky-800 rounded-xl text-blue"
                                    id="sobrenome"
                                    type="sobrenome"
                                    name="sobrenome"
                                />
                            </div>
                        </div>
                        <label className="text-sky-800" htmlFor="Assunto">
                            Assunto:
                        </label>
                        <input
                            className="flex items-center justify-center gap-4 py-2 px-6 w- text-xl border-1 border-sky-800 rounded-xl text-blue"
                            id="assunto"
                            type="assunto"
                            name="assunto"
                        />

                        <label className="text-sky-800" htmlFor="Assunto">
                            Mensagem:
                        </label>
                        <textarea
                            className="flex items-center justify-center gap-4 py-2 px-6 w- text-xl border-1 border-sky-800 rounded-xl text-blue"
                            id="message"
                            name="message"
                        />

                        <div className="flex justify-center">
                            <button
                                className="flex items-center w-full text-white justify-center w-1/2  py-2 text-xl bg-sky-800  rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline "
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
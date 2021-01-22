import getAllProductsPreview from "@/lib/getAllProductsPreview";
import { Transition } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { useState } from "react";
import { useForm } from "react-hook-form";
import getAllPostPreviews from "@/lib/getAllPostPreviews";
const posts = getAllPostPreviews();

// import { PROJECTS_PATH, projectsFilePaths } from "../utils/mdxUtils";

function Hero({ setIsContactOpen }) {
  return (
    <main className="mt-10 mx-auto max-w-screen-xl px-4 pb-4 sm:mt-12 sm:px-6 sm:pb-12 md:mt-16 md:pb-16 lg:mt-20 lg:pb-20 xl:mt-28 xl:pb-28">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          {"Centrate en tu "}
          <br className="xl:hidden" />
          <span className="text-indigo-600">empresa</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Aplicaciones SaaS para aumentar la productividad y ser usados por
          empresas y desarrolladores de cualquier tamaño
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Productos
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
const products = getAllProductsPreview();
function Home({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contacted, setContacted] = useState(false);

  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = async (data) => {
    console.log(data);
    const formSpreeURL = "https://formspree.io/f/xknpbrrq";
    await fetch(formSpreeURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    setContacted(true);
  };
  return (
    <div>
      <Head>
        <title>Kung Fu Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition
        show={isContactOpen}
        appear={isContactOpen}
        enterFrom="ease-out duration-300"
      >
        <div className={`fixed z-10 inset-0 overflow-y-auto `}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition
              show={isContactOpen}
              appear={isContactOpen}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref) => (
                <div ref={ref} className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75" />
                </div>
              )}
            </Transition>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
            &#8203;
            <Transition
              show={isContactOpen}
              appear={isContactOpen}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {(ref) => (
                <div
                  ref={ref}
                  className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      onClick={setIsContactOpen.bind(this, false)}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                      aria-label="Close"
                    >
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  {contacted ? (
                    <>
                      <div>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                          <svg
                            className="h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            Gracias por contactar
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm leading-5 text-gray-500">
                              Te contactaremos en 24 horas, si no, llámanos al
                              +34 648603189.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6">
                        <span className="flex w-full rounded-md shadow-sm">
                          <button
                            onClick={() => {
                              setIsContactOpen(false);
                              setContacted(false);
                            }}
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          >
                            Cerrar
                          </button>
                        </span>
                      </div>
                    </>
                  ) : (
                    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
                      <div className="mt-3 text-left sm:mt-0 sm:text-left">
                        <h3
                          className="text-xl leading-6 font-medium text-gray-900"
                          id="modal-headline"
                        >
                          Contacto
                        </h3>
                        <div className="mt-5 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-5 text-gray-700"
                            >
                              Email
                            </label>
                            <div className="mt-2 relative rounded-md shadow-sm">
                              <input
                                autoFocus={true}
                                name="email"
                                ref={register({
                                  required:
                                    "Necesitamos el email para contactarte",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "El email no es válido"
                                  }
                                })}
                                id="email"
                                className={`form-input block w-full pr-10 ${
                                  errors.email
                                    ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red"
                                    : ""
                                }  sm:text-sm sm:leading-5`}
                                placeholder="you@example.com"
                                aria-invalid="true"
                                aria-describedby="email-error"
                              />
                              {errors.email ? (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-red-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              ) : null}
                            </div>

                            <p
                              className="mt-2 text-sm text-red-600"
                              id="email-error"
                            >
                              {errors.email && errors.email.message}
                            </p>
                          </div>
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="telefono"
                              className="block text-sm font-medium leading-5 text-gray-700"
                            >
                              Teléfono
                            </label>
                            <div className="mt-2 relative rounded-md shadow-sm">
                              <input
                                name="telefono"
                                ref={register({
                                  required:
                                    "Necesitamos el teléfono para contactarte"
                                })}
                                id="telefono"
                                className={`form-input block w-full pr-10 ${
                                  errors.telefono
                                    ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red"
                                    : ""
                                }  sm:text-sm sm:leading-5`}
                                placeholder="965123456"
                              />
                              {errors.telefono ? (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-red-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              ) : null}
                            </div>

                            <p
                              className="mt-2 text-sm text-red-600"
                              id="telefono-error"
                            >
                              {errors.telefono && errors.telefono.message}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6">
                        <span className="flex w-full rounded-md shadow-sm">
                          <button
                            type="submit"
                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          >
                            Enviar
                          </button>
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </Transition>
          </div>
        </div>
      </Transition>
      <div className="relative bg-gray-50">
        <div className="relative bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="w-0 flex-1 flex">
                <Link href="#">
                  <a className="inline-flex">
                    <img
                      className="h-8 w-auto sm:h-12"
                      src="/img/kfsoftware-mobile.svg"
                      alt="Kung Fu Software"
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  {/* Heroicon name: menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link href="/blog" as="/blog">
                  <a className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
                    Blog
                  </a>
                </Link>
                <Link href="/products" as="/products">
                  <a className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
                    Productos
                  </a>
                </Link>
                {/* <Link href="/services" as="/services">
                  <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
                    Servicios
                  </a>
                </Link> */}
              </nav>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="/img/kfsoftware.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                          {/* Heroicon name: x */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <nav className="grid gap-y-8">
                        <Link href="/blog">
                          <a className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                            {/* Heroicon name: chart-bar */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            <div className="text-base leading-6 font-medium text-gray-900">
                              Blog
                            </div>
                          </a>
                        </Link>
                        <Link href="/products">
                          <a className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                            {/* Heroicon name: cursor-click */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>
                            <div className="text-base leading-6 font-medium text-gray-900">
                              Productos
                            </div>
                          </a>
                        </Link>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          {/* Heroicon name: shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Security
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          {/* Heroicon name: view-grid */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Integrations
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          {/* Heroicon name: refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Automations
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        {/* <Hero setIsContactOpen={setIsContactOpen} /> */}
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                Blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
              {posts &&
                posts.map(
                  ({ link, module: { default: Component, meta } }, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover"
                          src={meta.image}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm leading-5 font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                              {meta.type.toUpperCase()}
                            </a>
                          </p>
                          <Link href={link}>
                            <a className="block">
                              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                {meta.title}
                              </h3>
                              <p className="mt-3 text-base leading-6 text-gray-500">
                                <Component />
                              </p>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>

        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                Productos
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
              {products &&
                products.map(
                  ({ link, module: { default: Component, meta } }, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover"
                          src={meta.image}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm leading-5 font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                              {meta.type.toUpperCase()}
                            </a>
                          </p>
                          <Link href={link}>
                            <a className="block">
                              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                {meta.title}
                              </h3>
                              <p className="mt-3 text-base leading-6 text-gray-500">
                                <Component />
                              </p>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // const projects = projectsFilePaths.map((filePath) => {
  //   const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
  //   const { content, data } = matter(source);

  //   return {
  //     content,
  //     data,
  //     filePath,
  //   };
  // });
  return {
    props: {}
  };
}

export default Home;

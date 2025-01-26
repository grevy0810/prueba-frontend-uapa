
import { useState, useEffect} from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollable-container");
  
    const handleScroll = () => {
      if (scrollContainer.scrollTop > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    // Escucha el evento de desplazamiento en el contenedor
    scrollContainer.addEventListener("scroll", handleScroll);
  
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (id) => {
    const newSection = document.getElementById(id);
    const scrollContainer = document.getElementById("scrollable-container"); // Tu contenedor con overflow

  if (newSection && scrollContainer) {
    const sectionTop = newSection.offsetTop - scrollContainer.offsetTop; // Calcula la posición relativa
    scrollContainer.scrollTo({ top: sectionTop, behavior: "smooth" }); // Desplázate suavemente
  }
  };
  return (
    <>
      <nav 
        aria-label="Global" 
        className="mx-auto flex  items-center justify-center lg:px-14 lg:gap-5 "
        style={isScrolled ?
          {backgroundColor: '#252b42'}
          : {}
        }
      >
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className=" desktop-navigation hidden lg:flex lg:gap-x-12">
            <a href="#Home" onClick={(e) => scrollToSection(e, "home")} className="hover:text-blue-400" >Home</a>
            <a href="#features" onClick={(e) => scrollToSection(e, "features")} className="hover:text-blue-400" >features</a>
            <a href="#Pricing" onClick={(e) => scrollToSection(e, "Pricing")} className="hover:text-blue-400">Pricing</a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-blue-400">about</a>
            <a href="#Contact"onClick={(e) => scrollToSection(e, "Contact")} className="hover:text-blue-400">Contact</a>
        </PopoverGroup>
        <div className="flex lg:w-1/3 ">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              alt=""
              src="/public/img/dark.svg"
              className=" w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:gap-4">
            <a href="https://twitter.com/home"><img src="./img/twitter white logo.svg" alt=""/></a>
            <a href="https://www.facebook.com/"><img src="./img/Facebook white logo.svg" alt=""/></a>
            <a href="https://www.linkedin.com/feed/"><img src="./img/linkedinwhitelogo.svg" alt=""/></a>
        </div>
      </nav>
        <header id="home" className="clip-path items-center justify-center lg:p-8">
            <div className='w-full lg:w-2/3'>

                <h1 className='text-4xl lg:text-7xl font-normal lg:font-bold mb-2'>
                    The best products start with Figma
                </h1>
                <p className='text-2xl'>
                Most calendars are designed for teams. Slate is designed for freelancers
                </p>
                <div className="btn">
                    <a className="link-btn" href="#pricing">Try For Free</a>
                </div>
                {/* <div id="features" style="display: hidden; width: 30px; height: 30px; position: relative; top: 27rem;"></div> */}
            </div>
        </header>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Peoduct
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  about
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}

import React from "react";

export const MacbookPro = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-row justify-center w-full min-h-screen">
      <section className="bg-white w-full max-w-[1728px] min-h-screen relative pl-[15px] pt-[15px] pr-4 md:pr-8 lg:pr-[25px] pb-8 md:pb-16 lg:pb-16">
        {/* Mobile Logo - Full width at top, only visible on mobile phones */}
        <div className="block md:hidden mb-8 w-full">
          <img
            className="w-full h-auto object-contain"
            alt="Sugi logo"
            src="/SU_LogoBlack.png"
          />
        </div>

        {/* Header - Main title */}
        <header className=" md:mb-[1rem] w-full max-w-[1620px] [font-family:'Trirong',Helvetica] font-normal text-black text-[45px] md:text-[80px] lg:text-[80px] xl:text-[80px] tracking-[-1.8px] md:tracking-[-3px] lg:tracking-[-4.50px] leading-[30px] md:leading-tight lg:leading-[90px]">
          {/* Mobile version - no forced breaks */}
          <span className="block md:hidden tracking-[-1.8px] leading-[50px]">
            MIREI SUGIMACHI IS A GRAPHIC DESIGNER BASED IN{" "}
            <span className="italic">PARIS</span>.
          </span>
          
          {/* Desktop version - with accurate breaks */}
          <span className="hidden md:block tracking-[-3px] lg:tracking-[-4.05px] leading-tight lg:leading-[75px]">
            MIREI SUGIMACHI IS<br />
            A GRAPHIC DESIGNER<br />
            BASED IN <span className="italic">PARIS</span>.
          </span>
        </header>

        {/* Subtitle */}
        <div className=" md:mb-[1rem] w-full max-w-[1620px] mt-6 md:mt-0 lg:mt-0 [font-family:'Trirong',Helvetica] font-normal text-black text-[20px] md:text-[15px] lg:text-[15px] tracking-[-0.5px] md:tracking-[-0.5px] lg:tracking-[-0.5px] leading-[24px] md:leading-[27px] lg:leading-[35px]">
          (BRUSSELS AND TOKYO IN HER HEART)
        </div>

        {/* Main content paragraph */}
        <article className=" md:mb-[1rem] w-full mt-10 md:mt-0 lg:mt-0 [font-family:'Trirong',Helvetica] font-normal text-black text-[25px] md:text-[31px] lg:text-[31px] xl:text-[31px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2.30px] leading-[30px] md:leading-tight lg:leading-[40px]">
          {/* Mobile version - no forced breaks */}
          <div className="block md:hidden">
            <span className="tracking-[-1px]">MORE OF A </span>
            <span className="italic tracking-[-1px]">
              MULTIDISCIPLINARY DESIGNER
            </span>
            <span className="tracking-[-1px]">
              , SHE BELIEVES THAT GRAPHIC DESIGN SHOULD NOT BE RESTRAINED TO PRINTS AND DIGITAL.
            </span>
            
            <div className="mt-8 md:mb-[1rem]">
              <span className="tracking-[-1px]">
                SIGNS, SPACES, PRODUCTS, FOOD, SERVICES, LANGUAGES, FASHION,... IT&apos;S ALL{" "}
              </span>
              <span className="italic tracking-[-1px]">GRAPHIC PLAYGROUNDS</span>
              <span className="tracking-[-1px]">.</span>
            </div>
          </div>

          {/* Desktop version - with accurate breaks and no width constraints */}
          <div className="hidden md:block">
            <span className="tracking-[-1.5px] lg:tracking-[-1.06px]">MORE OF A </span>
            <span className="italic tracking-[-1.5px] lg:tracking-[-1.06px]">
              MULTIDISCIPLINARY DESIGNER
            </span>
            <span className="tracking-[-1.5px] lg:tracking-[-1.06px]">
              ,<br />
              SHE BELIEVES THAT GRAPHIC DESIGN SHOULD<br />
              NOT BE RESTRAINED TO PRINTS AND DIGITAL.
            </span>
            
            <div className="">
            <div className="md:mt-6 lg:mt-6">
              <span className="tracking-[-1.5px] lg:tracking-[-1.06px]">
                SIGNS, SPACES, PRODUCTS, FOOD, SERVICES, LANGUAGES,<br />
                FASHION,... IT&apos;S ALL{" "}
              </span>
              <span className="italic tracking-[-1.5px] lg:tracking-[-1.06px]">GRAPHIC PLAYGROUNDS</span>
              <span className="tracking-[-1.5px] lg:tracking-[-1.06px]">.</span>
            </div>
          </div>
          </div>
        </article>

        {/* Footer - Contact section */}
        <footer className=" md:mb-[2rem] w-full mt-16 md:mt-[2rem] lg:mt-[6rem]">
          {/* Mobile layout - Contact info positioned at bottom left (phones only) */}
          <div className="block md:hidden">
            <div className="[font-family:'Trirong',Helvetica] text-black text-[20px] tracking-[-0.8px] leading-[28px]">
              <div className=" md:mb-[2rem] font-bold tracking-[-0.8px] mb-3" style={{ fontWeight: 700 }}>
                FEEL FREE TO GET IN TOUCH
              </div>
              <div className="font-normal tracking-[-0.8px] leading-[28px]">
                → MIREI.SUGIMACHI(at)GMAIL.COM<br />
                → <a 
                    href="https://www.instagram.com/sugi.graphics/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    SUGI.GRAPHICS
                  </a>
              </div>
            </div>
          </div>

          {/* Desktop layout - Contact info without logo overlay (tablets and up) */}
          <div className="hidden md:block">
            <div className="w-full max-w-[1620px] [font-family:'Trirong',Helvetica] text-black text-xl md:text-[20px] lg:text-[20px] tracking-[-1px] md:tracking-[-1.50px] lg:tracking-[-1.50px] leading-8 md:leading-8 lg:leading-8">
              <span className="font-bold tracking-[-0.5px] md:tracking-[-0.45px] lg:tracking-[-0.45px] block mb-2" style={{ fontWeight: 700 }}>
                FEEL FREE TO GET IN TOUCH
              </span>
              <span className="font-normal tracking-[-0.5px] md:tracking-[-0.45px] lg:tracking-[-0.45px] leading-8 md:leading-8 lg:leading-8">
                → MIREI.SUGIMACHI(at)GMAIL.COM
                <br />→ <a 
                  href="https://www.instagram.com/sugi.graphics/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  SUGI.GRAPHICS
                </a>
              </span>
            </div>
          </div>
        </footer>

        {/* Desktop Logo - Fixed position in bottom right corner (tablets and up) */}
        <img
          className="hidden md:block fixed bottom-[30px] right-[20px] w-[246px] h-auto object-cover z-10"
          alt="Sugi logo"
          src="/SU_LogoBlack.png"
        />
      </section>
    </main>
  );
};
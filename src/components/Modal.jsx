// import project4 from "../assets/company"
//import shaderString from './assets?raw'

// import img1 from "../assets/tasnim-logo.png";
import { useState } from "react"

const Modal = ({ setModalOn,name }) => {
    const[currentIndex,setCurrentIndex]=useState(0)
    const prevSlide=()=>{
        const isFirstSlide=currentIndex==0
        const newIndex=isFirstSlide?name=="Nigh"?nigh.length-1:slider.length-1:currentIndex-1
        setCurrentIndex(newIndex)
    }
    const nextSlide=()=>{
        const isLastSlide=currentIndex==(name=="Nigh"?nigh.length-1:slider.length-1)
        const newIndex=isLastSlide?0:currentIndex+1
        setCurrentIndex(newIndex)
    }
    const slider=[
        {
            url:new URL('../assets/company/project4/1.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/2.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/3.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/4.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/5.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/6.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/7.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/8.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/9.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/10.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project4/11.png', import.meta.url).href
        },

    ]
    const nigh=[
        {
            url:new URL('../assets/company/project5/1.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/2.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/3.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/4.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/5.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/6.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/7.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/8.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/9.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/10.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/11.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/12.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/13.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/14.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/15.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/16.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/17.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/18.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/19.png', import.meta.url).href
        },
        {
            url:new URL('../assets/company/project5/20.png', import.meta.url).href
        },
    ]
    const handleOKClick = () => {
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setModalOn(false)
    }


    return (

        <div className="   bg-zinc-200 opacity-100 fixed inset-0 z-50 p-20  h-[250hv] ">
            <button style={{color:"black",borderRadius:"100%",marginLeft:"100%",marginBottom:"-60%" }} onClick={()=>{setModalOn(false)}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button> 
          
            <div className="flex h-full justify-center items-center ">

                <div className="flex-col justify-center  bg-white w-full  rounded-xl">

                 
                    <div id="default-carousel" class="relative w-full  group " data-carousel="slide">
    <div   class="relative   rounded-lg md:h-96">
        {
            name=="Nigh"?(
                <div  class=" duration-700 ease-in-out w-full " data-carousel-item>
                <img src={nigh[currentIndex].url} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            ):
            (
                <div  class=" duration-700 ease-in-out w-full " data-carousel-item>
                <img src={slider[currentIndex].url} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            )
        }
        {/* <div  class=" duration-700 ease-in-out w-full " data-carousel-item>
            <img src={slider[currentIndex].url} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div> */}
        {/* <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={img2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div> */}
        {/* <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={img1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div> */}
        {/* <div class="duration-700 ease-in-out" data-carousel-item>
            <img src={img2} class=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div> */}
        {/* <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={img1} class=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div> */}
    </div>
    {/* <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div> */}
    <button onClick={prevSlide} type="button" class="hidden group-hover:block absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button onClick={nextSlide} type="button" class="hidden group-hover:block absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
             
                </div> 
              
            </div>  

        </div>

    );
}

export default Modal
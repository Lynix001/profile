'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image component

export default function Home() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animate-popout');
          entry.target.classList.add('animate-popup');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Store the ref value in a variable to avoid stale closures
    const currentElements = elementsRef.current;

    currentElements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      currentElements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen h-fit flex flex-col items-center justify-start p-36 bg-gradient-to-b from-black to-[#7e00ff]">
      <Image
        onClick={() => navigator.clipboard.writeText("http://localhost:3000/")}
        ref={addToRefs}
        width={300}
        height={100} // Provide a height
        src="/Logo-LynixStore.png"
        alt="Lynix Store Logo"
        className="pb-24 cursor-pointer"
      />
      
      <div ref={addToRefs} className="flex items-center justify-center flex-col gap-8 pb-24">
        <h1 className="LemonMilk-BoldItalic text-white text-3xl">{`{L} LynIx Group`}</h1>
        <h1 className="LemonMilk-Regular text-white text-2xl">{`[+] PREMIUM & CHEAP Products / RE-SELLER / COMMUNITY GROUP`}</h1>
      </div>

      <div ref={addToRefs} className="pb-32">
        <h1 className="hover:scale-[105%] transition LemonMilk-BoldItalic text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-[#7e00ff] text-[50px] drop-shadow-md">{`PREMIUM & CHEAP Products`}</h1>
      </div>

      <div ref={addToRefs} className="hover:scale-[105%] transition min-w-[687.14px] relative px-16 pt-32 pb-16 bg-black/35 rounded-xl flex flex-col justify-center items-center gap-8">
        <h1 className="absolute text-white kanit-bold-italic text-[50px] -top-10 left-10">LYNIX STORE</h1>
        <Image src="/cart.png" width={200} height={200} alt="Shopping Cart" className="hover:scale-[105%] transition absolute -top-24 right-4" />
        
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl flex">
            <a className="text-white kanit-regular pr-1">ร้าน</a>
            <a className="text-white kanit-bold-italic pr-1">LynIx Store</a>
            <a className="text-white kanit-regular pr-1"> บริการขายไอดี</a>
            <a className="text-white kanit-bold-italic"> Driving Empire</a>
          </span>
        </div>

        <div onClick={() => window.location.href = "https://lynixstore.xyz/"} className="hover:scale-[105%] transition cursor-pointer mt-8 bg-purple-600 border border-purple-700 p-6 rounded-full text-white kanit-medium text-2xl">
          <h1 className="text-white purple-900">กดเข้าสู่เว็บไซต์ร้านของเรา</h1>
        </div>
      </div>

      <div ref={addToRefs} className="py-32">
        <h1 className="hover:scale-[105%] transition LemonMilk-BoldItalic text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-[#7e00ff] text-[50px] drop-shadow-md">{`COMMUNITY GROUP`}</h1>
      </div>

      <div ref={addToRefs} className="hover:scale-[105%] transition min-w-[687.14px] max-w-[687.14px] relative pr-16 pl-20 pt-32 pb-16 bg-black/35 rounded-xl flex flex-col justify-center items-center gap-8">
        <h1 className="absolute text-white kanit-bold-italic text-[50px] -top-10 left-10">LYNIX GROUP</h1>
        <Image src="/user.png" width={200} height={200} alt="User Profile" className="hover:scale-[105%] transition absolute -top-20 right-4" />
      </div>
    </div>
  );
}

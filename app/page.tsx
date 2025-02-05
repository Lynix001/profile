'use client'

import { useEffect, useRef } from 'react';

export default function Home() {

  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animate-popout');
          entry.target.classList.add('animate-popup');
        } else {
          // entry.target.classList.remove('animate-popup');
          // entry.target.classList.add('animate-popout');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elementsRef.current.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });



    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach(element => {
          if (element) {
            observer.unobserve(element);
          }
        });
      }
    };
  }, []);

  

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen h-fit flex flex-col items-center justify-start p-36 bg-gradient-to-b from-black to-[#7e00ff]">
      <img onClick={()=>{
         navigator.clipboard.writeText("http://localhost:3000/");
      }} ref={addToRefs} width={300} src="Logo-LynixStore.png" className="pb-24 cursor-pointer"/>
      <div ref={addToRefs} className="flex items-center justify-center flex-col gap-8 pb-24">
        <h1 className="LemonMilk-BoldItalic text-white text-3xl">{`{L} LynIx Group`}</h1>
        <h1 className="LemonMilk-Regular text-white text-2xl">{`[+]  PREMIUM & CHEAP Products / RE-SELLER / COMMUNITY GROUP`}</h1>
      </div>
      <div ref={addToRefs} className="pb-32">
        <h1 className="hover:scale-[105%] transition LemonMilk-BoldItalic text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-[#7e00ff] text-[50px] drop-shadow-md">{`PREMIUM & CHEAP Products`}</h1>
      </div>

      <div ref={addToRefs} className="hover:scale-[105%] transition min-w-[687.14px] relative px-16 pt-32 pb-16 bg-black/35 rounded rounded-xl flex flex-col justify-center items-center gap-8">
        <h1 className="absolute text-white kanit-bold-italic text-[50px] -top-10 left-10">LYNIX STORE</h1>
        <img src="cart.png" width={200} className="hover:scale-[105%] transition absolute -top-24 right-4"/>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl flex">
            <a className="text-white kanit-regular pr-1">ร้าน</a>
            <a className="text-white kanit-bold-italic pr-1">LynIx Store</a>
            <a className="text-white kanit-regular pr-1"> บริการขายไอดี</a>
            <a className="text-white kanit-bold-italic"> Driving Empire</a>
          </span>
          <span className="text-xl flex">
            <a className="text-white kanit-regular">และ ไอดีเกมอื่นๆ ราคาถูก เติม Stock สินค้าทุกสัปดาห์</a>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl flex">
            <h1 className="text-white kanit-bold pr-1">[ 🏆ไอดี Driving Empire อันดับ 1 ]</h1>
          </span>
          <span className="text-xl flex">
            <a className="text-white kanit-regular pr-1">ร้านเราเน้นขายไอดี</a>
            <a className="text-white kanit-bold plr-1">Driving Empire </a>
            <a className="text-white kanit-regular pr-1">โดยเฉพาะ</a>
          </span>
          <span className="text-xl flex">
            <a className="text-white kanit-regular pr-1">มาแล้วมากว่า 2 ปี และมากกว่า 1500+ ไอดี</a>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl flex">
            <h1 className="text-white kanit-bold pr-1">[ 💸ควบคุมราคาและไม่ตัดราคาสินค้า ]</h1>
          </span>
          <span className="text-xl flex">
            <a className="text-white kanit-regular pr-1">ร้านเราจะไม่ตัดหรือกดราคาสินค้า เพื่อป้องกันตลาดพัง</a>
          </span>
          <span className="text-xl flex">
            <a className="text-white kanit-regular pr-1">และควบคุมราคาอย่างดีก่อนขาย</a>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl flex">
            <h1 className="text-white kanit-bold pr-1">[ ✅สินค้าคุณภาพ ]</h1>
          </span>
          <span className="text-xl flex">
            <a className="text-white kanit-regular pr-1">สินค้าทุกชิ้นถูกตรวจสอบและคัดเลือกอย่างดีจากเจ้าของร้านโดยตรง :)</a>
          </span>
        </div>
        <div onClick={()=>{
          window.location.href = " https://lynixstore.xyz/"
        }} className="hover:scale-[105%] transition cursor-pointer mt-8 bg-purple-600 border border-purple-700 p-6 rounded rounded-full text-white kanit-medium text-2xl">
          <h1 className="text-white purple-900">กดเข้าสู่เว็บไซต์ร้านของเรา</h1>
        </div>
       
        
      </div>

      <div ref={addToRefs} className="py-32">
        <h1 className="hover:scale-[105%] transition LemonMilk-BoldItalic text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-[#7e00ff] text-[50px] drop-shadow-md">{`COMMUNITY GROUP`}</h1>
      </div>



      <div ref={addToRefs} className="hover:scale-[105%] transition min-w-[687.14px] max-w-[687.14px] relative pr-16 pl-20 pt-32 pb-16 bg-black/35 rounded rounded-xl flex flex-col justify-center items-center gap-8">
        <h1 className="absolute text-white kanit-bold-italic text-[50px] -top-10 left-10">LYNIX GROUP</h1>
        <img src="user.png" width={200} className="hover:scale-[105%] transition absolute -top-20 right-4"/>
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-xl flex w-full">
            <a className="text-white LemonMilk-MediumItalic pr-1 w-full text-left">[ DISCORD ]</a>
          </span>
        </div>
        <div className="flex items-start justify-center w-full gap-4 pb-8 ">
          <img  className="mt-1" width={70} src="mini-discord.png"/>
          <div className="flex flex-col items-start justify-center w-full">
            <h1 className="kanit-semibold text-white text-2xl">DISCORD หลักของเรา - LynIx Hub</h1>
            <h1 onClick={()=>{
              window.location.href = "https://discord.gg/m9VbpWgTg2"
            }} className="cursor-pointer kanit-regular text-[#b478ff] text-xl">https://discord.gg/m9VbpWgTg2</h1>
          </div>
        </div>
        <div className="flex items-start justify-center w-full gap-4">
          <img  className="mt-1" width={70} src="mini-discord.png"/>
          <div className="flex flex-col items-start justify-center w-full">
            <h1 className="kanit-semibold text-white text-2xl">DISCORD ของร้าน - LynIx Store</h1>
            <h1 onClick={()=>{
              window.location.href = "https://discord.gg/FaX4PVdMux"
            }} className="cursor-pointer kanit-regular text-[#b478ff] text-xl">https://discord.gg/FaX4PVdMux</h1>
          </div>

        </div>



        <div className="flex flex-col items-center justify-center w-full mt-16">
          <span className="text-xl flex w-full">
            <a className="text-white LemonMilk-MediumItalic pr-1 w-full text-left">[ FACEBOOK ]</a>
          </span>
        </div>
        <div className="flex items-start justify-center w-full gap-4 pb-8 ">
          <img  className="mt-1" width={55} src="facebook.png"/>
          <div className="flex flex-col items-start justify-center w-full">
            <h1 className="kanit-semibold text-white text-2xl">เพจ FACEBOOK - LynIx Store</h1>
            <h1 onClick={()=>{
              window.location.href = "https://www.facebook.com/lynixstorenet/"
            }} className="cursor-pointer kanit-regular text-[#b478ff] text-xl">https://www.facebook.com/lynixstorenet/</h1>
          </div>
        </div>
        <div className="flex items-start justify-center w-full gap-4">
          <img  className="mt-1" width={55} src="facebook.png"/>
          <div className="flex flex-col items-start justify-center w-full">
            <h1 className="kanit-semibold text-white text-2xl">กลุ่ม FACEBOOK - ซื้อขายเเลกเปลี่ยน อิสระ</h1>
            <h1 onClick={()=>{
              window.location.href = "https://facebook.com/groups/2510846389212677"
            }} className="cursor-pointer kanit-regular text-[#b478ff] text-xl">facebook.com/groups/2510846389212677</h1>
          </div>


        </div>
       
        
      </div>

      <div ref={addToRefs} className="py-32">
        <h1 className="hover:scale-[105%] transition LemonMilk-BoldItalic text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-[#7e00ff] text-[50px] drop-shadow-md">{`OWNER`}</h1>
      </div>



      <div ref={addToRefs} className="hover:scale-[105%] transition min-w-[687.14px] max-w-[687.14px] relative px-8 pt-20 pb-8 bg-black/35 rounded rounded-xl flex flex-col justify-center items-center gap-8">
        <h1 className="absolute text-white kanit-bold-italic text-[50px] -top-10 left-10">LYNIX OWNER</h1>
        <img src="verify_user.png" width={175} className="hover:scale-[105%] transition absolute -top-[85px] right-4"/>
        <div className="relative flex flex-col items-center justify-center w-full">
          <h1 className="absolute text-white LemonMilk-BoldItalic text-[50px] top-3 left-[150px]">{`{L}`}</h1>
          <img width={350} src="sirlemon.png"/>
        </div>
        <h1 className="text-white kanit-semibold text-2xl">LynIxProSpec</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <a className="text-white kanit-regular text-sm pr-1">🙏 สวัสดีครับ ผม &quot;ม่อน&quot; เป็นเจ้าของ</a>
            <a className="text-white kanit-semibold-italic text-sm">LynIx Group</a>
            <a className="text-white kanit-regular text-sm pl-1">และบริหารจัดการร้าน</a>
            <a className="text-white kanit-semibold-italic text-sm px-1">LynIx Store</a>
            <a className="text-white kanit-regular text-sm">เป็นหลัก</a>
          </div>
          <div className="w-full flex items-center justify-center">
            <a className="text-white kanit-regular text-sm pr-1">เปิดให้บริการมาแล้วมากกว่า 2 ปี (32 เดือน) สินค้าที่ขายไปมากกว่า 3500+ ชิ้น</a>
          </div>
          <div className="w-full flex items-center justify-center">
            <a className="text-white kanit-regular text-sm pr-1">และมียอดขายทั้งหมดประมาณ 450K+ ฿ โดยผมทำหน้าที่บริหารจัดการร้านทั้งหมดคนเดียว</a>
          </div>
          <div className="w-full flex items-center justify-center">
            <a className="text-white kanit-regular text-sm pr-1">พร้อมทั้งยังมีสินค้าและบริการอื่นๆทีผมทำอีก เช่น</a>
            <a className="text-white kanit-semibold-italic text-sm">LynIx Hub , LynIx Ware , LynIx Coin</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <a className="text-white kanit-regular text-sm pr-1">Hello, my name is "Mond" I am the owner of </a>
            <a className="text-white kanit-semibold-italic text-sm">LynIx Group</a>
            <a className="text-white kanit-regular text-sm pl-1">and primarily manage LynIx Store.</a>
          </div>
          <div className="w-full flex items-center justify-center">
            <a className="text-white kanit-regular text-sm pr-1">We have been in business for over 2 years (32 months), selling more than 3,500+ products</a>
          </div>
          <div className="w-full flex items-center justify-center">
            <a className="text-white kanit-regular text-sm pr-1">with total sales of approximately 450K+ THB. I handle all aspects of store management by myself,</a>
          </div>
          <div className="w-full flex items-center justify-center">
            <a className="text-white kanit-regular text-sm pr-1">and I also offer other products and services such as LynIx Hub, LynIx Ware, LynIx Coin.</a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h1 className="left-auto w-full text-right text-white kanit-light-italic text-base">@lynixprospec</h1>
          <h1 className="left-auto w-full text-right text-white kanit-light-italic text-base">Contact : lynixstore.net@gmail.com</h1>
        </div>
        
      </div>
      
    </div>
  );
}

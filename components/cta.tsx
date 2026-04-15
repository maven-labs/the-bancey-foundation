import SectionHeader from "./ui/section-header";

const images = [
  "https://images.pexels.com/photos/18919384/pexels-photo-18919384.jpeg",
  "https://images.pexels.com/photos/19233298/pexels-photo-19233298.jpeg",
  "https://images.pexels.com/photos/12958468/pexels-photo-12958468.jpeg",
  "https://images.pexels.com/photos/36976924/pexels-photo-36976924.jpeg",
  "https://images.pexels.com/photos/19978754/pexels-photo-19978754.jpeg",
  "https://images.pexels.com/photos/30900415/pexels-photo-30900415.jpeg",
  "https://images.pexels.com/photos/34885189/pexels-photo-34885189.jpeg",
  "https://images.pexels.com/photos/36710527/pexels-photo-36710527.jpeg",
  "https://images.pexels.com/photos/34056447/pexels-photo-34056447.jpeg",
  "https://images.pexels.com/photos/36834297/pexels-photo-36834297.jpeg",
  "https://images.pexels.com/photos/36659832/pexels-photo-36659832.jpeg",
  "https://images.pexels.com/photos/36828837/pexels-photo-36828837.jpeg",
  "https://images.pexels.com/photos/31613549/pexels-photo-31613549.jpeg",
  "https://images.pexels.com/photos/36575838/pexels-photo-36575838.jpeg",
  "https://images.pexels.com/photos/35139496/pexels-photo-35139496.jpeg",
  "https://images.pexels.com/photos/36634891/pexels-photo-36634891.jpeg",
  "https://images.pexels.com/photos/36792494/pexels-photo-36792494.jpeg",
  "https://images.pexels.com/photos/36881465/pexels-photo-36881465.jpeg",
  "https://images.pexels.com/photos/27976588/pexels-photo-27976588.jpeg",
  "https://images.pexels.com/photos/33539411/pexels-photo-33539411.png",
  "https://images.pexels.com/photos/36395520/pexels-photo-36395520.jpeg",
  "https://images.pexels.com/photos/35241666/pexels-photo-35241666.jpeg",
  "https://images.pexels.com/photos/31719905/pexels-photo-31719905.jpeg",
  "https://images.pexels.com/photos/17104858/pexels-photo-17104858.jpeg",
];

function CTA() {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <SectionHeader title="Our Work in Action" />
            <p className="text-lg max-w-4xl">
              A glimpse into the communities, programs, and people we support.
            </p>
          </div>
          <div className="h-auto bg-gray-950/5 dark:bg-white/10 mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
              {[0, 1, 2, 3, 4].map((col) => (
                <div
                  key={col}
                  className="first:hidden nth-[3]:hidden nth-[4]:hidden flex flex-col gap-1"
                >
                  {images.slice(col * 3, col * 3 + 3).map((img, i) => (
                    <div key={i} className="overflow-hidden">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* <div className="flex isolate gap-2 overflow-hidden h-full">
              // <div className="@container isolate flex flex-col gap-2 overflow-hidden rounded-2xl bg-white p-2 outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10 h-full flex-row overflow-hidden p-0!">
              <div className="hidden flex-col gap-2 lg:flex">
                <div className="group opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="OpenAI"
                    loading="lazy"
                    width="303"
                    height="257"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[0]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Opal"
                    loading="lazy"
                    width="303"
                    height="426"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    className="w-full h-full object-cover object-center"
                    src={images[1]}
                  />
                </div>
                <div className="group opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Feastables"
                    loading="lazy"
                    width="303"
                    height="417"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    className="w-full h-full object-cover object-center"
                    src={images[2]}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Gumroad"
                    loading="lazy"
                    width="200"
                    height="404"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[3]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Skims"
                    loading="lazy"
                    width="200"
                    height="393"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[4]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Reddit"
                    loading="lazy"
                    width="200"
                    height="303"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[5]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="hidden flex-col gap-2 sm:flex">
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Rivian"
                    loading="lazy"
                    width="500"
                    height="310"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[6]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Shopify"
                    loading="lazy"
                    width="500"
                    height="465"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[7]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Clerk"
                    loading="lazy"
                    width="500"
                    height="325"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[8]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="hidden flex-col gap-2 xl:flex">
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="The Verge"
                    loading="lazy"
                    width="200"
                    height="408"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[9]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Google IO"
                    loading="lazy"
                    width="200"
                    height="419"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[10]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="TED Talks"
                    loading="lazy"
                    width="200"
                    height="273"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[11]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Poolside"
                    loading="lazy"
                    width="293"
                    height="247"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[12]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="Midjourney"
                    loading="lazy"
                    width="293"
                    height="498"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[13]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="group relative opacity-75 transition-opacity hover:opacity-100 aspect-3/2 overflow-hidden">
                  <img
                    alt="NASA/JPL"
                    loading="lazy"
                    width="293"
                    height="354"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={images[14]}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 mt-12">
            {images.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>

    // <section className="">
    //   <div className="container max-w-none sm:py-4 lg:px-6">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1 h-full">
    //       <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
    //         <div className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 grow">
    //           <img
    //             src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //             alt=""
    //             className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
    //           />
    //           <div className="absolute inset-0 bg-linear-to-b from-gray-900/25 to-gray-900/5"></div>
    //         </div>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
    //         <div className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 mb-1">
    //           <img
    //             src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //             alt=""
    //             className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
    //           />
    //           <div className="absolute inset-0 bg-linear-to-b from-gray-900/25 to-gray-900/5"></div>
    //         </div>
    //         <div className="grid gap-1 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
    //           <div className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40">
    //             <img
    //               src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //               alt=""
    //               className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
    //             />
    //             <div className="absolute inset-0 bg-linear-to-b from-gray-900/25 to-gray-900/5"></div>
    //           </div>
    //           <a
    //             href=""
    //             className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40"
    //           >
    //             <img
    //               src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //               alt=""
    //               className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
    //             />
    //             <div className="absolute inset-0 bg-linear-to-b from-gray-900/25 to-gray-900/5"></div>
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
    //         <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 grow">
    //           <img
    //             src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //             alt=""
    //             className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
    //           />
    //           <div className="absolute inset-0 bg-linear-to-b from-gray-900/25 to-gray-900/5"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    //     <div className="p-5 sm:p-8">
    //     <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
    //         <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1475518112798-86ae358241eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1503777119540-ce54b422baff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1502083896352-259ab9e342d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1708791793972-cf97ef3c01c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1516470544373-df3edeb89d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
    //         <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
    //     </div>
    // </div>
  );
}

export default CTA;

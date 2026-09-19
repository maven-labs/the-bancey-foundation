import Link from "next/link";
import SectionHeader from "./ui/section-header";
import Image from "next/image";

function Leadership() {
  return (
    <section id="leadership">
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <SectionHeader title="Our Leadership" />
          </div>
          <div className="">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
              <li className="mt-6 flex-1 h-full">
                <div className="relative flex flex-col">
                  <figure className="relative w-full h-full max-h-90 overflow-hidden aspect-2/3">
                    <Image
                      src="/images/portrait-joyful-good-looking-woman-has-islamic-views-smiles-gently-camera.jpg"
                      alt=""
                      width={768}
                      height={480}
                      className="w-full h-full object-cover object-center"
                    />
                  </figure>
                  <div className="pt-4">
                    <h3 className="text-xl lg:text-2xl font-bold tracking-[0.02em] mb-2">
                      Hamdalatu Bancey Yahaya
                    </h3>
                    <span className="text-sm lg:text-base">Founder</span>
                    <p className="mt-5 text-sm lg:text-base">
                      Hamdalatu Bancey launched her philanthropic work in South
                      Africa in 1979. Since then she has given over $32 billion
                      to fund the Bancey Foundation.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-6 flex-1 h-full">
                <div className="relative flex flex-col">
                  <figure className="relative w-full h-full max-h-90 overflow-hidden aspect-2/3">
                    <Image
                      src="/images/happy-joyful-muslim-businesswoman-posing-outside.jpg"
                      alt=""
                      width={768}
                      height={480}
                      className="w-full h-full object-cover object-center"
                    />
                  </figure>
                  <div className="pt-4">
                    <h3 className="text-xl lg:text-2xl font-bold tracking-[0.02em] mb-2">
                      Hamdalatu Bancey Yahaya
                    </h3>
                    <span className="text-sm lg:text-base">Founder</span>
                    <p className="mt-5 text-sm lg:text-base">
                      Hamdalatu Bancey launched her philanthropic work in South
                      Africa in 1979. Since then she has given over $32 billion
                      to fund the Bancey Foundation.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;

import Link from "next/link";
import SectionHeader from "./ui/section-header";

function Leadership() {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <SectionHeader title="Our Leadership" />
          </div>
          <div className="">
            <ul className="flex flex-col md:flex-row gap-x-8">
              <li className="mt-6 flex-1">
                <Link href="" className="flex flex-col">
                  <figure className="relative w-full overflow-hidden aspect-3/2">
                    <img
                      src="/images/portrait-joyful-good-looking-woman-has-islamic-views-smiles-gently-camera.jpg"
                      alt=""
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
                </Link>
              </li>
              <li className="mt-6 flex-1">
                <Link href="" className="flex flex-col">
                  <figure className="relative w-full overflow-hidden aspect-3/2">
                    <img
                      src="/images/happy-joyful-muslim-businesswoman-posing-outside.jpg"
                      alt=""
                      className="w-full h-full object-cover object-top"
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
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;

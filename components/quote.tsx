function Quote() {
  return (
    <section className="grid">
      <div className="col-span-full row-span-full bg-[url('https://www.aljazeera.com/wp-content/uploads/2020/02/11c14071534440a1bc2146f0cd1a3d69_8.jpeg?fit=1170%2C938&quality=80')] bg-cover bg-fixed bg-center"></div>
      <div className="col-span-full row-span-full bg-black/40"></div>
      <div className="col-span-full row-span-full py-24 md:py-36 lg:py-64">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 text-white text-center">
            <h3 className="font-heading font-semibold text-3xl md:text-4xl xl:text-6xl">
              Overcoming poverty is not a task of charity, it is an act of
              justice.
            </h3>
            <p className="text-sm lg:text-base">- Nelson Mandela - </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;

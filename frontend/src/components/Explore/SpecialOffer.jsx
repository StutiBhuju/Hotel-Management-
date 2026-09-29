import React from 'react'

const SpecialOffer = () => {
  return (


      <section className="relative mb-10 min-h-[190px] overflow-hidden rounded-2xl bg-primary">

        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85"
          alt="Luxury hotel room"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-primary/70" />

        <div className="relative flex min-h-[190px] items-center justify-between gap-8 px-7 py-8 md:px-10">

          <div className="max-w-xl">

            <span className="mb-3 inline-flex items-center rounded-full bg-secondary-light px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#806918]">
              Limited Time
            </span>

            <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
              Special Offers
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-white/80 md:text-base">
              Enjoy up to 30% off selected rooms and suites.
              Make your next stay unforgettable.
            </p>

          </div>


          <button className="hidden shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light md:block">
            Explore Offers
          </button>

        </div>

      </section>
  )
}

export default SpecialOffer
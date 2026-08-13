import React from 'react'

export default function Testimonials() {
 const testimonials = [
  {
    name: "Liam Thompson",
    feedback: "The booking process was quick and straightforward. The car was clean, well-maintained, and ready on time.",
  },
  {
    name: "Jack Wilson",
    feedback: "The pricing was transparent, with no unexpected charges when I returned the vehicle.",
  },
  {
    name: "Lachlan Harris",
    feedback: "I rented a car for a month, and the entire experience was hassle-free. The team was always available when I needed help.",
  },
  {
    name: "Oliver Bennett",
    feedback: "The car was in excellent condition and drove smoothly throughout my trip. I would definitely rent from them again.",
  },
  {
    name: "Noah Campbell",
    feedback: "I needed a vehicle at short notice, and the team arranged one quickly. Great service from start to finish.",
  },
  {
    name: "William Parker",
    feedback: "What I appreciated most was the clear communication. Everything was explained properly before I collected the car.",
  },
  {
    name: "Thomas Mitchell",
    feedback: "The pickup and return process was much faster than I expected. No unnecessary paperwork or long waiting time.",
  },
  {
    name: "James Sullivan",
    feedback: "A reliable and affordable rental option. The vehicle was comfortable and well maintained.",
  },
  {
    name: "Ethan Cooper",
    feedback: "Customer support was very responsive and helped me choose the right car for my requirements and budget.",
  },
  {
    name: "Samuel Wright",
    feedback: "The vehicle looked exactly like the photos and was delivered clean and ready to drive.",
  },
  {
    name: "Benjamin Clarke",
    feedback: "I used the car daily for work, and it remained reliable throughout the rental period.",
  },
  {
    name: "Daniel Anderson",
    feedback: "Extending my rental was simple. The team handled the request quickly without making the process complicated.",
  },
  {
    name: "Matthew Collins",
    feedback: "The car was clean, fuel-efficient, and perfect for getting around the city.",
  },
  {
    name: "Joshua Reynolds",
    feedback: "This was my first time renting a car, but the team made the whole process easy to understand.",
  },
  {
    name: "Ryan Foster",
    feedback: "Very professional service. The car arrived on time, and all the rental terms were communicated clearly.",
  },
  {
    name: "Charlotte Evans",
    feedback: "I compared several rental services, and this one offered the best balance of price, vehicle quality, and support.",
  },
  {
    name: "Sophie Martin",
    feedback: "The car was comfortable and felt safe to drive, even during longer journeys.",
  },
  {
    name: "Emily Robertson",
    feedback: "There were no hidden surprises. The price and conditions matched what I was told during booking.",
  },
  {
    name: "Chloe Walker",
    feedback: "I had a small issue during my rental, and the support team resolved it quickly. Their response gave me confidence in the service.",
  },
  {
    name: "Amelia Taylor",
    feedback: "A smooth experience from booking to return. I would happily recommend this service to anyone looking for a dependable rental car.",
  },
];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto sm:px-6 lg:px-6 px-12 py-24">
      <span className="text-sm font-medium">Customer Testimonials</span>
      <h2 className="mt-4 text-4xl font-bold">
        Hear what our customers say
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="mt-4 text-xl font-semibold text-center">
              {testimonial.name}
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

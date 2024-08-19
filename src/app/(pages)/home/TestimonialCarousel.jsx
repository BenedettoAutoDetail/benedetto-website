// import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// // Sample testimonial data
// const testimonials = [
//   {
//     username: "John Doe",
//     comment: "This service is amazing! It has changed my life for the better.",
//   },
//   {
//     username: "Jane Smith",
//     comment: "The customer support is fantastic. Highly recommend!",
//   },
//   {
//     username: "Alice Johnson",
//     comment: "I love using this platform. It's so easy and intuitive.",
//   },
//   {
//     username: "Bob Brown",
//     comment: "A great experience overall. Will definitely use it again.",
//   },
//   {
//     username: "John Doe",
//     comment: "This service is amazing! It has changed my life for the better.",
//   },
//   {
//     username: "Jane Smith",
//     comment: "The customer support is fantastic. Highly recommend!",
//   },
//   {
//     username: "Alice Johnson",
//     comment: "I love using this platform. It's so easy and intuitive.",
//   },
//   {
//     username: "Bob Brown",
//     comment: "A great experience overall. Will definitely use it again.",
//   },
// ];

// export function TestimonialCarousel() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//         loop: true, // Enable looping to keep the carousel going
//       }}
//       className="w-full p-10" // Adjust width and center the carousel
//     >
//       <CarouselContent>
//         {testimonials.map((testimonial, index) => (
//           <CarouselItem key={index} className="md:basis-1/3">
//             <div className="p-4">
//               <Card>
//                 <CardContent className="flex flex-col items-center justify-center p-6">
//                   <p className="text-lg italic mb-4">{testimonial.comment}</p>
//                   <span className="text-xl font-semibold">
//                     - {testimonial.username}
//                   </span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

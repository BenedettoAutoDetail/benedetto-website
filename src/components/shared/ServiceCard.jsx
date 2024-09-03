import Link from "next/link";
import React from "react";

function ServiceCard({ image = "", title = "", description = "", url = "", IconVideoSrc = "/videos/0lVW4c3VGL0RIs9Ad5.mp4" }) {
  return (
    <div
      data-aos="fade-up"
      className="card bg-red-500 w-full flex flex-col shadow-xl relative"
      key={title}
    >
      <figure className="h-1/2 relative">
        <img src={image} alt="car!" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body text-white flex-grow flex flex-col justify-between relative">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={url} className="btn btn-error text-white">
            Read more
          </Link>
        </div>
      </div>
      {IconVideoSrc && (
        <video
          src={IconVideoSrc}
          autoPlay
          loop
          muted
          className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      )}
    </div>
  );
}

export default ServiceCard;

















// import Link from "next/link";
// import React from "react";

// function ServiceCard({ image = "", title = "", description = "", url = "" }) {
//   return (
//     <div
//       data-aos="fade-up"
//       className="card bg-red-500 w-full flex flex-col shadow-xl"
//       key={title}
//     >
//       <figure className="h-1/2">
//         <img src={image} alt="car!" className="h-full w-full object-cover" />
//       </figure>
//       <div className="card-body text-white flex-grow flex flex-col justify-between">
//         <h2 className="card-title">{title}</h2>
//         <p>{description}</p>
//         <div className="card-actions justify-end">
//           <Link href={url} className="btn btn-error">
//             Read more
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;

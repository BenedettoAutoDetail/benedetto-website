import Link from "next/link";
import React from "react";

function ServiceCard({ image = "", title = "", description = "", url = "" }) {
  return (
    <div className="card bg-red-500 w-full flex flex-col" key={title}>
      <figure className="h-1/2">
        <img src={image} alt="car!" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body text-white flex-grow flex flex-col justify-between">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={url} className="btn btn-error">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

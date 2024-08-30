import Link from "next/link";
import React from "react";

const TermAndConditions = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col border-solid border-r-2 border-gray-400">
        <h4 className="font-semibold">
          <Link href="/terms">Terms and Conditions</Link>
        </h4>
        <h4 className="font-semibold">
          <Link href="/privacy">Privacy Policy</Link>
        </h4>
        <h4 className="font-semibold">
          <Link href="/shipping">Shipping and Delivery</Link>
        </h4>
        <h4 className="font-semibold">
          <Link href="/contact">Contact Us</Link>
        </h4>
        <h4 className="font-semibold">
          <Link href="/security">Security</Link>
        </h4>
      </div>
      <div className="col-span-2">
        <h1>Terms and Conditions</h1>
        <p className="my-[20px] font-semibold">Terms and Conditions</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          natus laboriosam est itaque ipsa cumque exercitationem, facere ab
          maiores eos doloribus ducimus ea autem veritatis voluptas voluptatem
          nihil nam omnis.
        </p>

        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          natus laboriosam est itaque ipsa cumque exercitationem, facere ab
          maiores eos doloribus ducimus ea autem veritatis voluptas voluptatem
          nihil nam omnis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          natus laboriosam est itaque ipsa cumque exercitationem, facere ab
          maiores eos doloribus ducimus ea autem veritatis voluptas voluptatem
          nihil nam omnis.
        </p>
      </div>
    </div>
  );
};

export default TermAndConditions;

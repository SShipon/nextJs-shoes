import Image from 'next/image';
import React from 'react';

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes")
  const shoes = await res.json()
  return (
    <div>
       <h1 className='text-2xl font-semibold text-center'>Hello home Page next js</h1>
     
       <div className='flex justify-between p-8'>
        {
          shoes.slice(0,3).map(shoe => 
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" width={500}  height={200}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>)
        }
       </div>

    </div>
  );
};

export default HomePage;
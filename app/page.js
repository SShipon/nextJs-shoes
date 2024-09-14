
import React from 'react';

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes")
  const shoes = await res.json()
  return (
    <div>
       <h1 className='text-2xl font-semibold text-center'>Hello home Page next js</h1>
     
       <div className='flex justify-between p-5'>
        {
          shoes.slice(0,3).map(shoe => 
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
             <img src="" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <div className="btn bg-primary">Fashion</div>
                <div className="btn bg-accent">Products</div>
              </div>
            </div>
          </div>)
        }
       </div>

    </div>
  );
};

export default HomePage;
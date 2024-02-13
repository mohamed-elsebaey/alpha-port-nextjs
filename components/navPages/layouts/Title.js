import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 mb-14">
      <h3 className="text-sm uppercase text-blueColor tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-bgGrayColor font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title
import * as React from 'react';

export interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  return (
    <div className="lg:w-4/5 md:w-full h-max mx-auto">
      <h1 className="font-bold text-4xl my-10">Product Page</h1>
    </div>
  );
}

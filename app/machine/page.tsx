import * as React from 'react';

export interface IMachineProps {}

export default function Machine(props: IMachineProps) {
  return (
    <div className="lg:w-4/5 md:w-full  h-max  mx-auto">
      <h1 className="font-bold text-4xl my-10">Danh sách máy móc</h1>
    </div>
  );
}

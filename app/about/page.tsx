import * as React from 'react';

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
  return (
    <div className="lg:w-4/5 md:w-full mx-auto">
      <h1 className="font-bold text-4xl my-10">Thông tin công ty</h1>
      <div className="leading-8">
        <span>Tên công ty:</span>
        <span className="px-5">CÔNG TY TNHH CƠ KHÍ CHÍNH XÁC MINH TÙNG</span>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          deserunt voluptas minus nostrum, soluta exercitationem vel error. Eum
          incidunt neque nesciunt aut porro, animi reiciendis quo dolore. Dicta,
          quos nostrum!
        </p>
      </div>
      <div className="my-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          deserunt voluptas minus nostrum, soluta exercitationem vel error. Eum
          incidunt neque nesciunt aut porro, animi reiciendis quo dolore. Dicta,
          quos nostrum!
        </p>
      </div>
      <div className="my-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          deserunt voluptas minus nostrum, soluta exercitationem vel error. Eum
        </p>
      </div>
    </div>
  );
}

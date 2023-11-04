import * as React from 'react';

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className="bottom-0 h-80 w-full bg-slate-700 flex flex-row justify-center items-center">
      <div className="text-white copyRight text-right">
        <p>© 2020 All Rights Reserved Terms of </p>
        <p>Use and Privacy Policy</p>
      </div>
      <div className="logo  mx-10">
        <div className="brand flex flex-row justify-center items-center">
          <div className="logo">
            <img
              src="/assets/minhtung.svg"
              className="h-14 w-14"
              alt="logopage"
            />
          </div>
          <div className="company_name pl-2">
            <p
              className="text-2xl tracking-wider font-extrabold"
              style={{ color: '#e9490a', lineHeight: 1.4 }}
            >
              MINH TÙNG
            </p>

            <p className="text-xs font-normal text-white">
              MECHANICAL SOLUTION
            </p>
          </div>
        </div>
      </div>
      <div className="iconlist flex flex-row">
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center mx-2">
          <i className="fab fa-facebook text-3xl  "></i>
        </div>
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center mx-2 ">
          <i className="fab fa-instagram text-3xl  "></i>
        </div>
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center mx-2">
          <i className="fab fa-google text-3xl  "></i>
        </div>
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center mx-2">
          <i className="fab fa-facebook text-3xl  "></i>
        </div>
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center mx-2">
          <i className="fab fa-google text-3xl  "></i>
        </div>
      </div>{' '}
    </div>
  );
}

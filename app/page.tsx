'use client';

import * as React from 'react';
const LIST_IMAGE = [
  '/assets/may1.png',
  '/assets/may2.jpg',
  '/assets/may3.jpg',
  '/assets/may4.jpg',
  '/assets/may5.jpg',
  '/assets/may6.jpg',
];

export interface HomePageProps { }

export default function HomePage(props: HomePageProps) {
  return (
    <div className="content">
      <div className="hero relative">
        <div className="bg-indigo-300 w-full min-h-600">
          <img
            src="\assets\mt-2050-home-slide-1.jpg"
            alt="hero-1"
            className="object-cover"
          />
        </div>
        <div className="hero_content absolute top-1/4 lg:left-20 text-white">
          <h1 className="text-8xl">Innovaive Mechanical</h1>
          <h1 className="text-8xl">Engineering Service</h1>
          <h3 className="text-lg py-3 px-1">
            CAS DESIGN & Drafting. Modeling. Prototyping. Analysis
          </h3>
          <button
            className="text-white w-32 h-12
              py-3 px-1
              ml-1
            rounded-sm
            border-2
            duration-700
            border-orange-500
          bg-orange-500 hover:bg-slate-50 hover:text-black
      "
          >
            Dịch vụ &gt;&gt;
          </button>
        </div>
      </div>

      <div className="feature flex md:flex-row lg:w-4/5 md:w-full justify-between sm:flex-col mx-auto my-10">
        <div className="feature-item w-96 h-auto pr-3 cursor-pointer">
          <img src="/assets/TDKP.png" alt="tốc độ khai phá" />
          <h3 className="text-xl font-bold text-amber-700 leading-loose border-b-2 border-b-orange-600">
            TỐC ĐỘ KHAI PHÁ
          </h3>

          <p className="line-clamp-2 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            incidunt consectetur quis a eaque officiis facilis numquam esse quod
            inventore porro, natus iusto sunt quos aliquam facere deserunt nulla
            corrupti.
          </p>
        </div>
        <div className="feature-item w-96 h-40 pr-3 cursor-pointer">
          <img src="/assets/CL123.png" alt="chất lượng" />
          <h3 className="text-xl font-bold text-amber-700 leading-loose border-b-2 border-b-orange-600">
            CHẤT LƯỢNG ỔN ĐỊNH{' '}
          </h3>

          <p className="line-clamp-2 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            incidunt consectetur quis a eaque officiis facilis numquam esse quod
            inventore porro, natus iusto sunt quos aliquam facere deserunt nulla
            corrupti.
          </p>
        </div>
        <div className="feature-item w-96 h-40 px-3 cursor-pointer">
          <img src="/assets/CSVC1.png" alt="CƠ SỞ VẬT CHẤT" />
          <h3 className="text-xl font-bold text-amber-700 leading-loose border-b-2 border-b-orange-600">
            CƠ SỞ VẬT CHẤT
          </h3>

          <p className="line-clamp-2 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            incidunt consectetur quis a eaque officiis facilis numquam esse quod
            inventore porro, natus iusto sunt quos aliquam facere deserunt nulla
            corrupti.
          </p>
        </div>
      </div>

      {/* Dinh huong phat trien */}
      <div className="target lg:w-4/5 md:w-full mx-auto mt-20">
        <div className="target_content flex flex-row">
          <div className="target_content-img mt-28 mr-20">
            <img
              src="/assets/dinhhuong2.png"
              className="w-full"
              alt="dinhhuong"
            />
          </div>
          <div className="target_content-typo">
            <h1 className="font-bold text-3xl leading-loose text-center">
              ĐỊNH HƯỚNG PHÁT TRIỂN
            </h1>
            <p className="py-6">
              Với phương châm “ Nhận trách nhiệm, Gửi chữ tín” trong những năm
              tới công ty sẽ tiếp tục thực hiện đồng bộ các biện pháp để đảm bảo
              sự phát triển bền vững.
            </p>
            <h3 className="text-center font-bold text-xl pb-5">
              CHUYÊN NGHIỆP - CHẤT LƯỢNG - UY TÍN - TIẾN ĐỘ
            </h3>
            <ul>
              <li className="list-none py-2 flex flex-row  items-center">
                <img
                  src="/assets/003-business.png"
                  alt="human resource"
                  className=" pr-20"
                />
                <p>
                  Từng bước hoàn thiện về cơ cấu tổ chức, nhân sự của công ty.
                </p>
              </li>
              <li className="list-none py-2 flex flex-row  items-center">
                <img
                  src="/assets/002-stock.png"
                  alt="human resource"
                  className=" pr-20"
                />
                <p>
                  Tiếp tục thực hiện sắp xếp, đổi mới doanh nghiệp, xây dựng và
                  phát triển Công ty thành Công ty mạnh, bền vững, có tốc độ
                  tăng trưởng nhanh và có tính cạnh tranh cao.
                </p>
              </li>
              <li className="list-none py-2 flex flex-row  items-center">
                <img
                  src="/assets/001-project-management.png"
                  alt="human resource"
                  className=" pr-20"
                />
                <p>
                  Thường xuyên quan tâm đào tạo nâng cao trình độ quản lý,
                  chuyên môn và tay nghề cho đội ngũ cán bộ công nhân viên, cùng
                  với việc đầu tư thiết bị công nghệ tiên tiến và sản xuất kinh
                  doanh để nâng cao hiệu quả sản xuất.
                </p>
              </li>

              <li className="list-none py-2 flex flex-row  items-center">
                <img
                  src="/assets/005-education.png"
                  alt="human resource"
                  className=" pr-20"
                />
                <p>
                  Tăng cường xây dựng cơ sở vật chất kỹ thuật, áp dụng khoa học
                  kỹ thuật, công nghệ tiên tiến, hiện đại, nâng cao năng lực
                  kinh doanh, phát triển và mở rộng liên doanh, liên kết với các
                  đối tác trong và ngoài nước để phát triển năng lực Công ty là
                  doanh nghiệp thiết kế và gia công cơ khí chính xác với năng
                  lực cạnh tranh cao trong nước và Quốc tế.
                </p>
              </li>
              <li className="list-none py-2 flex flex-row  items-center">
                <img
                  src="/assets/007-branding.png"
                  alt="human resource"
                  className=" pr-20"
                />
                <p>
                  Tập trung xây dựng và quảng bá thương hiệu của công ty, xây
                  dựng công ty trở thành một doanh nghiệp xây dựng có quy mô và
                  uy tín hàng đầu trong lĩnh vực thiết kế và gia công cơ khí tại
                  Việt Nam.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nghiep vu */}
      <div className="my-10 flex flex-row justify-between lg:w-4/5 md:w-full-row mx-auto">
        <div className="px-2 cursor-pointer">
          <img
            className="object-fill rounded-md"
            src="\assets\mt-2050-serv-img1.jpg"
            alt="năng lực máy móc"
          />
          <p className="font-bold text-2xl text-center py-10">
            Năng lực máy móc
          </p>
        </div>
        <div className="px-2 cursor-pointer">
          <img
            className="object-fill rounded-md"
            src="\assets\mt-2050-serv-img2.jpg"
            alt="phụ tùng"
          />
          <p className="font-bold text-2xl text-center py-10">
            Tính năng phụ tùng
          </p>
        </div>
        <div className="px-2 cursor-pointer">
          <img
            className="object-fill rounded-md"
            src="\assets\mt-2050-serv-img3.jpg"
            alt="quy trình gia công"
          />
          <p className="font-bold text-2xl text-center py-10">
            Quy trình gia công
          </p>
        </div>
      </div>

      {/* Máy móc tiêu biểu */}
      <div className="lg:w-4/5 md:w-full mx-auto ">
        <h1 className="text-3xl font-bold text-center my-10">
          Máy móc tiêu biểu
        </h1>
        <div className="grid grid-rows-3 grid-cols-3">
          <div className="w-full h-full items-center">
            <img
              src="/assets/may12.jpg"
              className="object-contain rounded-sm py-2 mx-auto"
              alt=""
            />
          </div>
          <div className="w-full h-full items-center">
            <img
              src="/assets/may13.jpg"
              className="object-contain rounded-sm py-2 mx-auto"
              alt=""
            />
          </div>
          <div className="w-full h-full items-center">
            <img
              src="/assets/may14.jpg"
              className="object-contain rounded-sm py-2 mx-auto"
              alt=""
            />
          </div>
          <div className="w-full h-full items-center">
            <img
              src="/assets/may15.jpg"
              className="object-contain rounded-sm py-2 mx-auto"
              alt=""
            />
          </div>
          <div className="w-full h-full items-center">
            <img
              src="/assets/may16.jpg"
              className="object-contain rounded-sm py-2 mx-auto"
              alt=""
            />
          </div>
          <div className="w-full h-full items-center">
            <img
              src="/assets/may17.jpg"
              className="object-contain rounded-sm py-2 mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

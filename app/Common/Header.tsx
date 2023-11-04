'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import * as React from 'react';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className="w-full sticky top-0 right-0 py-2 bg-slate-50 z-10
    duration-700
    "
    >
      <div className="xl:container flex flex-row justify-between items-center px-10 py-2 mx-auto">
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

            <p className="text-xs font-normal" style={{ color: '#1f1d1d' }}>
              MECHANICAL SOLUTION
            </p>
          </div>
        </div>
        <div className="navbar">
          <ul className="list-none flex ">
            <li className="px-3 text-sm" style={{}}>
              <Link
                className={`link ${pathname === '/' ? 'active' : ''}`}
                href={'/'}
              >
                Trang chủ
              </Link>
            </li>
            <li className="px-3 text-sm">
              <Link
                className={`link ${pathname === '/about' ? 'active' : ''}`}
                href={'about'}
              >
                Giới thiệu
              </Link>
            </li>
            <li className="px-3 text-sm">
              <Link
                className={`link ${pathname === '/product' ? 'active' : ''}`}
                href={'product'}
              >
                Sản phẩm
              </Link>
            </li>
            <li className="px-3 text-sm">
              <Link
                className={`link ${pathname === '/machine' ? 'active' : ''}`}
                href={'machine'}
              >
                Thiết bị
              </Link>
            </li>
            <li className="px-3 text-sm">Liên hệ</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

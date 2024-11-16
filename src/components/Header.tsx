// components/Header.tsx
'use client'; // 클라이언트 컴포넌트로 지정

import React from 'react';
import { useRouter } from 'next/navigation'; // 'next/navigation'에서 useRouter 사용
import Link from 'next/link';
import styles from '@/styles/components/header.module.scss';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/">홈</Link>
      {/* 다른 링크나 기능 추가 가능 */}
    </header>
  );
};

export default Header;

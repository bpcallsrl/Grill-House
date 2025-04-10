'use client';

import React, { useEffect } from 'react';
import { setupMessageHandler } from '../lib/messageHandler';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    setupMessageHandler();
  }, []);

  return <>{children}</>;
} 
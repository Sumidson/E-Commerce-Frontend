'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShow(true);
    }, 2000); // Slight delay for smooth transition

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {show && (
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
        </div>
      )}
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative">
      <div className="absolute inset-0 z-[-10] flex items-center justify-center">
        <Image 
          src="/assets/404.png" 
          alt="404 background" 
          width={800}
          height={800}
          className="object-contain max-w-[90%] max-h-[90%]"
          priority
        />
      </div>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are trying to access is unavailable or does not exist
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#0C7792] text-white font-medium rounded-lg hover:bg-[#0C7792]/80 transition-colors duration-200"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
} 
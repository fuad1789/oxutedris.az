import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <BookOpen className="mx-auto mb-6 text-gray-400" size={64} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kurs tapılmadı</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Axtardığınız kurs mövcud deyil və ya silinib. Lütfən digər kurslarımıza baxın.
        </p>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          Bütün kurslara bax
        </Link>
      </div>
    </main>
  );
}


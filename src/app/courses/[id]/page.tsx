import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  CheckCircle, 
  Gift, 
  BookOpen,
  MessageCircle,
  Phone
} from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { courses } from '@/data/courses';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return {
      title: 'Kurs tapılmadı',
    };
  }

  return {
    title: `${course.title} - Oxu Tədris Mərkəzi`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Geri</span>
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm uppercase tracking-wide">
              {course.category}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/20 backdrop-blur-sm text-yellow-200">
              <Gift size={12} />
              Pulsuz tanıtım dərsi
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
          {course.ageGroup && (
            <p className="text-blue-100 text-lg mb-4">
              <span className="font-semibold">Yaş qrupu:</span> {course.ageGroup}
            </p>
          )}
        </div>
      </div>

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kurs Haqqında</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {course.description}
              </p>
            </div>

            {/* Course Details */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kurs Məlumatları</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Müddət</p>
                    <p className="font-semibold text-gray-900">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tədris Metodu</p>
                    <p className="font-semibold text-gray-900">{course.method}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Müəllim</p>
                    <p className="font-semibold text-gray-900">{course.teacher}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kursun Faydaları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-premium border border-gray-100 p-6">
                {course.priceRange && (
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-primary mb-2">
                      {course.priceRange}
                    </p>
                    <p className="text-sm text-gray-500">Aylıq ödəniş</p>
                  </div>
                )}
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-premium hover:shadow-premium-lg"
                  >
                    Qeydiyyatdan Keç
                  </Link>
                  <a
                    href="https://wa.me/994551436547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-premium hover:shadow-premium-lg"
                  >
                    <MessageCircle size={20} />
                    WhatsApp ilə sorğu ver
                  </a>
                  <a
                    href="tel:+994551436547"
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    <Phone size={20} />
                    Zəng et
                  </a>
                </div>
              </div>

              {/* Free Trial Badge */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 text-center">
                <Gift className="mx-auto mb-3 text-yellow-600" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Pulsuz Tanıtım Dərsi</h4>
                <p className="text-sm text-gray-600">
                  İlk dərsimiz pulsuzdur! Kursumuzla tanış olun və qərar verin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Courses */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Digər Kurslarımız</h2>
          <p className="text-gray-600">Sizə uyğun digər kurslarımızla tanış olun</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses
            .filter((c) => c.id !== course.id)
            .slice(0, 3)
            .map((relatedCourse) => (
              <Link
                key={relatedCourse.id}
                href={`/courses/${relatedCourse.id}`}
                className="bg-white rounded-2xl shadow-premium border border-gray-100 p-6 hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedCourse.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{relatedCourse.description}</p>
                {relatedCourse.priceRange && (
                  <p className="text-lg font-bold text-primary">{relatedCourse.priceRange}</p>
                )}
              </Link>
            ))}
        </div>
      </SectionWrapper>
    </main>
  );
}


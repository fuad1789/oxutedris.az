import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import CourseCard from '@/components/CourseCard';
import StatCard from '@/components/StatCard';
import TestimonialCard from '@/components/TestimonialCard';
import TeacherCard from '@/components/TeacherCard';
import GalleryGrid from '@/components/GalleryGrid';
import { courses } from '@/data/courses';
import { stats, testimonials } from '@/data/stats';
import { teachers } from '@/data/teachers';

export default function Home() {
  // Show all courses
  const featuredCourses = courses;

  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Summary Section */}
      <SectionWrapper id="about-summary" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Niyə <span className="text-primary">Oxu Tədris Mərkəzi?</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Valideyn ağrılarını anlayırıq və uşağınızın uğurlu gələcəyini təmin etmək üçün 
              hər addımda yanınızdayıq. Peşəkar müəllim heyəti, uşaq psixologiyasına uyğun metodlar və 
              valideynlərlə sıx əməkdaşlıq ilə uşağınızın gələcəyini qururuq.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Kiçik qruplar',
                'İnteraktiv və oyun əsaslı dərslər',
                'Peşəkar müəllim heyəti',
                'Valideynlər üçün aylıq şəffaf hesabatlar',
                'Psixoloq dəstəyi',
                'Təhlükəsiz təhsil mühiti',
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="text-secondary mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="text-primary font-bold hover:text-secondary flex items-center gap-2 transition-colors"
            >
              Haqqımızda daha ətraflı <ArrowRight size={18} />
            </Link>
          </div>
          <div className="space-y-6">
            <div className="relative h-[300px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0">
                <Image
                  src="/oxumerkezi.png"
                  alt="Oxu Tədris Mərkəzi binası"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-primary">📍</span>
                Ünvanımız
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bakı şəhəri, Həzi Aslanov rayonu,<br />
                Rübail İsgəndərov 15
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.id} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <SectionWrapper id="courses" className="bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Kurslar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Məktəb şagirdləri üçün uyğun kurslar. Yaş və sinif qruplarına görə təşkil edilmiş dərslər.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Bütün kurslara bax
          </Link>
        </div>
      </SectionWrapper>

      {/* Gallery Section */}
      <SectionWrapper id="gallery" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tədris Mühiti</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mərkəzimizdəki dərslər, tədbirlər və gündəlik həyatdan görüntülər.
          </p>
        </div>
        <GalleryGrid />
      </SectionWrapper>

      {/* Teachers Section */}
      <SectionWrapper id="teachers" className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Müəllimlər</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Peşəkar və təcrübəli müəllim heyətimizlə tanış olun.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.slice(0, 3).map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/teachers"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Bütün müəllimlərə bax
          </Link>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper id="testimonials" className="bg-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Uğur Hekayələri</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tələbə və valideynlərimizin bizim haqqımızda fikirləri.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Uşağınızın uğurlu gələcəyinə bizmlə başlayın!
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Uşağınızı qeydiyyatdan keçirin, pulsuz sınaq dərslərindən və endirimli qiymətlərdən yararlanın.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-premium hover:shadow-premium-lg"
          >
            Qeydiyyatdan Keç
          </Link>
        </div>
      </section>
    </main>
  );
}

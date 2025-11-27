import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import CourseCard from '@/components/CourseCard';
import StatCard from '@/components/StatCard';
import TestimonialCard from '@/components/TestimonialCard';
import GalleryGrid from '@/components/GalleryGrid';
import { courses } from '@/data/courses';
import { stats, testimonials } from '@/data/stats';

export default function Home() {
  // Select featured courses (e.g., first 3)
  const featuredCourses = courses.slice(0, 3);

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
              Biz məktəb yaşlı uşaqların təhsili ilə məşğul olan ixtisaslaşmış mərkəzik. 
              Peşəkar müəllim heyəti, uşaq psixologiyasına uyğun metodlar və 
              valideynlərlə sıx əməkdaşlıq ilə uşağınızın gələcəyini qururuq.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Kiçik qruplar və fərdi diqqət',
                'Uşaqlar üçün interaktiv və oyun elementli dərslər',
                'Valideynlərlə daimi əlaqə və aylıq hesabatlar',
                'Uşağın psixoloji rahatlığı və motivasiyası',
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                  {item}
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
          <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
             {/* Placeholder for About Image */}
             <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-primary/20">
                <span className="text-6xl font-bold">OXU</span>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.id} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <SectionWrapper id="courses" className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Populyar Kurslarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Məktəb şagirdləri üçün uyğun kurslar. Yaş və sinif qruplarına görə təşkil edilmiş dərslər.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors duration-200"
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

      {/* Testimonials Section */}
      <SectionWrapper id="testimonials" className="bg-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Uğur Hekayələri</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tələbə və valideynlərimizin bizim haqqımızda fikirləri.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            className="inline-block bg-accent text-primary font-bold px-8 py-4 rounded-md hover:bg-yellow-400 transition-colors duration-200"
          >
            Qeydiyyatdan Keç
          </Link>
        </div>
      </section>
    </main>
  );
}

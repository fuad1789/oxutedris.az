import SectionWrapper from '@/components/SectionWrapper';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Kurslarımız</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Sizə uyğun tədris proqramını seçin və gələcəyinizi bizimlə qurun.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}

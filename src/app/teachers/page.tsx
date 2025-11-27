import SectionWrapper from '@/components/SectionWrapper';
import TeacherCard from '@/components/TeacherCard';
import { teachers } from '@/data/teachers';

export default function TeachersPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Müəllimlərimiz</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Peşəkar və təcrübəli müəllim heyətimizlə tanış olun.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}

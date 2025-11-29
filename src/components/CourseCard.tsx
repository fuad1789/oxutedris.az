import Link from 'next/link';
import { Clock, Users, CheckCircle, ArrowRight, Gift } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-premium border border-gray-100 overflow-hidden hover:shadow-premium-lg transition-all duration-300 flex flex-col h-full relative hover:-translate-y-1">
      {/* Free Trial Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200">
          <Gift size={10} />
          Pulsuz tanıtım
        </span>
      </div>

      <div className="p-4 flex-grow">
        <div className="mb-2">
          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-primary uppercase tracking-wide">
            {course.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1.5 leading-tight">{course.title}</h3>
        
        {course.ageGroup && (
          <p className="text-xs text-gray-500 mb-2">
            <span className="font-medium">Yaş qrupu:</span> {course.ageGroup}
          </p>
        )}
        
        <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">{course.description}</p>
        
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock size={12} className="mr-1 text-secondary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={12} className="mr-1 text-secondary" />
            <span>{course.method}</span>
          </div>
        </div>

        <div className="space-y-1 mb-3">
          {course.benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-start text-xs text-gray-600">
              <CheckCircle size={12} className="mr-1.5 mt-0.5 text-green-500 flex-shrink-0" />
              <span className="leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>

        {course.priceRange && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xl font-bold text-primary mb-0.5">
              {course.priceRange}
            </p>
            <p className="text-[10px] text-gray-500">Aylıq ödəniş</p>
          </div>
        )}
      </div>
      
      <div className="px-4 pb-4 pt-0 mt-auto">
        <Link
          href={`/courses/${course.id}`}
          className="w-full block text-center bg-primary hover:bg-secondary text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
        >
          Ətraflı Bax
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

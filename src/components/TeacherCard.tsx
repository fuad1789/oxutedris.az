import Image from 'next/image';
import { Teacher } from '@/data/teachers';

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
      <div className="relative h-64 w-full bg-gray-200">
        {/* Placeholder for image if not available or using Next.js Image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
            <span className="text-4xl">🎓</span>
        </div>
        {/* If real images were available:
        <Image 
          src={teacher.image} 
          alt={teacher.name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        */}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{teacher.name}</h3>
        <p className="text-primary text-sm font-medium mb-3">{teacher.subject}</p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{teacher.bio}</p>
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-500 font-medium">Təcrübə: {teacher.experience}</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;

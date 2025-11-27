import { Quote } from 'lucide-react';
import { Testimonial } from '@/data/stats';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
      <Quote className="absolute top-6 left-6 text-blue-100 h-10 w-10 -z-0" />
      <div className="relative z-10">
        <p className="text-gray-600 italic mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg mr-3">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
            <p className="text-xs text-primary font-medium">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

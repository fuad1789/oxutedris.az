import SectionWrapper from '@/components/SectionWrapper';
import { Target, Eye, Award, BookOpen, Shield, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Haqqımızda</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Oxu Tədris Mərkəzi yalnız məktəb yaşlı uşaqlarla işləyən tədris mərkəzidir. Uşaqların təhsilini yüksəltmək və gələcəyin liderlərini yetişdirmək üçün yaradılmışdır.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Missiyamız</h2>
            <p className="text-gray-600 leading-relaxed">
              Uşaqların təhsilini yüksəltmək, onların potensialını üzə çıxarmaq və cəmiyyətə faydalı fərdlər kimi yetişməsinə dəstək olmaqdur. Biz hər bir uşağın fərdi xüsusiyyətlərini nəzərə alaraq, ona ən uyğun uşaq psixologiyasına uyğun tədris metodunu tətbiq edirik.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-6">
              <Eye size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Ölkənin ən qabaqcıl və etibarlı uşaq tədris mərkəzlərindən biri olmaq, innovativ və uşaq psixologiyasına uyğun tədris metodları ilə təhsil sahəsində standartları müəyyən etmək və əminlikli, bilikli gənclər hazırlamaq.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Dəyərlərimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Keyfiyyət</h3>
              <p className="text-gray-600">
                Uşaqlar üçün ən yüksək standartlarda təhsil.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">İnkişaf</h3>
              <p className="text-gray-600">
                Uşaqların yaş xüsusiyyətlərinə uyğun proqramlar.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Təhlükəsizlik</h3>
              <p className="text-gray-600">
                Uşağın psixoloji rahatlığı və təhlükəsizliyi.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Əməkdaşlıq</h3>
              <p className="text-gray-600">
                Valideynlərlə sıx əməkdaşlıq və əlaqə.
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tədris Yanaşmamız</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Diaqnostik Qiymətləndirmə</h3>
                <p className="text-gray-600">İlk dərsdə uşağın bilik səviyyəsi yoxlanılır və ona uyğun proqram seçilir.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Yaş Qruplarına Görə Kiçik Qruplar</h3>
                <p className="text-gray-600">Dərslər yaş və sinif səviyyəsinə uyğun kiçik qruplarda keçirilir.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">İnteraktiv və Oyun Elementli Dərslər</h3>
                <p className="text-gray-600">Xüsusilə kiçik yaşlı uşaqlar üçün oyun dəstəkli, interaktiv dərslər.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Aylıq Hesabatlar və Valideyn Görüşləri</h3>
                <p className="text-gray-600">Hər ayın sonunda valideynlərə uşağın davamiyyəti və inkişafı barədə hesabat verilir.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

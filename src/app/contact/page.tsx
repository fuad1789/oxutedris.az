import SectionWrapper from '@/components/SectionWrapper';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Əlaqə</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Suallarınız var? Bizimlə əlaqə saxlayın və ya mərkəzimizə yaxınlaşın.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bizimlə Əlaqə</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ünvan</h3>
                  <p className="text-gray-600">Bakı şəhəri, Nərimanov rayonu, Əhməd Rəcəbli küçəsi 15</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">+994 50 123 45 67</p>
                  <p className="text-gray-600">+994 12 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@oxutedris.az</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">İş Saatları</h3>
                  <p className="text-gray-600">Bazar ertəsi - Şənbə: 09:00 - 20:00</p>
                  <p className="text-gray-600">Bazar: İstirahət günü</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 w-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                <span className="font-medium">Xəritə Yeri</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

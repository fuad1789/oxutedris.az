export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Tələbə", "Valideyn"
  content: string;
}

export const stats: Stat[] = [
  { id: '1', value: '98%', label: 'Qəbul Nəticəsi' },
  { id: '2', value: '200+', label: 'Yüksək Bal (600+)' },
  { id: '3', value: '15+', label: 'İllik Təcrübə' },
  { id: '4', value: '1000+', label: 'Məzun' },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fərid Həsənov',
    role: '11-ci sinif şagirdi',
    content: 'Oxu Tədris Mərkəzində abituriyent hazırlığı keçdim və arzuladığım universitetə qəbul oldum. Müəllimlər uşaqlarla işləməyi çox yaxşı bilirlər.',
  },
  {
    id: '2',
    name: 'Günay Məmmədova',
    role: 'Valideyn (9-cu sinif)',
    content: 'Övladımın məktəb nəticələrinin yaxşılaşmasını hər ay keçirilən sınaq imtahanları ilə izləyə bilirəm. Müəllimlərin uşaqlara diqqəti və qayğısı bizi çox razı salır.',
  },
  {
    id: '3',
    name: 'Orxan Əliyev',
    role: 'Valideyn (7-ci sinif)',
    content: 'Oğlum burada riyaziyyat dərslərinə gedir. Artıq məktəbdə qiymətləri yüksəlib və fənnə marağı artıb. Uşaqlarla işləməyi bacaran müəllimlər!',
  },
];

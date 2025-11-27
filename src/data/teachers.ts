export interface Teacher {
  id: string;
  name: string;
  subject: string;
  experience: string;
  bio: string;
  image: string;
}

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Elvin Məmmədov',
    subject: 'Riyaziyyat',
    experience: '12 il',
    bio: 'Məktəb yaşlı uşaqlarla işləməkdə geniş təcrübəyə malik riyaziyyat müəllimi. Uşaq psixologiyasına uyğun metodlarla riyaziyyatı sevdirir.',
    image: '/images/teacher-1.jpg', // Placeholder
  },
  {
    id: '2',
    name: 'Nigar Əliyeva',
    subject: 'Azərbaycan dili və Ədəbiyyat',
    experience: '10 il',
    bio: 'Məktəb şagirdləri ilə işləyən təcrübəli müəllim. Uşaqların oxu və yazı bacarıqlarını inkişaf etdirməkdə peşəkardır.',
    image: '/images/teacher-2.jpg', // Placeholder
  },
  {
    id: '3',
    name: 'Samir Kərimov',
    subject: 'Tarix',
    experience: '8 il',
    bio: 'Uşaqlar üçün interaktiv və oyun elementli dərslərlə tarixi sevdirən müəllim. Hər yaş qrupuna uyğun metodlar tətbiq edir.',
    image: '/images/teacher-3.jpg', // Placeholder
  },
  {
    id: '4',
    name: 'Aytən Quliyeva',
    subject: 'İngilis dili',
    experience: '6 il',
    bio: 'Uşaqlarla işləməyi sevən, yaş qruplarına uyğun oyun və danışıq fəaliyyətləri ilə İngilis dili öyrədən müəllim.',
    image: '/images/teacher-4.jpg', // Placeholder
  },
];

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
    id: "1",
    name: "Nigar Əliyeva",
    subject: "Azərbaycan dili və Ədəbiyyat",
    experience: "10 il",
    bio: "Məktəb şagirdləri ilə işləyən təcrübəli müəllim. Uşaqların oxu və yazı bacarıqlarını inkişaf etdirməkdə peşəkardır.",
    image: "/13c956790c6406e8b2172b9507306b27.jpg",
  },
  {
    id: "2",
    name: "Aytən Quliyeva",
    subject: "İngilis dili",
    experience: "6 il",
    bio: "Uşaqlarla işləməyi sevən, yaş qruplarına uyğun oyun və danışıq fəaliyyətləri ilə İngilis dili öyrədən müəllim.",
    image: "/e3d04e91a2cee2bf0aa3ae56679863c4.jpg",
  },
  {
    id: "3",
    name: "Leyla Məmmədova",
    subject: "Riyaziyyat",
    experience: "12 il",
    bio: "Məktəb yaşlı uşaqlarla işləməkdə geniş təcrübəyə malik riyaziyyat müəllimi. Uşaq psixologiyasına uyğun metodlarla riyaziyyatı sevdirir.",
    image: "/c4e0c6fee0ec610c2632bac960fa5bdd.jpg",
  },
  {
    id: "4",
    name: "Samir Kərimov",
    subject: "Tarix",
    experience: "8 il",
    bio: "Uşaqlar üçün interaktiv və oyun elementli dərslərlə tarixi sevdirən müəllim. Hər yaş qrupuna uyğun metodlar tətbiq edir.",
    image: "/c3cab5b336680ea41f335662669c6201.jpg",
  },
];

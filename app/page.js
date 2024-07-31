"use client"

import Nav from "./Nav"
import CardSlider from './CardSlider';
export default function Home() {

  const cards = [
    {
      skill1:'UI',
      skill2:'UX',
      title: 'Andrea Jellic',
      description: 'Digital Designer',
      imageUrl: 'https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=320x399&vertical=center',
    },
    {
      skill1: 'Brand',
      skill2: 'Design',
      title: 'vladimir Gruev',
      description: 'Digital designer',
      imageUrl: 'https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=320x399&vertical=center',
    },
    {
      skill1: 'Mobile',
      skill2: 'Web',
      title: 'chris owens',
      description: 'Creative Director',
      imageUrl: 'https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=320x399&vertical=center',
    },

    {
      skill1: 'Design',
      skill2: 'Illustration',
      title: 'Lilla Bardenova',
      description: 'Brand+Illustrator',
      imageUrl: 'https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center',
    },

    {
      skill1: 'Brand',
      skill2: 'UI',
      title: 'Daniele Buffa',
      description: 'Principle Designer',
      imageUrl: 'https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=320x399&vertical=center',
    },

    {
      skill1: 'Web',
      skill2: 'Illustration',
      title: 'Victa wille',
      description: 'Digital Designer',
      imageUrl: 'https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center',
    },

    {
      skill1: 'UX',
      skill2: 'Product',
      title: 'Mercedes Benze',
      description: 'Illustrator',
      imageUrl: 'https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=320x399&vertical=center',
    },
  ];

  return (

   <div>

      <Nav />

      <main className=" card flex items-center justify-center min-h-screen ">
        <CardSlider cards={cards} />
      </main>




   </div>
    
  
  );
}

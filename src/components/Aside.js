// components/Aside.js
'use client';
import Link from 'next/link';
import styles from '../app/scss/globals.module.scss';

const categories = [
  { id: 1, name: 'Electrónicos' },
  { id: 2, name: 'Ropa' },
  { id: 3, name: 'Hogar' },
  // Agrega más categorías según sea necesario
];



const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h2>Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categorias/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;

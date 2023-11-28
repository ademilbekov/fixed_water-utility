
import s from "./news.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const news = () => {

  //   const [contacts, setContacts] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responce = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await responce.json();
  //     setContacts(data);
  //   };
  //   fetchData();
  // }, []);

  // <ul>
  //       {contacts && contacts.map(({id, name, email}) => (
  //           <li key={id}>
  //               <strong>{name}</strong> ({email})
  //           </li>
  //       ))}
  //     </ul>

  return (
    <section className={s.news}>
      <div className={s.main_card}>
          <h2>sada</h2>
      </div>
      <div className={s.other_cards}>
        
      </div>
    </section>
  );
};

export default news;

import s from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={s.contactItem}>
      <div className={s.contactWrapper}>
        <p className={s.name}>
          <FaUser className={s.icon} />
          {contact.name}
        </p>
        <p className={s.phone}>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button className={s.contactButton} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

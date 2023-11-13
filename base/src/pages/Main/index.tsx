import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import './styles.css';
import api from "../../services/api";
import TeacherProps from "../../types/teachers";
import { useEffect, useState } from 'react';

export function Main() {

  const [allTeachers, setAllTeachers] = useState<TeacherProps[]>([]);

  async function loadTeachers() {
    try {
      const response = await api.get("/teachers");

      setAllTeachers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <div className='container'>
      <Header />

      <div className='main-teachers'>
        {allTeachers.map((teacher) => (
          <Card 
          key={teacher.id }
          teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
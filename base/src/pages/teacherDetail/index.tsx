import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import './styles.css';
import { useTeacherDetail } from "../../hooks/useTeacherDetail";
import { useState, useEffect } from "react";
import TeacherProps from "../../types/teachers";

export function TeacherDetail() {

  const { handleGetTeacher } = useTeacherDetail();
  const [currentTeacher, setCurrentTeacher] = useState<TeacherProps>();

  useEffect(() => {
    const existCurrentTeacher = handleGetTeacher();

    if (existCurrentTeacher) {
      setCurrentTeacher(existCurrentTeacher);
    }
  }, []);

  return (
    <div className='container'>
      <Header mostarBotaovoltar />

      <div className="teacher-detail">
        <Avatar image={currentTeacher?.avatar || ""} />
        <h1>{currentTeacher?.name}</h1>
        <span>{currentTeacher?.stack}</span>

        <div className="horizontal-line line"></div>

        <h3>

        </h3>

        <p>
          {currentTeacher?.bio}
        </p>
      </div>
    </div>
  );
}
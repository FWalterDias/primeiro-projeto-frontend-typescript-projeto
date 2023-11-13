import { useNavigate } from "react-router-dom";
import TeacherProps from "../../types/teachers";
import { Avatar } from "../Avatar";
import "./styles.css";
import { useTeacherDetail } from "../../hooks/useTeacherDetail";

type CardTeacherProps = {
    teacher: TeacherProps
}

export function Card({ teacher }: CardTeacherProps) {

    const navigate = useNavigate();
    const { handleInsertTeacher } = useTeacherDetail();

    function handleTeacherDetail() {
        handleInsertTeacher(teacher);
        navigate("/teacher-detail");
    }

    return (
        <div
            className="card"
            onClick={handleTeacherDetail}>
            <Avatar image={teacher.avatar} />

            <h1>
                {teacher.name}
            </h1>
        </div>
    )
}
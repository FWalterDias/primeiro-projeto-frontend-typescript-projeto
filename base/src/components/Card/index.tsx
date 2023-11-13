import { Avatar } from "../Avatar";
import { useNavigate } from "react-router-dom";
import "./styles.css";

type TeacherProps = {
    teacher: {
        id: number,
        avatar: string,
        name: string
    }
}

export function Card({ teacher }: TeacherProps) {

    const navigate = useNavigate();

    function handleTeacherDetail() {
        navigate("/teacher-detail")
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
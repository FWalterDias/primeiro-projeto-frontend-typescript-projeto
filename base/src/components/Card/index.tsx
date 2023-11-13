import { Avatar } from "../Avatar";
import "./styles.css";

type TeacherProps = {
    teacher:{
        id: number,
        avatar: string,
        name: string
    }
}

export function Card({ teacher }: TeacherProps) {
    return (
        <div className="card">
            <Avatar image={teacher.avatar} />

            <h1>
                {teacher.name}
            </h1>
        </div>
    )
}
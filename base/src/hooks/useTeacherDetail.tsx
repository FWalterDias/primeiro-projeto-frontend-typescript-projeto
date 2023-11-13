import TeacherProps from "../types/teachers";

export function useTeacherDetail() {

    function handleInsertTeacher(teacher: TeacherProps) {
        localStorage.setItem("current-teacher", JSON.stringify(teacher));
    }

    function handleGetTeacher(): TeacherProps | null {
        const currentTeacher =  
        localStorage.getItem("current-teacher") ? 
        JSON.parse(localStorage.getItem("current-teacher")!) :
        null;

        return currentTeacher;
    }

    return {
        handleInsertTeacher,
        handleGetTeacher
    }
}
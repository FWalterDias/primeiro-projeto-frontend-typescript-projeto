import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import './styles.css';

export function TeacherDetail() {
  return (
    <div className='container'>
      <Header mostarBotaovoltar />

      <div className="teacher-detail">
        <Avatar image="" />
        <h1>Johan</h1>
        <span>Front-End</span>

        <div className="horizontal-line line"></div>

        <h3>
          Bio
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos similique aut eaque officiis reprehenderit dolores, enim quisquam aspernatur. Dolores, omnis provident! Maiores obcaecati temporibus architecto id commodi, incidunt esse. Unde, adipisci repellendus sapiente doloribus dolore porro consectetur dolorum corporis eos quos totam cum maxime illo enim expedita, accusantium labore.
        </p>
      </div>
    </div>
  );
}
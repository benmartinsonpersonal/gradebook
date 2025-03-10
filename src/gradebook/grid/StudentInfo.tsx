import { FaUserCircle } from 'react-icons/fa';
import { Student } from '../../../types';

const StudentInfo = ({ student }: { student: Student }) => {

  return (
      <td className="h-10">
        <div className="flex items-center gap-2 bg-white rounded-lg p-1">
          <div className="text-gray-400">
            <FaUserCircle size={38} />
          </div>

          <div className="flex flex-col leading-[18px]">
            <span className="font-bold text-gray-800">{student.firstName}</span>
            <span className="text-gray-600">{student.lastName}</span>
          </div>
        </div>
      </td>
  );
};

export default StudentInfo;

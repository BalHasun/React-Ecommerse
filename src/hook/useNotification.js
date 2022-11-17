import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// to make notification to any component in the project
const notify = (msg, type) => {

    if (type === 'warn') toast.warn(msg)

    else if (type === 'success') toast.success(msg)

    else toast.error(msg)

};
export default notify
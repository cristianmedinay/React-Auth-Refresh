import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.post('/signout', JSON.stringify({ }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response.data)
            
        } catch (err) {
           
                console.log( 'No Server Response');
            
        }
    }

    return logout;
}

export default useLogout
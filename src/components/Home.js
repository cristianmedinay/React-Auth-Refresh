import { useNavigate, Link } from "react-router-dom";

import useLogout from "../hooks/useLogout";


const Home = () => {
    // eslint-disable-next-line no-unused-vars
   
    const navigate = useNavigate();
    const logout = useLogout();
    const signOut = async () => {
        await logout();
        
        navigate('/linkpage');
        /* try {
        const response = await axios.post(SIGNOUT_URL,JSON.stringify({ }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
            );
            console.log(response)
            setAuth({});
            navigate('/linkpage');
        } catch (err) {
            if (!err?.response) {
                console.log( 'No Server Response');
            }
        } */
    
}
    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home

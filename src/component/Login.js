import './Login.css'
function Login() {
    return (
        <>
            <form action="">
                <div>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                </div>
                <input type="button" value="Login" />
                <p>Or Login with</p>
                <div className="social-icons">
                    <div className="facebook"><img src="" alt="" /></div>
                    <div className="google"><img src="" alt="" /></div>
                </div>
            </form>
        </>
    );
};

export default Login;
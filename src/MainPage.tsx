const MainPage = () => {

    return(
        <>
            <main>
                <div className= "securevault-showcase">
                    <div className= "project-text">
                        <h3>Secure Vault</h3>
                        <p>
                            Secure Vault is a password and secure notes manager, designed to demonstrate the
                            same architecture implemented across multiple ecosystems. Early versions focused
                            on core business logic in isolation: a command-line implementation in C++, followed
                            by a second iteration in C#, each built without a framework to validate the
                            underlying design independently of any particular stack.
                        </p>
                        <p>
                            The current version evolved into a full REST API built with ASP.NET Core,
                            reflecting a shift toward stack-based, client-server architecture. It implements
                            JWT-based authentication and BCrypt-hashed password storage, with all endpoints
                            tested through Postman.
                        </p>
                    </div>

                    <div className="project-card">
                        <div className="project-image securevault-image"></div>
                        <div className="project-card-info">
                            <h4>Secure Vault</h4>
                            <p className="project-tag">C++ • C# • ASP.NET Core</p>
                            <a className="project-link" href="https://github.com/YumanKh/SecureVault" target="_blank"> View on GitHub →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage
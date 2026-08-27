const MainPage = () => {

    return(
        <>
            <main>
                <div className= "securevault-showcase">
                    <div className= "project-text">
                        <h3>Secure Vault</h3>
                        <p>
                            A password and secure notes manager, built as a progressive learning project
                            rather than a one-off exercise. It started as a C++ command-line version,
                            focused on nailing the core business logic without any framework in the way.
                            A second iteration in C# followed, before evolving into a real REST API with
                            ASP.NET Core. JWT-based authentication, BCrypt-hashed passwords, fully
                            tested through Postman.
                        </p>
                    </div>
                    <div className= "securevault-card">
                        <div className= "project-card"></div>
                        <a className= "project-link" href="https://github.com/YumanKh/SecureVault" target="_blank">Secure Vault</a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage
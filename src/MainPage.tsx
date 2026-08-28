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

                <div className="portfolio-showcase">
                    <div className="project-text">
                        <h3>Portfolio Website</h3>
                        <p>
                            This portfolio itself is a project. First built as a static HTML/CSS site to
                            practice core web fundamentals: semantic structure, the box model, Flexbox and
                            Grid layouts, and responsive design, all without any framework. That first
                            version was minimalist; what you're looking at now is a complete
                            redesign and a more polished iteration.
                        </p>
                        <p>
                            It was then rebuilt from scratch using React and TypeScript, introducing
                            component-based architecture, client-side routing with React Router, and typed
                            props and state.
                        </p>
                    </div>

                    <div className="project-card">
                        <div className="project-image portfolio-image"></div>
                        <div className="project-card-info">
                            <h4>Portfolio Website</h4>
                            <p className="project-tag">HTML • CSS • React • TypeScript</p>
                            <a className="project-link" href="https://github.com/YumanKh/Portfolio" target="_blank"> View on GitHub →</a>
                        </div>
                    </div>
                </div>

                <div className="pong-showcase">
                    <div className="project-text">
                        <h3>YuKman's Pong</h3>
                        <p>
                            YuKman's Pong was my first C++ project, built with the SFML framework to
                            implement a classic Pong game with a custom UI. The initial version was
                            pushed with a messy, poorly organized structure, written before learning proper
                            version control with Git.
                        </p>
                        <p>
                            The project was later refactored into a cleaner, more maintainable
                            architecture, applying stricter code organization and consistent style
                            conventions. Beyond the game logic itself, it served as an introduction
                            to Git and GitHub, and to comparing different approaches to structuring
                            a C++ codebase.
                        </p>
                    </div>

                    <div className="project-card">
                        <div className="project-image pong-image"></div>
                        <div className="project-card-info">
                            <h4>YuKman's Pong</h4>
                            <p className="project-tag">C++ • SFML</p>
                            <a className="project-link" href="https://github.com/YumanKh/Pong-SFML-CPP" target="_blank"> View on GitHub →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage
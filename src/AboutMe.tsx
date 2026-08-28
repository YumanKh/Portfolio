import {Link} from 'react-router-dom'

const AboutMe = () => {

    return(
        <>
            <main>
                <section className="about-showcase">
                    <div className="about-text">
                        <h3>About Me</h3>
                        <p>
                            I started programming with Python, initially assuming that
                            learning a language's syntax was the whole picture and that being fluent in a
                            language was enough to build a career on.
                        </p>
                        <p>
                            That assumption held until my second semester of college, after a conversation
                            about what it actually takes to land a stable software engineering role. The
                            advice was simple: just build projects. It motivated me, pushing my C++
                            further than any classroom required and building YuKman's Pong from scratch,
                            including my own application loop and UI, using SFML.
                        </p>
                        <p>
                            While learning .NET Core for Secure Vault, I realized that isolated language
                            projects still weren't the full job. The market runs on stacks, not
                            languages in isolation, and being effective means understanding how a client,
                            a server, and a database actually communicate with each other. That's what
                            pushed me to build Secure Vault as a full ASP.NET Core REST API instead of
                            stopping at another command-line version.
                        </p>
                        <p>
                            And today, that realization shaped my current stack: Node.js, React, and
                            PostgreSQL. I want to see myself as a client-server software engineer. someone
                            who builds systems end-to-end, with an eye for what makes a junior developer
                            genuinely competitive.
                        </p>
                    </div>

                    <div className="about-stack">
                        <div className="stack-group">
                            <h4>Core Stack</h4>
                            <div className="stack-tags">
                                <span className="project-tag">TypeScript</span>
                                <span className="project-tag">React</span>
                                <span className="project-tag">Node.js</span>
                                <span className="project-tag">PostgreSQL</span>
                            </div>
                        </div>

                        <div className="stack-group">
                            <h4>Also Worked With</h4>
                            <div className="stack-tags">
                                <span className="project-tag">Python</span>
                                <span className="project-tag">C++</span>
                                <span className="project-tag">C#</span>
                                <span className="project-tag">ASP.NET Core</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact">
                        <h4>Interested in me?</h4>
                        <Link to= '/ContactMe'>
                            <button className="contact-me-button">Contact me</button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AboutMe;
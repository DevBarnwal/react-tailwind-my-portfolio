import { Braces, Brain, BrainCircuit, Briefcase, Code, Cpu, Gauge, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Developer & Tech Enthusiast
                    </h3>

                    <p className="text-muted-foreground text-left">
                        I enjoy creating things that solve real problems—whether it’s a clean interface,
                         an efficient algorithm, or a small automation. I’m always curious about how 
                         technology works and love learning by building.
                    </p>

                    <p className="text-muted-foreground text-left">
                        Lately, I’ve been exploring AI/ML, improving my problem-solving skills,
                         and experimenting with new ideas. I enjoy projects that challenge me
                          and help me grow as a developer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="public/vbn (6).pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Deveopment</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications 
                                    with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Brain className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Problem Solving</h4>
                                <p className="text-muted-foreground">
                                    Strengthening logic and DSA foundations with consistent coding practice.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Cpu className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI/ML Exploration</h4>
                                <p className="text-muted-foreground">
                                    Exploring ML models, neural networks, and automation to understand how intelligent systems work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
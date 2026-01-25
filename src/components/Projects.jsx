import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project) => (
                    <Link
                        to={`/project/${project.id}`}
                        key={project.id}
                        className="card"
                        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                    >
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                            {project.techStack.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.8rem',
                                    padding: '0.25rem 0.75rem',
                                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    color: 'var(--accent-color)',
                                    borderRadius: '15px'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 500 }}>
                            View Details &rarr;
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Projects

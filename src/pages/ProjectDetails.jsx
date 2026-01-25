import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { FaArrowLeft } from 'react-icons/fa'

const ProjectDetails = () => {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="container section">
                <h2>Project not found</h2>
                <Link to="/" style={{ color: 'var(--accent-color)' }}>Back to Home</Link>
            </div>
        )
    }

    return (
        <div className="container section fade-in">
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2rem',
                color: 'var(--text-secondary)'
            }}>
                <FaArrowLeft /> Back to Home
            </Link>

            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {project.title}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                {project.techStack.map(tag => (
                    <span key={tag} style={{
                        fontSize: '0.9rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--accent-color)',
                        borderRadius: '20px'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Overview</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    {project.longDescription}
                </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Features</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                    {project.features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectDetails

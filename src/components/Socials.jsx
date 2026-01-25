import React from 'react'
import { socialLinks } from '../data/portfolioData'

const Socials = () => {
    return (
        <section id="socials" className="section">
            <h2 className="section-title">Connect & Collaborate</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem'
            }}>
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            textAlign: 'center',
                            textDecoration: 'none',
                            gap: '1rem',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = link.color;
                            e.currentTarget.querySelector('.icon').style.color = link.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.querySelector('.icon').style.color = 'var(--text-secondary)';
                        }}
                    >
                        <div className="icon" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease', fontSize: '2.5rem', display: 'flex' }}>
                            <link.icon />
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>{link.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Socials

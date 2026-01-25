import React from 'react'

const Navbar = () => {
    return (
        <nav style={{
            borderBottom: '1px solid var(--glass-border)',
            padding: '1.5rem 0',
            position: 'sticky',
            top: 0,
            background: 'rgba(2, 6, 23, 0.8)', // Slightly darker for nav to differentiate from cards
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            zIndex: 100
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                    Sabin Shrestha
                </h1>
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    <li><a href="#hero" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>About</a></li>
                    <li><a href="#projects" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects</a></li>
                    <li><a href="#research" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Research</a></li>
                    <li><a href="#socials" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Connect</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

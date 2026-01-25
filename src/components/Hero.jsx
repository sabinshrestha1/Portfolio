import React from 'react'
import profileImg from '../assets/sabin.jpg'

const Hero = () => {
    return (
        <section id="hero" className="section fade-in" style={{ paddingTop: '6rem', paddingBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '2rem' }}>
            <div style={{ flex: '1 1 500px' }}>
                <p style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: 500, fontSize: '1.1rem' }}>Hello, I am</p>
                <h1 style={{
                    fontSize: '4.5rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1.5rem'
                }}>
                    Er. Sabin Shrestha
                </h1>

                <div style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Electronics, Communication, and Information Engineer</span> based in Nepal.
                        Specializing in hardware-software integration, embedded systems, and cutting-edge research.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{
                            display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981'
                        }}></span>
                        NEC Council No: <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace' }}>95399</span>
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div className="card" style={{ padding: '1.25rem' }}>
                            <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</h3>
                            <p style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.2rem' }}>Kathmandu Engineering College</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2020 - 2025</p>
                        </div>
                        <div className="card" style={{ padding: '1.25rem' }}>
                            <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Leadership</h3>
                            <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>President</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Electronics Project Club & IEEE Student Branch KEC</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ flex: '0 0 350px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    width: '350px',
                    height: '350px',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    overflow: 'hidden',
                    border: '4px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                    position: 'relative',
                    animation: 'float 6s ease-in-out infinite'
                }}>
                    <style>
                        {`
              @keyframes float {
                0% { box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); transform: translatey(0px); }
                50% { box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); transform: translatey(-20px); }
                100% { box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); transform: translatey(0px); }
              }
            `}
                    </style>
                    <img
                        src={profileImg}
                        alt="Er. Sabin Shrestha"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero

import React from 'react'
import { FaCode, FaMicrochip, FaTools } from 'react-icons/fa'

const Skills = () => {
    const skillSets = [
        {
            category: 'Hardware & IoT',
            icon: <FaMicrochip style={{ color: '#ef4444' }} />,
            skills: ['Arduino', 'ESP32', 'PCB Design', 'Embedded C', 'Sensors & Actuators', 'Robotics']
        },
        {
            category: 'Software & Web',
            icon: <FaCode style={{ color: '#3b82f6' }} />,
            skills: ['React', 'JavaScript (ES6+)', 'Node.js', 'Python', 'MATLAB', 'C++']
        },
        {
            category: 'Tools & Others',
            icon: <FaTools style={{ color: '#10b981' }} />,
            skills: ['Git/GitHub', 'VS Code', 'Proteus', 'Multisim', 'Technical Writing', 'Signal Processing']
        }
    ]

    return (
        <section id="skills" className="section">
            <h2 className="section-title">Technical Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {skillSets.map((set, index) => (
                    <div key={index} className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                fontSize: '1.5rem',
                                padding: '0.75rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {set.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem' }}>{set.category}</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {set.skills.map(skill => (
                                <span key={skill} style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills

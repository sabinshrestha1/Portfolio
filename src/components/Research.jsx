import React from 'react'
import { papers } from '../data/portfolioData'

const Research = () => {
    return (
        <section id="research" className="section">
            <h2 className="section-title">Research & Publications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {papers.map((paper, index) => (
                    <a
                        key={index}
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{paper.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{paper.conference}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                fontSize: '0.85rem',
                                borderRadius: '4px',
                                marginRight: '1rem',
                                color: 'var(--text-secondary)'
                            }}>
                                {paper.year}
                            </span>
                            <span style={{
                                color: paper.status === 'Published' ? '#10b981' : '#f59e0b',
                                fontSize: '0.9rem',
                                fontWeight: 500
                            }}>
                                {paper.status}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Research

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Socials from '../components/Socials'
import Projects from '../components/Projects'
import Research from '../components/Research'

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="container">
                <Hero />
                <Skills />
                <Projects />
                <Research />
                <Socials />
            </main>
            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                <p>&copy; {new Date().getFullYear()} Er. Sabin Shrestha. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Home

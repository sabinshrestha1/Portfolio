
import { FaLinkedin, FaGithub, FaResearchgate, FaEnvelope } from 'react-icons/fa'
import { SiIeee } from 'react-icons/si'

export const projects = [
    {
        id: 'smart-home',
        title: 'Smart Home Automation System',
        description: 'IoT-based system controlling appliances via mobile app using ESP32.',
        longDescription: 'A comprehensive home automation solution allowing users to control lights, fans, and appliances remotely. Features real-time energy monitoring, voice control integration, and scheduling capabilities. Built using ESP32 microcontrollers and a custom React Native mobile application.',
        techStack: ['IoT', 'ESP32', 'C++', 'React Native', 'Firebase'],
        features: [
            'Remote appliance control via WiFi',
            'Real-time power consumption monitoring',
            'Voice command support (Google Assistant/Alexa)',
            'Customizable scheduling and automation routines'
        ]
    },
    {
        id: 'autonomous-robot',
        title: 'Autonomous Navigation Robot',
        description: 'Robot capable of navigating obstacles using ultrasonic sensors and pathfinding algorithms.',
        longDescription: 'An autonomous mobile robot designed to navigate complex environments without human intervention. Utilizes an array of ultrasonic sensors for obstacle detection and SLAM (Simultaneous Localization and Mapping) algorithms for path planning.',
        techStack: ['Robotics', 'Arduino', 'C++', 'Sensors', 'SLAM'],
        features: [
            'Obstacle avoidance using ultrasonic sensors',
            'Pathfinding with A* algorithm',
            'Real-time mapping of environment',
            'Bluetooth manual override control'
        ]
    },
    {
        id: 'signal-tool',
        title: 'Signal Processing Analysis Tool',
        description: 'MATLAB-based tool for analyzing and filtering communication signals.',
        longDescription: 'A desktop application for visualizing and processing digital signals. Provides tools for Fourier analysis, filter design (FIR/IIR), and noise reduction. Essential for students and professionals in telecommunications.',
        techStack: ['MATLAB', 'Signal Processing', 'GUI Design'],
        features: [
            'Fast Fourier Transform (FFT) analysis',
            'Interactive filter design interface',
            'Spectrogram visualization',
            'Export data to CSV/Excel'
        ]
    }
]

export const papers = [
    {
        title: 'Analysis of 5G Network Performance in Dense Urban Environments',
        conference: 'International Conference on Computing and Communication (ICCC)',
        year: '2024',
        status: 'Published',
        link: '#'
    },
    {
        title: 'Machine Learning Approaches for Signal Classification',
        conference: 'Journal of Electronics and Information Engineering',
        year: '2025',
        status: 'Under Review',
        link: '#'
    }
]

export const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sabinshresstha', icon: FaLinkedin, color: '#0077b5' },
    { name: 'GitHub', url: 'https://github.com/sabinshrestha1', icon: FaGithub, color: '#fff' },
    { name: 'ResearchGate', url: '#', icon: FaResearchgate, color: '#00ccbb' },
    { name: 'Email', url: 'mailto:er.sabinshrestha1@gmail.com', icon: FaEnvelope, color: '#ea4335' },
    { name: 'IEEE', url: '#', icon: SiIeee, color: '#00629B' }
]

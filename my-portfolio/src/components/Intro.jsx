import React from 'react';

function Intro() {
    return (
        <div className = "flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className = "text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Adam Korczak</h1>
            <p className = "text-base md:text-xl mb-3 font-medium">Software Engineer</p>
            <p className = "text-sm max-w-xl mb-3 font-bold">Hi. I'm a developer based in the NYC metro area, graduating from Rutgers University in January 2024 with a Bachelors in Information Technology & Informatics with a minor in Computer Science with software development as the overall track and focus.</p>
            <p className = "text-sm max-w-xl mb-6 font-bold">Some of my professional experiences include previously working as a software engineer intern with GNC on internal tools and systems and working as a Teaching Assistant for the Computer Science department at Rutgers University.</p>
        </div>
    )
}

export default Intro;
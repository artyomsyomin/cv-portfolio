import React from 'react';

import Head from './head/Head';
import About from './about/About';
import Education from './education/Education';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';

const Main = (props) => {
    return (
        <main>
        <Head />
        <About />
        <hr />
        <Education />
        <hr />
        <Projects />
        <hr />
        <Contacts />
      </main>
    )
}

export default Main
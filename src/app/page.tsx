import Image from 'next/image';
import React from 'react';
import Hero from './components/hero/hero';
import Projects from './components/project/project';
import About from './components/about/about';
import Skill from './components/skill/skill';

export default function Home() {
  return (
    <div>
<Hero/>
<Projects />
<Skill />
<About />


    </div>
  )
}

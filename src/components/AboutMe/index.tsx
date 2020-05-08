import * as React from 'react'
import 'components/AboutMe/index.css'

export function AboutMe() {
  return (
    <div id="about-me">
      <h1>About Me</h1>
      <AboutMeContent />
      <Resume />
    </div>
  )
}

function AboutMeContent() {
  return (
    <div>
      <p>
        Hello! I&apos;m Tim Miller. I&apos;m a full stack web developer, bioengineer, and former air traffic controller (ATC) for
        The U.S Air Force. TangoYankee comes from the NATO phonetic letters of my ATC operating intials. Every controller
        has a set unique to their facility. Whenever they coordinate with another controller, each controller signs off
        with their initials. It&apos;s git blame for aviators!
      </p>
      <p>
        Before serving in the Air Force, I graduated from <a title="Binghamton U"
          href="https://binghamton.edu/" target="_blank" rel="noopener noreferrer">SUNY Binghamton</a> with a degree in bioengineering.
          In the bioengineering program, I used mathematics to model the world as a series of complex systems. These systems grow and
          adapt to both instigate and react to change. For example, economies consist of people interacting through the exchange of
      goods and services. Over time, our economy has
      changed from agrarian, through industrial, and now to informational. Along the way, it experienced countless booms
      and busts. A bioengineer&apos;s goal is to model,
      predict, and influence that change to acheive a desirable outcome. You can learn more about complexity at the <a title="NECSI"
          href="https://necsi.edu/" target="_blank" rel="noopener noreferrer">New England Complex Systems Institute</a>.
      </p>
      <p>
        My complex systems perspective led me to become a web developer. The internet is the complex system used to
        influence other complex systems. Computers,
        users, and developers interact to build a network of information. This information is then used in decisions for
        businesses, governments, scientific studies, and countless
        other applications. It&apos;s a bioengineer&apos;s dream.
      </p>
      <p>
        Of course, bioengineering and air traffic control have only gone so far to prep me to be a web developer. Over the
        years, I&apos;ve honed those
        skills through various team and individual projects. You can see these skills through the resume, projects, and
        GitHub portfolio included below. Thank you
        for visiting!
      </p>
    </div>
  )
}

class Resume extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props)
    this.openResume = this.openResume.bind(this)
  }

  openResume(): void {
    window.open('src/img/Tim Miller - Resume 10-Apr-2020.pdf', '_blank', 'renoopener noreferer')
  }

  render() {
    return (
      <button id="resume" onClick={this.openResume}>
        View Resume
      </button>
    )
  }
}

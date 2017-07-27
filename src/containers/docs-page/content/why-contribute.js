import React from 'react';

import DocsPage from '../index';

export default class WhyContribute extends DocsPage {
  renderTitle() {
    return 'Why would I contribute?';
  }

  renderContent() {
    return (
      <div>
        <blockquote>
          <p>&hellip;helped me earn many of the skills I later used for my studies in university and my actual job. I think working on open source projects helps me as much as it helps the project!</p>
          <div className="docs-page--quote-attribution">
            &mdash; Errietta Kostala, <a className="docs-page--quote-source" href="https://www.errietta.me/blog/open-source/">Why I love contributing to open source software</a>
          </div>
        </blockquote>
        <p>There are many benefits to contributing to open-source software:</p>
        <h3>Learn</h3>
        <ul>
          <li><strong>Improve your skills</strong> &ndash; most obviously, open-source can be used to hone your existing skills. What better way to improve your understanding of Ember than to contribute to Ember itself?</li>
          <li><strong>Develop new skills</strong> &ndash; you can use open-source as a test bed for new skills that you&apos;d like to develop: new frameworks, languages, paradigms, or even entirely new fields.</li>
          <li><strong>Practice working with people</strong> &ndash; programming can be a solitary endeavor, but people skills are important to career development. Effective communication is critical when working on open-source, and there is ample opportunity to flex those muscles in new ways.</li>
        </ul>
        <h3>Network</h3>
        <ul>
          <li><strong>Meet others with similar interests</strong> &ndash; strong open-source communities keep people coming back for years. Many form lifelong friendships.</li>
          <li><strong>Build references</strong> &ndash; open-source maintainers make excellent references on resumes.</li>
          <li><strong>Develop public artifacts</strong> &ndash; your contributions become public record of your skill.</li>
          <li><strong>Job opportunities</strong> &ndash; many major open-source projects are backed by companies&mdash;Facebook backs React, Google backs Go, and Mozilla backs Firefox, for example&mdash;and having a strong record as a contributor to one of their project can be an advantage when applying for positions at those companies.</li>
          <li><strong>Find mentors or teach others</strong> &ndash; working with others gets you to explain how you do things and ask others for help. The acts of learning and teaching can be fulfilling for everybody involved.</li>
        </ul>
        <h3>Contribute</h3>
        <ul>
          <li><strong>Impact software you use</strong> &ndash; have you ever been frustrated that a piece of open-source software doesn&apos;t support a feature that is important to you? As a contributor, you can push that forward.</li>
          <li><strong>Affect a cause in which you believe</strong> &ndash; many organizations who work in the open-source space are cause-driven. If an organization whose cause you believe in practices open-source, it&apos;s a meaningful way to volunteer your time toward that cause.</li>
          <li><strong>Empowerment</strong> &ndash; it&apos;s very gratifying to feel agency over yours and others&apos; lives and how you experience the world.</li>
        </ul>
      </div>
    );
  }
}

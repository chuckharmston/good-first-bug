import React from 'react';

import DocsPage from '../index';

export default class NeedToKnow extends DocsPage {
  renderTitle() {
    return 'What do I need to know?';
  }

  renderContent() {
    return (
      <div>
        <p>What do you need to know to get started?</p>
        <h3>Not necessarily how to code</h3>
        <p>
          There's a common misconception that contributions to code are the most important part of open source, but a successful project has many other needs. In fact, the non-coding aspects of a project are often overlooked; you do projects a huge favor by offering to help in other ways.
        </p>
        <blockquote>
          <p>
            …people don’t know that I actually don't do any real work on the CocoaPods tool itself. My time on the project is mostly spent doing things like documentation and working on branding.
          </p>
          <div className="docs-page--quote-attribution">
            — Orta Therox,
            {' '}
            <a
              className="docs-page--quote-source"
              href="https://news.realm.io/news/orta-therox-moving-to-oss-by-default/"
            >
              Moving to OSS by Default
            </a>
          </div>
        </blockquote>
        <p>What can you do instead?</p>
        <ul>
          <li>
            <strong>Plan events</strong>
            {' '}
            – organize workshops, meetups, tutorials, or conferences.
          </li>
          <li>
            <strong>UX/design</strong> – user research, branding, style guides.
          </li>
          <li>
            <strong>Write</strong>
            {' '}
            – documentation, examples, blod posts, localization.
          </li>
          <li>
            <strong>Organize</strong>
            {' '}
            – triage bugs, priorize issues, file bugs, break features into tasks.
          </li>
          <li>
            <strong>Help people</strong>
            {' '}
            – answer questions on Stack Overflow or Reddit.
          </li>
          <li>
            <strong>Quality assurance</strong>
            {' '}
            – manual testing, automated testing, load testing.
          </li>
          <li>
            <strong>Mentor</strong>
            {' '}
            – review code, help junior developers acclimate.
          </li>
          <li>
            <strong>Code</strong> – fix bugs, add features, help with tooling.
          </li>
        </ul>
        <h3>Communication</h3>
        <p>
          Communication is critical in open-source communities. They're comprised of collaborators from all over the world. Context can be lost across languages, cultures, geographies, and time zones. Written communication makes it harder to convey tone, and every project has their own vocabulary, norms, and communication styles. Being deliberate about your interactions with others will make community interactions go smoothly.
        </p>
        <p>Some tips to take to your interactions:</p>
        <section className="docs-page--communication">
          <h4>Give Context</h4>
          <p>
            Help others help you by providing context for your issues and suggestions.
          </p>
          <div className="docs-page--good-communication">
            [X] doesn't happen when I do [Y]
          </div>
          <div className="docs-page--bad-communication">How do I [X]?</div>
        </section>
        <section className="docs-page--communication">
          <h4>Do your homework</h4>
          <p>
            It's okay to not know things, but show that you tried. Be sure to check a project's documentation, mailing list, and issues. Maintainers will appreciate when you demonstrate that you're trying to learn.
          </p>
          <div className="docs-page--good-communication">
            I don't know how to do [X]. I checked the docs and found no mention of it.
          </div>
          <div className="docs-page--bad-communication">
            [X] is broken! Please fix it!
          </div>
        </section>
        <section className="docs-page--communication">
          <h4>Be concise</h4>
          <p>
            Every contribution, no matter how simple, requires somebody to review it. Since projects are often short on attention, there's often a backlog of requests for maintainers to attend to. Just like sending email, a shorter request will increase the chance of a response.
          </p>
          <div className="docs-page--good-communication">
            I'd like to write an API tutorial.
          </div>
          <div className="docs-page--bad-communication">
            I was driving down the highway yesterday, stopped for gas, and had an idea…
          </div>
        </section>
        <section className="docs-page--communication">
          <h4>Keep communication public</h4>
          <p>
            When interacting with communities, there is lots of value in keeping conversation public. It prevents overburning of maintainers. Public discussions also increase the number of people who can help you, and provides more opportunities for learning from the exchange (discussions can, in themselves, be worthy contributions).
          </p>
          <div className="docs-page--good-communication">
            @maintainer How should we proceed? [in an issue]
          </div>
          <div className="docs-page--bad-communication">
            Sorry to bother you, but I was wondering if you had time to look at … [in an email]
          </div>
        </section>
        <section className="docs-page--communication">
          <h4>Ask questions and be patient</h4>
          <p>
            Everybody was new to the project at some point. It's great to ask questions, just show them the same patience and empathy that you'd want them to show you.
          </p>
          <div className="docs-page--good-communication">
            Thanks for looking into my problem. I tried what you suggested, and…
          </div>
          <div className="docs-page--bad-communication">
            This is an obvious feature, I don't know why you haven't done it already.
          </div>
        </section>
        <section className="docs-page--communication">
          <h4>Respect community decisions</h4>
          <p>
            Your ideas may differ from the community's vision, there is always a cost to supporting a new feature, and they may decide not to pursue your idea. While you should discuss and look for compromise, maintainers will have to live with their decision longer than you will.
          </p>
          <div className="docs-page--good-communication">
            I'm disappointed, but understand that my use case for [X] is an edge case.
          </div>
          <div className="docs-page--bad-communication">
            This is useless without [X].
          </div>
        </section>
        <p>
          Most importantly: assume good intentions in your interactions. It's fine to politely push back on an idea, ask for more context, or clarify a position; just try to leave the internet better than the internet you first found.
        </p>
        <h3>Tools of the trade</h3>
        <p>
          Getting started can be intimidating; there are many conventions and processes unique to the open source world.
        </p>
        <h4>Documentation</h4>
        <p>
          There's a relatively standard set of documentation for each open source project, usually files at the top level of the code repository.
        </p>
        <ul>
          <li>
            <code>README</code>
            {' '}
            – a project's instruction manual, helping orient users.
          </li>
          <li>
            <code>LICENSE</code>
            {' '}
            – information about the project's open source license.
          </li>
          <li>
            <code>CONTRIBUTING</code>
            {' '}
            – while the
            {' '}
            <code>README</code>
            {' '}
            typically helps community members
            {' '}
            <em>use</em>
            {' '}
            a project, this file helps them
            {' '}
            <em>contribute</em>
            . Not every project has one, but it's a strong signal that a project is well-run and is deserving of your time.
          </li>
          <li>
            <code>CODE_OF_CONDUCT</code>
            {' '}
            – defines standards of behavior for community members to ensure an inclusive and welcoming environment. This is also a signal of a well-run project.
          </li>
        </ul>
        <p>
          Some projects may have other documentation as well: tutorials, setup information, API documentation, or governance procedures and policies.
        </p>
        <h4>Organization</h4>
        <p>
          With a constantly-changing  cast of contributors, it's important for open-source projects to be deliberate about the tools and processes they use to organize themselves and make decisions. You will commonly see:
        </p>
        <ul>
          <li>
            <strong>Issue tracker</strong> – for logging bugs and features.
          </li>
          <li>
            <strong>Pull requests</strong>
            {' '}
            – for managing proposed and in-process changes to the project.
          </li>
          <li>
            <strong>Asynchronous communication channels</strong>
            {' '}
            – often a mailing list or forum, useful for important decisions or discussion.
          </li>
          <li>
            <strong>Synchronous communication channels</strong>
            {' '}
            – for quick exchanges and casual conversation. Often Slack or IRC.
          </li>
          <li>
            <strong>Source control</strong>
            {' '}
            – an often-underlooked communication medium. Branches help you understand in-process projects, and commit histories help you understand recent changes.
          </li>
        </ul>
        <h4>People</h4>
        <p>
          Open-source projects are managed in many different ways. Some common roles, which may or may not be formally-defined:
        </p>
        <ul>
          <li>
            <strong>Author</strong>
            {' '}
            – the person, people, or organization who created the project.
          </li>
          <li><strong>Owner</strong> – those with administrative ownership.</li>
          <li>
            <strong>Maintainers</strong>
            {' '}
            – responsible for driving the vision and managing the organizational aspects of the project.
          </li>
          <li>
            <strong>Contributors</strong>
            {' '}
            – anybody who has contributed to the project.
          </li>
          <li>
            <strong>Community members</strong>
            {' '}
            – users of the product and/or it's output.
          </li>
        </ul>
        <p>
          Larger projects may have people who specialize in specific aspects of the project, or focus on different tasks.
        </p>
        <h3>Licenses</h3>
        <p>
          Licenses are legal documents distributed with the source code that dictate what you can, cannot, and must do as a user of the code. They're quite technical and are sometimes hard to comprehend without legal training. Fortunately, licenses are generally standardized, so “MIT License” serves as a proxy for people without training, and there are resources available to help understand what those standard licenses are.
        </p>
        <p>
          As an example, let's break down the license that most Mozilla software uses: the
          {' '}
          <a href="https://www.mozilla.org/MPL/2.0/">
            Mozilla Public License 2.0
          </a>
          . It grants that:
        </p>
        <ul>
          <li>
            <strong>You can:</strong>
            <ul>
              <li>Use the licensed software commercially.</li>
              <li>Distribute copies of the licensed software freely.</li>
              <li>Modify the original as you see fit.</li>
              <li>
                Use any patents that the license-holder uses in the original.
              </li>
              <li>Use it privately.</li>
            </ul>
          </li>
          <li>
            <strong>You cannot:</strong>
            <ul>
              <li>
                Hold liable the license owner for any damages sustained by using the software.
              </li>
              <li>
                Use the names, trademarks, or logos of the license holder.
              </li>
              <li>Expect service or warranty.</li>
            </ul>
          </li>
          <li>
            <strong>You must:</strong>
            <ul>
              <li>Openly-share the source of any files you modified.</li>
              <li>Include the original copyright in all distribution.</li>
              <li>Include the full text of the license in all distribution.</li>
              <li>
                Any re-release or derivations must be released under the same license.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          This breakdown was adapted from
          {' '}
          <a href="https://choosealicense.com/licenses/mpl-2.0/">
            choosealicense.com
          </a>
          , an excellent resource for understanding common open source licenses. This content is open source and is available under the
          {' '}
          <a href="https://creativecommons.org/licenses/by/3.0/">CC-BY-3.0</a>
          {' '}
          license, which dictates that I can share and adapt its content, so long as: I attribute it, indicate if changes were made, and don't apply legal terms or technical measures that contradict the original license.
        </p>
      </div>
    );
  }
}

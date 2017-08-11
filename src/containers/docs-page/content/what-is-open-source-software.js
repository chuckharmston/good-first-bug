import React from 'react';

import DocsPage from '../index';

export default class WhatIsOpenSourceSoftware extends DocsPage {
  renderTitle() {
    return 'What is open source software?';
  }

  renderContent() {
    return (
      <div>
        <p>
          It's hard to pin down a specific definition; open-source software means many different things to many different people. In general, the term refers to software with the following characteristics:
        </p>
        <ul>
          <li>
            <strong>Developed openly</strong>
            {' '}
            – with processes and procedures that happen in the open.
          </li>
          <li>
            <strong>An eye toward community</strong>
            {' '}
            – involving the broad community in feedback and direction wherever possible.
          </li>
          <li>
            <strong>Source code is available</strong>
            {' '}
            – the source code of the program is available for inspection.
          </li>
          <li>
            <strong>May be freely distributed and modified</strong>
            {' '}
            – end users are legally allowed to distribute, modify, and distribute modifications of the source code.
          </li>
          <li>
            <strong>No discrimination</strong>
            {' '}
            – per the
            {' '}
            <a href="https://opensource.org/osd">Open Source Initiative</a>
            , open source licenses must not discriminate against people, groups of persons, or fields of endeavor (e.g. software is not open source if you exclude your competitors in your license).
          </li>
        </ul>
        <h3>Advantages</h3>
        <p>There are many advantages to the open-source model:</p>
        <ul>
          <li>
            <strong>Quality</strong>
            {' '}
            – popular open-source libraries are generally pretty high-quality. By nature of the process, there are more eyes on it as it's passed around and more people use, test, and contribute.
          </li>
          <li>
            <strong>Security</strong>
            {' '}
            – similarly, it's much easier to verify the security properties of software you're using if you can inspect it's source code.
          </li>
          <li>
            <strong>Free (as in beer)</strong> – it does not cost money to use.
          </li>
          <li>
            <strong>Free (as in freedom)</strong>
            {' '}
            – you're free to use and modify the software within the license terms.
          </li>
          <li>
            <strong>Reliably available</strong>
            {' '}
            – as open-source projects are in the public domain, it's much less likely to be made unavailable. If abandoned or deleted, the project can live on through forks.
          </li>
        </ul>
        <h3>What types of software are open source?</h3>
        <p>Just about every type of software can be open-sourced, including:</p>
        <ul>
          <li>
            <strong>Consumer software</strong>
            {' '}
            – such as Firefox, Atom, or Wordpress.
          </li>
          <li>
            <strong>System software</strong>
            {' '}
            – operating systems like Linux and Android; data stores like MongoDB or MySQL.
          </li>
          <li>
            <strong>Programming languages/interpreters</strong>
            {' '}
            – Ruby's MRI interpreter; Python's CPython and PyPy interpreters; and JavaScript's Node.js, SpiderMonkey in Firefox, and Chromium's V8.
          </li>
          <li>
            <strong>Libraries and tools</strong>
            {' '}
            – such as React, Git, or
            {' '}
            <a href="http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm">
              left-pad
            </a>
            .
          </li>
          <li>
            <strong>Documentation</strong>
            {' '}
            – freeCodeCamp's curriculum, AirBnB's JavaScript style guide, and even the content on which this presentation is based.
          </li>
        </ul>
        <p>
          The open source model and ethos aren't necessarily limited to software. You may see open-source data in the government and scientific communities, for example.
        </p>
      </div>
    );
  }
}

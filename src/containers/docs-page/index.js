import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DocsNavigation from '../../components/docs-navigation';
import Header from '../../components/header';

import './index.css';

export default class DocsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string
    })
  };

  static defaultProps = {
    match: {
      path: ''
    }
  };

  renderTitle() {
    return null;
  }

  renderContent() {
    return (
      <div>
        <p>
          Ut a nulla urna. Suspendisse et diam turpis. Aliquam imperdiet nisi a pulvinar convallis. Vivamus sapien augue, vestibulum at luctus quis, viverra vitae elit. Ut lobortis, nisl sed laoreet hendrerit, libero ipsum condimentum felis, eget egestas elit nisl vitae libero. Integer a egestas eros, ac porttitor lorem. Ut fringilla lectus ut efficitur volutpat. Proin eu velit quis lacus sollicitudin scelerisque pretium nec turpis. Phasellus aliquam quam nunc, vel faucibus mauris suscipit a. Curabitur libero diam, viverra vel nisi sed, interdum convallis urna.
        </p>
        <h3>Ut in gravida ante</h3>
        <p>
          Aliquam nec ultricies enim, vitae sagittis ligula. In fermentum sit amet lacus sit amet elementum. Nullam vel urna commodo, porttitor risus eu, sollicitudin augue. Praesent id tortor ac nisi tempus dictum id ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ornare tortor at molestie euismod. Nulla malesuada diam lacinia justo laoreet, vitae placerat nisi bibendum. Proin tincidunt dolor eros, sit amet tincidunt dolor semper sed. Pellentesque vitae lectus vel enim pharetra pellentesque sit amet at sem. Donec a sodales turpis. Duis finibus ex nec odio commodo feugiat. Cras ut ultricies massa.
        </p>
        <p>
          Proin a dignissim ipsum, ut elementum dui. Nullam ut nisi blandit, gravida felis vel, egestas purus. Sed congue ex erat, quis pretium felis vehicula vulputate. Cras a nibh ipsum. Nulla vehicula augue eu lectus venenatis, et ultricies ipsum aliquam. Aenean scelerisque velit a elit lacinia suscipit. Vivamus feugiat, leo eget dictum ullamcorper, dui neque commodo augue, eu ullamcorper enim augue ut neque. Aliquam pulvinar felis quis nisl dictum, non dapibus ex cursus. Nam fermentum porttitor sem, et cursus nibh posuere in.
        </p>
        <ul>
          <li>Ut eget elit nec quam semper bibendum.</li>
          <li>
            Pellentesque non turpis ullamcorper, pellentesque ipsum id, ornare ligula.
          </li>
          <li>llentesque eu libero sed tortor sagittis tristique.</li>
        </ul>
        <p>
          In non sapien eget diam sollicitudin pulvinar ut ut nisi. Nam ullamcorper urna elementum, lacinia felis ut, condimentum lorem. In hac habitasse platea dictumst. Pellentesque ultrices fermentum magna sed cursus. Donec ante nisi, vulputate et placerat ut, sodales eget risus. Donec auctor vel risus eget condimentum. Nunc vitae tristique dui. Pellentesque ut placerat mi. Sed tincidunt tortor ac arcu tempor auctor. Maecenas consectetur molestie leo, eget ultricies enim gravida nec. Ut tortor erat, interdum sed rhoncus id, scelerisque ut turpis. Praesent scelerisque diam nibh, quis aliquet elit efficitur eget. Vivamus imperdiet efficitur vestibulum. Mauris mollis magna at massa ornare, id commodo tellus porta. In blandit dolor eu odio hendrerit, ac lobortis ipsum fermentum.
          {' '}
        </p>
      </div>
    );
  }

  renderNotice() {
    return (
      <aside className="docs-page--notice">
        The content of this site is itself based on a series of open-source guides available at
        {' '}
        <a href="https://opensource.guide">opensource.guide</a>
        . It is available under the
        {' '}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          CC-BY-4.0 license
        </a>
        , and has been modified to fit this format.
      </aside>
    );
  }

  render() {
    const { match: { path } } = this.props;
    return (
      <div>
        <Header />
        <main className="docs-page">
          <div>
            <article>
              <header className="docs-page--header">
                <h2>{this.renderTitle()}</h2>
              </header>
              <main className="docs-page--content">
                {this.renderContent()}
              </main>
              {this.renderNotice()}
            </article>
            <DocsNavigation currentPath={path} />
          </div>
        </main>
      </div>
    );
  }
}

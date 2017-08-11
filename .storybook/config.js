import { addDecorator, configure } from '@kadira/storybook';
import StoryRouter from 'storybook-router';

function loadStories() {
  ['home', 'docs-page', 'tasks'].forEach(container =>
    require(`../src/containers/${container}/stories`)
  );
  [
    'button',
    'docs-intro',
    'docs-navigation',
    'footer',
    'header',
    'intro',
    'labels',
    'project-intro',
    'skill-intro',
    'task',
    'task-list'
  ].forEach(component => require(`../src/components/${component}/stories`));
}
addDecorator(StoryRouter());
configure(loadStories, module);

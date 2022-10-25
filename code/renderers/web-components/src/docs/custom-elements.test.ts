/* eslint-disable no-underscore-dangle */
// @ts-expect-error (Converted from ts-ignore)
import global from 'global';

import { extractArgTypes, extractComponentDescription } from './custom-elements';
import customElementsManifest from './__testfixtures__/custom-elements.json';

declare global {
  interface Window {
    __STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__: any;
  }
}

const { window } = global;

describe('extractArgTypes', () => {
  beforeEach(() => {
    window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__ = customElementsManifest;
  });

  afterEach(() => {
    window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__ = undefined;
  });

  describe('events', () => {
    it('should map to an action event handler', () => {
      const { onSbHeaderCreateAccount } = extractArgTypes('sb-header');

      expect(onSbHeaderCreateAccount).toEqual({
        name: 'onSbHeaderCreateAccount',
        action: { name: 'sb-header:createAccount' },
        table: { disable: true },
      });
    });

    it('should map to a regular item', () => {
      const { 'sb-header:createAccount': item } = extractArgTypes('sb-header');

      expect(item).toEqual({
        name: 'sb-header:createAccount',
        required: false,
        description: 'Event send when user clicks on create account button',
        type: { name: 'void' },
        table: {
          category: 'events',
          type: { summary: 'CustomEvent' },
          defaultValue: { summary: undefined },
        },
      });
    });
  });

  describe('members', () => {
    it('should map to a method item with distinct name', () => {
      const { doClose: item } = extractArgTypes('sb-dialog-working');

      expect(item).toEqual({
        description: 'Close the dialog',
        name: 'doClose',
        required: false,
        table: {
          category: 'properties',
          defaultValue: { summary: undefined },
          type: { summary: undefined },
        },
        type: { name: undefined },
      });
    });

    // FIXME: The current implementation of mapData cannot deal clashing names, e.g., member vs. event
    it.skip('should map to a method item with clashing event name', () => {
      const { 'event#close': item } = extractArgTypes('sb-dialog-broken');

      expect(item).toEqual({
        description: 'Close the dialog',
        name: 'close',
        required: false,
        table: {
          category: 'properties',
          defaultValue: { summary: undefined },
          type: { summary: undefined },
        },
        type: { name: undefined },
      });
    });
  });
});

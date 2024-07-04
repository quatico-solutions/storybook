import type { ReactElement } from 'react';
import { type Root, hydrateRoot } from 'react-dom/client';

// A map of all rendered React 18 nodes
const nodes = new Map<Element, Root>();

// similar to renderElement from code/lib/react-dom-shim/src/react-18.tsx
// but perform hydration not rendering
export const hydrateElement = async (node: ReactElement, el: Element) => {
  return new Promise((resolve) => {
    const root = hydrateRoot(el, node);
    nodes.set(el, root);
    resolve(null);
  });
};

export const unmountElement = (el: Element) => {
  const root = nodes.get(el);

  if (root) {
    root.unmount();
    nodes.delete(el);
  }
};

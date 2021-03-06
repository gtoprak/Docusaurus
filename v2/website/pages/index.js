/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import Helmet from 'react-helmet';

import classnames from 'classnames';

import styles from './styles.module.css';

const FEATURE_INTERVAL = 3000;
const FEATURES = [
  {
    title: 'Powered by Markdown',
    description: (
      <p>
        Save time and focus on your projects documentation. Simply write docs
        and blog posts with Markdown and Docusaurus will publish a set of static
        html files ready to serve.
      </p>
    ),
    icon: '/img/markdown.png',
  },
  {
    title: 'Built Using React',
    description: (
      <p>
        Extend or customize your project's layout by reusing React. Docusaurus
        can be extended while reusing the same header and footer.
      </p>
    ),
    icon: '/img/react.svg',
  },
  {
    title: 'Ready for Translations',
    description: (
      <p>
        Localization comes pre-configured. Use Crowdin to translate your docs
        into over 70 languages.
      </p>
    ),
    icon: '/img/translation.svg',
  },
  {
    title: 'Document Versioning',
    description: (
      <p>
        Support users on all versions of your project. Document versioning helps
        you keep documentation in sync with project releases.
      </p>
    ),
    icon: '/img/versioning.svg',
  },
  {
    title: 'Document Search',
    description: (
      <p>
        Make it easy for your community to find what they need in your
        documentation. We proudly support Algolia documentation search.
      </p>
    ),
    icon: '/img/search.svg',
  },
];

const QUOTES = [
  {
    thumbnail: '/img/christopher-chedeau.jpg',
    name: 'Christopher "vjeux" Chedeau',
    title: 'Lead Prettier Developer',
    text: (
      <p>
        I've helped open source many projects at Facebook and every one needed a
        website. They all had very similar constraints: the documentation should
        be written in markdown and be deployed via GitHub pages. None of the
        existing solutions were great, so I hacked my own and then forked it
        whenever we needed a new website. I’m so glad that Docusaurus now exists
        so that I don’t have to spend a week each time spinning up a new one.
      </p>
    ),
  },
  {
    thumbnail: '/img/hector-ramos.png',
    name: 'Hector Ramos',
    title: 'Lead React Native Advocate',
    text: (
      <p>
        Open source contributions to the React Native docs have skyrocketed
        after our move to Docusaurus. The docs are now hosted on a small repo in
        plain markdown, with none of the clutter that a typical static site
        generator would require. Thanks Slash!
      </p>
    ),
  },
  {
    thumbnail: '/img/ricky-vetter.jpg',
    name: 'Ricky Vetter',
    title: 'ReasonReact Developer',
    text: (
      <p>
        Docusaurus has been a great choice for the ReasonML family of projects.
        It makes our documentation consistent, i18n-friendly, easy to maintain,
        and friendly for new contributors.
      </p>
    ),
  },
];

function Home() {
  const [featureIndex, setFeatureIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setFeatureIndex(
        prevFeatureIndex => (prevFeatureIndex + 1) % FEATURES.length,
      );
    }, FEATURE_INTERVAL);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Helmet key={featureIndex}>
        <title>Docusaurus</title>
      </Helmet>
      <div className={classnames(styles.section, styles.banner)}>
        <div className={classnames(styles.sectionInner, styles.bannerInner)}>
          <h1 className={styles.header}>Docusaurus</h1>
          <h2 className={styles.subtitle}>
            Easy to maintain Open Source
            <br />
            Documentation websites
          </h2>
          <div className={styles.headerLinksContainer}>
            <a className={styles.headerLink} href="">
              Get Started
            </a>
            <a
              className={classnames(styles.headerLink, styles.gitHubLink)}
              href="https://github.com/facebook/docusaurus"
              target="_blank">
              GitHub
            </a>
            <div />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.row}>
            <div className={styles.column}>
              <ul className={styles.featureList}>
                {FEATURES.map((feature, index) => (
                  <li
                    className={styles.featureListItem}
                    key={feature.title}
                    onClick={() => {
                      setFeatureIndex(index);
                    }}>
                    <a
                      className={classnames(styles.featureListLink, {
                        [styles.featureListLinkSelected]:
                          index === featureIndex,
                      })}
                      role="button">
                      {feature.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              {(() => {
                const feature = FEATURES[featureIndex];
                return (
                  <div>
                    <div className={styles.featureIconContainer}>
                      <img className={styles.featureIcon} src={feature.icon} />
                    </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          styles.section,
          styles.sectionAlt,
          styles.quotes,
        )}>
        <div className={styles.sectionInner}>
          <div className={styles.row}>
            {QUOTES.map(quote => (
              <div className={styles.column} key={quote.name}>
                <img className={styles.quoteThumbnail} src={quote.thumbnail} />
                <h3 className={styles.quoteName}>{quote.name}</h3>
                <h4 className={styles.quoteTitle}>{quote.title}</h4>
                <p className={styles.quoteText}>{quote.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

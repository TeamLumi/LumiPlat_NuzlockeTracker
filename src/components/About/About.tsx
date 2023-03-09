import { useTranslation } from 'react-i18next';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { Page } from 'common';
import { ReactComponent as MicrosoftSVG } from 'assets/svg/English_get.svg';
import nexus from 'assets/img/nexus-mods-logo.png'
import styles from './About.module.scss';

function About(): JSX.Element {
  const { t } = useTranslation('about');
  return (
    <Page header={t('about')}>
      <div className={styles.about}>
        <p>
          {'Thank you for using Nuzlocke Tracker! Me and fellow contributors are actively improving this app in our free time. This app is also currently under development. If you see anything not working properly, please let us know on our discord channel.'}
        </p>
        <p>
          {t('warning_message')}{' '}
          <a
            href="https://github.com/diballesteros/nuzlocke/wiki/How-data-storage-works"
            rel="noopener noreferrer"
            target="_blank"
          >
            How data storage works
          </a>
        </p>
        <h3>{t('credits')}:</h3>
        <ul className={styles.credits}>
          <li>
            {t('images_provided')}
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"
              title="Bulbapedia"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bulbapedia
            </a>
          </li>
          <li>
            {t('icons_made')}
            <a
              href="http://www.dariusdan.com"
              title="Darius Dan"
              rel="noopener noreferrer"
              target="_blank"
            >
              Darius Dan
            </a>{' '}
            {t('from')}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </li>
          <li>
            {t('icons_made')}
            <a
              href="http://www.roundicons.com"
              title="Roundicons Freebies"
              rel="noopener noreferrer"
              target="_blank"
            >
              Roundicons Freebies
            </a>{' '}
            {t('from')}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </li>
          <li>
            {t('icons_made')}
            <a
              href="https://www.flaticon.com/authors/nikita-golubev"
              title="Nikita Golubev"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nikita Golubev
            </a>{' '}
            {t('from')}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </li>
          <li>
            {t('icons_made')}
            <a
              href="https://www.freepik.com"
              title="Freepik"
              rel="noopener noreferrer"
              target="_blank"
            >
              Freepik
            </a>{' '}
            {t('from')}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </li>
          <li>
            {t('icons_made')}
            <a
              href="https://www.flaticon.com/authors/vectors-market"
              title="Vectors Market"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vectors Market
            </a>{' '}
            {t('from')}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </li>
          <li>
            {t('nickname_list')}
            <a
              href="https://www.findnicknames.com/pokemon-nicknames/"
              title="findnicknames"
              rel="noopener noreferrer"
              target="_blank"
            >
              Find Nicknames
            </a>
          </li>
          <li>
            {t('favicon_provided')}
            <a
              href="https://icon-icons.com/users/b1kqPGvWi4JzKkAi8Q0MR/icon-sets/"
              title="findnicknames"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mohammad Ali
            </a>{' '}
            {t('from')}
            <a
              href="https://icon-icons.com/"
              title="icon-icons"
              rel="noopener noreferrer"
              target="_blank"
            >
              Icon-icons{' '}
            </a>{' '}
            {t('under_the')}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              title="creative commons"
              rel="noopener noreferrer"
              target="_blank"
            >
              Creative Commons License
            </a>
          </li>
        </ul>
        <div className={styles.store}>
          <a
            href="https://www.nexusmods.com/pokemonbdsp/mods/1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="Download Luminescent Platinum" src={nexus} width="48" height="48"/>
            <span>Download Luminescent Platinum</span>
          </a>
        </div>
        <div className={styles.socials}>
          <a
            className={styles.socialButton}
            data-show-count="false"
            href="https://discord.gg/luminescent"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="discord" />
            <span>{t('Join')}</span>
          </a>
          <a
            className={styles.socialButton}
            href="https://github.com/TeamLumi/LumiPlat_NuzlockeTracker/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="github" />
            <span>{t('source')}</span>
          </a>
        </div>
      </div>
    </Page>
  );
}

export default About;

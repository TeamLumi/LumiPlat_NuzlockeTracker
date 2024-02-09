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
          {'Thank you for using the Nuzlocke Tracker! Me and fellow contributors are actively improving this app in our free time. This app is also currently under development. If you see anything not working properly, please let us know on our '}
           <a href="https://discord.gg/luminescent" title="Discord" rel="noopener noreferrer" target="_blank"> Discord </a> 
           {' channel or in the Report tab.'}
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
        <div>
          <h3>Features:</h3>
          <ul>
            <li>Record your encounters with detailed information, including: pokemon, level, gender, ability, nature, item and more!</li>
            <li>Accurate encounter tables for every location</li>
            <li>Level caps for all gym leaders and it's customizable!</li>
            <li>Add and edit custom games and custom encounter locations</li>
            <li>Search and filter through all encounters - including only missing encounters</li>
            <li>Export, import and share Nuzlocke runs with others!</li>
            <li>Fully integrated damage calculator</li>
            <li>Choose from legal moves that a pokemon can learn when selecting a moveset</li>
            <li>Share, add and edit custom rules and rulesets - including smart rules that alert if they're broken</li>
            <li>View overview and summary of your nuzlocke run</li>
            <li>Dupes clause alerts</li>
            <li>Works offline</li>
            <li>Nickname randomizer</li>
            <li>Details on all Gym and Elite Four pokémon and even other Bosses (in the calculator) with IVs and EVs</li>
            <li>Download a summary image</li>
            <li>Build an ideal team with the Team Builder!</li>
            <li>Quick access to details on type effectiveness and natures</li>
            <li>Encounter suggestions</li>
            <li>Soul Link integrations</li>
            <li>For best results use incognito mode and export your teams with the export button frequently.</li>
          </ul>
        </div>
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

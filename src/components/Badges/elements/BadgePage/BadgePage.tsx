import { ReactText, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Page } from 'common'; // Assuming Dropdown component is imported from a common library
import { BadgeDetail } from 'components/Badges/elements';
import DETAILS from 'constants/details';
import useStore from 'store';
import styles from './BadgePage.module.scss';
import  Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';

function BadgePage(): JSX.Element {
  const navigate = useNavigate();
  const { badge, game } = useParams();
  const { t } = useTranslation('badges');
  const selectedGame = useStore(useCallback((state) => state.selectedGame, []));
  const [selectedOption, setSelectedOption] = useState('');
  const selectedDetail =
    !!game && DETAILS[game] && !!badge && typeof Number(badge) === 'number'
      ? DETAILS[game][Number(badge)]
      : null;

  useEffect(() => {
    if (selectedGame?.value !== game || !selectedDetail) {
      navigate('/');
    }
  }, [game, navigate, selectedGame, selectedDetail]);

  const handleDropdownChange = (_: any, data: any) => {
    setSelectedOption(data.value);
  };
  
  const renderContent = () => {
    if (selectedOption && selectedDetail) {
      const selectedGameDetail = selectedDetail.find(
        (gameDetail) => gameDetail.game === selectedOption
      );
      if (selectedGameDetail) {
        return <BadgeDetail selectedDetail={selectedGameDetail} />;
      }
    }
    return null;
  };

  const dropdownOptions = selectedDetail
    ? selectedDetail.map((gameDetail) => ({
        key: gameDetail.game,
        value: gameDetail.game,
        text: gameDetail.game,
      }))
    : null;

  return (
    <Page header={t('details')}>
      <div className={styles.dropdownContainer}>
        <Dropdown
          value={selectedOption}
          onChange={handleDropdownChange}
          options={dropdownOptions}
          selection
          placeholder="Select a Trainer"
        />
      </div>
      {renderContent()}
    </Page>
  );
}

export default BadgePage;

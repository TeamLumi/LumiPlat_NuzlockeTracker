import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import NICKNAMES from 'constants/nicknames';
import useStore from 'store';
import styles from './Nickname.module.scss';

interface NicknameProps {
  encounterId: number;
  nickname?: string;
  showLabel?: boolean;
}

function Nickname({ encounterId, nickname, showLabel }: NicknameProps): JSX.Element {
  const { t } = useTranslation('tracker');
  const changeNickname = useStore((state) => state.changeNickname);
  const darkMode = useStore(useCallback((state) => state.darkMode, []));
  const [nick, setNick] = useState(nickname ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };

  const handleBlur = () => {
    changeNickname(encounterId, nick);
  };

  const handleRandomize = () => {
    changeNickname(encounterId, NICKNAMES[Math.floor(Math.random() * NICKNAMES.length)]);
  };

  return (
    <Input
      aria-label="nickname"
      className={styles.nicknameInput}
      data-testid={`nickname-${encounterId}`}
      fluid
      id={`nickname-${encounterId}`}
      maxLength={12}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={`${t('nickname')}...`}
      value={nick}
      label={t('nickname')}
    >
      {showLabel && <div className='ui label'>{t('nickname')}</div>}
      <input />
      <Button
        aria-label="randomize"
        icon="random"
        inverted={darkMode}
        onClick={handleRandomize}
        title="Randomize"
        type="button"
      />
    </Input>
  );
};
export default Nickname;

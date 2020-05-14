import React, { useState } from 'react';
import { injectIntl } from 'react-intl'
import france_flag from '../../assets/img/france.png';
import english_flag from '../../assets/img/uk.png';

const Languages = (intl) => {
  const [flagSrc, setFlagSrc] = useState('');

  const locale = intl.intl.locale;

  console.log(intl.intl);


  if (locale.language === 'en') {
    setFlagSrc('fr')
    return (
      <>
        <div>
          <img
            src={flagSrc}
            alt="France flag"
            height="42"
            width="42"
            onClick={() => locale.setLanguage('fr')}
          />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <img
            src={english_flag}
            alt="France flag"
            height="42"
            width="42"
            onClick={() => locale.setLanguage('en')}
          />
        </div>
      </>
    )
  }
}
export default injectIntl(Languages);

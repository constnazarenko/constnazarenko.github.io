import React from 'react';

import profile from '../../api/profile.json';
import Contacts from '../Contacts';
import Education from '../Education';
import NameTitle from '../NameTitle';
import Photo from '../Photo';
import Positions from '../Positions';
import './styles.scss';

export interface Profile {
  name: string;
  title: string;
  summary: string;
}

const App: React.FC = () => {
  const [isPrintable, setIsPrintable] = React.useState(false);

  React.useEffect(() => {
    document.title = `CV - ${document.title}`;
  }, []);

  const togglePrintable = () => {
    setIsPrintable((prev) => !prev);
  };

  const { name, title, summary } = profile;

  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <Photo src="/assets/static/images/face_sq.jpg" />
          <NameTitle name={name} title={title} />
        </div>
        <div className="contacts-container">
          <Contacts name={name} title={title} isPrintable={isPrintable} />
        </div>
        <div className="switch-printable">
          <a onClick={togglePrintable}>{isPrintable ? ' ' : ' Printing-friendly view'}</a>
        </div>
        <div>
          <header>
            <h2>Summary</h2>
          </header>
          <div dangerouslySetInnerHTML={{ __html: summary }} />

          <Positions heading="Professional Experience" />

          <Education heading="Education" />
        </div>
      </div>
    </div>
  );
};

export default App;

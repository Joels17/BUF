import SplitContainerImageLeft from './Components/SplitContainerImageLeft.tsx';
import SplitContainerImageRight from './Components/SplitContainerImageRight.tsx';
import SplitContainerImageTop from './Components/SplitContainerImageTop.tsx';

import Title from './Components/Title.tsx';
import jakeImage from './assets/jake.jpeg';
import groupImage from './assets/group.jpeg';
import trxImage from './assets/vert_trx.jpeg';

function App() {
  return (
    <div className='font-bebas'>
      <Title/>
      <div className="bg-neutral-content text-primary-content grid place-content-center rounded-2xl mx-auto">
        <div className="my-3 mx-3 p-6">
          <SplitContainerImageLeft imageSrc={jakeImage} imageSize="max-h-56" text="Welcome to Be Undeniable Fitness! (BUF for short) I’m Jake Semeniuk, and I’ve been a coach/Personal trainer for 4 years! I was 18 when I first started my career and I’ve loved every step of the way!"/>
          <div className="divider divider-neutral" />
          <SplitContainerImageRight imageSrc={trxImage} imageSize="max-h-44" text="with over four years of experience in coaching and personal training, I have honed my skills in guiding individuals towards their fitness goals with results-driven programming."/>
          <div className="divider divider-neutral" />
          <SplitContainerImageTop imageSrc={groupImage} imageSize="max-h-56" text="Welcome to Be Undeniable Fitness! (BUF for short) I’m Jake Semeniuk, and I’ve been a coach/Personal trainer for 4 years! I was 18 when I first started my career and I’ve loved every step of the way!"/>

        </div>
      </div>
    </div>
  )
}

export default App

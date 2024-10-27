import SplitContainerImageLeft from './components/SplitContainerImageLeft.tsx';
import SplitContainerImageRight from './components/SplitContainerImageRight.tsx';
import SplitContainerImageTop from './components/SplitContainerImageTop.tsx';

import Title from './components/Title.tsx';
import jakeImage from './assets/jake.jpeg';
import groupImage from './assets/group.jpeg';
import trxImage from './assets/vert_trx.jpeg';

function App() {
  return (
    <div className='font-nunito bg-gradient-to-tr from-black to-gray-500 '>
      <div>
        <Title/>
        <div className="card card-side bg-neutral-content shadow-xl">
  <figure>
    <img className='max-h-96'
      src={jakeImage}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>

  </div>
</div>
        <div className="bg-secondary text-primary-content grid place-content-center rounded-t-2xl mx-auto">
          <div className="text-2xl mt-5 mx-3 place-self-center">Be Undeniable</div>
          <div className="mb-3 mx-3 p-6">
            <SplitContainerImageLeft imageSrc={jakeImage} imageSize="max-h-56" text="Welcome to Be Undeniable Fitness! (BUF for short) I’m Jake Semeniuk, and I’ve been a coach/Personal trainer for 4 years! I was 18 when I first started my career and I’ve loved every step of the way!"/>
            <div className="divider divider-neutral" />
            <SplitContainerImageRight imageSrc={trxImage} imageSize="max-h-44" text="with over four years of experience in coaching and personal training, I have honed my skills in guiding individuals towards their fitness goals with results-driven programming."/>
            <div className="divider divider-neutral" />
            <SplitContainerImageTop imageSrc={groupImage} imageSize="max-h-56" text="Welcome to Be Undeniable Fitness! (BUF for short) I’m Jake Semeniuk, and I’ve been a coach/Personal trainer for 4 years! I was 18 when I first started my career and I’ve loved every step of the way!"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App

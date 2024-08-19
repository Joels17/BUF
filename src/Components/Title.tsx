import downArrow from '../assets/double-down-50.png';

function Title() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="-translate-x-16 text-4xl font-bold">
                Be
            </div>
            <div className="animate-slideleft [--slideleft-delay:1000ms] translate-x-9  flex flex-row text-4xl font-bold justify-items-end">
                
                <div className="animate-fadeout [--fadeout-delay:100ms]">
                    YO
                </div>
                <div>
                    U
                </div>
                <div className="animate-fadein [--fadein-delay:2000ms] opacity-0">
                    ndeniable
                </div>
            </div>
            <div className="animate-fadein [--fadein-delay:2000ms] opacity-0 -translate-x-6 text-4xl font-bold">
                Fitness
            </div>

            <div className="absolute bottom-0 ">
                <img className="animate-bounce" src={downArrow}/>
            </div>
            
        </div>
    );
}

export default Title;
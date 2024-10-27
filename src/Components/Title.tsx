
function Title() {
    return (
        <div className="flex flex-col justify-center p-6 text-base-200 text-4xl font-semibold">
            <div>
                BE
            </div>
            <div className="animate-slideleft [--slideleft-delay:1000ms] flex flex-row text-4xl justify-items-end">
                
                <div className="animate-fadeout [--fadeout-delay:100ms]">
                    YO
                </div>
                <div>
                    U
                </div>
                <div className="animate-fadein [--fadein-delay:2000ms] opacity-0">
                    NDENIABLE
                </div>
            </div>
            <div className="animate-fadein [--fadein-delay:2000ms] opacity-0 text-4xl translate-x-0.5">
                FITNESS
            </div>
        </div>
    );
}

export default Title;
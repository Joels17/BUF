interface SplitContainerImageLeftProps {
    text: string,
    imageSrc: string,
    imageSize: string
}

function SplitContainerImageLeft({ text, imageSrc, imageSize } : SplitContainerImageLeftProps) {
    return (
    <div className="flex flex-row">
        <img className={`${imageSize} rounded`} src={imageSrc}/>
        <div className="m-2">{text}</div>
    </div>  
    );
}

export default SplitContainerImageLeft;
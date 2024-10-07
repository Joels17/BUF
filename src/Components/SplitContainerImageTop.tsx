interface SplitContainerImageTopProps {
    text: string,
    imageSrc: string,
    imageSize: string
}

function SplitContainerImageTop({ text, imageSrc, imageSize } : SplitContainerImageTopProps) {
    return (
    <div className="flex-col">
        <img className={`${imageSize} rounded`} src={imageSrc}/>
        <div className="m-2">{text}</div>
    </div>  
    );
}

export default SplitContainerImageTop;
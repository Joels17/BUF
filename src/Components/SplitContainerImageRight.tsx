interface SplitContainerImageRightProps {
    text: string,
    imageSrc: string,
    imageSize: string
}

function SplitContainerImageRight({ text, imageSrc, imageSize } : SplitContainerImageRightProps) {
    return (
    <div className="flex flex-row">
        <div className="m-2">{text}</div>
        <img className={`${imageSize} rounded`} src={imageSrc}/>
    </div>  
    );
}

export default SplitContainerImageRight;
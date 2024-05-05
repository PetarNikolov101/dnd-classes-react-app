
export default function Class({ image, text, link, title }) {
    return (
        <div>
            <img className="class_pic" src={image} alt={title} />
            <a href={link} target="_blank" rel="noopener noreferrer"><h5>{title}</h5></a>
            <p className="class_text">
                {text}
            </p>
        </div>
    );
}
import 'Collapse.scss'

 export function Collapse ({ content, title }) {
    const [isOpen, setIsOpen] = useState(false);
    const display = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div className="collapse__dropdown__title">
                <h2>{title}</h2>
                <p onClick={display}>
                    {isOpen ? (<i className="fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)}
                </p>
            </div>
            <div className="collapse__dropdown__content">
                {isOpen && <div>{content}</div>}
            </div>
        </div>
    )
}

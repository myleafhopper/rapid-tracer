import './MainContent.css';

export default function MainContent(props) {

    return (
        <div id="MainContent" className="col h-100 scrollbar main-content">
            {props.children}
        </div>
    );
}
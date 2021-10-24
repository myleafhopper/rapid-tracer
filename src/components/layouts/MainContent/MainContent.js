import css from './MainContent.module.css';

export default function MainContent(props) {

    const classes = `col h-100 scrollbar ${css['main-content']}`;

    return (
        <div id="MainContent" className={classes}>
            {props.children}
        </div>
    );
}
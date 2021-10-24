import css from './RightSideBar.module.css';

export default function RightSideBar(props) {

    const classes = `h-100 scrollbar ${css['right-side-bar']}`;

    return (
        <div id="RightSideBar" className={classes}>
            {props.children}
        </div>
    );
}
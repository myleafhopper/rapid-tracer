import css from './LeftSideBar.module.css';

export default function LeftSideBar(props) {

    const classes = `h-100 scrollbar ${css['left-side-bar']}`;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}
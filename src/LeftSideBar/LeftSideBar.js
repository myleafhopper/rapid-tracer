import './LeftSideBar.css';

export default function LeftSideBar(props) {

    return (
        <div id="LeftSideBar" className="h-100 scrollbar left-side-bar">
            {props.children}
        </div>
    );
}
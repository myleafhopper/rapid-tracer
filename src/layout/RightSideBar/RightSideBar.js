import './RightSideBar.css';

export default function RightSideBar(props) {

    return (
        <div id="RightSideBar" className="h-100 scrollbar right-side-bar">
            {props.children}
        </div>
    );
}
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Content from '../Content/Content';
import RightSidebar from '../RightSidebar/RightSidebar';
import './App.css';

export default function App() {
    return (
        <div class="container-fluid App">
            <div class="row">
                <LeftSidebar />
                <Content />
                <RightSidebar />
            </div>
        </div>
    );
}
import './InformationBar.css';
import StatusIndicator from './StatusIndicator/StatusIndicator';

export default function InformationBar() {

    return (
        <div id="InformationBar" className="row p-0 m-0 information-bar">
            <StatusIndicator />
        </div>
    );
}
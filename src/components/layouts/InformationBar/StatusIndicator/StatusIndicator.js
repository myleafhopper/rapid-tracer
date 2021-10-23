import './StatusIndicator.css';

export default function StatusIndicator(props) {

    const status = props.hasOwnProperty('status') ?
        props.status : 'Loading...';

    return (
        <div id="StatusIndicator" className="col status-indicator">
            <span className="status-indicator__text">{status}</span>
            <div className="status-indicator__spinner"><span className="spinner-border spinner-border-sm"></span></div>
            
        </div>
    );
}
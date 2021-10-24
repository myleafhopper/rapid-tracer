import css from './StatusIndicator.module.css';

export default function StatusIndicator(props) {

    const classes = `col ${css['status-indicator']}`;
    const status = props.hasOwnProperty('status') ?
        props.status : 'Loading...';

    return (
        <div id="StatusIndicator" className={classes}>
            <span>{status}</span>
            <div>
                <span className="spinner-border spinner-border-sm"></span>
            </div>
        </div>
    );
}
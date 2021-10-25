import css from './StatusIndicator.module.css';

export default function StatusIndicator(props) {

    const classes = `col ${css['status-indicator']}`;
    const status = props.hasOwnProperty('status') ?
        props.status : 'Loading...';

    const iconClass = 'spinner-border spinner-border-sm';
    const icon = status === 'Loading...' && <span className={iconClass}></span>;

    return (
        <div id="StatusIndicator" className={classes}>
            <span>{icon}</span>
            <span>{status}</span>
        </div>
    );
}
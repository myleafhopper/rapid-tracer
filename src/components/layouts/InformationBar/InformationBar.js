import css from './InformationBar.module.css';
import StatusIndicator from './StatusIndicator/StatusIndicator';

export default function InformationBar() {

    const classes = `row p-0 m-0 ${css['information-bar']}`;

    return (
        <div className={classes}>
            <StatusIndicator />
        </div>
    );
}
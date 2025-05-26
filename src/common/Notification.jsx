const Notification = ({notifymessage,error,success}) => {
    return(
        <div className={`notify-bg ${error ? 'error' : ''} ${success ? 'success' : ''}`}>
            {notifymessage}
        </div>
    )
}
export default Notification;
 
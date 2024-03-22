import { useEffect, useState } from 'react';
import { ALERT_TYPES } from '../../constants/alertConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCircleCheck, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Alert.css';

function Alert(props) {
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        if(props.duration) {
            const timeoutID = setTimeout(() => {
                setIsVisible(false)
            }, +props.duration*1000)

            return () => {
                clearTimeout(timeoutID)
            }
        }
    }, [isVisible])

    return <>
    {isVisible ? <div className={`alert 
                            ${props.size ? props.size : 'medium'}
                            ${props.type ? props.type : ''}
                            ${!props.version ? '' : props.version === 'outlined' ? props.version : `${props.type}-${props.version}`}
                            ${props.placement ? props.placement : ''}
                            `}
                      style={props.sx ? props.sx : null} >
        <span>
            {props.type === ALERT_TYPES.SUCCESS &&  <FontAwesomeIcon icon={faCircleCheck}/>}
            {props.type === ALERT_TYPES.INFO &&  <FontAwesomeIcon icon={faCircleInfo}/>}
            {props.type === ALERT_TYPES.WARNING &&  <FontAwesomeIcon icon={faTriangleExclamation}/>}
            {props.type === ALERT_TYPES.ERROR &&  <FontAwesomeIcon icon={faCircleInfo}/>}        
        </span>
        {props.children}
        <span onClick={() => setIsVisible(false)}>
            {props.closeIcon && <FontAwesomeIcon icon={faXmark} />}
        </span>
    </div> : ''}
    </>
}

export default Alert;
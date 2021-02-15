// React Basic

// Assets

export default function Button(props) {

    return (
        <div className={'button'} style={props.style}>
            <span>{props.title}</span>
            <div className={'blue-button'}>
                <span className={props.type? 'jumping':''}>{props.blueButtonTitle}</span>
            </div>
        </div>
    )

}

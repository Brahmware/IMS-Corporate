import React from 'react';
import SVG from 'react-inlinesvg';

const RemoteIconComponent = (props) => {
    return (
        <React.Fragment>
            {
                props.viewbox ?
                    <SVG
                        src={props.icon}
                        className={props.class ? props.class : null}
                        viewBox={props.viewbox ? props.viewbox : null}
                    /> :
                    <SVG
                        src={props.icon}
                        className={props.class ? props.class : null}
                    />
            }
        </React.Fragment>
    )
}

export default RemoteIconComponent;
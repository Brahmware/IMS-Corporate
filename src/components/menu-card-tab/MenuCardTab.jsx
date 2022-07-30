import React from 'react'

const MenuCardTab = (props) => {
    const title = props.tabdata.title;
    const subtitle = props.tabdata.subtitle;
    const content = props.tabdata.content;
    return (
        <div
            id={props.id}
            className={`tab-box m-1 bg-${(props.active) ? "white" : "primary"}`} onClick={() => { props.setactivetab(props.ids) }}
        >
            <div
                className={`tab-box-heading ${props.active ? "text-black" : "text-white"}`}
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: title
                    }}
                />
            </div>
            <div
                className={`tab-box-subtitle content pb-3 ${props.active ? "text-primary" : "text-white"}`}
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: subtitle
                    }}
                />
            </div>
            <div
                className={`divider w-50 ${props.active ? "bg-primary" : "bg-white"}`}
            />
            <div
                className={`tab-box-price content py-2 text-black`}
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: content
                    }}
                />
            </div>
        </div>
    )
}

export default MenuCardTab


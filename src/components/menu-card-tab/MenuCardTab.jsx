import React from 'react'

const MenuCardTab = (props) => {
    const title = props.tabdata.title;
    const subtitle = props.tabdata.subtitle;
    const content = props.tabdata.content;
    return (

        <div className={`tab-box ps-4 pb-4 pt-5 m-1 bg-${(props.active) ? "white" : "primary"}`} onClick={() => { props.setactivetab(props.id) }}>
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
                className={`content pb-2 ${props.active ? "text-primary" : "text-white"}`}
                style={{ "fontSize": "1.5em" }}
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
                className={`content py-2 text-black`}
                style={{ "fontSize": "0.8em" }}
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


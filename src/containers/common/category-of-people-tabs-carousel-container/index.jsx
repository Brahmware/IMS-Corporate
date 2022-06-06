import React, { useRef, useState } from 'react'
import FilledButton from '../../../components/buttons/FilledButton';
import CardsCarouselContainer from '../cards-carousel';


const CategoryOfPeopleTabsCarouselContainer = ({title, data, buttontext}) => {
    const tabsRef = useRef({});
    const [activeTab, setActiveTab] = useState(data[0].typeid);

    const handleTabClick = (event) => {
        event.preventDefault();
        setActiveTab(event.target.id);
    }

    const relatedData = data.filter(data => data.typeid === activeTab)[0].members;

    return (
        <div className='category-of-people-tabs-carousel-container noselect'>
            <div className="container">
                <div
                    className="title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <span>{title}</span>
                </div>
            </div>
            <div
                className="container tabs-container"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='600'
            >
                <div className="tabs-section">
                    {
                        data.map((type, key) => {
                            return (
                                <div
                                    key={key}
                                    className="each-tab"
                                    id={type.typeid}
                                    onClick={handleTabClick}
                                    ref={element => tabsRef.current[type.typeid] = element}
                                >
                                    <div className="tab-name subtitle">
                                        <span>{type.typename}</span>
                                    </div>
                                    <div className="marker-holder">
                                        <div className={type.typeid === activeTab ? 'marker active' : 'marker'} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="divider tabs-divider" />
            </div>
            <div className="cards-carousel-container">
                <CardsCarouselContainer data={relatedData} />
            </div>
            <div
                className="bottom-button"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='900'
            >
                <FilledButton text={buttontext} class={'black-button'}/>
            </div>
        </div>
    )
}

export default CategoryOfPeopleTabsCarouselContainer
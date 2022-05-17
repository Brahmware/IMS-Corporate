import React from 'react'
import FilledButton from '../../components/buttons/FilledButton';
import PricingContainer from '../common/pricingContainer';

const HomeOurSymbol = (props) => {
    const pricingData = props.data.elements[0];
    return (
        <div className="section-with-padding home-our-symbol-section">
            <div className="container heading-container">
                <div
                    className="title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: pricingData.title
                        }}
                    />
                </div>
                <div
                    className="subtitle"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: pricingData.subtitle
                        }}
                    />
                </div>
            </div>
            <div
                className='divider'
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='900'
            />
            <div className="pricing-part">
                <PricingContainer tabledata={pricingData.pricecards} />
            </div>
            <div
                className="action-button"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='1200'
            >
                <FilledButton class="black-button" text="VIEW MORE" />
            </div>
        </div>
    )
}

export default HomeOurSymbol;
import React from 'react'
import FilledButton from '../../components/buttons/FilledButton';
import PricingContainer from '../common/pricingContainer';

const HomeOurSymbol = (props) => {
    const pricingData = props.data.elements[0];
    return (
        <div className="section-with-padding home-our-symbol-section">
            <div className="container heading-container">
                <div className="title">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: pricingData.title
                        }}
                    />
                </div>
                <div className="subtitle">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: pricingData.subtitle
                        }}
                    />
                </div>
            </div>
            <div className='divider' />
            <div className="pricing-part">
                <PricingContainer tabledata={pricingData.pricecards} />
            </div>
            <div className="action-button">
                <FilledButton class="black-button" text="VIEW MORE" />
            </div>
        </div>
    )
}

export default HomeOurSymbol;
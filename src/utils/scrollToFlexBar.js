const scrollToFlexBar = () => {

    const headerHeight = document.getElementsByClassName('header')[0] ? document.getElementsByClassName('header')[0].getBoundingClientRect().height : null
    const tabsElementTop = document.getElementsByClassName('stacked-fluid-cards-container')[0] ? document.getElementsByClassName('stacked-fluid-cards-container')[0].getBoundingClientRect().top : null
    const scrollYPosition = headerHeight && tabsElementTop && tabsElementTop - headerHeight + window.pageYOffset - 50

    scrollYPosition && window.scrollTo({ top: scrollYPosition, behavior: 'smooth' });
}

export default scrollToFlexBar;
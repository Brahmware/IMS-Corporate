const scrollToNavigationPanel = () => {

    const headerHeight = document.getElementsByClassName('header')[0] ? document.getElementsByClassName('header')[0].getBoundingClientRect().height : null
    const tabsElementTop = document.getElementsByClassName('tabs-container')[0] ? document.getElementsByClassName('tabs-container')[0].getBoundingClientRect().top : null
    const scrollYPosition = headerHeight && tabsElementTop && tabsElementTop - headerHeight + window.pageYOffset + 1

    scrollYPosition && window.scrollTo({ top: scrollYPosition, behavior: 'smooth' });
}

export default scrollToNavigationPanel;
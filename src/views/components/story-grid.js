import React, { useState } from "react";
import { TabContent, TabPane } from "reactstrap";

const StoryGrid = (props) => {
    const [activeTab, setActiveTab] = useState("all-pane");
    return (
        <>

            <header id="home">
                <a href="#"><img src="assets/images/techlogo.png"
                    className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
                <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey">
                    <i className="fa fa-bars"></i>
                </span>
                <div className="w3-container">
                    <h1><b>JOURNEY MAPS</b></h1>
                    <div className="w3-section w3-bottombar w3-padding-16">
                        <span className="w3-margin-right">Category:</span>
                        <button className={activeTab === "all-pane" ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} className={activeTab === "all-pane" ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab('all-pane')}>ALL</button>
                        <button className={activeTab === "my-stories-pane" ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab('my-stories-pane')}><i className="fa fa-diamond w3-margin-right"></i> My Stories
                        </button>
                        <button className={activeTab === "saved-storiess-pane" ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab('saved-stories-pane')}><i className="fa fa-folder"></i> Saved Stories
                        </button>
                        <button className={activeTab === "inbox-pane" ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab('inbox-pane')}> <i className="fa fa-inbox"></i> Inbox </button>
                        <button className={activeTab === "new-category-pane" ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab('new-category-pane')}><i className="fa fa-bars"></i> New Category </button>
                    </div>
                </div>
            </header>
            <TabContent activeTab={activeTab} className="w3-row-padding">
                <TabPane tabId="inbox-pane"><h2>Inbox</h2></TabPane>
                <TabPane tabId="saved-stories-pane"><h2>Saved Stories</h2></TabPane>
                <TabPane tabId="my-stories-pane"><h2>My Stories</h2></TabPane>
                <TabPane tabId="new-category-pane"><h2>New Category</h2></TabPane>
                <TabPane tabId="all-pane">
                    <div className="w3-third w3-container w3-margin-bottom card">
                        <img src="assets/images/image1.jpg" alt="John Leroy" className="w3-hover-opacity image" />
                        <div className="w3-container w3-white">
                            <p><b>John Leroy</b></p>
                            <p className="title"><b>Google Developer</b></p>
                            <p><b><em>Alabama State University Alumni</em></b></p>
                            <p>I never thought I could make it this far, but the trials and challenges that faced throughout my
                                journey helped me be the person I am today!</p>
                            <p><button className="button">Explore Story</button></p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom card">
                        <img src="assets/images/image1.jpg" alt="John Leroy" className="w3-hover-opacity image" />
                        <div className="w3-container w3-white">
                            <p><b>John Leroy</b></p>
                            <p className="title"><b>Google Developer</b></p>
                            <p><b><em>Alabama State University Alumni</em></b></p>
                            <p>I never thought I could make it this far, but the trials and challenges that faced throughout my
                                journey helped me be the person I am today!</p>
                            <p><button className="button">Explore Story</button></p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom card">
                        <img src="assets/images/image1.jpg" alt="John Leroy" className="w3-hover-opacity image" />
                        <div className="w3-container w3-white">
                            <p><b>John Leroy</b></p>
                            <p className="title"><b>Google Developer</b></p>
                            <p><b><em>Alabama State University Alumni</em></b></p>
                            <p>I never thought I could make it this far, but the trials and challenges that faced throughout my
                                journey helped me be the person I am today!</p>
                            <p><button className="button">Explore Story</button></p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom card">
                        <img src="assets/images/image1.jpg" alt="John Leroy" className="w3-hover-opacity image" />
                        <div className="w3-container w3-white">
                            <p><b>John Leroy</b></p>
                            <p className="title"><b>Google Developer</b></p>
                            <p><b><em>Alabama State University Alumni</em></b></p>
                            <p>I never thought I could make it this far, but the trials and challenges that faced throughout my
                                journey helped me be the person I am today!</p>
                            <p><button className="button">Explore Story</button></p>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
            <div className="w3-row-padding"></div>
        </>
    )
};

export default StoryGrid;
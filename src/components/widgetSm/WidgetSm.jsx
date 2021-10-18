import React from 'react'
import './widgetSm.css';
import {Visibility} from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmList">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/72913965?v=4" 
                        alt=""  
                        className="widgetSmImg"    
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/72913965?v=4" 
                        alt=""  
                        className="widgetSmImg"    
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/72913965?v=4" 
                        alt=""  
                        className="widgetSmImg"    
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/72913965?v=4" 
                        alt=""  
                        className="widgetSmImg"    
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://avatars.githubusercontent.com/u/72913965?v=4" 
                        alt=""  
                        className="widgetSmImg"    
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

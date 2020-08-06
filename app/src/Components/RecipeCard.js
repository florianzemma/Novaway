import React, { useState, useEffect } from 'react';
import { Avatar, Tooltip} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FaRegClipboard, FaWeight } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import CookLogo from '../assets/images/icon.png'

function RecipeCard(props) {
    //Fake users
    const avatars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];

    //set Window width and height
    const [width , setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //Udpate window height and width
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    },[width]);

    //Avatar size and restriction
    let maxAvatar = 9 ;
    let avatarSize = 64 ;

    //Change avatar size and restriction on window resize
    if( width < 1000){
        maxAvatar = 7 ;
        avatarSize = 50 ;
    }
    if( width < 530 ){
        maxAvatar = 4 ;
        avatarSize = 40 ;
    }
    if( width < 400){
        maxAvatar = 5 ;
        avatarSize = 25 ;
    }

    // Display dinamically avatars
    const displayAvatar = () =>{
        return(
        avatars.map( (avatar, index) => {
        return(
            <Tooltip key = {index} title = {props.UserName} placement = "top">
            <Avatar
                size = { avatarSize }
                style = {{
                backgroundColor: '#87d068',
                }}
                icon = {<UserOutlined />}
            />
            </Tooltip>
            )
        })
    )}
    return (
        <div className = "recipeCard">
            <div className = "recipeImage">
                <Avatar.Group
                    style = {{ marginBottom : "15px" }}
                    maxCount = { maxAvatar }
                    maxStyle = {{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                    }}
                >
                {displayAvatar()}
                </Avatar.Group>
            </div>

            <div className = "recipeInfos">
                <div className = "recipeInfosHeader">
                    <FaRegClipboard size = { 50 } />
                    <div className = "recipeInfosHeaderText">
                    <p>DOWNLOAD</p>
                    <p>RECIPE</p>
                    </div>
                </div>

                <div className = "recipeInfosContent">
                    <div className = "recipe">
                        <div className = "recipeTitle">
                            <h1 style = {{ fontWeight : "bolder", fontStyle : "italic"}}>{props.RecipeName}</h1>
                            <p style = {{ margin : 5 }}>{props.RecipeDesc}</p>
                        </div>

                        <div className = "infos">
                            <div className = "row">
                                <AiOutlineClockCircle size = {20} style = {{ marginRight : "10px"}}/> 
                                <p>{props.RecipeTime}</p>
                            </div>

                            <div className = "row">
                                <FaWeight size = {20} style = {{ marginRight : "10px"}} />
                                <p>{`${props.RecipeCalories} calories`}</p>
                            </div>
                        </div>
                    </div>

                    <div className = "dividerContainer">
                        <div className = "divider"></div>
                    </div>

                    <div className = "vote">
                        <div className = "rating">
                            <p className = "rate" style = {{color : "#D96C51", fontWeight : "bold", margin : 0}}>{props.RecipeRate}</p>
                            <p className = "votes" style = {{color : "#D96C51", margin : 0 }}>{`${props.RecipeVotes} votes`}</p>
                        </div>

                        <div className = "logo">
                            <img  alt = "cook logo" src = {CookLogo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard

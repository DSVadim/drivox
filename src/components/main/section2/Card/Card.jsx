import "./card.scss"
function Card(props){
    return(
        <div className={"card"}>
            <img className={"card__img"} src={props.img}/>
            <p className={"card__title"}>{props.title}</p>
            <div className={"card-block1"}>
                <div className={"card-block1__textbox"}>
                    <p className={"card-block1__textbox-text1"}>Starting at</p>
                    <p className={"card-block1__textbox-text2"}>{props.text}</p>
                </div>
                <button className={"card-block1__btn"}>Rent</button>
            </div>
        </div>
    )
}

export default Card;
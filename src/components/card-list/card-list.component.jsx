import { Component } from "react";
import Card from "../card/card.component";
import './card-list-styles.css'

class CardList extends Component{
    render(){
        // console.log(this.props.monsters)
        // console.log('render  from card list')
        const { monsters } = this.props;


        return(
            <div className="card-list">
                {monsters.map(monster =>{ 
                        return (
                        <Card monsters={monster}/>
                )})}
            </div>
        )
    }
}
export default CardList;

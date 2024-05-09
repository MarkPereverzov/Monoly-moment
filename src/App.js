import { useState } from 'react';

let color = ["brown", "red", "orange", "yellow", "green", "dark-green", "blue", "dark-blue", "purple", "dark-purple"];

function Block(props) {
  return (
    <div className="space property">
			<div className="container">
				<img src={`img/${props.image}.png`}/>
				<div className={`color-bar ${color[props.color]}`}>
					<div className="price">{props.price}$</div>
				</div>
			</div>
		</div>
  );
}

function BlockAction(props) {
  return (
    <div className="space chance">
			<div className="container">
      <img src={`img/${props.image}.png`}/>
			</div>
		</div>
  );
}

function BlockCorner(props) {
  return (
    <div className="space corner">
			<div className="container">
      <img src={`img/${props.image}.png`}/>
			</div>
		</div>
  );
}

function BlockCenter() {
  return (
    <div className="center"></div>
  );
}

function BlockUser(props) {
  return (
    <div className="user">
      <div className={`user-bar ${color[props.color]}`}></div>
        <img src={`img/user.png`}/>
        <div>
          <a>Nickname</a>
          <div className="balance">{props.balance}$</div>
        </div>
    </div>
  );
}

export default function Board() {
  return (
    <>
    <div className="userBoard">
      <BlockUser balance="1000" color="1"/>
      <BlockUser balance="1000" color="5"/>
      <BlockUser balance="2000" color="7"/>
      <BlockUser balance="2000" color="8"/>
    </div>
    <div class="board">
      <BlockCenter/>
      <BlockCorner image="start"/>
      <div className="row horizontal-row bottom-row">
        <Block image="hp" color="1" price="100"/>
        <Block image="dell" color="1" price="200"/>
        <BlockAction image="question"/>
        <Block image="xiaomi" color="1" price="300"/>
        <Block image="honda" color="0" price="1000"/>
        <Block image="unity" color="3" price="500"/>
        <Block image="unreal" color="3" price="600"/>
        <BlockAction image="question"/>
        <Block image="github" color="3" price="700"/>
      </div>
      <BlockCorner image="go-to-jail"/>
      <div className="row vertical-row left-row">
        <Block image="amazon" color="8" price="100"/>
        <Block image="opencart" color="8" price="100"/>
        <BlockAction image="question-left"/>
        <Block image="shopee" color="8" price="100"/>
        <Block image="renault" color="0" price="1000"/>
        <Block image="nike" color="6" price="100"/>
        <Block image="new-york" color="6" price="100"/>
        <BlockAction image="question-left"/>
        <Block image="adidas" color="6" price="100"/>
      </div>
      <BlockCorner image="jail"/>
      <div className="row horizontal-row top-row">
        <Block image="rockstar" color="7" price="100"/>
        <BlockAction image="question"/>
        <Block image="uplay" color="7" price="100"/>
        <Block image="apple" color="5" price="100"/>
        <Block image="suzuki" color="0" price="1000"/>
        <Block image="snapchat" color="4" price="100"/>
        <Block image="whatsapp" color="4" price="100"/>
        <BlockAction image="question"/>
        <Block image="discord" color="4" price="100"/>
      </div>
      <BlockCorner image="chance"/>
      <div className="row vertical-row right-row">
        <Block image="spotify" color="2" price="100"/>
        <Block image="soundcloud" color="2" price="100"/>
        <Block image="deezer" color="2" price="100"/>
        <BlockAction image="question-right"/>
        <Block image="audi"color="0" price="1000"/>
        <Block image="microsoft" color="5" price="100"/>
        <Block image="xbox" color="9" price="100"/>
        <BlockAction image="question-right"/>
        <Block image="play-station" color="9" price="100"/>
      </div>
    </div>
    </>
  );
}

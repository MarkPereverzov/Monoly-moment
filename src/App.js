import { useState } from 'react';

let price = 100;
let colors = ["brown", "red", "orange", "yellow", "green", "dark-green", "blue", "dark-blue", "purple", "dark-purple"];
let images = ["unity", "unreal", "github", "audi", "amazon", "opencart", "shopee", "nike", "new-york", "adidas", "suzuki", "apple", "microsoft", "rockstar", "uplay", "play-station", "honda", "hp", "dell", "xiaomi", "spotify", "soundcloud", "deezer", "renault", "discord", "snapchat", "whatsapp"];

function Block() {
  return (
    <div className="space property">
			<div className="container">
				<img src={`img/${images[0]}.png`}/>
				<div className={`color-bar ${colors[0]}`}>
					<div className="price">{price}$</div>
				</div>
			</div>
		</div>
  );
}

function BlockAction() {
  return (
    <div className="space chance">
			<div className="container">
      <img src={`img/${images[1]}.png`}/>
			</div>
		</div>
  );
}

function BlockCorner() {
  return (
    <div className="space corner">
			<div className="container">
      <img src={`img/${images[2]}.png`}/>
			</div>
		</div>
  );
}

function BlockCenter() {
  return (
    <div className="center"></div>
  );
}

export default function Board() {
  return (
    <>
    <BlockCenter/>
    <BlockCorner/>
    <div className="row horizontal-row bottom-row">
      <Block/>
      <Block/>
      <BlockAction/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <BlockAction/>
      <Block/>
    </div>
    <BlockCorner/>
    <div className="row vertical-row left-row">
      <Block/>
      <Block/>
      <BlockAction/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <BlockAction/>
      <Block/>
    </div>
    <BlockCorner/>
    <div className="row horizontal-row top-row">
      <Block/>
      <BlockAction/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <BlockAction/>
      <Block/>
    </div>
    <BlockCorner/>
    <div className="row vertical-row right-row">
      <Block/>
      <Block/>
      <Block/>
      <BlockAction/>
      <Block/>
      <Block/>
      <Block/>
      <BlockAction/>
      <Block/>
    </div>
    </>
  );
}

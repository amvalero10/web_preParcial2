import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";

import locale_Es from "./locales/es.json"
import locale_En from "./locales/en.json"

import MovieList from './components/MovieList.js'

//var lang = 'en'
var lang = navigator.language.substring(0,2)
var localM;

console.log(lang)

lang === "es"? localM=locale_Es  : localM=locale_En;


ReactDOM.render(

<IntlProvider locale={lang} messages={localM}>
  <MovieList/> 
</IntlProvider>, document.getElementById("root")
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

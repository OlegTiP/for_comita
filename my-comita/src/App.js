import React, { useState } from 'react';
import './scss/libs/_normalize.scss';
import './scss/style.scss';
import './scss/variables.scss';
// import './script.js'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Header from './components/Header';
import Identifier from './components/Identifier';
import identifiers from './assets/identifier.json';

function App() {
   
   const [searchValue, setSearchValue] = React.useState('');

   const [checkboxStates, setCheckboxStates] = useState(
      identifiers.reduce((acc, identifier) => {
        acc[identifier.id] = false; 
        return acc;
      }, {})
    );

  const handleCheckboxChange = (id) => {
   setCheckboxStates((prevState) => ({
     ...prevState,
     [id]: !prevState[id],
   }));
 };

   const activateAllCheckboxes = () => {
      const updatedCheckboxStates = Object.keys(checkboxStates).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
  
      setCheckboxStates(updatedCheckboxStates);
    };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="container">
      {isPopupVisible && (
      <div class="popup">
        <div class="popup__icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#A1E4B8" />
            <g clipPath="url(#clip0_2025_1012)">
              <path
                d="M25 16C25 18.3869 24.0518 20.6761 22.364 22.364C20.6761 24.0518 18.3869 25 16 25C13.6131 25 11.3239 24.0518 9.63604 22.364C7.94821 20.6761 7 18.3869 7 16C7 13.6131 7.94821 11.3239 9.63604 9.63604C11.3239 7.94821 13.6131 7 16 7C18.3869 7 20.6761 7.94821 22.364 9.63604C24.0518 11.3239 25 13.6131 25 16ZM20.5337 12.5912C20.4534 12.5112 20.3577 12.4481 20.2524 12.4059C20.1471 12.3636 20.0344 12.343 19.921 12.3453C19.8076 12.3476 19.6958 12.3728 19.5923 12.4193C19.4888 12.4658 19.3958 12.5327 19.3187 12.616L15.4116 17.5941L13.057 15.2384C12.8971 15.0893 12.6855 15.0082 12.4669 15.0121C12.2483 15.0159 12.0398 15.1045 11.8852 15.2591C11.7306 15.4136 11.642 15.6222 11.6382 15.8408C11.6343 16.0594 11.7155 16.2709 11.8645 16.4309L14.8412 19.4087C14.9214 19.4888 15.0169 19.5519 15.122 19.5942C15.2271 19.6366 15.3397 19.6573 15.453 19.6552C15.5662 19.6531 15.678 19.6282 15.7814 19.582C15.8849 19.5358 15.978 19.4692 16.0551 19.3863L20.5461 13.7725C20.6992 13.6133 20.7838 13.4004 20.7817 13.1796C20.7796 12.9587 20.691 12.7475 20.5349 12.5912H20.5337Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2025_1012">
                <rect width="18" height="18" fill="white" transform="translate(7 7)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="popup__text">
          Пользователь добавлен в организацию и получил письмо, в котором может принять приглашение
        </div>
        <div onClick={handleClosePopup} href="#" class="popup__close">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.80764 0.807518C0.865697 0.749314 0.934667 0.703135 1.0106 0.671627C1.08653 0.640119 1.16793 0.623901 1.25014 0.623901C1.33235 0.623901 1.41375 0.640119 1.48968 0.671627C1.56561 0.703135 1.63458 0.749314 1.69264 0.807518L5.00014 4.11627L8.30764 0.807518C8.36575 0.749408 8.43474 0.703313 8.51066 0.671864C8.58659 0.640415 8.66796 0.624229 8.75014 0.624229C8.83232 0.624229 8.9137 0.640415 8.98962 0.671864C9.06554 0.703313 9.13453 0.749408 9.19264 0.807518C9.25075 0.865628 9.29685 0.934615 9.32829 1.01054C9.35974 1.08646 9.37593 1.16784 9.37593 1.25002C9.37593 1.3322 9.35974 1.41357 9.32829 1.4895C9.29685 1.56542 9.25075 1.63441 9.19264 1.69252L5.88389 5.00002L9.19264 8.30752C9.25075 8.36563 9.29685 8.43461 9.32829 8.51054C9.35974 8.58646 9.37593 8.66784 9.37593 8.75002C9.37593 8.8322 9.35974 8.91357 9.32829 8.9895C9.29685 9.06542 9.25075 9.13441 9.19264 9.19252C9.13453 9.25063 9.06554 9.29672 8.98962 9.32817C8.9137 9.35962 8.83232 9.37581 8.75014 9.37581C8.66796 9.37581 8.58659 9.35962 8.51066 9.32817C8.43474 9.29672 8.36575 9.25063 8.30764 9.19252L5.00014 5.88377L1.69264 9.19252C1.63453 9.25063 1.56554 9.29672 1.48962 9.32817C1.4137 9.35962 1.33232 9.37581 1.25014 9.37581C1.16796 9.37581 1.08659 9.35962 1.01066 9.32817C0.934737 9.29672 0.86575 9.25063 0.80764 9.19252C0.74953 9.13441 0.703435 9.06542 0.671986 8.9895C0.640537 8.91357 0.624351 8.8322 0.624351 8.75002C0.624351 8.66784 0.640537 8.58646 0.671986 8.51054C0.703435 8.43461 0.74953 8.36563 0.80764 8.30752L4.11639 5.00002L0.80764 1.69252C0.749436 1.63446 0.703258 1.56549 0.671749 1.48956C0.640241 1.41363 0.624023 1.33223 0.624023 1.25002C0.624023 1.16781 0.640241 1.08641 0.671749 1.01048C0.703258 0.934545 0.749436 0.865575 0.80764 0.807518Z"
              fill="#006742"
            />
          </svg>
        </div>
      </div>
      )}

      <Header />

      <main className="main">
        <aside className="main__sidebar sidebar">
          <div className="sidebar__requisites requisites">
            <div className="requisites__imgbox">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#FBFBFF" />
                <path
                  d="M14.5 12.4375C14.5 12.2552 14.5724 12.0803 14.7014 11.9514C14.8303 11.8224 15.0052 11.75 15.1875 11.75H16.5625C16.7448 11.75 16.9197 11.8224 17.0486 11.9514C17.1776 12.0803 17.25 12.2552 17.25 12.4375V13.8125C17.25 13.9948 17.1776 14.1697 17.0486 14.2986C16.9197 14.4276 16.7448 14.5 16.5625 14.5H15.1875C15.0052 14.5 14.8303 14.4276 14.7014 14.2986C14.5724 14.1697 14.5 13.9948 14.5 13.8125V12.4375ZM18.625 12.4375C18.625 12.2552 18.6974 12.0803 18.8264 11.9514C18.9553 11.8224 19.1302 11.75 19.3125 11.75H20.6875C20.8698 11.75 21.0447 11.8224 21.1736 11.9514C21.3026 12.0803 21.375 12.2552 21.375 12.4375V13.8125C21.375 13.9948 21.3026 14.1697 21.1736 14.2986C21.0447 14.4276 20.8698 14.5 20.6875 14.5H19.3125C19.1302 14.5 18.9553 14.4276 18.8264 14.2986C18.6974 14.1697 18.625 13.9948 18.625 13.8125V12.4375ZM23.4375 11.75C23.2552 11.75 23.0803 11.8224 22.9514 11.9514C22.8224 12.0803 22.75 12.2552 22.75 12.4375V13.8125C22.75 13.9948 22.8224 14.1697 22.9514 14.2986C23.0803 14.4276 23.2552 14.5 23.4375 14.5H24.8125C24.9948 14.5 25.1697 14.4276 25.2986 14.2986C25.4276 14.1697 25.5 13.9948 25.5 13.8125V12.4375C25.5 12.2552 25.4276 12.0803 25.2986 11.9514C25.1697 11.8224 24.9948 11.75 24.8125 11.75H23.4375ZM14.5 16.5625C14.5 16.3802 14.5724 16.2053 14.7014 16.0764C14.8303 15.9474 15.0052 15.875 15.1875 15.875H16.5625C16.7448 15.875 16.9197 15.9474 17.0486 16.0764C17.1776 16.2053 17.25 16.3802 17.25 16.5625V17.9375C17.25 18.1198 17.1776 18.2947 17.0486 18.4236C16.9197 18.5526 16.7448 18.625 16.5625 18.625H15.1875C15.0052 18.625 14.8303 18.5526 14.7014 18.4236C14.5724 18.2947 14.5 18.1198 14.5 17.9375V16.5625ZM19.3125 15.875C19.1302 15.875 18.9553 15.9474 18.8264 16.0764C18.6974 16.2053 18.625 16.3802 18.625 16.5625V17.9375C18.625 18.1198 18.6974 18.2947 18.8264 18.4236C18.9553 18.5526 19.1302 18.625 19.3125 18.625H20.6875C20.8698 18.625 21.0447 18.5526 21.1736 18.4236C21.3026 18.2947 21.375 18.1198 21.375 17.9375V16.5625C21.375 16.3802 21.3026 16.2053 21.1736 16.0764C21.0447 15.9474 20.8698 15.875 20.6875 15.875H19.3125ZM22.75 16.5625C22.75 16.3802 22.8224 16.2053 22.9514 16.0764C23.0803 15.9474 23.2552 15.875 23.4375 15.875H24.8125C24.9948 15.875 25.1697 15.9474 25.2986 16.0764C25.4276 16.2053 25.5 16.3802 25.5 16.5625V17.9375C25.5 18.1198 25.4276 18.2947 25.2986 18.4236C25.1697 18.5526 24.9948 18.625 24.8125 18.625H23.4375C23.2552 18.625 23.0803 18.5526 22.9514 18.4236C22.8224 18.2947 22.75 18.1198 22.75 17.9375V16.5625ZM15.1875 20C15.0052 20 14.8303 20.0724 14.7014 20.2014C14.5724 20.3303 14.5 20.5052 14.5 20.6875V22.0625C14.5 22.2448 14.5724 22.4197 14.7014 22.5486C14.8303 22.6776 15.0052 22.75 15.1875 22.75H16.5625C16.7448 22.75 16.9197 22.6776 17.0486 22.5486C17.1776 22.4197 17.25 22.2448 17.25 22.0625V20.6875C17.25 20.5052 17.1776 20.3303 17.0486 20.2014C16.9197 20.0724 16.7448 20 16.5625 20H15.1875ZM18.625 20.6875C18.625 20.5052 18.6974 20.3303 18.8264 20.2014C18.9553 20.0724 19.1302 20 19.3125 20H20.6875C20.8698 20 21.0447 20.0724 21.1736 20.2014C21.3026 20.3303 21.375 20.5052 21.375 20.6875V22.0625C21.375 22.2448 21.3026 22.4197 21.1736 22.5486C21.0447 22.6776 20.8698 22.75 20.6875 22.75H19.3125C19.1302 22.75 18.9553 22.6776 18.8264 22.5486C18.6974 22.4197 18.625 22.2448 18.625 22.0625V20.6875ZM23.4375 20C23.2552 20 23.0803 20.0724 22.9514 20.2014C22.8224 20.3303 22.75 20.5052 22.75 20.6875V22.0625C22.75 22.2448 22.8224 22.4197 22.9514 22.5486C23.0803 22.6776 23.2552 22.75 23.4375 22.75H24.8125C24.9948 22.75 25.1697 22.6776 25.2986 22.5486C25.4276 22.4197 25.5 22.2448 25.5 22.0625V20.6875C25.5 20.5052 25.4276 20.3303 25.2986 20.2014C25.1697 20.0724 24.9948 20 24.8125 20H23.4375Z"
                  fill="#BCB5FF"
                />
                <path
                  d="M11.75 10.375C11.75 10.0103 11.8949 9.66059 12.1527 9.40273C12.4106 9.14487 12.7603 9 13.125 9H26.875C27.2397 9 27.5894 9.14487 27.8473 9.40273C28.1051 9.66059 28.25 10.0103 28.25 10.375V29.625C28.25 29.9897 28.1051 30.3394 27.8473 30.5973C27.5894 30.8551 27.2397 31 26.875 31H13.125C12.7603 31 12.4106 30.8551 12.1527 30.5973C11.8949 30.3394 11.75 29.9897 11.75 29.625V10.375ZM26.875 10.375H13.125V29.625H17.25V26.1875C17.25 26.0052 17.3224 25.8303 17.4514 25.7014C17.5803 25.5724 17.7552 25.5 17.9375 25.5H22.0625C22.2448 25.5 22.4197 25.5724 22.5486 25.7014C22.6776 25.8303 22.75 26.0052 22.75 26.1875V29.625H26.875V10.375Z"
                  fill="#BCB5FF"
                />
              </svg>
            </div>
            <div className="requisites__text">
              <div className="requisites__name">Кедр, ООО</div>
              <div className="requisites__inn">ИНН 1195783402</div>
              <a href="#" className="requisites__link">
                Реквизиты и настройки
              </a>
            </div>
          </div>
          <nav className="sidebar__nav nav">
            <div className="nav__block">
              <div className="nav__title">
                <a href="#">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 2.8125C8.25 2.26549 8.4673 1.74089 8.85409 1.35409C9.24089 0.967299 9.76549 0.75 10.3125 0.75H11.6875C12.2345 0.75 12.7591 0.967299 13.1459 1.35409C13.5327 1.74089 13.75 2.26549 13.75 2.8125V4.1875C13.75 4.73451 13.5327 5.25911 13.1459 5.64591C12.7591 6.0327 12.2345 6.25 11.6875 6.25V7.625H19.25C19.4323 7.625 19.6072 7.69743 19.7361 7.82636C19.8651 7.9553 19.9375 8.13016 19.9375 8.3125V9.6875C19.9375 9.86984 19.8651 10.0447 19.7361 10.1736C19.6072 10.3026 19.4323 10.375 19.25 10.375C19.0677 10.375 18.8928 10.3026 18.7639 10.1736C18.6349 10.0447 18.5625 9.86984 18.5625 9.6875V9H11.6875V9.6875C11.6875 9.86984 11.6151 10.0447 11.4861 10.1736C11.3572 10.3026 11.1823 10.375 11 10.375C10.8177 10.375 10.6428 10.3026 10.5139 10.1736C10.3849 10.0447 10.3125 9.86984 10.3125 9.6875V9H3.4375V9.6875C3.4375 9.86984 3.36507 10.0447 3.23614 10.1736C3.1072 10.3026 2.93234 10.375 2.75 10.375C2.56766 10.375 2.3928 10.3026 2.26386 10.1736C2.13493 10.0447 2.0625 9.86984 2.0625 9.6875V8.3125C2.0625 8.13016 2.13493 7.9553 2.26386 7.82636C2.3928 7.69743 2.56766 7.625 2.75 7.625H10.3125V6.25C9.76549 6.25 9.24089 6.0327 8.85409 5.64591C8.4673 5.25911 8.25 4.73451 8.25 4.1875V2.8125ZM11.6875 4.875C11.8698 4.875 12.0447 4.80257 12.1736 4.67364C12.3026 4.5447 12.375 4.36984 12.375 4.1875V2.8125C12.375 2.63016 12.3026 2.4553 12.1736 2.32636C12.0447 2.19743 11.8698 2.125 11.6875 2.125H10.3125C10.1302 2.125 9.9553 2.19743 9.82636 2.32636C9.69743 2.4553 9.625 2.63016 9.625 2.8125V4.1875C9.625 4.36984 9.69743 4.5447 9.82636 4.67364C9.9553 4.80257 10.1302 4.875 10.3125 4.875H11.6875ZM0 13.8125C0 13.2655 0.217298 12.7409 0.604092 12.3541C0.990886 11.9673 1.51549 11.75 2.0625 11.75H3.4375C3.98451 11.75 4.50911 11.9673 4.89591 12.3541C5.2827 12.7409 5.5 13.2655 5.5 13.8125V15.1875C5.5 15.7345 5.2827 16.2591 4.89591 16.6459C4.50911 17.0327 3.98451 17.25 3.4375 17.25H2.0625C1.51549 17.25 0.990886 17.0327 0.604092 16.6459C0.217298 16.2591 0 15.7345 0 15.1875L0 13.8125ZM2.0625 13.125C1.88016 13.125 1.7053 13.1974 1.57636 13.3264C1.44743 13.4553 1.375 13.6302 1.375 13.8125V15.1875C1.375 15.3698 1.44743 15.5447 1.57636 15.6736C1.7053 15.8026 1.88016 15.875 2.0625 15.875H3.4375C3.61984 15.875 3.7947 15.8026 3.92364 15.6736C4.05257 15.5447 4.125 15.3698 4.125 15.1875V13.8125C4.125 13.6302 4.05257 13.4553 3.92364 13.3264C3.7947 13.1974 3.61984 13.125 3.4375 13.125H2.0625ZM8.25 13.8125C8.25 13.2655 8.4673 12.7409 8.85409 12.3541C9.24089 11.9673 9.76549 11.75 10.3125 11.75H11.6875C12.2345 11.75 12.7591 11.9673 13.1459 12.3541C13.5327 12.7409 13.75 13.2655 13.75 13.8125V15.1875C13.75 15.7345 13.5327 16.2591 13.1459 16.6459C12.7591 17.0327 12.2345 17.25 11.6875 17.25H10.3125C9.76549 17.25 9.24089 17.0327 8.85409 16.6459C8.4673 16.2591 8.25 15.7345 8.25 15.1875V13.8125ZM10.3125 13.125C10.1302 13.125 9.9553 13.1974 9.82636 13.3264C9.69743 13.4553 9.625 13.6302 9.625 13.8125V15.1875C9.625 15.3698 9.69743 15.5447 9.82636 15.6736C9.9553 15.8026 10.1302 15.875 10.3125 15.875H11.6875C11.8698 15.875 12.0447 15.8026 12.1736 15.6736C12.3026 15.5447 12.375 15.3698 12.375 15.1875V13.8125C12.375 13.6302 12.3026 13.4553 12.1736 13.3264C12.0447 13.1974 11.8698 13.125 11.6875 13.125H10.3125ZM16.5 13.8125C16.5 13.2655 16.7173 12.7409 17.1041 12.3541C17.4909 11.9673 18.0155 11.75 18.5625 11.75H19.9375C20.4845 11.75 21.0091 11.9673 21.3959 12.3541C21.7827 12.7409 22 13.2655 22 13.8125V15.1875C22 15.7345 21.7827 16.2591 21.3959 16.6459C21.0091 17.0327 20.4845 17.25 19.9375 17.25H18.5625C18.0155 17.25 17.4909 17.0327 17.1041 16.6459C16.7173 16.2591 16.5 15.7345 16.5 15.1875V13.8125ZM18.5625 13.125C18.3802 13.125 18.2053 13.1974 18.0764 13.3264C17.9474 13.4553 17.875 13.6302 17.875 13.8125V15.1875C17.875 15.3698 17.9474 15.5447 18.0764 15.6736C18.2053 15.8026 18.3802 15.875 18.5625 15.875H19.9375C20.1198 15.875 20.2947 15.8026 20.4236 15.6736C20.5526 15.5447 20.625 15.3698 20.625 15.1875V13.8125C20.625 13.6302 20.5526 13.4553 20.4236 13.3264C20.2947 13.1974 20.1198 13.125 19.9375 13.125H18.5625Z"
                      fill="#212529"
                    />
                  </svg>
                  Организация
                </a>
              </div>
              <ul className="nav__list">
                <li>
                  <a href="#">Направления обмена</a>
                </li>
                <li>
                  <a href="#">
                    Пользователи
                    <div className="nav__count">
                      <span>100</span>/<span>100</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">Сертификаты</a>
                </li>
              </ul>
            </div>
            <div className="nav__block">
              <div className="nav__title">
                <a href="#">
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.875 5C2.875 4.81766 2.94743 4.6428 3.07636 4.51386C3.2053 4.38493 3.38016 4.3125 3.5625 4.3125H13.1875C13.3698 4.3125 13.5447 4.38493 13.6736 4.51386C13.8026 4.6428 13.875 4.81766 13.875 5C13.875 5.18234 13.8026 5.35721 13.6736 5.48614C13.5447 5.61507 13.3698 5.6875 13.1875 5.6875H3.5625C3.38016 5.6875 3.2053 5.61507 3.07636 5.48614C2.94743 5.35721 2.875 5.18234 2.875 5ZM2.875 1.5625C2.875 1.38016 2.94743 1.2053 3.07636 1.07636C3.2053 0.947433 3.38016 0.875 3.5625 0.875H13.1875C13.3698 0.875 13.5447 0.947433 13.6736 1.07636C13.8026 1.2053 13.875 1.38016 13.875 1.5625C13.875 1.74484 13.8026 1.9197 13.6736 2.04864C13.5447 2.17757 13.3698 2.25 13.1875 2.25H3.5625C3.38016 2.25 3.2053 2.17757 3.07636 2.04864C2.94743 1.9197 2.875 1.74484 2.875 1.5625ZM2.875 8.4375C2.875 8.25516 2.94743 8.08029 3.07636 7.95136C3.2053 7.82243 3.38016 7.75 3.5625 7.75H13.1875C13.3698 7.75 13.5447 7.82243 13.6736 7.95136C13.8026 8.08029 13.875 8.25516 13.875 8.4375C13.875 8.61984 13.8026 8.79471 13.6736 8.92364C13.5447 9.05257 13.3698 9.125 13.1875 9.125H3.5625C3.38016 9.125 3.2053 9.05257 3.07636 8.92364C2.94743 8.79471 2.875 8.61984 2.875 8.4375ZM1.5 1.5625C1.5 1.74484 1.42757 1.9197 1.29864 2.04864C1.1697 2.17757 0.994836 2.25 0.8125 2.25C0.630164 2.25 0.455295 2.17757 0.326364 2.04864C0.197433 1.9197 0.125 1.74484 0.125 1.5625C0.125 1.38016 0.197433 1.2053 0.326364 1.07636C0.455295 0.947433 0.630164 0.875 0.8125 0.875C0.994836 0.875 1.1697 0.947433 1.29864 1.07636C1.42757 1.2053 1.5 1.38016 1.5 1.5625ZM1.5 5C1.5 5.18234 1.42757 5.35721 1.29864 5.48614C1.1697 5.61507 0.994836 5.6875 0.8125 5.6875C0.630164 5.6875 0.455295 5.61507 0.326364 5.48614C0.197433 5.35721 0.125 5.18234 0.125 5C0.125 4.81766 0.197433 4.6428 0.326364 4.51386C0.455295 4.38493 0.630164 4.3125 0.8125 4.3125C0.994836 4.3125 1.1697 4.38493 1.29864 4.51386C1.42757 4.6428 1.5 4.81766 1.5 5ZM1.5 8.4375C1.5 8.61984 1.42757 8.79471 1.29864 8.92364C1.1697 9.05257 0.994836 9.125 0.8125 9.125C0.630164 9.125 0.455295 9.05257 0.326364 8.92364C0.197433 8.79471 0.125 8.61984 0.125 8.4375C0.125 8.25516 0.197433 8.08029 0.326364 7.95136C0.455295 7.82243 0.630164 7.75 0.8125 7.75C0.994836 7.75 1.1697 7.82243 1.29864 7.95136C1.42757 8.08029 1.5 8.25516 1.5 8.4375Z"
                      fill="#212529"
                    />
                  </svg>
                  Каталоги
                </a>
              </div>
              <ul className="nav__list">
                <li>
                  <a href="#">Сотрудники</a>
                </li>
                <li>
                  <a href="#">
                    Представляемые лица
                    <div className="nav__count">
                      <span>8</span>/<span>10</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">Доверенности</a>
                </li>
                <li>
                  <a href="#">Классификаторы</a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <div className="main__add-user add-user">
          <div className="add-user__main-title">
            <a href="#" className="add-user__link-back">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/SearchValue">
                <rect width="34" height="34" rx="17" fill="#F3F4FF" />
                <path
                  d="M19.2703 8.8988L11.1691 17L19.2703 25.1011"
                  stroke="#8B77EF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <h2 className="add-user__title">Добавление пользователя</h2>
          </div>
          <div className="add-user__list">
            <div className="add-user__data data">
              <h3 className="data__title">Данные</h3>
              <form action="">
                <div className="data__group">
                  <label htmlFor="email">
                    Эл. почта<span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="konstantinko@yandex.ru"
                  />
                </div>
                <div className="data__form-group">
                  <div className="data__group">
                    <label htmlFor="lastname">
                      Фамилия<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      placeholder="Константинов"
                    />
                  </div>
                  <div className="data__group">
                    <label htmlFor="firstname">
                      Имя<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      placeholder="Константин"
                    />
                  </div>
                  <div className="data__group">
                    <label htmlFor="middlename">Отчество</label>
                    <input type="text" id="middlename" name="middlename" placeholder="Иванович" />
                  </div>
                </div>
                <div className="data__group">
                  <label htmlFor="role">
                    Роль<span>*</span>
                  </label>
                  <input
                    type="email"
                    id="role"
                    name="role"
                    required
                    //  value="Менеджер организации"
                    placeholder="Менеджер организации"
                  />
                </div>
                <div className="data__group">
                  <div className="toggle-switch">
                    <input type="checkbox" id="group-access" name="group-access" defaultChecked />
                    <label htmlFor="group-access"></label>
                    <span>Групповой доступ для направлений</span>
                    <Tippy content="Какая-то всплывающая подсказка">
                      <svg
                        id="toggleSwitchForm"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM5.496 6.033H6.321C6.459 6.033 6.569 5.92 6.587 5.783C6.677 5.127 7.127 4.649 7.929 4.649C8.615 4.649 9.243 4.992 9.243 5.817C9.243 6.452 8.869 6.744 8.278 7.188C7.605 7.677 7.072 8.248 7.11 9.175L7.113 9.392C7.11405 9.45761 7.14085 9.52017 7.18762 9.5662C7.23439 9.61222 7.29738 9.63801 7.363 9.638H8.174C8.2403 9.638 8.30389 9.61166 8.35078 9.56478C8.39766 9.51789 8.424 9.4543 8.424 9.388V9.283C8.424 8.565 8.697 8.356 9.434 7.797C10.043 7.334 10.678 6.82 10.678 5.741C10.678 4.23 9.402 3.5 8.005 3.5C6.738 3.5 5.35 4.09 5.255 5.786C5.25363 5.81829 5.25888 5.85053 5.27043 5.88072C5.28198 5.91091 5.29958 5.93841 5.32216 5.96155C5.34473 5.98468 5.3718 6.00296 5.40169 6.01524C5.43159 6.02753 5.46368 6.03357 5.496 6.033ZM7.821 12.476C8.431 12.476 8.85 12.082 8.85 11.549C8.85 10.997 8.43 10.609 7.821 10.609C7.237 10.609 6.812 10.997 6.812 11.549C6.812 12.082 7.237 12.476 7.822 12.476H7.821Z"
                          fill="#BCB5FF"
                        />
                      </svg>
                    </Tippy>
                  </div>
                </div>
              </form>
            </div>
            <div className="add-user__request request">
              <h3 className="request__title">Запрос по КБК</h3>
              <div className="request__filter">
                <a href="#">По всем</a>
                <a href="#">По нескольким</a>
                <a href="#">Не запрашивать</a>
              </div>
              <div className="request__answer">
                Письмо не будет содержать запрос отчетов по указанной организации
              </div>
            </div>
            <div className="add-user__directions directions">
              <h3 className="directions__main-title">Направления обмена организации</h3>
              <div className="directions__id">
                <div className="directions__search-container">
                  <input
                    type="text"
                    className="directions__search-input"
                    placeholder="Идентификатор направления"
                    onChange={(event) => setSearchValue(event.target.value)}
                     value={searchValue}
                  />
                </div>
                <button onClick={activateAllCheckboxes} className="directions__activate-all js-activate-all">
                  Активировать все
                </button>
              </div>
              <div className="directions__items">
                {identifiers.filter(obj => {
                  if (obj.identeficator.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                     return true;
                  }
                  return false;
                }).map((obj) => (
                  <Identifier searchValue={searchValue} setSearchValue={setSearchValue}
                    inn={obj.inn}
                    identeficator={obj.identeficator}
                    title={obj.title}
                    id={obj.id}
                    isChecked={checkboxStates[obj.id]}
                     onCheckboxChange={handleCheckboxChange}
                  />
                ))}
              </div>
            </div>
            <div className="add-user__links links">
              <button onClick={handleOpenPopup} className="links__add js-links__add">
                Добавить
              </button>
              <button className="links__cansel">Отменить добавление</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__wrpper">
          <div className="footer__copy">© 2024 - КОМИТА ОТЧЁТ Онлайн</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

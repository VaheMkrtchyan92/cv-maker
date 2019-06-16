import React from "react";

const SectionBasic = () => (
    <div className="section-basic">
        <h3>Общая информация</h3>
        <form action="">
            <input type="text" placeholder="Полное имя"></input>
            <input type="text" placeholder="   E-mail адрес"/>
            <input type="text" placeholder="Номера телефонов"/>
            <input type="text" placeholder="Сайты"/>
            <hr/>
            <input type="text" placeholder="Строка адреса 1"/>
            <input type="text" placeholder="Строка адреса 2"/>
            <input type="text" placeholder="Строка адреса 3"/>
        </form>
    </div>
);

export default SectionBasic
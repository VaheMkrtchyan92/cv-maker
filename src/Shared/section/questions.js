import React from 'react';
import "./questions.css";

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1 className="question-text">Ինչպես ճիշտ կազմել CV</h1>
                <div className="asking-questions">

                    <div className="question-block-1">

                        <div className="border-block">
                            <h4>1. cv-ն պետք է լինի հակիրճ ու հստակ, չպարունակի ավելորդ տեղեկություն </h4>
                            Լավագույն դեպքում պետք է սահմանափակվել 1 կամ 2 էջով և չգրել այնպիսի մանրամասներ, որոնք
                            ձանձրալի կլինեն գործատուի համար: Նմանօրինակ տարածված սխալներից են, օրինակ՝ ամուսնական
                            կարգավիճակ, ազգություն, քաղաքացիություն, ծննդյան տարեթիվ կամ վայր նշելը: Հավատա՛, եթե դու
                            իրոք համապատասխանում ես, այդ փաստերը դժվար թե հետաքրքրեն գործատուին: Ճիշտ չէ նաև ռեզյումեի
                            առաջին տողում cv կամ resume վերնագիր դնելը, այդտեղ պետք է գրվի միայն անուն-ազգանունը:
                        </div>

                        <div className="border-block">

                            <h4>2. Կոնտակտային տվյալներ</h4>
                            cv-ին լուսանկար կցելու կետը դեռևս խնդրահարույց է. ոմանք կարծում են, որ եթե աշխատանքի
                            հայտարարության մեջ նշված չէ լուսանկարի առկայության մասին, ապա պետք չէ կցել, բայց շատերն էլ
                            կարծում են, որ արտաքին տեսքը շատ բան է պատմում մարդու մասին: Հետևաբար, հաջողված լուսանկարը
                            միգուցե և քո օգտին աշխատի, բայց ոչ այնպիսի լուսանկար, որն ավելի շատ համապատասխանում է սոց.
                            ցանցերի չափանիշներին: cv-ում պետք է անպայման նշել կոնտակտային տվյալներ՝ հեռախոսահամար, մեյլ,
                            հասցե:
                        </div>
                    </div>
                    <div className="question-block-2">
                        <div className="border-block">

                            <h4>3. Կրթություն</h4>
                            Կրթությունը նույնպես նշվում է հակառակ հերթականությամբ: Եթե ունես բարձրագույն կրթություն
                            ապա դպրոցի մասին տեղեկությունը կարելի է բաց թողնել: Նշում ենք համալսարան ընդունվելու
                            և ավարտելու տարեթվերը, կրթական հաստատության անվանումը, ֆակուլտետը և բաժինը:
                            Եթե մասնակցել եք որոշ դասընթացների, թրեյնինգների, ապա անպայման նշեք դրանք:
                            Պետք չէ cv-ում ներառել այնպիսի դասընթացներ, որոնք տվյալ ոլորտին չեն առնչվում:
                        </div>
                        <div className="border-block">

                            <h4>4. Մասնագիտական հմտություններ և լեզուների իմացություն</h4>
                            Սա հենց այն կետն է, երբ գործատուն իմանում է քո առանձնահատուկ հմտությունների մասին: Եթե
                            տիրապետում ես տարբեր լեզուների, համակարգչային և մասնագիտական այլ հմտությունների, անպայման
                            գրիր այդ մասին: Մյուս կողմից էլ կարիք չկա նշելու այն հմտությունները, որոնք կապ չունեն գործի
                            բնույթի հետ, օրինակ, բանկ դիմելիս իմաստ չունի նշել, որ հմուտ խոհարար ես:
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Question;
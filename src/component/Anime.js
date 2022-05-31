import './Page.css';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";

import DatePicker from "@dietime/react-native-date-picker";


function Anime() {
    
    var [listData, setlistData] = useState([]);
    var [jsonData, getjosnData] = useState(josnData());

    function josnData() {
        const data = localStorage.getItem("items");
        if (data) {
            jsonData = JSON.parse(data);
            listData = jsonData;
        }
        // if (data) {
        //     jsonData = JSON.parse(data);

        //     let jsonStr = "{";
        //     for (var i = 0; i < jsonData.length; i++) {
        //         var objectNames = Object.values(jsonData[i]);
        //         jsonStr += '"' + objectNames + '"' + ':' + '{' + '"Anime":' + '' + objectNames + '' + '}';
        //         if (jsonData.length - 1 > i) {
        //             jsonStr += ',';
        //         }

        //     }
        //     jsonStr += "}";
        //     console.log(jsonStr);
        //     listData = jsonData;
        //     localStorage.setItem('items', jsonStr);
        //     // return JSON.parse(data);
        // } else {
        //     if (listData.length > 0) {
        //         var fobjectNames = Object.values(listData[0]);
        //         console.log(listData.length);
        //         let fstr = '{' + '"' + fobjectNames + '"' + ':' + '{"Anime":' + '"' + fobjectNames + '"' + '}' + '}';
        //         console.log(fstr);
        //         localStorage.setItem('items', fstr);
        //     }
        //     return [];
        // }
    }
    const dates = new Date();
    const [anime, setAnime] = useState("");
    const [date, setDate] = useState(dates);
    function AnimeChange(e) {
        setAnime(e.target.value);
    }
    //console.log(date.getDate());
    function addItem() {
        getjosnData();
        setlistData(function (prevData) {
            let datep = date.getFullYear() + ' ' + (date.getMonth() + 1) + "/" + date.getDate();
            // let jsonStr = "{";
            // // let asd = '{}'
            // // localStorage.setItem('items',asd);
            // let BIG = [...listData, { time, anime }];
            // for (let i = 0; i < BIG.length; i++) {
            //     jsonStr += '"' + BIG[i].time + '"' + ':' + '{' + '"Anime":' + '' + BIG[i].anime + '' + '}';
            //     if (BIG.length - 1 > i){
            //         jsonStr += ',';
            //     }
            // }
            // jsonStr += "}";
            // console.log(jsonStr);

            localStorage.setItem('items', JSON.stringify([...listData, { datep, anime }]));
            return [...prevData, { datep, anime }]
        })
        //console.log(listData);
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
        date: {
            flexDirection: "row",
            justifyContent: "space-around",
            // paddingTop: "1em",
        },
        datePart: {
            width: 90,
            alignItems: "center",
            color: " #ffffff"
        }
    });

    let disableScroll = (event) => {
        document.addEventListener('wheel', event.preventDefault, {
            passive: false,
        })
    }

    let handleScroll = (event) => {
        if (event.deltaY > 0) {
            setDate(date);
            document.addEventListener('wheel', event.preventDefault, {
                passive: false,
            })
            //    this.decreaseValue()
            console.log(date);
        } else {
            //this.increaseValue()
            console.log(event.deltaY);
        }
    }


    return (
        <div className="Anime">
            {/* <button onClick={handleToggle}>Toggle</button>
            <button onClick={ClearToggle}>Clear</button>
            {isOpen && <div>Content</div>} */}
            <div className="AnimeDate" style={{ width: "30%" }}>
                <DatePicker
                    value={date}
                    width={"100%"}
                    markWidth={"50%"}
                    fontSize={19}
                    height={95}
                    format={'yyyy-MM-dd'}
                    startYear={2022}
                    fadeColor={"#282c34"}
                    textColor={"#fff"}
                    markColor={"#A1A6B0"}
                    onChange={(value) => setDate(value)}
                />
            </div>
            <div className="AnimeAdd">
                <div className="AnimeDateTime" onWheel={handleScroll} onMouseEnter={disableScroll}>
                    <View style={styles.date}>
                        {
                            [
                                { title: "年", value: date ? date.getFullYear() : "?" },
                                { title: "月", value: date ? date.getMonth() + 1 : "?" },
                                { title: "日", value: date ? date.getDate() : "?" }
                            ]
                                .map((el, index) => {
                                    return (
                                        <View style={styles.datePart} key={index}>
                                            {/* <Text style={{ fontSize: "20px", fontWeight: "200", color: "#fff",transform: "translate3d(0, -40%, 0)" }}>{el.title}</Text> */}
                                            <Text style={{ fontSize: '20px', color: "#fff",transform: "translate3d(0, 20%, 0)"}}>{el.value} {el.title}</Text>
                                        </View>
                                    )
                                })
                        }
                    </View>
                </div>

                <span className={"input input--hoshi Anime-input--filled"}>
                    <input className="Anime-input__field Anime-input__field--hoshi" type="text" value={anime} onChange={AnimeChange} />
                    <label className="Anime-input__label Anime-input__label--hoshi Anime-input__label--hoshi-color-1">
                        <span className="Anime-input-label-content Anime-input__label-content--hoshi">
                            アニメ
                        </span>
                    </label>
                </span>

                <span>
                    <button onClick={addItem}>INPUT</button>
                </span>
            </div>
            <div>
                {listData.map((val, key) =>
                    <p style={{ fontSize: '22px' }} key={key}>{val.datep}  {val.anime}</p>
                )}
                {/* <button onClick={setName} >Show Data</button> */}
                {/* <button onclick={inpp()}>INPUT</button> */}
                {/* <p>{name}</p> */}
            </div>
        </div >
    );
}

export default Anime;

/* old 
// const useLocalStorage = (storageKey, fallbackState) => {
//     const [value, setValue] = useState(
//         JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
//     );

//     useEffect(() => {
//         localStorage.setItem(storageKey, JSON.stringify(value));
//     }, [value, storageKey]);

//     return [value, setValue];
// };

function Anime(){
// const [isOpen, setOpen] = useLocalStorage('is-open', false);

    // const handleToggle = () => {
    //     setOpen(!isOpen);
    // };

    // const ClearToggle = () => {
    //     localStorage.clear();
    //     setOpen(!isOpen);
    // };
    // const [name, setName] = useState("");
    //#region old    
    // const [name, setName] = useState(() => {
    //     const saved = localStorage.getItem("items");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    // });

    // const inp = () =>{
    //     localStorage.setItem('INput', JSON.stringify(gtext));
    // }
    // function inpp() {
    //     localStorage.setItem('INput', JSON.stringify(gtext));
    // }

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(gtext));
    // }, [gtext]);
    //#endregion

    // var tgg = [];

    // const getdata = () => {
    //     const data = localStorage.getItem("items");
    //     if (data) {
    //         tgg = JSON.parse(data);
    //         console.log(tgg);
    //         return tgg;
    //     } else {

    //         return [];
    //     }

    // }

    // const [rowdata, setData] = useState(getdata());


    // const [id, Setname] = useState('');

    // const handleAddSubmit = (e) => {
    //     e.preventDefault();
    //     let aab = { 12: { "1": 12 } };
    //     var y = [30, 20,100];
    //     var objectNames = Object.values(y);
    //     var asda = { [objectNames[0]]: { "Anime": 15 } };
    //     var basd = '{ [objectNames[1]]: { "1": 12 } }';
    //     var obj = JSON.stringify(basd.replace(/\\/g, ""));
    //     var jsonStr = "";
    //     var test = "{";
    //     // jsonStr = 
    //     // '{'+[objectNames[0]]''+'":"'+'"'+ status.id + '"'+ ", "+ '"optionValue" : '+ '"' + options[i].value + '"'+ ' }';
    //     // var EX = 
    //     // '{'+'"uniqueIDofSelect":'+ '"' + Aniname + '"' + ", " +'"optionValue":'+'"' + Aniname + '"' + ' }';
    //     var Aniname=[15,50,1];

    //     for(var i = 0; i < Aniname.length; i++){
    //         test+='"'+[objectNames[i]]+'"' +':'+  '{'+'"Anime":'+''+Aniname[i]+''+'}';     
    //         console.log(i);
    //         if(Aniname.length-1>i){
    //             test+=',';
    //         }
    //     }
    //     test += "}";
    //     // // var obj = JSON.parse(basd.replace(/"/g, "'"));
    //     // var cc = { [objectNames[0]]: { "1": [objectNames[0]] }, obj };
    //     // var cc = { [ objectNames[0]]: { "1": 15 }, [ objectName[1]]: { "1": 12 } };
    //     // let vv = { 12: { "1": 12 }, }
    //     setData({ rowdata, aab });
    //     console.log(test);
    //     localStorage.setItem('items', test);
    // }
    //{"x":{"a":b},"Y":{"a":b}}
    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(rowdata));
    // }, [rowdata]);


}

 */
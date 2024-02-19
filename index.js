" use strict ";

// It is my duty
// const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
//   start: function () {
//     seriesDB.count = +prompt("Nechta serial kordingiz ?", "");

//     while (
//       seriesDB.count == "" ||
//       seriesDB.count == null ||
//       isNaN(seriesDB.count)
//     ) {
//         seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')
//     }
//   },
//   eslaseril : rememberMySeries,
//   darajaaniqla:detectLevelSeries,
//   bazanichiqar : showDB,
//   janrniyoz : writeGenres,
//   visibleDB : ()=>{
//     if(this.private){
//         this.private =false;
//     }
//     else{
//         this.private = true;
//     }
//   }
// };

// function rememberMySeries(){
//     for (let i=0; i<2; i++){
//         const a = prompt("Oxirgi kor'gan serialingiz?"),
//         b = prompt('Nechchi baho berasiz?')

//         if(a != null && b!=null && a!='' && b!=''){
//             seriesDB.series[a] = b;
//             console.log('done');
//         }else{
//             console.log('error');
//             i--
//         }
//     }
// }

// rememberMySeries()

// function detectLevelSeries(){
//     if(seriesDB.count<5){
//         console.log("Kam serial ko'ribsiz");
//     }else if (seriesDB.count >= 5 && seriesDB.count < 10){
//         console.log("Siz klassik tomoshabin ekansiz");
//     }else if (seriesDB.count >=10){
//         console.log(10);
//     }else{
//         console.log('Error');
//     }
// }
// detectLevelSeries()

// function showDB(hidden){
//     if(!hidden){
//         console.log(seriesDB);
//     }
// }
// showDB(seriesDB.private);

// function writeGenres(){
//     for(let i =0; i<3; i++){
//         const genre = prompt(`Yaxshi ko'rgn janringiz ${i+1}`,'')
//         if(
//             genre == null && genre ==''
//         ) i--;
//         seriesDB.genres[i] = genre
//     }
//     seriesDB.genres.forEach((element,index)=>{
//         console.log(`Yaxshi ko'rgan janiringiz ${index+1} - nomi ${element}`);
//     })
// }

// writeGenres();

// It is true answer

const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
      seriesDB.count = +prompt("Nechta serial kordingiz ?", "");
  
      while (
        seriesDB.count == "" ||
        seriesDB.count == null ||
        isNaN(seriesDB.count)
      ) {
          seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')
      }
    },
    rememberMySeries : function(){
        for (let i=0; i<2; i++){
            const a = prompt("Oxirgi kor'gan serialingiz?"),
            b = prompt('Nechchi baho berasiz?')
    
            if(a != null && b!=null && a!='' && b!=''){
                seriesDB.series[a] = b;
                console.log('done');
            }else{
                console.log('error');
                i--
            }
        }
    },
    detectLevelSeries : function(){
        if(seriesDB.count<5){
            console.log("Kam serial ko'ribsiz");
        }else if (seriesDB.count >= 5 && seriesDB.count < 10){
            console.log("Siz klassik tomoshabin ekansiz");
        }else if (seriesDB.count >=10){
            console.log(10);
        }else{
            console.log('Error');
        }
    },
    showDB : function(hidden){
        if(!hidden){
            console.log(seriesDB);
        }
    },
    visibleDB : ()=>{
        if(seriesDB.private){
            seriesDB.private;
        }else{
           seriesDB.private = true 
        }
    },
    writeGenres : function(){
        // for(let i =0; i<3; i++){
        //     // const genre = prompt(`Yaxshi ko'rgn janringiz ${i+1}`,'');
        //     // if(genre == '' || genre == null){
        //     //     console.log("Noto'g'ri m'lumot");
        //     //     i--;
        //     // }
        //     // else{
        //     //     seriesDB.genres[i] == genre;
        //     // }
        // }
        let  genres = prompt("Yaxshi ko'rgan janiringizni vergul yordamida yozing").toLowerCase();// toLowerCase trtiblash uchun
        console.log(genres);
        if(genres =='' || genres == null){
            i--;
        }else{
            seriesDB.genres = genres.split(', ');
            // Tartiblab berish
            seriesDB.genres.sort()
        }

        seriesDB.genres.forEach((item,idx)=>{
            console.log(`yaxshi ko'rgan janrinigiz ${idx+1} - nomi ${item}`);
        })
    },
}

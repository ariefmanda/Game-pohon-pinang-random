class Puun {
  constructor(teams,tinggi) {
    this.tinggi=tinggi
    this.team=this.objTeam(teams)
    this.pemenang=''
  }
  objTeam(teams){
    let arr=[]
    for (var i = 0; i < teams; i++) {
      arr.push({
        name:`team ${i+1}`,
        posisi:0
      })
    }
    return arr
  }
  board(){
    let pohon=[]
    for (var i = 0; i < this.team.length; i++) {
      pohon.push(this.line(this.team[i]))
    }
    return pohon
  }
  line(team){
    let newArr=[]
    for (var i = 0; i < this.tinggi; i++) {
      if(team.posisi>=i){
        newArr.unshift(`pemanjat ke ${i+1}`)
      }else{
        newArr.unshift('******************')
      }
    }
    return newArr
  }
  manjat(){
    for (var i = 0; i < this.team.length; i++) {
      let random=Math.ceil(Math.random()*2)
      this.team[i].posisi+=random
      if(this.team[i].posisi>=this.tinggi-1){
        this.team[i].posisi=this.tinggi-1
        this.pemenang=this.team[i].name
        break;
      }
    }
  }
  sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
    }
  }
  winner(name) {
    console.log(`Selamat ${name} anda telah menang`)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
let puun = new Puun(2,20)
console.log(puun.board());
while(puun.pemenang==''){
  console.log(puun.board())
  puun.sleep(500)
  puun.manjat()
  puun.reset_board()
}
console.log(puun.board());
puun.winner(puun.pemenang)

//데이터베이스 참조 가져오기
var database = firebase.database();

//데이터베이스 메세지 쓰기
firebase.database().ref('/초미세먼지').set('30㎍');
firebase.database().ref('/미세먼지').set('50㎍');
firebase.database().ref('/오존').set('0.035ppm');
firebase.database().ref('/이산화질소').set('0.014ppm');
firebase.database().ref('/일산화탄소').set('0.4ppm');
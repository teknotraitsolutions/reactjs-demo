function formatDate(date) {
  if(!date||date ==='//'||date===''||date===undefined){
    return 'not entered';
  }
  var date = new Date(date);
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  if(month === 1 || month === '01' ){
      month = 'JAN';
  }
  else if(month === 2 || month === '02' ){
      month = 'FEB';
  }
  else if(month === 3 || month === '03' ){
      month = 'MAR';
  }
  else if(month === 4 || month === '04' ){
      month = 'APR';
  }
  else if(month === 5 || month === '05' ){
      month = 'MAY';
  }
  else if(month === 6 || month === '06' ){
      month = 'JUN';
  }
  else if(month === 7 || month === '07' ){
      month = 'JUL';
  }
  else if(month === 8 || month === '08' ){
      month = 'AUG';
  }
  else if(month === 9 || month === '09' ){
      month = 'SEP';
  }
  else if(month === 11){
      month = 'NOV';
  }
  else if(month === 10){
      month = 'OCT';
  }
  else if(month === 12){
      month = 'DEC';
  }
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  const newDate = day + '-' + month + '-' + year;
  return newDate;
}
  
  export default formatDate;
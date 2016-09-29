var showUclData = function(){
  // SnowHistory.displayData();
  $.ajax({
      headers: { 'X-Auth-Token': '66f6b58163ad4b96929315723b010d60' },
      url: 'http://api.football-data.org/v1/soccerseasons/405/teams',
      dataType: 'json',
      type: 'GET',
  }).done(function(response) {
      var first = response.count;
      var uclTeams = response.teams;
      var teamPics = '';
      uclTeams.forEach(function (team){
          console.log(team.name);
          teamPics += '<img src="'+team.crestUrl+'" class="teampics">';
      });
      $('#ucl-data-box').html(teamPics);
    });
};

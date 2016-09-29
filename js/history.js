'use strict'

/*-----------------------------------------------------
*  UTILS OBJECT FOR HELPER METHODS
*----------------------------------------------------*/
var utils = (function() {

  var helpers = {};

  /***********************************
  * Returns a three-digit number for a rgb component
  ***********************************/
  var newValue = function() {
      return Math.round(Math.random() * 255)
  };

  /***********************************
  * Returns an array of two rgba colors, i.e. [fill, stroke]
  ***********************************/
  helpers.getRandomColors = function () {
      var colors = [];

      var fill = 'rgba('+newValue()+','+newValue()+','+newValue()+',0.2)';
      var strokeOrPoint = fill.replace("0.2","1");

      colors.push(fill);
      colors.push(strokeOrPoint);

      return colors;
  }

  return helpers;
}());


/*-----------------------------------------------------
*  SNOWFALL HISTORY DATA AND METHODS
*----------------------------------------------------*/
var SnowHistory = (function() {

  var seasonsArray = [
      {
        "id": 1,
        "Season": "1990-91",
        "Year ending": 1991,
        "Nov": 109.5,
        "Dec": 91,
        "Jan": 82.8,
        "Feb": 49.7,
        "Mar": 110.9,
        "Apr": 136.3,
        "Total": 580.2
      },
      {
        "id": 2,
        "Season": "1991-92",
        "Year ending": 1992,
        "Nov": 133.4,
        "Dec": 57.2,
        "Jan": 41.8,
        "Feb": 85,
        "Mar": 50.1,
        "Apr": 27.5,
        "Total": 395
      },
      {
        "id": 3,
        "Season": "1992-93",
        "Year ending": 1993,
        "Nov": 118.8,
        "Dec": 119.2,
        "Jan": 165.3,
        "Feb": 102.9,
        "Mar": 63,
        "Apr": 81.2,
        "Total": 650.4
      },
      {
        "id": 4,
        "Season": "1993-94",
        "Year ending": 1994,
        "Nov": 40.7,
        "Dec": 64.85,
        "Jan": 122.7,
        "Feb": 134.05,
        "Mar": 47.2,
        "Apr": 80.8,
        "Total": 490.3
      },
      {
        "id": 5,
        "Season": "1994-95",
        "Year ending": 1995,
        "Nov": 205.9,
        "Dec": 73.8,
        "Jan": 199.7,
        "Feb": 56.3,
        "Mar": 128.9,
        "Apr": 80.7,
        "Total": 745.3
      },
      {
        "id": 6,
        "Season": "1995-96",
        "Year ending": 1996,
        "Nov": 57,
        "Dec": 53,
        "Jan": 187,
        "Feb": 104,
        "Mar": 82,
        "Apr": 79,
        "Total": 562
      },
      {
        "id": 7,
        "Season": "1996-97",
        "Year ending": 1997,
        "Nov": 78.3,
        "Dec": 164.8,
        "Jan": 141.5,
        "Feb": 91,
        "Mar": 53.8,
        "Apr": 69.7,
        "Total": 599.1
      },
      {
        "id": 8,
        "Season": "1997-98",
        "Year ending": 1998,
        "Nov": 46.3,
        "Dec": 81.8,
        "Jan": 128.9,
        "Feb": 156.6,
        "Mar": 92.3,
        "Apr": 69,
        "Total": 574.9
      },
      {
        "id": 9,
        "Season": "1998-99",
        "Year ending": 1999,
        "Nov": 76.5,
        "Dec": 43.1,
        "Jan": 105.3,
        "Feb": 98,
        "Mar": 46.5,
        "Apr": 89,
        "Total": 458.4
      },
      {
        "id": 10,
        "Season": "1999-00",
        "Year ending": 2000,
        "Nov": 30,
        "Dec": 97,
        "Jan": 100,
        "Feb": 119.5,
        "Mar": 84,
        "Apr": 15.5,
        "Total": 446
      },
      {
        "id": 11,
        "Season": "2000-01",
        "Year ending": 2001,
        "Nov": 88,
        "Dec": 71,
        "Jan": 66.2,
        "Feb": 79.5,
        "Mar": 53,
        "Apr": 112,
        "Total": 469.7
      },
      {
        "id": 12,
        "Season": "2001-02",
        "Year ending": 2002,
        "Nov": 137,
        "Dec": 86.1,
        "Jan": 100.9,
        "Feb": 53.4,
        "Mar": 142.2,
        "Apr": 48.1,
        "Total": 567.7
      },
      {
        "id": 13,
        "Season": "2002-03",
        "Year ending": 2003,
        "Nov": 42,
        "Dec": 78.7,
        "Jan": 26,
        "Feb": 84.1,
        "Mar": 93.8,
        "Apr": 74.8,
        "Total": 399.4
      },
      {
        "id": 14,
        "Season": "2003-04",
        "Year ending": 2004,
        "Nov": 110,
        "Dec": 151,
        "Jan": 74.3,
        "Feb": 130,
        "Mar": 62,
        "Apr": 43.5,
        "Total": 570.8
      },
      {
        "id": 15,
        "Season": "2004-05",
        "Year ending": 2005,
        "Nov": 62.7,
        "Dec": 86.4,
        "Jan": 113.5,
        "Feb": 77.9,
        "Mar": 153.6,
        "Apr": 59.5,
        "Total": 553.6
      },
      {
        "id": 16,
        "Season": "2005-06",
        "Year ending": 2006,
        "Nov": 81,
        "Dec": 132,
        "Jan": 148,
        "Feb": 61.5,
        "Mar": 135,
        "Apr": 76,
        "Total": 633.5
      },
      {
        "id": 17,
        "Season": "2006-07",
        "Year ending": 2007,
        "Nov": 63,
        "Dec": 51.5,
        "Jan": 38.5,
        "Feb": 107,
        "Mar": 63.5,
        "Apr": 32.5,
        "Total": 356
      },
      {
        "id": 18,
        "Season": "2007-08",
        "Year ending": 2008,
        "Nov": 18,
        "Dec": 161,
        "Jan": 186,
        "Feb": 132,
        "Mar": 85,
        "Apr": 72,
        "Total": 654
      },
      {
        "id": 19,
        "Season": "2008-09",
        "Year ending": 2009,
        "Nov": 56,
        "Dec": 107,
        "Jan": 113,
        "Feb": 75,
        "Mar": 114,
        "Apr": 113,
        "Total": 578
      },
      {
        "id": 20,
        "Season": "2009-10",
        "Year ending": 2010,
        "Nov": 22,
        "Dec": 71.5,
        "Jan": 88.5,
        "Feb": 61,
        "Mar": 60,
        "Apr": 127,
        "Total": 430
      },
      {
        "id": 21,
        "Season": "2010-11",
        "Year ending": 2011,
        "Nov": 82.5,
        "Dec": 114,
        "Jan": 42,
        "Feb": 97.5,
        "Mar": 100,
        "Apr": 117,
        "Total": 553
      },
      {
        "id": 22,
        "Season": "2011-12",
        "Year ending": 2012,
        "Nov": 52,
        "Dec": 20,
        "Jan": 64.5,
        "Feb": 63,
        "Mar": 82,
        "Apr": 48,
        "Total": 329.5
      },
      {
        "id": 23,
        "Season": "2012-13",
        "Year ending": 2013,
        "Nov": 61,
        "Dec": 101,
        "Jan": 57,
        "Feb": 56,
        "Mar": 45,
        "Apr": 62.5,
        "Total": 382.5
      },
      {
        "id": 24,
        "Season": "2013-14",
        "Year ending": 2014,
        "Nov": 31.5,
        "Dec": 55,
        "Jan": 64,
        "Feb": 85.5,
        "Mar": 70,
        "Apr": 51.5,
        "Total": 357.5
      },
      {
        "id": 25,
        "Season": "2014-15",
        "Year ending": 2015,
        "Nov": 59.5,
        "Dec": 73.5,
        "Jan": 28.5,
        "Feb": 35,
        "Mar": 24,
        "Apr": 47,
        "Total": 267.5
      }
    ];

  var publicInterface = {};

  publicInterface.getSeasons = function () {
    return seasonsArray;
  };

  publicInterface.getSeasonById = function (id) {
      var idIndex = id - 1;
      var seasons = seasonsArray;
      var season = seasons[idIndex];

      return season;
  }

  return publicInterface;

}());


/*-----------------------------------------------------
*  EXTERNAL METHODS
*----------------------------------------------------*/

////// LINES //////////////////////////////////////////

/***********************************
* Retrieves the line data for a specified season
* returns a single dataset object
***********************************/
var getSeasonLineData = function (id) {
    var season = SnowHistory.getSeasonById(id);
    var colors = utils.getRandomColors();

    var dataObj = {
        label: season.Season,
        fillColor: "rgba(0,0,0,0)",
        strokeColor: colors[1],
        pointColor: colors[1],
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: colors[1],
        data: [
            season.Nov,
            season.Dec,
            season.Jan,
            season.Feb,
            season.Mar,
            season.Apr],
    };

    return dataObj;
};

/***********************************
* Retrieves the line data for a specified season
* returns an array of dataset objects
***********************************/
var getLineDatasets = function (beg, end) {
  var datasetArray = [];
  var seasons = SnowHistory.getSeasons();

  if (beg != null && end != null) {
    seasons = seasons.slice(beg, end);
  };

  seasons.forEach(function (season){
      var id = season.id;
      var dataset = getSeasonLineData(id);
      datasetArray.push(dataset);
  });
  return datasetArray;
}


////// BARS //////////////////////////////////////////

/***********************************
* Retrieves the season titles for all seasons
* returns an array of season titles to be used as the X-axis labels
***********************************/
var getBarLabels = function () {
  var labels = [];

  SnowHistory.getSeasons().forEach(function(season){
    labels.push(season.Season);
  });
  return labels;
};

/***********************************
* Retrieves the bar data for specified season totals
* returns a single dataset object
***********************************/
var getSeasonBarData = function () {
    var colors = utils.getRandomColors();
    var dataObj = {
          label: "Season Totals",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: getSeasonTotals()
        };
    return dataObj;
};

/***********************************
* Retrieves the bar data for specified season totals
* returns an array of total values
***********************************/
var getSeasonTotals = function () {
  var totals = [];
  SnowHistory.getSeasons().forEach(function(season){
      totals.push(season.Total);
  });

  return totals;
};

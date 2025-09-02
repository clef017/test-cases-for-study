/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 207.0, "minX": 0.0, "maxY": 2164.0, "series": [{"data": [[0.0, 207.0], [0.1, 207.0], [0.2, 207.0], [0.3, 207.0], [0.4, 207.0], [0.5, 207.0], [0.6, 207.0], [0.7, 207.0], [0.8, 207.0], [0.9, 207.0], [1.0, 207.0], [1.1, 207.0], [1.2, 207.0], [1.3, 207.0], [1.4, 207.0], [1.5, 207.0], [1.6, 207.0], [1.7, 207.0], [1.8, 208.0], [1.9, 208.0], [2.0, 208.0], [2.1, 208.0], [2.2, 208.0], [2.3, 208.0], [2.4, 208.0], [2.5, 208.0], [2.6, 208.0], [2.7, 208.0], [2.8, 208.0], [2.9, 208.0], [3.0, 208.0], [3.1, 208.0], [3.2, 208.0], [3.3, 208.0], [3.4, 208.0], [3.5, 208.0], [3.6, 208.0], [3.7, 208.0], [3.8, 208.0], [3.9, 209.0], [4.0, 209.0], [4.1, 209.0], [4.2, 209.0], [4.3, 209.0], [4.4, 209.0], [4.5, 209.0], [4.6, 209.0], [4.7, 209.0], [4.8, 209.0], [4.9, 209.0], [5.0, 209.0], [5.1, 209.0], [5.2, 209.0], [5.3, 209.0], [5.4, 209.0], [5.5, 209.0], [5.6, 209.0], [5.7, 209.0], [5.8, 209.0], [5.9, 209.0], [6.0, 209.0], [6.1, 209.0], [6.2, 209.0], [6.3, 209.0], [6.4, 209.0], [6.5, 209.0], [6.6, 209.0], [6.7, 209.0], [6.8, 209.0], [6.9, 210.0], [7.0, 210.0], [7.1, 210.0], [7.2, 210.0], [7.3, 210.0], [7.4, 210.0], [7.5, 210.0], [7.6, 210.0], [7.7, 210.0], [7.8, 210.0], [7.9, 210.0], [8.0, 210.0], [8.1, 210.0], [8.2, 210.0], [8.3, 210.0], [8.4, 210.0], [8.5, 210.0], [8.6, 211.0], [8.7, 211.0], [8.8, 211.0], [8.9, 211.0], [9.0, 211.0], [9.1, 212.0], [9.2, 212.0], [9.3, 212.0], [9.4, 212.0], [9.5, 213.0], [9.6, 213.0], [9.7, 213.0], [9.8, 213.0], [9.9, 214.0], [10.0, 214.0], [10.1, 214.0], [10.2, 214.0], [10.3, 214.0], [10.4, 215.0], [10.5, 215.0], [10.6, 215.0], [10.7, 215.0], [10.8, 215.0], [10.9, 215.0], [11.0, 215.0], [11.1, 215.0], [11.2, 215.0], [11.3, 215.0], [11.4, 215.0], [11.5, 215.0], [11.6, 216.0], [11.7, 216.0], [11.8, 216.0], [11.9, 216.0], [12.0, 216.0], [12.1, 217.0], [12.2, 217.0], [12.3, 217.0], [12.4, 217.0], [12.5, 217.0], [12.6, 217.0], [12.7, 217.0], [12.8, 217.0], [12.9, 217.0], [13.0, 217.0], [13.1, 217.0], [13.2, 217.0], [13.3, 217.0], [13.4, 217.0], [13.5, 217.0], [13.6, 217.0], [13.7, 217.0], [13.8, 217.0], [13.9, 217.0], [14.0, 217.0], [14.1, 217.0], [14.2, 217.0], [14.3, 217.0], [14.4, 217.0], [14.5, 217.0], [14.6, 218.0], [14.7, 218.0], [14.8, 218.0], [14.9, 218.0], [15.0, 218.0], [15.1, 218.0], [15.2, 218.0], [15.3, 218.0], [15.4, 218.0], [15.5, 218.0], [15.6, 218.0], [15.7, 218.0], [15.8, 218.0], [15.9, 218.0], [16.0, 218.0], [16.1, 218.0], [16.2, 218.0], [16.3, 218.0], [16.4, 218.0], [16.5, 218.0], [16.6, 218.0], [16.7, 218.0], [16.8, 218.0], [16.9, 218.0], [17.0, 218.0], [17.1, 218.0], [17.2, 218.0], [17.3, 218.0], [17.4, 218.0], [17.5, 218.0], [17.6, 219.0], [17.7, 219.0], [17.8, 219.0], [17.9, 219.0], [18.0, 219.0], [18.1, 219.0], [18.2, 219.0], [18.3, 219.0], [18.4, 219.0], [18.5, 219.0], [18.6, 219.0], [18.7, 219.0], [18.8, 219.0], [18.9, 219.0], [19.0, 219.0], [19.1, 219.0], [19.2, 219.0], [19.3, 219.0], [19.4, 220.0], [19.5, 220.0], [19.6, 220.0], [19.7, 220.0], [19.8, 220.0], [19.9, 220.0], [20.0, 220.0], [20.1, 220.0], [20.2, 220.0], [20.3, 220.0], [20.4, 220.0], [20.5, 220.0], [20.6, 220.0], [20.7, 220.0], [20.8, 220.0], [20.9, 220.0], [21.0, 220.0], [21.1, 220.0], [21.2, 220.0], [21.3, 220.0], [21.4, 220.0], [21.5, 220.0], [21.6, 220.0], [21.7, 220.0], [21.8, 220.0], [21.9, 221.0], [22.0, 221.0], [22.1, 221.0], [22.2, 221.0], [22.3, 221.0], [22.4, 221.0], [22.5, 221.0], [22.6, 221.0], [22.7, 221.0], [22.8, 221.0], [22.9, 221.0], [23.0, 221.0], [23.1, 221.0], [23.2, 221.0], [23.3, 221.0], [23.4, 221.0], [23.5, 221.0], [23.6, 221.0], [23.7, 221.0], [23.8, 221.0], [23.9, 221.0], [24.0, 221.0], [24.1, 221.0], [24.2, 221.0], [24.3, 221.0], [24.4, 221.0], [24.5, 221.0], [24.6, 221.0], [24.7, 221.0], [24.8, 221.0], [24.9, 221.0], [25.0, 221.0], [25.1, 221.0], [25.2, 221.0], [25.3, 221.0], [25.4, 221.0], [25.5, 221.0], [25.6, 221.0], [25.7, 221.0], [25.8, 221.0], [25.9, 221.0], [26.0, 221.0], [26.1, 221.0], [26.2, 221.0], [26.3, 221.0], [26.4, 221.0], [26.5, 221.0], [26.6, 221.0], [26.7, 222.0], [26.8, 222.0], [26.9, 222.0], [27.0, 222.0], [27.1, 223.0], [27.2, 223.0], [27.3, 223.0], [27.4, 223.0], [27.5, 223.0], [27.6, 223.0], [27.7, 223.0], [27.8, 223.0], [27.9, 224.0], [28.0, 224.0], [28.1, 224.0], [28.2, 224.0], [28.3, 224.0], [28.4, 224.0], [28.5, 224.0], [28.6, 224.0], [28.7, 224.0], [28.8, 225.0], [28.9, 225.0], [29.0, 225.0], [29.1, 225.0], [29.2, 226.0], [29.3, 226.0], [29.4, 226.0], [29.5, 226.0], [29.6, 226.0], [29.7, 227.0], [29.8, 227.0], [29.9, 227.0], [30.0, 227.0], [30.1, 227.0], [30.2, 227.0], [30.3, 227.0], [30.4, 227.0], [30.5, 227.0], [30.6, 227.0], [30.7, 227.0], [30.8, 227.0], [30.9, 227.0], [31.0, 227.0], [31.1, 227.0], [31.2, 227.0], [31.3, 227.0], [31.4, 227.0], [31.5, 227.0], [31.6, 227.0], [31.7, 227.0], [31.8, 230.0], [31.9, 230.0], [32.0, 230.0], [32.1, 230.0], [32.2, 232.0], [32.3, 232.0], [32.4, 232.0], [32.5, 232.0], [32.6, 232.0], [32.7, 232.0], [32.8, 232.0], [32.9, 232.0], [33.0, 232.0], [33.1, 233.0], [33.2, 233.0], [33.3, 233.0], [33.4, 233.0], [33.5, 233.0], [33.6, 233.0], [33.7, 233.0], [33.8, 233.0], [33.9, 233.0], [34.0, 233.0], [34.1, 233.0], [34.2, 233.0], [34.3, 233.0], [34.4, 235.0], [34.5, 235.0], [34.6, 235.0], [34.7, 235.0], [34.8, 408.0], [34.9, 408.0], [35.0, 408.0], [35.1, 408.0], [35.2, 409.0], [35.3, 409.0], [35.4, 409.0], [35.5, 409.0], [35.6, 409.0], [35.7, 409.0], [35.8, 409.0], [35.9, 409.0], [36.0, 409.0], [36.1, 410.0], [36.2, 410.0], [36.3, 410.0], [36.4, 410.0], [36.5, 410.0], [36.6, 410.0], [36.7, 410.0], [36.8, 410.0], [36.9, 410.0], [37.0, 410.0], [37.1, 410.0], [37.2, 410.0], [37.3, 410.0], [37.4, 411.0], [37.5, 411.0], [37.6, 411.0], [37.7, 411.0], [37.8, 411.0], [37.9, 411.0], [38.0, 411.0], [38.1, 411.0], [38.2, 411.0], [38.3, 411.0], [38.4, 411.0], [38.5, 411.0], [38.6, 411.0], [38.7, 411.0], [38.8, 411.0], [38.9, 411.0], [39.0, 411.0], [39.1, 411.0], [39.2, 411.0], [39.3, 411.0], [39.4, 411.0], [39.5, 411.0], [39.6, 411.0], [39.7, 411.0], [39.8, 411.0], [39.9, 411.0], [40.0, 411.0], [40.1, 411.0], [40.2, 411.0], [40.3, 411.0], [40.4, 412.0], [40.5, 412.0], [40.6, 412.0], [40.7, 412.0], [40.8, 412.0], [40.9, 412.0], [41.0, 412.0], [41.1, 412.0], [41.2, 412.0], [41.3, 412.0], [41.4, 412.0], [41.5, 412.0], [41.6, 412.0], [41.7, 412.0], [41.8, 412.0], [41.9, 412.0], [42.0, 412.0], [42.1, 412.0], [42.2, 412.0], [42.3, 412.0], [42.4, 412.0], [42.5, 413.0], [42.6, 413.0], [42.7, 413.0], [42.8, 413.0], [42.9, 413.0], [43.0, 413.0], [43.1, 413.0], [43.2, 413.0], [43.3, 413.0], [43.4, 413.0], [43.5, 413.0], [43.6, 413.0], [43.7, 413.0], [43.8, 413.0], [43.9, 413.0], [44.0, 413.0], [44.1, 413.0], [44.2, 413.0], [44.3, 414.0], [44.4, 414.0], [44.5, 414.0], [44.6, 414.0], [44.7, 414.0], [44.8, 414.0], [44.9, 414.0], [45.0, 414.0], [45.1, 414.0], [45.2, 414.0], [45.3, 414.0], [45.4, 414.0], [45.5, 414.0], [45.6, 414.0], [45.7, 414.0], [45.8, 414.0], [45.9, 414.0], [46.0, 414.0], [46.1, 414.0], [46.2, 414.0], [46.3, 414.0], [46.4, 415.0], [46.5, 415.0], [46.6, 415.0], [46.7, 415.0], [46.8, 416.0], [46.9, 416.0], [47.0, 416.0], [47.1, 416.0], [47.2, 416.0], [47.3, 416.0], [47.4, 416.0], [47.5, 416.0], [47.6, 416.0], [47.7, 416.0], [47.8, 416.0], [47.9, 416.0], [48.0, 416.0], [48.1, 417.0], [48.2, 417.0], [48.3, 417.0], [48.4, 417.0], [48.5, 417.0], [48.6, 417.0], [48.7, 417.0], [48.8, 417.0], [48.9, 417.0], [49.0, 419.0], [49.1, 419.0], [49.2, 419.0], [49.3, 419.0], [49.4, 419.0], [49.5, 419.0], [49.6, 419.0], [49.7, 419.0], [49.8, 420.0], [49.9, 420.0], [50.0, 420.0], [50.1, 420.0], [50.2, 420.0], [50.3, 420.0], [50.4, 420.0], [50.5, 420.0], [50.6, 420.0], [50.7, 421.0], [50.8, 421.0], [50.9, 421.0], [51.0, 421.0], [51.1, 422.0], [51.2, 422.0], [51.3, 422.0], [51.4, 422.0], [51.5, 422.0], [51.6, 422.0], [51.7, 422.0], [51.8, 422.0], [51.9, 422.0], [52.0, 425.0], [52.1, 425.0], [52.2, 425.0], [52.3, 425.0], [52.4, 426.0], [52.5, 426.0], [52.6, 426.0], [52.7, 426.0], [52.8, 426.0], [52.9, 426.0], [53.0, 426.0], [53.1, 426.0], [53.2, 426.0], [53.3, 427.0], [53.4, 427.0], [53.5, 427.0], [53.6, 427.0], [53.7, 427.0], [53.8, 427.0], [53.9, 427.0], [54.0, 427.0], [54.1, 427.0], [54.2, 427.0], [54.3, 427.0], [54.4, 427.0], [54.5, 427.0], [54.6, 428.0], [54.7, 428.0], [54.8, 428.0], [54.9, 428.0], [55.0, 428.0], [55.1, 428.0], [55.2, 428.0], [55.3, 428.0], [55.4, 428.0], [55.5, 428.0], [55.6, 428.0], [55.7, 428.0], [55.8, 428.0], [55.9, 428.0], [56.0, 428.0], [56.1, 428.0], [56.2, 428.0], [56.3, 429.0], [56.4, 429.0], [56.5, 429.0], [56.6, 429.0], [56.7, 432.0], [56.8, 432.0], [56.9, 432.0], [57.0, 432.0], [57.1, 432.0], [57.2, 432.0], [57.3, 432.0], [57.4, 432.0], [57.5, 432.0], [57.6, 432.0], [57.7, 432.0], [57.8, 432.0], [57.9, 432.0], [58.0, 432.0], [58.1, 432.0], [58.2, 432.0], [58.3, 432.0], [58.4, 433.0], [58.5, 433.0], [58.6, 433.0], [58.7, 433.0], [58.8, 433.0], [58.9, 433.0], [59.0, 433.0], [59.1, 433.0], [59.2, 433.0], [59.3, 433.0], [59.4, 433.0], [59.5, 433.0], [59.6, 433.0], [59.7, 434.0], [59.8, 434.0], [59.9, 434.0], [60.0, 434.0], [60.1, 434.0], [60.2, 434.0], [60.3, 434.0], [60.4, 434.0], [60.5, 434.0], [60.6, 435.0], [60.7, 435.0], [60.8, 435.0], [60.9, 435.0], [61.0, 435.0], [61.1, 435.0], [61.2, 435.0], [61.3, 435.0], [61.4, 435.0], [61.5, 435.0], [61.6, 435.0], [61.7, 435.0], [61.8, 435.0], [61.9, 435.0], [62.0, 435.0], [62.1, 435.0], [62.2, 435.0], [62.3, 435.0], [62.4, 435.0], [62.5, 435.0], [62.6, 435.0], [62.7, 435.0], [62.8, 435.0], [62.9, 435.0], [63.0, 435.0], [63.1, 435.0], [63.2, 435.0], [63.3, 435.0], [63.4, 435.0], [63.5, 435.0], [63.6, 436.0], [63.7, 436.0], [63.8, 436.0], [63.9, 436.0], [64.0, 436.0], [64.1, 436.0], [64.2, 436.0], [64.3, 436.0], [64.4, 437.0], [64.5, 437.0], [64.6, 437.0], [64.7, 437.0], [64.8, 437.0], [64.9, 438.0], [65.0, 438.0], [65.1, 438.0], [65.2, 438.0], [65.3, 439.0], [65.4, 439.0], [65.5, 439.0], [65.6, 439.0], [65.7, 439.0], [65.8, 439.0], [65.9, 439.0], [66.0, 439.0], [66.1, 439.0], [66.2, 439.0], [66.3, 439.0], [66.4, 439.0], [66.5, 439.0], [66.6, 439.0], [66.7, 439.0], [66.8, 439.0], [66.9, 439.0], [67.0, 440.0], [67.1, 440.0], [67.2, 440.0], [67.3, 440.0], [67.4, 441.0], [67.5, 441.0], [67.6, 441.0], [67.7, 441.0], [67.8, 441.0], [67.9, 441.0], [68.0, 441.0], [68.1, 441.0], [68.2, 441.0], [68.3, 442.0], [68.4, 442.0], [68.5, 442.0], [68.6, 442.0], [68.7, 442.0], [68.8, 442.0], [68.9, 442.0], [69.0, 442.0], [69.1, 442.0], [69.2, 442.0], [69.3, 442.0], [69.4, 442.0], [69.5, 442.0], [69.6, 442.0], [69.7, 442.0], [69.8, 442.0], [69.9, 442.0], [70.0, 443.0], [70.1, 443.0], [70.2, 443.0], [70.3, 443.0], [70.4, 444.0], [70.5, 444.0], [70.6, 444.0], [70.7, 444.0], [70.8, 444.0], [70.9, 444.0], [71.0, 444.0], [71.1, 444.0], [71.2, 444.0], [71.3, 444.0], [71.4, 444.0], [71.5, 444.0], [71.6, 444.0], [71.7, 448.0], [71.8, 448.0], [71.9, 448.0], [72.0, 448.0], [72.1, 448.0], [72.2, 451.0], [72.3, 451.0], [72.4, 451.0], [72.5, 451.0], [72.6, 454.0], [72.7, 454.0], [72.8, 454.0], [72.9, 454.0], [73.0, 455.0], [73.1, 455.0], [73.2, 455.0], [73.3, 455.0], [73.4, 456.0], [73.5, 456.0], [73.6, 456.0], [73.7, 456.0], [73.8, 456.0], [73.9, 457.0], [74.0, 457.0], [74.1, 457.0], [74.2, 457.0], [74.3, 458.0], [74.4, 458.0], [74.5, 458.0], [74.6, 458.0], [74.7, 459.0], [74.8, 459.0], [74.9, 459.0], [75.0, 459.0], [75.1, 459.0], [75.2, 465.0], [75.3, 465.0], [75.4, 465.0], [75.5, 465.0], [75.6, 466.0], [75.7, 466.0], [75.8, 466.0], [75.9, 466.0], [76.0, 467.0], [76.1, 467.0], [76.2, 467.0], [76.3, 467.0], [76.4, 467.0], [76.5, 467.0], [76.6, 467.0], [76.7, 467.0], [76.8, 467.0], [76.9, 467.0], [77.0, 467.0], [77.1, 467.0], [77.2, 467.0], [77.3, 468.0], [77.4, 468.0], [77.5, 468.0], [77.6, 468.0], [77.7, 469.0], [77.8, 469.0], [77.9, 469.0], [78.0, 469.0], [78.1, 469.0], [78.2, 473.0], [78.3, 473.0], [78.4, 473.0], [78.5, 473.0], [78.6, 474.0], [78.7, 474.0], [78.8, 474.0], [78.9, 474.0], [79.0, 474.0], [79.1, 474.0], [79.2, 474.0], [79.3, 474.0], [79.4, 477.0], [79.5, 477.0], [79.6, 477.0], [79.7, 477.0], [79.8, 477.0], [79.9, 482.0], [80.0, 482.0], [80.1, 482.0], [80.2, 482.0], [80.3, 484.0], [80.4, 484.0], [80.5, 484.0], [80.6, 484.0], [80.7, 484.0], [80.8, 484.0], [80.9, 484.0], [81.0, 484.0], [81.1, 484.0], [81.2, 485.0], [81.3, 485.0], [81.4, 485.0], [81.5, 485.0], [81.6, 485.0], [81.7, 485.0], [81.8, 485.0], [81.9, 485.0], [82.0, 485.0], [82.1, 485.0], [82.2, 485.0], [82.3, 485.0], [82.4, 485.0], [82.5, 486.0], [82.6, 486.0], [82.7, 486.0], [82.8, 486.0], [82.9, 487.0], [83.0, 487.0], [83.1, 487.0], [83.2, 487.0], [83.3, 489.0], [83.4, 489.0], [83.5, 489.0], [83.6, 489.0], [83.7, 490.0], [83.8, 490.0], [83.9, 490.0], [84.0, 490.0], [84.1, 490.0], [84.2, 491.0], [84.3, 491.0], [84.4, 491.0], [84.5, 491.0], [84.6, 491.0], [84.7, 491.0], [84.8, 491.0], [84.9, 491.0], [85.0, 494.0], [85.1, 494.0], [85.2, 494.0], [85.3, 494.0], [85.4, 494.0], [85.5, 496.0], [85.6, 496.0], [85.7, 496.0], [85.8, 496.0], [85.9, 498.0], [86.0, 498.0], [86.1, 498.0], [86.2, 498.0], [86.3, 499.0], [86.4, 499.0], [86.5, 499.0], [86.6, 499.0], [86.7, 503.0], [86.8, 503.0], [86.9, 503.0], [87.0, 503.0], [87.1, 503.0], [87.2, 508.0], [87.3, 508.0], [87.4, 508.0], [87.5, 508.0], [87.6, 511.0], [87.7, 511.0], [87.8, 511.0], [87.9, 511.0], [88.0, 655.0], [88.1, 655.0], [88.2, 655.0], [88.3, 655.0], [88.4, 655.0], [88.5, 656.0], [88.6, 656.0], [88.7, 656.0], [88.8, 656.0], [88.9, 670.0], [89.0, 670.0], [89.1, 670.0], [89.2, 670.0], [89.3, 671.0], [89.4, 671.0], [89.5, 671.0], [89.6, 671.0], [89.7, 675.0], [89.8, 675.0], [89.9, 675.0], [90.0, 675.0], [90.1, 675.0], [90.2, 678.0], [90.3, 678.0], [90.4, 678.0], [90.5, 678.0], [90.6, 680.0], [90.7, 680.0], [90.8, 680.0], [90.9, 680.0], [91.0, 684.0], [91.1, 684.0], [91.2, 684.0], [91.3, 684.0], [91.4, 684.0], [91.5, 703.0], [91.6, 703.0], [91.7, 703.0], [91.8, 703.0], [91.9, 825.0], [92.0, 825.0], [92.1, 825.0], [92.2, 825.0], [92.3, 825.0], [92.4, 825.0], [92.5, 825.0], [92.6, 825.0], [92.7, 825.0], [92.8, 825.0], [92.9, 825.0], [93.0, 825.0], [93.1, 825.0], [93.2, 828.0], [93.3, 828.0], [93.4, 828.0], [93.5, 828.0], [93.6, 852.0], [93.7, 852.0], [93.8, 852.0], [93.9, 852.0], [94.0, 870.0], [94.1, 870.0], [94.2, 870.0], [94.3, 870.0], [94.4, 870.0], [94.5, 872.0], [94.6, 872.0], [94.7, 872.0], [94.8, 872.0], [94.9, 874.0], [95.0, 874.0], [95.1, 874.0], [95.2, 874.0], [95.3, 875.0], [95.4, 875.0], [95.5, 875.0], [95.6, 875.0], [95.7, 875.0], [95.8, 1052.0], [95.9, 1052.0], [96.0, 1052.0], [96.1, 1052.0], [96.2, 1053.0], [96.3, 1053.0], [96.4, 1053.0], [96.5, 1053.0], [96.6, 1066.0], [96.7, 1066.0], [96.8, 1066.0], [96.9, 1066.0], [97.0, 1114.0], [97.1, 1114.0], [97.2, 1114.0], [97.3, 1114.0], [97.4, 1114.0], [97.5, 1154.0], [97.6, 1154.0], [97.7, 1154.0], [97.8, 1154.0], [97.9, 1243.0], [98.0, 1243.0], [98.1, 1243.0], [98.2, 1243.0], [98.3, 1372.0], [98.4, 1372.0], [98.5, 1372.0], [98.6, 1372.0], [98.7, 1372.0], [98.8, 1882.0], [98.9, 1882.0], [99.0, 1882.0], [99.1, 1882.0], [99.2, 2047.0], [99.3, 2047.0], [99.4, 2047.0], [99.5, 2047.0], [99.6, 2164.0], [99.7, 2164.0], [99.8, 2164.0], [99.9, 2164.0]], "isOverall": false, "label": "HTTP请求 search", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 121.0, "series": [{"data": [[2100.0, 1.0], [600.0, 8.0], [700.0, 1.0], [200.0, 81.0], [800.0, 9.0], [1000.0, 3.0], [1100.0, 2.0], [1200.0, 1.0], [1300.0, 1.0], [400.0, 121.0], [1800.0, 1.0], [2000.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP请求 search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 202.0, "series": [{"data": [[0.0, 202.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 28.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.75498668E12, "maxY": 2.885321100917432, "series": [{"data": [[1.75498668E12, 1.0666666666666667], [1.75498674E12, 2.885321100917432]], "isOverall": false, "label": "线程组 并发测试", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75498674E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 412.1333333333334, "minX": 1.0, "maxY": 551.7916666666666, "series": [{"data": [[1.0, 412.1333333333334], [2.0, 551.7916666666666], [3.0, 416.6082474226802]], "isOverall": false, "label": "HTTP请求 search", "isController": false}, {"data": [[2.7682403433476415, 430.2446351931329]], "isOverall": false, "label": "HTTP请求 search-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 115.08333333333333, "minX": 1.75498668E12, "maxY": 15249.85, "series": [{"data": [[1.75498668E12, 1049.5], [1.75498674E12, 15249.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75498668E12, 115.08333333333333], [1.75498674E12, 1672.4833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75498674E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 428.80000000000007, "minX": 1.75498668E12, "maxY": 430.3440366972477, "series": [{"data": [[1.75498668E12, 428.80000000000007], [1.75498674E12, 430.3440366972477]], "isOverall": false, "label": "HTTP请求 search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75498674E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 318.1559633027524, "minX": 1.75498668E12, "maxY": 333.2666666666667, "series": [{"data": [[1.75498668E12, 333.2666666666667], [1.75498674E12, 318.1559633027524]], "isOverall": false, "label": "HTTP请求 search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75498674E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 10.33486238532109, "minX": 1.75498668E12, "maxY": 59.933333333333316, "series": [{"data": [[1.75498668E12, 59.933333333333316], [1.75498674E12, 10.33486238532109]], "isOverall": false, "label": "HTTP请求 search", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75498674E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 207.0, "minX": 1.75498668E12, "maxY": 2164.0, "series": [{"data": [[1.75498668E12, 1882.0], [1.75498674E12, 2164.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75498668E12, 1157.8000000000004], [1.75498674E12, 678.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75498668E12, 1882.0], [1.75498674E12, 1918.7500000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75498668E12, 1882.0], [1.75498674E12, 874.05]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75498668E12, 209.0], [1.75498674E12, 207.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75498668E12, 218.0], [1.75498674E12, 422.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75498674E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 221.5, "minX": 1.0, "maxY": 675.0, "series": [{"data": [[2.0, 417.5], [4.0, 221.5], [1.0, 675.0], [8.0, 423.5], [9.0, 233.0], [5.0, 435.0], [11.0, 231.0], [3.0, 313.5], [6.0, 441.5], [7.0, 433.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 675.0, "series": [{"data": [[2.0, 315.0], [4.0, 212.5], [1.0, 675.0], [8.0, 219.0], [9.0, 221.0], [5.0, 225.0], [11.0, 220.5], [3.0, 212.0], [6.0, 228.0], [7.0, 226.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.75498668E12, "maxY": 3.6, "series": [{"data": [[1.75498668E12, 0.2833333333333333], [1.75498674E12, 3.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75498674E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.25, "minX": 1.75498668E12, "maxY": 3.6333333333333333, "series": [{"data": [[1.75498668E12, 0.25], [1.75498674E12, 3.6333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75498674E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.25, "minX": 1.75498668E12, "maxY": 3.6333333333333333, "series": [{"data": [[1.75498668E12, 0.25], [1.75498674E12, 3.6333333333333333]], "isOverall": false, "label": "HTTP请求 search-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75498674E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.25, "minX": 1.75498668E12, "maxY": 3.6333333333333333, "series": [{"data": [[1.75498668E12, 0.25], [1.75498674E12, 3.6333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75498674E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


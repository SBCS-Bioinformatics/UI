/*
    GD - GeoDiver's JavaScript module

    Define a global GD (acronym for GeoDiver) object containing all
    GD associated methods:
*/

//define global GD object
var GD;
if (!GD) {
    GD = {};
}

//GD module
(function () {

  GD.createPCAPLOT = function() {
    var CumulativePCA = {
      x: ['PC1','PC2','PC3','PC4','PC5','PC6','PC7','PC8','PC9','PC10','PC11','PC12','PC13','PC14','PC15','PC16','PC17','PC18','PC19','PC20','PC21','PC22','PC23','PC24','PC25','PC26','PC27','PC28','PC29','PC30','PC31','PC32','PC33','PC34','PC35','PC36','PC37','PC38','PC39','PC40','PC41','PC42','PC43','PC44','PC45','PC46','PC47','PC48','PC49','PC50','PC51','PC52','PC53','PC54','PC55','PC56'],
      y: [17.146, 25.586, 32.149, 36.651, 40.042, 43.331, 45.810, 47.883, 49.860, 51.766, 53.471, 55.100, 56.671, 58.193, 59.685, 61.079, 62.387, 63.686, 64.980, 66.212, 67.435, 68.634, 69.816, 70.985, 72.114, 73.240, 74.352, 75.419, 76.477, 77.525, 78.569, 79.603, 80.623, 81.606, 82.583, 83.551, 84.511, 85.470, 86.422, 87.362, 88.285, 89.201, 90.108, 91.008, 91.895, 92.779, 93.657, 94.522, 95.378, 96.232, 97.071, 97.900, 98.658, 99.356, 100.000, 100.000], 
      type: 'scatter',
      name: 'Cumulative PCA'
    };
    var PCA = {
      x: ['PC1','PC2','PC3','PC4','PC5','PC6','PC7','PC8','PC9','PC10','PC11','PC12','PC13','PC14','PC15','PC16','PC17','PC18','PC19','PC20','PC21','PC22','PC23','PC24','PC25','PC26','PC27','PC28','PC29','PC30','PC31','PC32','PC33','PC34','PC35','PC36','PC37','PC38','PC39','PC40','PC41','PC42','PC43','PC44','PC45','PC46','PC47','PC48','PC49','PC50','PC51','PC52','PC53','PC54','PC55','PC56'], 
      y: [17.146, 8.440, 6.564, 4.502, 3.390, 3.289, 2.479, 2.073, 1.977, 1.906, 1.706, 1.629, 1.571, 1.522, 1.492, 1.394, 1.308, 1.299, 1.293, 1.233, 1.222, 1.199, 1.182, 1.169, 1.130, 1.126, 1.111, 1.067, 1.058, 1.048, 1.044, 1.034, 1.020, 0.983, 0.977, 0.968, 0.961, 0.958, 0.952, 0.941, 0.923, 0.916, 0.907, 0.900, 0.887, 0.885, 0.877, 0.866, 0.856, 0.853, 0.840, 0.828, 0.759, 0.697, 0.644, 0.000], 
      type: 'scatter',
      name: 'PCA'
    };
    var data = [CumulativePCA, PCA];
    var layout = {legend: {
      x: 0,
      y: 100,
      traceorder: 'normal',
      font: {
        family: 'sans-serif',
        size: 12,
        color: '#000'
      },
      bgcolor: '#E2E2E2',
      bordercolor: '#FFFFFF',
      borderwidth: 2
    }};
    Plotly.newPlot('PCA_plot', data, layout);
  }




}());



$(document).ready(function() {
  $('select').material_select();
    $("#analyse_geo_btn").click(function(event) {
      event.preventDefault();
      var geo_db = $('input[name=geo_db]').val() //GDS5093
      if ( $("#analyse_geo_btn").hasClass('load_geo_db') )  {
        $('#load_data_model_header_text').text('Loading GEO Dataset: ' + geo_db)
        $('#load_data_model_text').text('This should take a few seconds. Please leave this page open')
        $('#load_geo_db').openModal({dismissible: false});
        $('#geo_db_title').html('Acute Dengue patients: whole blood [' + geo_db + '] <i class=" activator material-icons">info</i>')
        setTimeout(function() {
          $('#analyse_geo_btn').html('Analyse<i class="material-icons right">send</i>')
          $('#analyse_geo_btn').removeClass('load_geo_db')
          $('#geo_db_summary').show()
          $('#load_geo_db').closeModal();
        }, 3000);
      } else {
        $('#load_data_model_header_text').text('Analysing GEO Dataset: ' + geo_db)
        $('#load_data_model_text').text('This should take a few minutes. Please leave this page open')
        $('#load_geo_db').openModal({dismissible: false});
        setTimeout(function() {
          $('#results_section').show()
          GD.createPCAPLOT()
          $('#load_geo_db').closeModal();
        }, 3000);

      }
    });


    $("[name=phenotype_select]").click(function(){
        if ($(this).val() != 'Disease_State'){
            $('#Disease_State_Factors').hide();
            $('#Infection_Factors').show();
        } else {
            $('#Infection_Factors').hide();
            $('#Disease_State_Factors').show();
        }
    });





});
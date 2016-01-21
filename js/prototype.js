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

  GD.createVolcanoPlot =function(){

    var trace1 = {
      x: [-1.065,-1.051,-1.004,-1.000,-0.999,-0.980,-0.973,-0.973,0.946,-0.945,-0.934,-0.933,-0.926,-0.922,-0.911,-0.910,-0.907,-0.904,-0.899,-0.888,-0.884,0.879,-0.872,-0.865,-0.865,-0.862,-0.862,-0.853,-0.848,-0.846,-0.832,0.831,-0.831,-0.830,-0.829,-0.825,-0.823,-0.817,-0.813,0.811,-0.811,-0.810,-0.806,-0.805,0.796,0.790,-0.790,-0.784,-0.783,0.778,0.775,0.768,-0.767,-0.765,-0.764,0.762,-0.762,-0.756,-0.756,-0.755,-0.753,-0.752,-0.752,0.752,0.750,-0.746,-0.738,-0.728,0.727,-0.726,0.725,-0.724,-0.723,-0.722,0.720,-0.719,0.715,-0.713,-0.712,-0.711,-0.710,-0.710,-0.709,-0.709,-0.708,0.708,-0.708,-0.705,-0.704,-0.704,0.704,-0.702,-0.701,-0.700,-0.697,-0.697,-0.697,-0.696,-0.694,-0.693],
      y: [18.719, 25.497, 16.672, 20.371, 18.478, 16.587, 17.416, 24.482, 16.318, 14.420, 15.494, 19.096, 18.949, 19.273, 15.724, 20.303, 13.869, 16.857, 14.971, 18.154, 15.202, 13.980, 13.242, 17.531, 12.710, 14.716, 17.522, 17.252, 16.381, 16.474, 16.152, 16.055, 14.314, 14.649, 16.572, 12.504, 15.049, 18.970, 16.402, 11.053, 17.033, 12.371, 16.247, 16.483, 9.519, 13.128, 15.610, 16.049, 13.173, 12.177, 13.406, 14.160, 14.090, 18.330, 15.442, 11.627, 16.060, 20.480, 15.637, 10.734, 12.833, 14.146, 16.210, 12.845, 12.499, 16.317, 14.917, 15.956, 13.772, 13.377, 10.302, 10.077, 14.405, 15.568, 11.233, 16.008, 12.924, 12.902, 15.783, 13.669, 16.335, 12.782, 15.620, 14.087, 10.620, 14.584, 14.576, 10.031, 11.019, 16.549, 13.658, 10.919, 14.061, 7.300, 13.507, 13.492, 13.230, 16.277, 12.482, 8.150],
      mode: 'markers',
      type: 'scatter',
      name: 'volcano_plot',
      text: ['DDR1','RFC2','HSPA6','PAX8','GUCA1A','UBA7','THRA','PTPN21','CCL5','CYP2E1','EPHB3','ESRRA','CYP2A6','SCARB1','TTLL12','LINC00152','WFDC2','MAPK1','MAPK1','ADAM32','SPATA17','PRR22','PRR22','PXK','PXK','VPS18','MSANTD3','SLC46A1','SLC46A1','TIMD4','SLC39A5','ZDHHC11','ATP6V1E2','AFG3L1P','CILP2','CILP2','PIGX','TMEM196','SLC39A13','BEST4','AK9','CORO6','TMEM106A','TMEM106A','ALG10','ALG10','TTC39C','NEXN','C15orf40','RAX2','MFAP3','EYA3','GIMAP1','GIMAP1','GIMAP1','KLK8','CCDC65','CCDC65','FAM122C','FAM122C','CFAP53','CFAP53','ARMCX4','RBBP6','CENPBD1','TRIOBP','TRIOBP','CATSPER1','HOXD4','GSC','SP7','PDE7A','CNOT7','CRYZL1','PRSS33','PRSS33','C19orf26','C19orf26','MCMDC2','TIRAP','LEAP2','MSI2','SCIN','SCIN','CTCFL','C4orf33','C4orf33','C4orf33','ZNF333','TVP23C','RDH10','RDH10','SRSF12','FAM71A','FAM71A','GAPT','FLJ30901','ERICH5','ERICH5','CCDC185'],
      marker: { size: 7.5 }
    };

    var data = [ trace1 ];

    var layout = {
      xaxis: {
        range: [ -1.15, 1.15 ]
      },
      yaxis: {
        range: [5, 28]
      },
      hovermode: 'closest',
      xaxis: {
        title: 'Log 2 Fold Change',
        titlefont: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
      yaxis: {
        title: '-Log10(P Value)',
        titlefont: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }

     };
    Plotly.newPlot('volcano_plot', data, layout);
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
          $('#results_tabs').tabs('select_tab', 'DGEA');
          GD.createPCAPLOT()
          GD.createVolcanoPlot()
          $('#load_geo_db').closeModal();
        }, 1000);

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
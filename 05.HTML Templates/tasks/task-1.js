/* globals $ */

function solve() {
  
  return function (selector) {
      var template = '';
      template += '<table class="items-table"><thead><tr>';
      template += '<th>#</th>';
      template += '{{#each headers}}';
      template += '<th>{{this}}</th>';
      template += '{{/each}}';
      template += '</tr></thead>';
      template += '<tbody>';
      template += '{{#each items}}';
      template += '<tr>';
      template += '<td>{{@index}}</td>';
      template += '<td>{{this.col1}}</td>';
      template += '<td>{{this.col2}}</td>';
      template += '<td>{{this.col3}}</td>';
      template += '</tr>';
      template += '{{/each}}';
      template += '</tbody>';
      template += '</table>';

    $(selector).html(template);
  };
};

module.exports = solve;
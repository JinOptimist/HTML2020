$(document).ready(function(){
	var ColumnTypeNumber = 1;
	var ColumnTypeText = 'Smile';
	var ColumnTypeFormula = 3;
	
	init();
	
	function init(){
		var columns = [
			createTextColumn('Name', ['Pol', 'Kate', 'Jane']),
			createNumberColumn('Mark', 1, 10),
			createTextColumn('Sex', ['Male', 'Female']),
			createNumberColumn('Age', 15, 25),
			createNumberColumn('Height', 150, 200),
			createNumberColumn('Weight', 50, 100),
			createFormulaColumn('Index', function (row){ 
					var h = row.Height / 100;
					return row.Weight / (h * h);
				}),
			];
		var options = {
			rowCount: 10,
			selector: '.page-content table',
			columns: columns,
		};
		generateTable(options);
	}
	
	function createTextColumn(name, values){
		return {
				name: name,
				columnType: ColumnTypeText,
				values: values
			}
	}
	
	function createNumberColumn(name, min, max){
		return {
				name: name,
				columnType: ColumnTypeNumber,
				min: min,
				max: max
			};
	}
	
	function createFormulaColumn(name, formula){
			return {
				name: name,
				columnType: ColumnTypeFormula,
				formula: formula
			};
	}
	
	function generateTable(options){
		
		var dataRows = [];
		
		drawHeader(options);
		
		for(var i = 0; i < options.rowCount ; i++){
			var dataRow = generateDataRow(options);
			dataRows.push(dataRow);
		}
		
		dataRows = dataRows.sort(function (a, b){ return a.Index - b.Index;});
		
		for(var i = 0; i < dataRows.length ; i++){
			var row = dataRows[i];
			drawRow(options, row);
		}
		
		drawNiceRow(options, dataRows);
		
		//generateTotalRow(namesObjMagic, totalAge, rowCount);
	}
	
	function drawHeader(options){
		var tr = $('<tr>');
			
		for(var i = 0; i < options.columns.length; i++){
			var columnInfo = options.columns[i];
			
			var td  = $('<td>');
			td.text(columnInfo.name);
			tr.append(td);
		}
		
		$(options.selector).append(tr);
	}
	
	function generateDataRow(options){
		var dataRow = {};
		
		for(var i = 0; i < options.columns.length; i++){
			var columnInfo = options.columns[i];
			
			var value;
			switch(columnInfo.columnType){
				case ColumnTypeNumber:
					value = randomInteger(columnInfo.min, columnInfo.max);	
					break;
				case ColumnTypeText:
					value = randElement(columnInfo.values);	
					break;
				case ColumnTypeFormula:
					value = columnInfo.formula(dataRow);
					break;
			}
			
			dataRow[columnInfo.name] = value;
		}
		return dataRow;
	}
	
	function drawNiceRow(options, dataRow){
		for(var i = 0; i < dataRow.length; i++){
			var span = $("<div>");
			span.addClass('profile');
			span.text(dataRow[i].Name);
			$('.nice-view').append(span);
		}
	}
	
	function drawRow(options, dataRow){
		var tr = $('<tr>');
			
		for(var i = 0; i < options.columns.length; i++){
			var columnInfo = options.columns[i];
			
			var td  = $('<td>');
			var value = dataRow[columnInfo.name];
			td.text(value);
			tr.append(td);
		}
		
		$(options.selector).append(tr);
	}
	
	
	// function generateTotalRow(options, namesMagic){
		// var totalRow = $("<tr>");
		
		// namesMagic = namesMagic.sort(function (a, b){
			// return b.count - a.count;
		// });
		
		// var tdTotalName = $("<td>");
		// //tdTotalName.text(namesMagic[0].name);
		// tdTotalName.text(`${namesMagic[0].name}(${namesMagic[0].count})`);
		// totalRow.append(tdTotalName);
		
		
		// var tdTotalAge = $("<td>");
		// tdTotalAge.text(totalAge / rowCount);
		// totalRow.append(tdTotalAge);
		
		// $(options.selector).append(totalRow);
	// }
	
	// names = [];
	// nameCoolGirl = "Kate"
	// function AddOrIncreaseCount(names, nameCoolGirl){
		// var existObjWithName = names.find(function (oneOfObjFromArray){
			// return oneOfObjFromArray.name == nameCoolGirl;
		// });
		
		// if (!existObjWithName){
			// existObjWithName = {
				// name: nameCoolGirl,
				// count: 1 
			// };
			// names.push(existObjWithName);
		// }else{
			// existObjWithName.count++;
		// }
	// }
	
	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}
	
	function randElement(items){
		return items[Math.floor(Math.random() * items.length)];
	}
});

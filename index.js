const inquirer = require('inquirer');
const excel = require('xlsx');


function getPeopleFromExcel() {
    let workbook = excel.readFile('./database/people.xlsx');
    let result = excel.utils.sheet_to_json(workbook.Sheets.Sheet1);
    console.log(result);
}


function askForPeopleInfo() {
    // preguntas
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Cual es su nombre'
    }, {
        type: 'input',
        name: 'lastName',
        message: 'Cual es su apellido'
    }, {
        type: 'input',
        name: 'years',
        message: 'Cuantos años tiene'
    }, {
        type: 'input',
        name: 'email',
        message: 'Cual es su email'
    }])
    .then(function (answers) {
        console.log(answers);
        showMainMenu();
    });
}


function showMainMenu() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Que acción deseas realizar',
        choices: [{
            name: 'list',
            message: 'Listar personas',            
        }, {
            name: 'add',
            message: 'Agregar una persona'
        }, {
            name: 'delete',
            message: 'Eliminar persona'
        }]
    }])
    .then(function(selection) {
        if (selection.action === 'list') {
            console.log('funcionalidad no implementada');
        }
        else if (selection.action === 'add') {
            console.log('Ingresa los datos de la persona');
            askForPeopleInfo();
        }
        else if (selection.action === 'delete') {
            console.log('funcionalidad no implementada')
        }
    });
}


showMainMenu();
// readPeopleFromExcel();
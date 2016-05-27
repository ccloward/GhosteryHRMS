var ViewModel = function () {
    var self = this;
    self.employees = ko.observableArray();
    self.error = ko.observable();

    var employeesUri = '/api/Employees/';

    function ajaxHelper(uri, method, data) {
        self.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getAllEmployees() {
        ajaxHelper(employeesUri, 'GET').done(function (data) {
            self.employees(data);
        });
    }

    // Fetch the initial data.
    getAllEmployees();

    self.newEmployee = {
        FirstName: ko.observable(),
        MiddleName: ko.observable(),
        LastName: ko.observable(),
        SSN: ko.observable(),
        BirthDate: ko.observable(),
        Telephone: ko.observable(),
        Email: ko.observable(),
        Address1: ko.observable(),
        Address2: ko.observable(),
        Address3: ko.observable(),
        City: ko.observable(),
        State: ko.observable(),
        Zip: ko.observable(),
        AnnualSalary: ko.observable(),
        Department: ko.observable(),
        Supervisor: ko.observable(),
        HireDate: ko.observable()
    }

    self.addEmployee = function (formElement) {
        var employee = {
            FirstName: self.newEmployee.FirstName(),
            MiddleName: self.newEmployee.MiddleName(),
            LastName: self.newEmployee.LastName(),
            SSN: self.newEmployee.SSN(),
            BirthDate: self.newEmployee.BirthDate(),
            Telephone: self.newEmployee.Telephone(), 
            Email: self.newEmployee.Email(),
            Address1: self.newEmployee.Address1(),
            Address2: self.newEmployee.Address2(),
            Address3: self.newEmployee.Address3(),
            City: self.newEmployee.City(),
            State: self.newEmployee.State(),
            Zip: self.newEmployee.Zip(),
            AnnualSalary: self.newEmployee.AnnualSalary(),
            Department: self.newEmployee.Department(),
            Supervisor: self.newEmployee.Supervisor(),
            HireDate: self.newEmployee.HireDate()
        };

        ajaxHelper(employeesUri, 'POST', employee).done(function (employee) {
            self.employees.push(employee);
            document.getElementById("addEmployeeForm").reset();
        });         
    }

    self.removeEmployee = function (employee) {
        ajaxHelper(employeesUri, 'DELETE', employee).done(function (employee) {
            self.employees.remove(employee);
        });
    }

    self.formatCurrency = function (value) {
        return "$" + value.toFixed(2);
    }
};

ko.applyBindings(new ViewModel());
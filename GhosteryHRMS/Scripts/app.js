var ViewModel = function () {

    this.employees = ko.observableArray();
    this.error = ko.observable();

    var employeesUri = '/api/Employees/';

    function ajaxHelper(uri, method, data) {
        this.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            this.error(errorThrown);
        });
    }

    function getEmployees() {
        ajaxHelper(employeesUri, 'GET').done(function (data) {
            this.employees(data);
        });
    }

    // Fetch the initial data.
    getEmployees();
};

ko.applyBindings(new ViewModel());
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
};

ko.applyBindings(new ViewModel());
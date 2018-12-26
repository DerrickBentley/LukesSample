function contactController($scope, $http) {
    $scope.loading = true;
    $scope.addMode = false;

    //Used to display the data 
    $http.get('/api/Contacts/').success(function (data) {
        $scope.Contacts = data;
        $scope.loading = false;
    })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });

    $scope.toggleEdit = function () {
        this.Contact.editMode = !this.Contact.editMode;
    };
    $scope.toggleAdd = function () {
        $scope.addMode = !$scope.addMode;
    };

    //Used to save a record after edit 
    $scope.save = function () {
        alert("Edit");
        $scope.loading = true;
        var frien = this.Contact;
        alert(emp);
        $http.put('/api/Contacts/', frien).success(function (data) {
            alert("Saved Successfully!!");
            emp.editMode = false;
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving Contact! " + data;
            $scope.loading = false;

        });
    };

    //Used to add a new record 
    $scope.add = function () {
        $scope.loading = true;
        $http.post('/api/Contacts/', this.newContact).success(function (data) {
            alert("Added Successfully!!");
            $scope.addMode = false;
            $scope.Contacts.push(data);
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Adding Contact! " + data;
            $scope.loading = false;

        });
    };

    //Used to edit a record 
    $scope.deleteContact = function () {
        $scope.loading = true;
        var Contactid = this.Contact.ContactId;
        $http.delete('/api/Contacts/' + Contactid).success(function (data) {
            alert("Deleted Successfully!!");
            $.each($scope.Contacts, function (i) {
                if ($scope.Contacts[i].ContactId === Contactid) {
                    $scope.Contacts.splice(i, 1);
                    return false;
                }
            });
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving Contact! " + data;
            $scope.loading = false;

        });
    };

} 
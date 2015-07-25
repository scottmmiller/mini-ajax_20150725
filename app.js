$(document).ready(function() {

   $('#addUser').on('click', function(event) {
      event.preventDefault();
      var userName = $('#name').val();
      var userJob = $('#job').val();
      return $.ajax({
         method: "POST",
         url: 'http://reqr.es/api/users',
         data: {name: userName, job: userJob},
         success: function (response) {
            $('#recentUser').html('<li>' + 'name: ' + response.name + '</li>' +
               '<li>' + 'job: ' + response.job + '</li>' +
               '<li>' + 'id: ' + response.id + '</li>' +
               '<li>' + 'created at: ' + response.createdAt + '</li>')
         }
      });
   });


      // ****GET USERS****
   var insertData = function(array) {
      for (var i = 0; i < array.length; i++) {
         $("#userInfo" + (i + 1)).html('<div>' + 'User Info: ' +
            '<li>' + 'First name: ' + array[i].first_name + '</li>' +
            '<li>' + 'Last name: ' + array[i].last_name + '</li>' +
            '<hr>' +
            '</div)')
      };
   };

   $('#getUsers').on('click', function() {
      return $.ajax({
         method: "GET",
         url: 'http://reqr.es/api/users?page=1',
         success: function(response) {
            console.log("Getting Users: ", response.data);
            insertData(response.data);
         }
      });
   });
      // ************************
});

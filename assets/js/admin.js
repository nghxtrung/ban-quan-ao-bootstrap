$("#checkbox-product-heading").change(function() {
    let checkboxProducts = document.querySelectorAll(".checkbox-product");
    if (this.checked) {
        checkboxProducts.forEach(function(item) {
            item.checked = true;
        });
    } else {
        checkboxProducts.forEach(function(item) {
            item.checked = false;
        });
    }
});

$("#checkbox-coupon-heading").change(function() {
    let checkboxCoupons = document.querySelectorAll(".checkbox-coupon");
    if (this.checked) {
        checkboxCoupons.forEach(function(item) {
            item.checked = true;
        });
    } else {
        checkboxCoupons.forEach(function(item) {
            item.checked = false;
        });
    }
});

$("#checkbox-classify-heading").change(function() {
    let checkboxClassifies = document.querySelectorAll(".checkbox-classify");
    if (this.checked) {
        checkboxClassifies.forEach(function(item) {
            item.checked = true;
        });
    } else {
        checkboxClassifies.forEach(function(item) {
            item.checked = false;
        });
    }
});

$("#checkbox-review-heading").change(function() {
    let checkboxReviews = document.querySelectorAll(".checkbox-review");
    if (this.checked) {
        checkboxReviews.forEach(function(item) {
            item.checked = true;
        });
    } else {
        checkboxReviews.forEach(function(item) {
            item.checked = false;
        });
    }
});

$("#checkbox-order-heading").change(function() {
    let checkboxOrders = document.querySelectorAll(".checkbox-order");
    if (this.checked) {
        checkboxOrders.forEach(function(item) {
            item.checked = true;
        });
    } else {
        checkboxOrders.forEach(function(item) {
            item.checked = false;
        });
    }
});

$("#checkbox-user-heading").change(function() {
    let checkboxUsers = document.querySelectorAll(".checkbox-user");
    if (this.checked) {
        checkboxUsers.forEach(function(item) {
            item.checked = true;
        });
    } else {
        checkboxUsers.forEach(function(item) {
            item.checked = false;
        });
    }
});

$(document).ready(function() {
    $('#product-table').DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "Kh??ng c?? d??? li???u",
            "info":           "Hi???n th??? t??? _START_ ?????n _END_ c???a _TOTAL_ k???t qu???",
            "infoEmpty":      "Hi???n th??? 0 k???t qu???",
            "infoFiltered":   "(???? l???c t??? _MAX_ k???t qu???)",
            "lengthMenu":     "Hi???n th??? _MENU_ k???t qu???",
            "search":         "T??m ki???m:",
            "zeroRecords":    "Kh??ng t??m th???y k???t qu???",
            "paginate": {
                "next":       "Ti???p theo",
                "previous":   "Tr?????c ????"
            }
        }
    });
    $('#coupon-table').DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "Kh??ng c?? d??? li???u",
            "info":           "Hi???n th??? t??? _START_ ?????n _END_ c???a _TOTAL_ k???t qu???",
            "infoEmpty":      "Hi???n th??? 0 k???t qu???",
            "infoFiltered":   "(???? l???c t??? _MAX_ k???t qu???)",
            "lengthMenu":     "Hi???n th??? _MENU_ k???t qu???",
            "search":         "T??m ki???m:",
            "zeroRecords":    "Kh??ng t??m th???y k???t qu???",
            "paginate": {
                "next":       "Ti???p theo",
                "previous":   "Tr?????c ????"
            }
        }
    });
    $('#classify-table').DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "Kh??ng c?? d??? li???u",
            "info":           "Hi???n th??? t??? _START_ ?????n _END_ c???a _TOTAL_ k???t qu???",
            "infoEmpty":      "Hi???n th??? 0 k???t qu???",
            "infoFiltered":   "(???? l???c t??? _MAX_ k???t qu???)",
            "lengthMenu":     "Hi???n th??? _MENU_ k???t qu???",
            "search":         "T??m ki???m:",
            "zeroRecords":    "Kh??ng t??m th???y k???t qu???",
            "paginate": {
                "next":       "Ti???p theo",
                "previous":   "Tr?????c ????"
            }
        }
    });
    $('#review-table').DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "Kh??ng c?? d??? li???u",
            "info":           "Hi???n th??? t??? _START_ ?????n _END_ c???a _TOTAL_ k???t qu???",
            "infoEmpty":      "Hi???n th??? 0 k???t qu???",
            "infoFiltered":   "(???? l???c t??? _MAX_ k???t qu???)",
            "lengthMenu":     "Hi???n th??? _MENU_ k???t qu???",
            "search":         "T??m ki???m:",
            "zeroRecords":    "Kh??ng t??m th???y k???t qu???",
            "paginate": {
                "next":       "Ti???p theo",
                "previous":   "Tr?????c ????"
            }
        }
    });
    $('#order-table').DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "Kh??ng c?? d??? li???u",
            "info":           "Hi???n th??? t??? _START_ ?????n _END_ c???a _TOTAL_ k???t qu???",
            "infoEmpty":      "Hi???n th??? 0 k???t qu???",
            "infoFiltered":   "(???? l???c t??? _MAX_ k???t qu???)",
            "lengthMenu":     "Hi???n th??? _MENU_ k???t qu???",
            "search":         "T??m ki???m:",
            "zeroRecords":    "Kh??ng t??m th???y k???t qu???",
            "paginate": {
                "next":       "Ti???p theo",
                "previous":   "Tr?????c ????"
            }
        }
    });
    $('#user-table').DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "Kh??ng c?? d??? li???u",
            "info":           "Hi???n th??? t??? _START_ ?????n _END_ c???a _TOTAL_ k???t qu???",
            "infoEmpty":      "Hi???n th??? 0 k???t qu???",
            "infoFiltered":   "(???? l???c t??? _MAX_ k???t qu???)",
            "lengthMenu":     "Hi???n th??? _MENU_ k???t qu???",
            "search":         "T??m ki???m:",
            "zeroRecords":    "Kh??ng t??m th???y k???t qu???",
            "paginate": {
                "next":       "Ti???p theo",
                "previous":   "Tr?????c ????"
            }
        }
    });
    $('#revenue-table').DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "Kh??ng c?? d??? li???u",
            "info":           "Hi???n th??? t??? _START_ ?????n _END_ c???a _TOTAL_ k???t qu???",
            "infoEmpty":      "Hi???n th??? 0 k???t qu???",
            "infoFiltered":   "(???? l???c t??? _MAX_ k???t qu???)",
            "lengthMenu":     "Hi???n th??? _MENU_ k???t qu???",
            "search":         "T??m ki???m:",
            "zeroRecords":    "Kh??ng t??m th???y k???t qu???",
            "paginate": {
                "next":       "Ti???p theo",
                "previous":   "Tr?????c ????"
            }
        },
    });
});

DecoupledEditor
        .create( document.querySelector( '#editor' ) )
        .then( editor => {
            const toolbarContainer = document.querySelector( '#toolbar-container' );

            toolbarContainer.appendChild( editor.ui.view.toolbar.element );
        } )
        .catch( error => {
            console.error( error );
        } );
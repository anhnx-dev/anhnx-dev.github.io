var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var bounds = new google.maps.LatLngBounds();

//Phương thức khởi tạo
function initialize(lat, lng, infoWindowContent, mapCanvas, markerIconUrl) {
    if (!mapCanvas)
        mapCanvas = "map_canvas";
    geocoder = new google.maps.Geocoder();

    //Khởi tạo vị trí giữa bản đồ (điền vĩ độ, kinh độ điểm cẩn hiển thị tại đây) (Xử lý lấy từ CSDL ra)
    var latlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    }

    //Tìm div có id map_canvas để hiển thị bản đồ
    map = new google.maps.Map(document.getElementById(mapCanvas), myOptions);

    //Đánh dấu điểm tìm được
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: markerIconUrl
    });

    //Mở cửa sổ chứa thông tin của điểm tìm được. Điền thông tin của điểm đó tại đây (Xử lý lấy từ CSDL ra)
    //                infowindow.setContent("<%=infoWindow %>");
    //                infowindow.open(map, marker);

    //OpenInfoBox(map, marker, "<%=infoWindow %>");
    google.maps.event.addListener(marker, 'click', function (event) {
        OpenInfoBox(map, marker, infoWindowContent);
    });

    //Thêm sự kiện click vào map ---> Lấy vĩ độ, kinh độ, địa chỉ ---> điền vào các textbox (phục vụ việc lấy thông tin để lưu vào CSDL)
    google.maps.event.addListener(map, 'click', function (event) {
        codeLatLng(event.latLng);
    });

    //Code tự động zoom vào giữa các điểm được đánh dấu
    bounds.extend(marker.getPosition());   

    //Tìm theo địa chỉ trên textbox
    //codeAddress();
}

//Phương thức đánh dấu thêm điểm
function addMarker(lat2, lng2, infoWindowContent2, markerIconUrl) {
    var latlng2 = new google.maps.LatLng(lat2, lng2);
    var marker2 = new google.maps.Marker({
        position: latlng2,
        map: map,
        icon: markerIconUrl
    });
    google.maps.event.addListener(marker2, 'click', function (event) {
        OpenInfoBox(map, marker2, infoWindowContent2);
    });

    //Code tự động zoom vào giữa các điểm được đánh dấu
    bounds.extend(marker2.getPosition());
    map.fitBounds(bounds);
}

function OpenInfoBox(map, marker, boxText) {
    //Mở với cửa sổ được tuỳ chỉnh lại style            
    var myOptions = {
        content: boxText
        , disableAutoPan: false
        , maxWidth: 0
        , pixelOffset: new google.maps.Size(-170, 0)//x: left so với độ rộng của Infobox, y: top so với độ cao của infobox
        , zIndex: null
        , boxStyle: {
            /*
    background: "url('tipbox.gif') no-repeat"
    , opacity: 0.75
    , width: "280px"*/
        }
        , closeBoxMargin: "4px 4px 4px 4px"
        , closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
        , infoBoxClearance: new google.maps.Size(1, 1)
        , isHidden: false
        , pane: "floatPane"
        , enableEventPropagation: false
    };

    var ib = new InfoBox(myOptions);
    ib.open(map, marker);
}

//Phương thức tìm thông tin địa chỉ theo địa chỉ truyền vào từ textbox address
function codeAddress() {
    var address = document.getElementById("address").value; //Lấy giá trị từ textbox
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });


            //Mở cửa sổ chứa thông tin của điểm tìm được.
            infowindow.setContent(results[0].formatted_address);
            infowindow.open(map, marker);

            //Thêm sự kiện click vào điểm được đánh dấu
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
                FillValueToControls(latlng.lat(), latlng.lng(), results[0].formatted_address);
            });

            //Điền các thông tin của địa điểm tìm thấy vào các textbox (phục vụ việc lấy thông tin để lưu vào CSDL)
            FillValueToControls(results[0].geometry.location.lat(), results[0].geometry.location.lng(), address);
        } else {
            //alert("Geocode was not successful for the following reason: " + status);
            alert("Không tìm thấy địa chỉ bạn vừa nhập. Vui lòng thử địa chỉ khác hoặc kích chọn trực tiếp trên bản đồ.");
        }
    });
}

//Phương thức tìm thông tin địa chỉ theo vĩ độ và kinh độ của điểm của click chuột
function codeLatLng(latlng) {
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });

                //Mở cửa sổ chứa thông tin của điểm tìm được.
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);

                //Thêm sự kiện click vào điểm được đánh dấu
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                    FillValueToControls(latlng.lat(), latlng.lng(), results[0].formatted_address);
                });

                //Điền các thông tin của địa điểm tìm thấy vào các textbox (phục vụ việc lấy thông tin để lưu vào CSDL)
                FillValueToControls(latlng.lat(), latlng.lng(), results[0].formatted_address);
            }
        } else {
            alert("Geocoder failed due to: " + status);
        }
    });

}

//Phương thức điền các thông tin của địa điểm tìm thấy vào các textbox (phục vụ việc lấy thông tin để lưu vào CSDL)
function FillValueToControls(lat, lng, address) {
}

//Phương thức tìm kiếm địa chỉ khi nhấn Enter tại textbox địa chỉ
function onEnterPress(buttonName, e) {
    var key;
    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox
    if (key == 13) {
        var btn = document.getElementById(buttonName);
        if (btn != null) {
            btn.click();
            event.keyCode = 0
        }
    }
}
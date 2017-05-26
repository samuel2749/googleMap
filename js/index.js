(function ($) {
    $(function () {
        init();
    });

    function init() {

        $.ajaxSetup({ cache: true });
        $.getScript('http://maps.googleapis.com/maps/api/js?key=AIzaSyB6pcO4m1XeUKDewm-fTbDtyuAE9oLO5Js', function () {
            var locations = [
                { lat: 25.032969, lng: 121.565418 }, 
                { lat: 25.033197, lng: 121.560844 }, 
                { lat: 25.032929, lng: 121.610359 }
            ]
            //var uluru = { lat: 25.032969, lng: 121.565418 };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: locations[0]
            });
            var marker = locations.map(function (obj) {
                return new google.maps.Marker({
                    position: obj,
                    map: map
                })
            });
            console.log(marker);
        });
    }

})(jQuery);

let color0 = "rgba(128,128,128,1)";
let color1 = "rgba(128,128,128,0.5)";

let ctx = document.getElementById('myChart').getContext('2d');

jQuery('document').ready(function()
{
    jQuery('.st_btn').on('click', function()
    {
        var Color = jQuery('#color').val();
        switch(Color)
        {
            case 'gray': color0 = "rgba(128,128,128,1)"; color1 = "rgba(128,128,128,0.4)"; break;
            case 'red': color0 = "rgba(255,0,0,1)"; color1 = "rgba(255,0,0,0.4)"; break;  
            case 'green': color0 = "rgba(0,255,0,1)"; color1 = "rgba(0,255,0,0.4)"; break;
            case 'blue': color0 = "rgba(0,0,255,1)"; color1 = "rgba(0,0,255,0.4)"; break;
            case 'yellow': color0 = "rgba(255,255,0,1)"; color1 = "rgba(255,255,0,0.4)"; break;
        }
        
        data.datasets[0].borderColor = color0;
        data.datasets[0].backgroundColor = color1;  

        myChart.update();
        
    });
});

var data = 
{
        labels: ['C++', 'Rust', 'C', 'Java', 'C#', 'JavaScript','Scala','R','Python','PHP','Dart','Ruby','Swift','Go','Kotlin'],

        datasets: 
        [{
            fill: {value: 50},

            label: 'Рейтинг популярности языков программирования',

            data: [92.4,63.1, 94.7, 95.4, 82.4, 88.1, 55.4,81.7,100,68,67.7,63.6,70.4,77.7,58.5],
            borderColor: color0,
            backgroundColor: color1,  
            borderWidth: 5,
        }]
};


 var myChart = new Chart(ctx, 
{
        type: 'line',
        data: data,
        options: 
        {
            animations: 
            {
                tension: 
                {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                },
            },
            scales: 
            {
                y: 
                {
                    min: 50,
                    max: 110
                }
            },

        }
});
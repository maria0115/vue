$(function () {
    //  라디오버튼 클릭시 이벤트 발생 //
    $('body').on('click', 'input:radio[name=radio]', function () {
        if ($("input[name=radio]:checked").val() == "small") {
            $("html").addClass('small');
            $("html").removeClass('normal');
            $("html").removeClass('large');
        } else if ($("input[name=radio]:checked").val() == "normal") {
            $(".ft_menu li p").css("font-size", "1rem");
            $("html").addClass('normal');
            $("html").removeClass('small');
            $("html").removeClass('large');
        } else if ($("input[name=radio]:checked").val() == "large") {
            $(".ft_menu li p").css("font-size", "1.12rem");
            $("html").addClass('large');
            $("html").removeClass('small');
            $("html").removeClass('normal');
        }
    });
    $('body').on('click', 'input:radio[name=f_radio]', function () {
        if ($("input[name=f_radio]:checked").val() == "Sharing") {
            $(".ft_menu li p").css("font-family", "Nanum Gothic");
        }
        else if ($("input[name=f_radio]:checked").val() == "Clear") {
            $(".ft_menu li p").css("font-family", "Noto Sans KR");
        }
        else if ($("input[name=f_radio]:checked").val() == "Raised") {
            $(".ft_menu li p").css("font-family", "Roboto");
        }
        else if ($("input[name=f_radio]:checked").val() == "Roll") {
            $(".ft_menu li p").css("font-family", "Exo");
        }
    });
    // $(".st_menu li ul li span").click(function(){
    //     console.log(this,"hi")
    //     $(this).toggleClass('on');
    // });

    // $('body').on('click', '.st_menu li ul li span', function(){
    //     $(this).toggleClass('on');
    // });

    // $(".atiq_btn").click(function(){
    //     console.log(this,"hi")
    //     $(".slideup").toggleClass('active');
    // });

    // $('body').on('click', '.atiq_btn', function(){
    //     $(".slideup").toggleClass('active');
    // });
    // $(".allim_menu li ul li span").click(function(){
    //     console.log(this,"hi")
    //     $(this).toggleClass('on');
    // });

    // $('body').on('click', '.allim_menu li ul li span', function(){
    //     $(this).toggleClass('on');
    // });
});


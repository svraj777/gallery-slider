/* Window Load functions */

$(window).load(function(){
    setTimeout(function(){

    });
});
$(document).ready(function(){

    gellary_init();
    go_next();
    go_prev();
});

$(window).resize(function(){
    gellary_init();
    go_next();
    go_prev();
    
})


var wrapper_width,team_width,set_team,count_team,get_row,make_row,currunt_team_index,total_count;
function gellary_init(){
    $(".team-member").hover(function(){
        $(this).children().find(".secondory-image").toggleClass("alternate")
    })
    wrapper_width = $(".wrapper").width();
    team_width = $(".team-photo").width();
    set_team=Math.round(wrapper_width/team_width);
    console.log(wrapper_width,team_width,set_team);
    $(".team-member").on("click",function(e){
        $(".slider_container").remove();
        $(".team-member").removeClass("active")
        currunt_team_index=$(this).index();
        console.log(currunt_team_index);
        get_cur_data=$(".team-member").eq(currunt_team_index).html();  
        $(this).addClass("active");
        /*add data at row*/
        count_team=currunt_team_index+1;
        console.log(count_team%set_team+"seting item",count_team,set_team,currunt_team_index);
        get_row= Math.ceil(count_team/set_team);
        make_row=get_row*set_team;
        console.log(set_team,count_team,get_row,make_row)
        /**/
        $(".all-team > div:nth-child("+make_row+")").after("<div class='slider_container'>"+get_cur_data+"</div>");
        $(".slider_container").animate({
            opacity: 1
        }, 1500 );
        var $target = $('html,body');
        var scroll_t= $('.slider_container').offset().top-($(".team-member").height()/2)
        $target.animate({scrollTop: scroll_t}, scroll_t);
    })
}
function go_next(){
    $("body").on("click",".next",function(){
        $(".slider_container").remove();
        total_count=$(".team-member").length
        if(currunt_team_index>=0 && currunt_team_index < total_count-1){
            currunt_team_index=currunt_team_index+1;
            console.log(currunt_team_index)
            get_cur_data=$(".team-member").eq(currunt_team_index).html();  

            $(this).addClass("active");
            /*add data at row*/
            count_team=currunt_team_index+1;
            console.log(count_team%set_team+"seting item",count_team,set_team);
            get_row= Math.ceil(count_team/set_team);
            make_row=get_row*set_team;
            console.log(set_team,count_team,get_row,make_row)
            /**/
            $(".all-team > div:nth-child("+make_row+")").after("<div class='slider_container'>"+get_cur_data+"</div>");

            var $target = $('html,body');
            var scroll_t= $('.slider_container').offset().top-($(".team-member").height()/2)
            $target.animate({scrollTop: scroll_t}, scroll_t);
            $(".slider_container").animate({
                opacity: 1
            }, 1500 );
        }else{
            console.log("invalid next")
        }
    })
}
function go_prev(){
    $("body").on("click",".prev",function(){
        $(".slider_container").remove();
        total_count=$(".team-member").length
        if(currunt_team_index>0 && currunt_team_index <= total_count-1){
            currunt_team_index=currunt_team_index-1;
            console.log(currunt_team_index+"prev_inexf")
            get_cur_data=$(".team-member").eq(currunt_team_index).html();  

            $(this).addClass("active");
            /*add data at row*/
            if(currunt_team_index>=2){
                count_team=currunt_team_index+1;
                console.log(count_team+"if")
            }else{
                count_team=2;
                console.log(count_team+"else")
            }
            console.log(count_team%set_team+"seting item",count_team,set_team);
            get_row= Math.ceil(count_team/set_team);
            make_row=get_row*set_team;
            console.log(count_team,set_team,get_row,make_row)
            /**/
            $(".all-team > div:nth-child("+make_row+")").after("<div class='slider_container'>"+get_cur_data+"</div>");
            var $target = $('html,body');
            var scroll_t= $('.slider_container').offset().top-($(".team-member").height()/2)
            $target.animate({scrollTop: scroll_t}, scroll_t);
            $(".slider_container").animate({
                opacity: 1
            }, 1500 );
        }else{
            console.log("invalid_prev");
        }
    })
}
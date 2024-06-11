 window.currentItem=null
            function iiii(){
                $.ajax({url:'/ygshoes188/s.json?t='+new Date().getTime()
            ,success(data){
                let arr=JSON.parse(data)
                let params=getQueryParams(location.href)
                let d=params.p
                let item=null
                for(let i=0;i<arr.length;i++){
                    let o=arr[i]
                    if(o.folder==d){
                        item=o
                        break
                    }
                }
                if(item){
                    for(let j=0;j<item.list.length;j++){
                        item.list.indexVal=j
                    }
                    item.indexVal=0
                    window.currentItem=item
                
                    renderItem(item)
                }
            }       
            })
            }

            iiii()

            function renderItem(item){

                {
                let aa=''
                let list=item.list
                for(let i=0;i<list.length;i++){
                    let folder=item.folder
                    let o=list[i]
                    let src=`./s188/${folder}/${o.imgUrl}`
                    let clz=''
                    if(i==0){
                        clz='current_product'
                    }
                    let bb=`<div href="" title="" class="aaaaaa ${clz}">
                                                                  <img src="${src}" onclick="imgClick('${i}')" onload="javascript:DrawImage(this,75,75)" width="56" height="75">
                                                              </div>`
                                                              aa+=bb
                }
                

                $('#productitem').html(aa)
                
            }
            {
                let folder=item.folder
                let list=item.list
                let src='/ygshoes188/s188/'+folder+'/'+list[0].imgUrl
                let aa=`<div>
                            <img id="photo_img" alt="" class="rootclass" left="#" right="" width="375" height="500" onload="javascript:DrawImage(this,800,500)" src="${src}" style="cursor: url(&quot;themes/default/en/images/next.cur&quot;), auto;" title="Next page">
                                <br>
                                </div><a href="${src}" target="_blank">【review picture】</a>
                        `
                        $('#product_container').html(aa)
                            }
            }

            

            function imgClick(i){
                let it=window.currentItem
                let list=it.list
                let obj=list[i]
                let s='./s188/'+it.folder+'/'+obj.imgUrl
                $("#photo_img").attr('src',s)
                $(".aaaaaa").removeClass('current_product')
                $(".aaaaaa").eq(i).addClass('current_product')
            }
            
            $('#prev_item').click(function(){
                let ci=window.currentItem
                let indexVal=ci.indexVal
                indexVal=indexVal+1
                if(indexVal>ci.list.length-1){
                    indexVal=0
                }
                window.currentItem.indexVal=indexVal
                imgClick(indexVal)
            })

            $('#next_item').click(function(){
                let ci=window.currentItem
                let indexVal=ci.indexVal
                
                indexVal=indexVal-1
                if(indexVal<0){
                    indexVal=ci.list.length-1
                }
                window.currentItem.indexVal=indexVal
                imgClick(indexVal)
            })

            function getQueryParams(url) {
    const regExp = /[?&]([^=#]+)=([^&#]*)/g;
    const queryParams = {};
    let match;
 
    while (match = regExp.exec(url)) {
        queryParams[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }
 
    return queryParams;
}
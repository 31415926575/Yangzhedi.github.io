/*内容管理对象*/
var H5 = function(){
    this.id = ('h5_'+Math.random()).replace('.','_');
    this.el = $('<div class="h5" id="'+this.id+'">').hide();
    this.page = [];
    $('body').append( this.el );

    /*
    * 新增一个页
    * @param {string} name 组件的名称，会加入到ClassName中
    * @param {string} text 页内的默认文本
    * @return {H5} H5对象,可以重复使用H5对象支持的方法
    * */
    //var this_ = this;
    this.addPage = function( name, text ){
        var page = $('<div class="h5_page section">');

        if( name != undefined ){
            page.addClass('h5_page_'+name);
        }
        if( text != undefined ){
            page.text(text)
        }
        this.el.append(page);
        this.page.push( page );
        // 添加固定的组件
        if( typeof this.whenAddPage === 'function' ){
            this.whenAddPage();
        }

        return this;
    };
    //新增一个组件
    this.addComponent = function( name, cfg ){
        var cfg = cfg || {};
        //若是没有type属性  就把type属性赋值成base
        cfg = $.extend({
            type:'base'
        },cfg);

        var component;   //定义一个变量，存储组件元素
        var page = this.page.slice(-1)[0];

        switch (cfg.type){
            case 'base':
                component = new H5ComponentBase(name, cfg);
                break;
            default:
        }
        page.append(component);
        return this;
    };

    /*H5对象初始化*/
    this.loader = function( firstPage ){
        this.el.fullpage({
            onLeave:function(index, nextIndex, direction){
                $(this).find('.h5_component').trigger('onLeave');
            },
            afterLoad:function(anchorLink ,index){
                $(this).find('.h5_component').trigger('onLoad');
            }
        });
        /*$('.h5_component').on('onLoad',function(){
            $(this).fadeIn();
            return false;
        });
        $('.h5_component').on('onLeave',function(){
            $(this).fadeOut();
            return false;
        });*/
        this.page[0].find('.h5_component').trigger('onLoad');
        this.el.show();

        if(firstPage){
            $.fn.fullpage.moveTo( firstPage );
        }
    };
    return this;
};
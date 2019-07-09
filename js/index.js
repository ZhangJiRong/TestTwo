$(document).ready(function(){
	//搜索框内更换搜索条件事件
	(function(){
		let btn = $('.btn');
		let list = $('.search-item');
		let hide = true;
		btn.click(function(){
			if(hide){
				list.css('display','block');
				hide = false;
			}else{
				list.css('display','none');
				hide = true;
			}
			event.stopPropagation();
		});
		list.click(function(e){
			let text = $(e.target).text();
			btn.text(text);
			list.css('display','none');
			hide = true;
			event.stopPropagation();
		});
		$('body').click(function(){
			if(list.css('display')=='block') {
				list.css('display','none');
				hide = true;
			}
		});
	})();
	//科室排版表浏览按钮点击事件
	(function(){
		let table = $('.table-body-body');
		let pre = $('.pre');
		let next = $('.next');
		let left = 0;
		pre.click(function(){
			if(left == 0) return;
			left+=651;
			table.css('left',left+'px');
		});
		next.click(function(){
			if(left == -1302) return;
			left-=651;
			table.css('left',left+'px');
		});
	})();
});
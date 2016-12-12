window.onload = function() {
	window.onscroll = function() {
		var oBox = document.getElementById('box');
		var top = 30;
		var oBox2 = document.getElementById('box2');
		window.onscroll = function() {
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if(top <= scrollTop) {

				oBox.style.position = 'fixed';
				oBox.style.background = '#F50962';
				oBox2.style.display = 'block';
			} else {
				oBox.style.position = '';
				oBox.style.background = '';
				oBox2.style.display = 'none';
			}
		};

	};

	var obj = document.querySelector('.box');
	var file1 = document.querySelector('#file');
	obj.addEventListener('click', fn, false);

	function fn() {
		file1.click();
	}
	file1.addEventListener('change', dianji, false);

	function dianji() {

		var files = this.files[0];
		var ofiles = new FileReader();
		ofiles.readAsDataURL(files);
		ofiles.onload = function() {
			console.log(this.result)
			obj.innerHTML = "<img src = '" + this.result + "'/>";
		}

	}
}
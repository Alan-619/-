// 配置文件
var config = function(e)
{
	this.name='config',
	this.chrome=false,
	this.chage=function(e)
	{
		this.chrome=e
	}
}
module.exports= new config()
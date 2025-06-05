package api

import (
	"ALLinSSL/backend/internal/setting"
	"ALLinSSL/backend/public"
	"github.com/gin-gonic/gin"
)

func GetSetting(c *gin.Context) {
	data, err := setting.Get()
	if err != nil {
		public.FailMsg(c, err.Error())
		return
	}
	public.SuccessData(c, data, 0)
}

func SaveSetting(c *gin.Context) {
	var data setting.Setting
	if err := c.Bind(&data); err != nil {
		public.FailMsg(c, "参数错误")
		return
	}
	if err := setting.Save(&data); err != nil {
		public.FailMsg(c, err.Error())
		return
	}
	public.SuccessMsg(c, "保存成功")

}

func Shutdown(c *gin.Context) {
	setting.Shutdown()
	public.SuccessMsg(c, "关闭成功")
}

func Restart(c *gin.Context) {
	setting.Restart()
	public.SuccessMsg(c, "正在重启...")
}

func GetVersion(c *gin.Context) {
	data, err := setting.GetVersion()
	if err != nil {
		public.FailMsg(c, err.Error())
		return
	}
	public.SuccessData(c, data, 0)
}

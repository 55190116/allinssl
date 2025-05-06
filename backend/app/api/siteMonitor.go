package api

import (
	"ALLinSSL/backend/internal/siteMonitor"
	"ALLinSSL/backend/public"
	"github.com/gin-gonic/gin"
	"strings"
)

func GetMonitorList(c *gin.Context) {
	var form struct {
		Search string `form:"search"`
		Page   int64  `form:"p"`
		Limit  int64  `form:"limit"`
	}
	err := c.Bind(&form)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	data, count, err := siteMonitor.GetList(form.Search, form.Page, form.Limit)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	// c.JSON(http.StatusOK, public.ResOK(len(data), data, ""))
	public.SuccessData(c, data, count)
	return
}

func AddMonitor(c *gin.Context) {
	var form struct {
		Name       string `form:"name"`
		Domain     string `form:"domain"`
		Cycle      int    `form:"cycle"`
		ReportType string `form:"report_type"`
	}
	err := c.Bind(&form)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	form.Name = strings.TrimSpace(form.Name)
	form.Domain = strings.TrimSpace(form.Domain)

	err = siteMonitor.AddMonitor(form.Name, form.Domain, form.ReportType, form.Cycle)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	// c.JSON(http.StatusOK, public.ResOK(0, nil, "添加成功"))
	public.SuccessMsg(c, "添加成功")
	return
}

func UpdMonitor(c *gin.Context) {
	var form struct {
		ID         string `form:"id"`
		Name       string `form:"name"`
		Domain     string `form:"domain"`
		Cycle      int    `form:"cycle"`
		ReportType string `form:"report_type"`
	}
	err := c.Bind(&form)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	form.ID = strings.TrimSpace(form.ID)
	form.Name = strings.TrimSpace(form.Name)
	form.Domain = strings.TrimSpace(form.Domain)
	form.ReportType = strings.TrimSpace(form.ReportType)

	err = siteMonitor.UpdMonitor(form.ID, form.Name, form.Domain, form.ReportType, form.Cycle)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	// c.JSON(http.StatusOK, public.ResOK(0, nil, "修改成功"))
	public.SuccessMsg(c, "修改成功")
	return
}

func DelMonitor(c *gin.Context) {
	var form struct {
		ID string `form:"id"`
	}
	err := c.Bind(&form)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	err = siteMonitor.DelMonitor(form.ID)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	// c.JSON(http.StatusOK, public.ResOK(0, nil, "删除成功"))
	public.SuccessMsg(c, "删除成功")
	return
}

func SetMonitor(c *gin.Context) {
	var form struct {
		ID     string `form:"id"`
		Active int    `form:"active"`
	}
	err := c.Bind(&form)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	err = siteMonitor.SetMonitor(form.ID, form.Active)
	if err != nil {
		// c.JSON(http.StatusBadRequest, public.ResERR(err.Error()))
		public.FailMsg(c, err.Error())
		return
	}
	// c.JSON(http.StatusOK, public.ResOK(0, nil, "操作成功"))
	public.SuccessMsg(c, "操作成功")
	return
}

package workflow

import (
	"ALLinSSL/backend/internal/cert"
	certApply "ALLinSSL/backend/internal/cert/apply"
	certDeploy "ALLinSSL/backend/internal/cert/deploy"
	"ALLinSSL/backend/internal/report"
	"ALLinSSL/backend/public"
	"errors"
	"fmt"
)

// var executors map[string]func(map[string]any) (any, error)
//
// func RegistExector(executorName string, executor func(map[string]any) (any, error)) {
// 	executors[executorName] = executor
// }

func Executors(exec string, params map[string]any) (any, error) {
	switch exec {
	case "apply":
		return apply(params)
	case "deploy":
		return deploy(params)
	case "upload":
		return upload(params)
	case "notify":
		return notify(params)
	default:
		return nil, nil
	}
}

func apply(params map[string]any) (any, error) {
	logger := params["logger"].(*public.Logger)

	logger.Info("=============申请证书=============")
	certificate, err := certApply.Apply(params, logger)
	if err != nil {
		logger.Error(err.Error())
		logger.Info("=============申请失败=============")
		return nil, err
	}
	logger.Info("=============申请成功=============")
	return certificate, nil
}

func deploy(params map[string]any) (any, error) {
	logger := params["logger"].(*public.Logger)
	logger.Info("=============部署证书=============")
	certificate := params["certificate"]
	if certificate == nil {
		logger.Error("证书不存在")
		logger.Info("=============部署失败=============")
		return nil, errors.New("证书不存在")
	}
	err := certDeploy.Deploy(params, logger)
	if err != nil {
		logger.Error(err.Error())
		logger.Info("=============部署失败=============")
	} else {
		logger.Info("=============部署成功=============")
	}
	return nil, err
}

func upload(params map[string]any) (any, error) {
	logger := params["logger"].(*public.Logger)
	logger.Info("=============上传证书=============")

	keyStr, ok := params["key"].(string)
	if !ok {
		logger.Error("上传的密钥有误")
		logger.Info("=============上传失败=============")
		return nil, errors.New("上传的密钥有误")
	}
	certStr, ok := params["cert"].(string)
	if !ok {
		logger.Error("上传的证书有误")
		logger.Info("=============上传失败=============")
		return nil, errors.New("上传的证书有误")
	}
	err := cert.UploadCert(keyStr, certStr)
	if err != nil {
		logger.Error(err.Error())
		logger.Info("=============上传失败=============")
		return nil, err
	}
	logger.Info("=============上传成功=============")

	return params, nil
}

func notify(params map[string]any) (any, error) {
	// fmt.Println("通知:", params)
	logger := params["logger"].(*public.Logger)
	logger.Info("=============发送通知=============")
	logger.Debug(fmt.Sprintf("发送通知：%s", params["subject"].(string)))
	err := report.Notify(params)
	if err != nil {
		logger.Error(err.Error())
		logger.Info("=============发送失败=============")
		return nil, err
	}
	logger.Info("=============发送成功=============")
	return fmt.Sprintf("通知到: %s", params["message"]), nil
}

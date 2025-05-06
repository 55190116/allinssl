package apply

import (
	"ALLinSSL/backend/public"
	"crypto"
	"crypto/x509"
	"encoding/json"
	"encoding/pem"
	"fmt"
	"github.com/go-acme/lego/v4/registration"
	"time"
)

type MyUser struct {
	Email        string
	Registration *registration.Resource
	key          crypto.PrivateKey
}

func (u *MyUser) GetEmail() string {
	return u.Email
}

func (u *MyUser) GetRegistration() *registration.Resource {
	return u.Registration
}

func (u *MyUser) GetPrivateKey() crypto.PrivateKey {
	return u.key
}

func SaveUserToDB(db *public.Sqlite, user *MyUser) error {
	keyBytes, err := x509.MarshalPKCS8PrivateKey(user.key)
	if err != nil {
		return err
	}
	regBytes := []byte("")
	if user.Registration != nil {
		regBytes, err = json.Marshal(user.Registration)
		if err != nil {
			return err
		}
	}

	pemBytes := pem.EncodeToMemory(&pem.Block{
		Type:  "EC PRIVATE KEY",
		Bytes: keyBytes,
	})
	now := time.Now().Format("2006-01-02 15:04:05")
	_, err = db.Insert(map[string]interface{}{
		"email":       user.Email,
		"private_key": string(pemBytes),
		"reg":         regBytes,
		"create_time": now,
		"update_time": now,
		"type":        "Let's Encrypt",
	})
	return err
}

func LoadUserFromDB(db *public.Sqlite, email string) (*MyUser, error) {
	data, err := db.Where(`email=?`, []interface{}{email}).Select()
	if err != nil {
		return nil, err
	}
	if len(data) == 0 {
		return nil, fmt.Errorf("user not found")
	}
	regStr, ok := data[0]["reg"].(string)
	if !ok {
		return nil, fmt.Errorf("invalid reg data")
	}
	regBytes := []byte(regStr)
	privPEM, ok := data[0]["private_key"].(string)
	if !ok {
		return nil, fmt.Errorf("invalid private key data")
	}
	privateKey, err := public.ParsePrivateKey([]byte(privPEM))
	if err != nil {
		return nil, err
	}
	var reg *registration.Resource
	if len(regBytes) > 0 {
		reg = &registration.Resource{}
		if err := json.Unmarshal(regBytes, reg); err != nil {
			return nil, err
		}
	}
	return &MyUser{
		Email:        email,
		key:          privateKey,
		Registration: reg,
	}, nil
}

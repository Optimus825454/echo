# Git Kurulum Kılavuzu

## Windows'ta Git Kurulumu

1. Git'i indirin:
   - https://git-scm.com/ adresine gidin
   - "Download for Windows" butonuna tıklayın
   - En son sürümü indirin

2. Kurulum adımları:
   - İndirilen .exe dosyasını yönetici olarak çalıştırın
   - Lisans sözleşmesini okuyup "Next" tuşuna basın
   - Varsayılan kurulum konumunu kabul edin (önerilen)
   - Aşağıdaki bileşenlerin seçili olduğundan emin olun:
     * Git Bash
     * Git GUI
     * Git LFS
     * Git Credential Manager
   - Path ayarı için "Git from the command line and also from 3rd-party software" seçeneğini seçin
   - SSH client olarak "Use OpenSSH" seçeneğini seçin
   - HTTPS transport backend için "Use the native Windows Secure Channel library" seçin
   - "Checkout as-is, commit Unix-style line endings" seçeneğini seçin
   - Terminal emülatörü olarak "Use MinTTY" seçin
   - "Default (fast-forward or merge)" seçeneğini seçin
   - Git Credential Manager'ı seçin
   - Ekstra özellikleri etkinleştirin
   - Kurulumu tamamlayın

3. Kurulumu doğrulama:
   - Komut istemini (CMD) açın
   - Aşağıdaki komutu yazın:
     ```
     git --version
     ```
   - Git sürümünün görüntülenmesi kurulumun başarılı olduğunu gösterir

## Temel Git Yapılandırması

Kurulum sonrası aşağıdaki komutlarla temel ayarları yapın:

```bash
git config --global user.name "Adınız Soyadınız"
git config --global user.email "eposta@adresiniz.com"
```

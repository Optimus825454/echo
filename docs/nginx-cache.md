# Nginx Cache Yapılandırması

## Statik Dosyalar için Cache Ayarları

Aşağıdaki yapılandırma, statik dosyalar için tarayıcı cache'ini optimize eder:

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|webp|svg|ico)$ {
    expires 1y;
    add_header Cache-Control "public, no-transform";
}
```

### Açıklama

- `location ~*`: Case-insensitive regular expression eşleşmesi
- `\.(js|css|png|jpg|jpeg|gif|webp|svg|ico)$`: Belirtilen uzantılara sahip dosyalar
- `expires 1y`: Cache süresi 1 yıl olarak ayarlanır
- `add_header Cache-Control "public, no-transform"`: 
  - `public`: CDN'lerin cache'lemesine izin verir
  - `no-transform`: İçeriğin dönüştürülmesini engeller

## Önerilen Ek Ayarlar

Performans için aşağıdaki ayarlar da eklenebilir:

```nginx
# Gzip sıkıştırma
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_comp_level 6;
gzip_min_length 1000;

# Buffer ayarları
client_body_buffer_size 10K;
client_header_buffer_size 1k;
client_max_body_size 8m;
large_client_header_buffers 2 1k;
```

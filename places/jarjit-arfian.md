---
name: Jarjit Arfian
shortDesc: Ini Kopi Daong, enak lho
photoUrl: https://pbs.twimg.com/profile_images/1247734100753960962/KEKN4fOm_400x400.jpg
---

# Debounce dan Throttle

Debounce dan Throttle merupakan dua cara untuk mengontrol seberapa banyak _function_ yang dapat dijalankan dalam suatu waktu.

Serupa, tapi tak sama.

---

![Contoh Debounce / Throttle](https://esstudio.site/uploads/throttle_debounce.gif) [Sumber foto](https://esstudio.site/2019/05/25/all-about-debouncing-and-throttling.html)

Debounce / Throttle akan sangat berguna bagi DOM Event Handler, karena DOM Event dapat ter-_emit_ berkali-kali dalam waktu singkat. Dengan Debounce / Throttle, kita dapat mengontrol eksekusi handler tadi.

Contohnya bisa dilihat dari masalah yang muncul di Twitter pada tahun 2011: saat user scroll twitter feed-nya, web-nya bakalan ngelag. John Resig [menjelaskan](https://johnresig.com/blog/learning-from-twitter/) bahwa sumber masalahnya berasal dari event handler yang ada di `scroll` event.

John Resig sendiri memberi solusi yaitu dengan menjalankan event handler tadi dengan loop per 250ms, tanpa menggunakan `scroll` event.

Tapi sekarang sudah ada cari lain yang lebih tepat buat mengatasi masalah tadi.

## Debounce

Bayangkan kamu lagi ada di dalem lift. Saat pintunya mau tutup terus pindah lantai, ada orang lain yang mau masuk. Pintunya ga jadi nutup dan orang tadi akhirnya masuk. Ketika udah bener-bener ga ada lagi yang mau masuk, baru deh lift-nya nutup dan pindah lantai.

Nah itulah Debounce. Nge-grup banyak function calls jadi satu.

Contoh kasusnya yaitu misalkan saat user mengetik di _search bar_, kita langsung fetch hasil yang sesuai.

Mungkin insting kamu bilang kalau kita langsung masukin aja event handler di `change` event search bar-nya. Tapi kalau kaya gitu, setiap user ngetik 1 huruf, kita bakal load hasilnya.

Bayangin kalau dia ngetik kata "Mempertanggungjawabkannya".  
25 kali bakal kita load hasilnya.

Dengan debounce tadi, kita bakal group semua 25 request tadi jadi satu, request terakhir lah yang bakal dijalanin. Jadi ketika user beres ngetik, baru deh diload hasilnya.

## Throttle

Throttle dalam mesin kendaraan berarti "katup yang mengatur pasokan bahan bakar untuk mesin". Konsepnya juga mirip untuk pemrograman.

Misalkan kita atur _function_ `loadMore()` dengan Throttle 500ms, Kita cuma bisa panggil `loadMore()` per 500ms.

Jadi kita harus nunggu X milliseconds baru bisa manggil lagi function yang di-Throttle.

Contoh kasusnya bisa dengan _infinite scrolling_. Debounce ga bisa dipake di sini karena dengan Debounce, berarti user harus berhenti scrolling dulu baru _function_-nya bakal dipanggil. Tapi dengan Throttle, kita bisa attach handlernya ke `scroll` event, dan user ga perlu berhenti scrolling dulu baru _function_-nya kepanggil.

---

Jadi, mulai sekarang pastikan jangan panggil _function_ yang berat berkali-kali sampe bikin _ngelag_.

Oh iya, daritadi kan cuma konsep ya, tapi kamu ga usah bikin Debounce / Throttle sendiri. Library kaya [`lodash`](https://lodash.com/) punya method-nya kok (`_.debounce` / `_.throttle`).

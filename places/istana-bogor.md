---
name: Istana Bogor
photoUrl: https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80
shortDesc: Ini mah DisneyLand
---

# Snowpack, Bundler Baru yang Super Cepat

![Logo Snowpack](https://www.snowpack.dev/img/social-4.jpg)

Disaat udah ada Webpack, Rollup, dan Parcel, Apa yang bikin developer yakin Snowpack adalah _next-gen bundler_?

---

## Konfigurasi yang Lebih Simpel

Snowpack bisa dijalankan langsung tanpa konfigurasi, bahkan ga perlu diinstall kalau kita pake `npx`, tinggal `npx snowpack`, beres deh.

Atau buat project yang lebih kompleks, ada juga `create-snowpack-app` yang menyediakan template buat React, Vue, Svelte, Preact, dan banyak lagi.

## Build Time yang Lebih Cepat

Yap, inilah keunggulan utama dari Snowpack.

Module bundler biasanya perlu build ulang semua chunk dari dari aplikasi yang kita buat. Sementara Snowpack, cuma perlu build ulang file yang kita ubah. Inilah yang disebut dengan _unbundled development_.

![Contoh Perbandingan Webpack vs Snowpack](https://www.snowpack.dev/img/snowpack-unbundled-example-3.png)

Walau begitu, Snowpack tetap support bundling secara menyeluruh ketika produksi. Jadi tetap cepat dan ringan.

## Kekurangannya

Snowpack masih tergolong teknologi baru dibanding module bundler lainnya, yang artinya komunitas dan pluginnya juga belum sebanyak module bundler lainnya.

Selain itu karena Snowpack ditargetkan untuk _next-gen_, hanya ESM Module saja yang disupport.

---

Jadi, haruskah pake Snowpack?

Kalau kamu cuma pake _ESM-ready_ package, mendingan kamu pake Snowpack. Dan kalau misalkan kamu perlu pake CommonJS package, kamu bisa migrate lagi ke webpack/rollup/parcel.

Btw, [SvelteKit](https://svelte.dev/blog/whats-the-deal-with-sveltekit) bakal pake Snowpack lho.

## Referensi

1. [Comparing bundlers: Webpack, Rollup & Parcel](https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd)
1. [Snowpack vs. webpack](https://blog.logrocket.com/snowpack-vs-webpack/#:~:text=webpack%20is%20a%20bundler%20that,t%20do%20any%20of%20that.&text=Whereas%20webpack%20runs%20on%20every,which%20gets%20rarer%20over%20time)
1. [Quick Start | Snowpack](https://www.snowpack.dev/tutorials/quick-start)
1. [Starting a New Project | Snowpack](https://www.snowpack.dev/tutorials/getting-started)
1. [How Snowpack Works | Snowpack](https://www.snowpack.dev/concepts/how-snowpack-works)

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // ZIP indirme
    if (url.pathname === "/earsiv/download") {
      return Response.redirect(
        "https://github.com/deneme197642-arch/earsiv/raw/refs/heads/main/eArsiv_Indirici.zip",
        302
      );
    }

    // E-Arşiv indirme sayfası
    if (url.pathname === "/earsiv" || url.pathname === "/earsiv/") {
      return new Response(`<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>E-Arşiv İndirici | Ofis İş Takip</title>

<style>
*{box-sizing:border-box}

body{
  margin:0;
  font-family:Inter,Arial,sans-serif;
  background:linear-gradient(135deg,#eef5ff,#f8fbff);
  color:#172033;
}

.wrap{
  max-width:1100px;
  margin:auto;
  padding:30px 22px 40px;
}

.nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:55px;
}

.brand{
  font-size:24px;
  font-weight:800;
}

.brand span{
  color:#2563eb;
}

.badge{
  background:#e8f0ff;
  color:#2563eb;
  padding:9px 15px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.hero{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:22px;
}

.card{
  background:white;
  border:1px solid #e5eaf2;
  border-radius:24px;
  box-shadow:0 18px 45px rgba(30,70,120,.08);
}

.main{
  padding:55px;
}

.side{
  padding:38px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.eyebrow{
  color:#2563eb;
  font-size:14px;
  font-weight:800;
  margin-bottom:16px;
}

h1{
  font-size:52px;
  line-height:1.05;
  margin:0 0 20px;
  letter-spacing:-2px;
}

p{
  color:#667085;
  font-size:17px;
  line-height:1.7;
}

.btn{
  display:inline-block;
  margin-top:25px;
  padding:17px 28px;
  border-radius:13px;
  background:#2563eb;
  color:white;
  text-decoration:none;
  font-weight:800;
  box-shadow:0 10px 25px rgba(37,99,235,.25);
}

.btn:hover{
  background:#1d4ed8;
}

.note{
  margin-top:18px;
  font-size:13px;
  color:#8a94a6;
}

.icon{
  width:62px;
  height:62px;
  border-radius:18px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#edf4ff;
  color:#2563eb;
  font-size:28px;
  margin-bottom:20px;
}

h2{
  margin:0 0 10px;
}

.features{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
  margin-top:22px;
}

.feature{
  padding:28px;
}

.feature strong{
  display:block;
  margin-bottom:8px;
}

.feature p{
  margin:0;
  font-size:14px;
}

.info{
  margin-top:22px;
  padding:25px 30px;
  display:flex;
  justify-content:space-between;
  gap:20px;
  flex-wrap:wrap;
}

.info div{
  color:#667085;
  font-size:14px;
}

.info strong{
  color:#172033;
}

footer{
  text-align:center;
  margin-top:35px;
  color:#98a2b3;
  font-size:13px;
}

@media(max-width:800px){
  .hero,.features{
    grid-template-columns:1fr;
  }

  h1{
    font-size:40px;
  }

  .main{
    padding:35px;
  }

  .nav{
    margin-bottom:35px;
  }
}
</style>
</head>

<body>

<div class="wrap">

<header class="nav">
  <div class="brand">Ofis <span>İş Takip</span></div>
  <div class="badge">Windows Uygulaması</div>
</header>

<section class="hero">

<div class="card main">

<div class="eyebrow">● Güncel sürüm</div>

<h1>E-Arşiv İndirici</h1>

<p>
GİB e-Arşiv işlemleriniz için hazırlanan Windows uygulamasının
güncel sürümünü güvenli ve kolay şekilde indirin.
</p>

<a class="btn" href="/earsiv/download">
↓ &nbsp; PROGRAMI İNDİR
</a>

<div class="note">
ZIP dosyasını indirdikten sonra Windows'ta ZIP'i çıkartarak programı çalıştırabilirsiniz.
</div>

</div>

<div class="card side">

<div class="icon">▣</div>

<h2>Hızlı ve pratik</h2>

<p>
Program tek bir ZIP paketi halinde sunulur.
Yeni sürüm yayınlandığında aynı indirme bağlantısı kullanılmaya devam eder.
</p>

</div>

</section>

<section class="features">

<div class="card feature">
<strong>Windows</strong>
<p>Windows bilgisayarlarda çalışacak şekilde hazırlanmıştır.</p>
</div>

<div class="card feature">
<strong>Kolay İndirme</strong>
<p>Tek butonla güncel ZIP paketini indirebilirsiniz.</p>
</div>

<div class="card feature">
<strong>Güncel Paket</strong>
<p>Yeni sürüm yüklendiğinde aynı bağlantı üzerinden sunulur.</p>
</div>

</section>

<section class="card info">

<div>Dosya<br><strong>eArsiv_Indirici.zip</strong></div>
<div>Platform<br><strong>Windows</strong></div>
<div>Format<br><strong>ZIP</strong></div>

</section>

<footer>
© Ofis İş Takip · E-Arşiv İndirici
</footer>

</div>

</body>
</html>`, {
        headers: {
          "content-type": "text/html;charset=UTF-8"
        }
      });
    }

    return new Response("Not Found", { status: 404 });
  }
};

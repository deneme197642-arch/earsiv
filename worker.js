export default {
  async fetch(request) {
    const url = new URL(request.url);

    // =========================
    // PROGRAM İNDİRME
    // =========================
    if (url.pathname === "/earsiv/download") {
      return Response.redirect(
        "https://github.com/deneme197642-arch/earsiv/raw/refs/heads/main/eArsiv_Indirici.zip",
        302
      );
    }

    // =========================
    // E-ARŞİV ANA SAYFA
    // =========================
    if (
      url.pathname === "/earsiv" ||
      url.pathname === "/earsiv/"
    ) {
      return new Response(`<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>E-Arşiv İndirici | SMMM Ali Saraç</title>

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  font-family:Inter,Arial,sans-serif;
  background:linear-gradient(135deg,#eef5ff,#f8fbff);
  color:#172033;
}

.wrap{
  max-width:1000px;
  margin:auto;
  padding:35px 22px 50px;
}

.nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:45px;
}

.brand{
  font-size:25px;
  font-weight:800;
}

.brand span{
  color:#2563eb;
}

.badge{
  background:#e8f0ff;
  color:#2563eb;
  padding:9px 16px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.card{
  background:white;
  border:1px solid #e5eaf2;
  border-radius:24px;
  box-shadow:0 18px 45px rgba(30,70,120,.08);
}

.hero{
  padding:55px;
  text-align:center;
}

.eyebrow{
  color:#2563eb;
  font-size:14px;
  font-weight:800;
  margin-bottom:15px;
}

h1{
  font-size:52px;
  line-height:1.05;
  margin:0 0 20px;
  letter-spacing:-2px;
}

.hero p{
  max-width:720px;
  margin:0 auto;
  color:#667085;
  font-size:17px;
  line-height:1.7;
}

.btn{
  display:inline-block;
  margin-top:28px;
  padding:17px 30px;
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

.section{
  margin-top:22px;
  padding:35px;
}

.section h2{
  margin:0 0 18px;
  font-size:25px;
}

.section-intro{
  color:#667085;
  line-height:1.7;
  margin-bottom:25px;
}

.steps{
  display:grid;
  gap:15px;
}

.step{
  display:flex;
  gap:18px;
  align-items:flex-start;
  padding:20px;
  background:#f8fafc;
  border:1px solid #edf0f5;
  border-radius:16px;
}

.number{
  min-width:38px;
  height:38px;
  border-radius:50%;
  background:#2563eb;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
}

.step strong{
  display:block;
  margin-bottom:6px;
}

.step p{
  margin:0;
  color:#667085;
  line-height:1.6;
}

.feedback{
  text-align:center;
}

.feedback p{
  color:#667085;
  line-height:1.7;
}

.contact{
  margin-top:20px;
  display:flex;
  justify-content:center;
  gap:14px;
  flex-wrap:wrap;
}

.contact a{
  display:inline-block;
  padding:12px 18px;
  border-radius:10px;
  background:#eef4ff;
  color:#2563eb;
  text-decoration:none;
  font-weight:700;
}

.contact a:hover{
  background:#dfeaff;
}

.note{
  margin-top:22px;
  color:#98a2b3;
  font-size:13px;
}

footer{
  text-align:center;
  margin-top:35px;
  color:#98a2b3;
  font-size:13px;
}

@media(max-width:700px){

  .hero{
    padding:35px 25px;
  }

  h1{
    font-size:40px;
  }

  .section{
    padding:25px;
  }

  .nav{
    flex-direction:column;
    gap:15px;
  }

}

</style>
</head>

<body>

<div class="wrap">

<header class="nav">

  <div class="brand">
    Ofis <span>İş Takip</span>
  </div>

  <div class="badge">
    Windows Uygulaması
  </div>

</header>


<!-- ANA BÖLÜM -->

<section class="card hero">

  <div class="eyebrow">
    ● Güncel Sürüm
  </div>

  <h1>
    E-Arşiv İndirici
  </h1>

  <p>
    GİB e-Arşiv işlemleriniz için hazırlanan
    Windows uygulamasının güncel sürümünü
    aşağıdaki butondan indirebilirsiniz.
  </p>

  <a
    class="btn"
    href="/earsiv/download"
  >
    ↓ &nbsp; PROGRAMI İNDİR
  </a>

</section>


<!-- KURULUM -->

<section class="card section">

  <h2>
    Program Nasıl Kurulur?
  </h2>

  <p class="section-intro">
    Programı indirdikten sonra aşağıdaki adımları
    sırasıyla uygulayarak kurulumu gerçekleştirebilirsiniz.
  </p>


  <div class="steps">

    <div class="step">

      <div class="number">
        1
      </div>

      <div>

        <strong>
          ZIP dosyasını açın
        </strong>

        <p>
          İndirdiğiniz ZIP dosyasını bilgisayarınızda
          uygun bir klasöre çıkartın ve içerisinde bulunan
          <b>eArşiv_Indirici</b> klasörünü açın.
        </p>

      </div>

    </div>


    <div class="step">

      <div class="number">
        2
      </div>

      <div>

        <strong>
          Mükellef bilgilerini girin
        </strong>

        <p>
          Klasör içerisinde bulunan Excel formatındaki
          <b>mukellefler.xlsx</b> dosyasını açın.
          Gerekli alanlara mükellef bilgilerini girin
          ve Excel dosyasını kaydedin.
        </p>

      </div>

    </div>


    <div class="step">

      <div class="number">
        3
      </div>

      <div>

        <strong>
          Kurulumu başlatın
        </strong>

        <p>
          Klasör içerisinde bulunan
          <b>BASLAT.bat</b> dosyasına çift tıklayın.
          Gerekli programların kurulumu gerçekleştirildikten
          sonra E-Arşiv İndirici uygulamasını kullanmaya
          başlayabilirsiniz.
        </p>

      </div>

    </div>

  </div>


  <div class="note">
    İlk kurulum sırasında internet bağlantınızın açık olması gerekir.
  </div>

</section>


<!-- GERİ BİLDİRİM -->

<section class="card section feedback">

  <h2>
    Görüş ve Önerileriniz
  </h2>

  <p>
    Programla ilgili karşılaştığınız eksiklikleri,
    geliştirme önerilerinizi, hataları veya eklenmesini
    istediğiniz özellikleri bizimle paylaşabilirsiniz.
  </p>

  <p>
    Görüş ve önerilerinizi e-posta veya X (Twitter)
    üzerinden iletebilirsiniz.
  </p>


  <div class="contact">

    <a href="mailto:alisarac42@gmail.com?subject=E-Arşiv İndirici Geri Bildirim">
      ✉ alisarac42@gmail.com
    </a>

    <a
      href="https://twitter.com/alisarac42"
      target="_blank"
      rel="noopener noreferrer"
    >
      𝕏 @alisarac42
    </a>

  </div>

</section>


<footer>
  © SMMM ALİ SARAÇ
</footer>

</div>

</body>
</html>`, {
        headers: {
          "content-type": "text/html;charset=UTF-8"
        }
      });
    }

    return new Response("Not Found", {
      status: 404
    });
  }
};

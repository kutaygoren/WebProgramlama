Vue.component('markalar-item', {
  props: ['marka'],
  template: '<li><a :href="marka.id">{{ marka.text }}</a></li>'
})

Vue.component('bilgiler-item', {
    props: ['bilgi'],
    template: '<li><a :href="bilgi.id">{{bilgi.text}}</a></li>'
})

Vue.component('kategoriler-item', {
    props: ['kategori'],
    template: '<li><a :href="kategori.id">{{kategori.text}}</a></li>'
})

var markalar1 = new Vue({
  el: '#markalar-1',
  data: {
    markalar: [
      { id: '/able', text: 'Able' },
      { id: '/aeropress', text: 'Aeropress' },
      { id: '/baratza', text: 'Baratza' },
      { id: '/bialetti', text: 'Bialetti' },
      { id: '/bodum', text: 'Bodum' },
      { id: '/bravilor bonamat', text: 'Bravilor Bonamat' },
      { id: '/caffe fresco', text: 'Caffe Fresco' },
      { id: '/caffe vergnano', text: 'Caffe Vergnano' },
      { id: '/cafflano', text: 'Cafflano' },
      { id: '/chemex', text: 'Chemex' },
      { id: '/coffee sapiens', text: 'Coffee Sapiens' },
      { id: '/coffeemamma', text: 'Coffeemamma' },
      { id: '/coffeerem', text: 'Coffeerem' },
      { id: '/cool beans', text: 'Cool Beans' },
      { id: '/hario', text: 'Hario' },
      { id: '/illy', text: 'Illy' },
      { id: '/kronotrop', text: 'Kronotrop' },
      { id: '/kruve', text: 'Kruve' },
      { id: '/overdose coffee', text: 'Overdose Coffee' },
      { id: '/petra', text: 'Petra' },
      { id: '/porlex', text: 'Porlex' },
      { id: '/shorts coffee', text: 'Shorts Coffee' },
      { id: '/sozen degirmenleri', text: 'Sozen Degirmenleri' },
      { id: '/staresso', text: 'Staresso' },
      { id: '/taft coffee', text: 'Taft Coffee' },
      { id: '/urban grind', text: 'Urban Grind' },
      { id: '/urban tools', text: 'Urban Tools' },
      { id: '/wacaco', text: 'Wacaco' },
    ]
  }
})

var markalar2 = new Vue({
  el: '#markalar-2',
  data: {
    markalar: [
      { id: '/able', text: 'Able' },
      { id: '/aeropress', text: 'Aeropress' },
      { id: '/baratza', text: 'Baratza' },
      { id: '/bialetti', text: 'Bialetti' },
      { id: '/bodum', text: 'Bodum' },
      { id: '/bravilor bonamat', text: 'Bravilor Bonamat' },
      { id: '/caffe fresco', text: 'Caffe Fresco' },
      { id: '/caffe vergnano', text: 'Caffe Vergnano' },
      { id: '/cafflano', text: 'Cafflano' },
      { id: '/chemex', text: 'Chemex' },
      { id: '/coffee sapiens', text: 'Coffee Sapiens' },
      { id: '/coffeemamma', text: 'Coffeemamma' },
      { id: '/coffeerem', text: 'Coffeerem' },
      { id: '/cool beans', text: 'Cool Beans' },
      { id: '/hario', text: 'Hario' },
      { id: '/illy', text: 'Illy' },
      { id: '/kronotrop', text: 'Kronotrop' },
      { id: '/kruve', text: 'Kruve' },
      { id: '/overdose coffee', text: 'Overdose Coffee' },
      { id: '/petra', text: 'Petra' },
      { id: '/porlex', text: 'Porlex' },
      { id: '/shorts coffee', text: 'Shorts Coffee' },
      { id: '/sozen degirmenleri', text: 'Sozen Degirmenleri' },
      { id: '/staresso', text: 'Staresso' },
      { id: '/taft coffee', text: 'Taft Coffee' },
      { id: '/urban grind', text: 'Urban Grind' },
      { id: '/urban tools', text: 'Urban Tools' },
      { id: '/wacaco', text: 'Wacaco' },
    ]
  }
})

var bilgiler = new Vue({
  el: '#bilgiler-1',
  data: {
    bilgiler: [
      { id: '/bizkimiz', text: 'Hakkımızda' },
      { id: '/siparis/takip', text: 'Sipariş Takip' },
      { id: '/siparis-odeme-bilgileri', text: 'Ödeme Seçenekleri' },
      { id: '/sss', text: 'Sık Sorulan Sorular' },
      { id: '/gizlilik-politikasi', text: 'Gizlilik Politikası' },
      { id: '/yasal-uyari', text: 'Yasal Uyarı' },
      { id: '/mesafeli-satis-sozlesmesi', text: 'Mesafeli Satış Sözleşmesi' },
      { id: '/cayma-hakki', text: 'Cayma Hakkı' },
    ]
  }
})

var kategoriler = new Vue({
  el: '#kategoriler-1',
  data: {
    kategoriler: [
      { id: '/kahveler', text: 'Kahveler' },
      { id: '/kapsul-kahveler', text: 'Kapsül Kahveler' },
      { id: '/kahve-demleme-ekipmanlari', text: 'Kahve Demleme Ekipmanları' },
      { id: '/moka-pot', text: 'Moka Pot' },
      { id: '/french-press', text: 'French Press' },
      { id: '/kahve-degirmenleri', text: 'Öğütücüler' },
      { id: '/filtreler', text: 'Filtreler' },
      { id: '/soguk-kahve', text: 'Soğuk Kahve' },
      { id: '/yedek-parcalar', text: 'Yedek Parçalar' },
      { id: '/aksesuarlar', text: 'Aksesuarlar' },
      { id: '/barista-ekipmanlari', text: 'Barista Ekipmanları' },
      { id: '/kettle', text: 'Kettle' },
      { id: '/chemex', text: 'Chemex' },
      { id: '/hario', text: 'Hario' },
      { id: '/bonavita', text: 'Bonavita' },
      { id: '/aeropress-ekipmanlari', text: 'Aeropress' },
      { id: '/kahve-icme-ekipmanlari', text: 'Termos&Mug' },
    ]
  }
})

var sepetAc = new Vue({ //headerdaki dropdown sepet
    el: '#sepetAc',
    data: {
        active: false,
        cart: [],
        toplam: 0.00,
    },
    created(){
      this.cart = JSON.parse(localStorage.getItem('sepettekiler' || [] ));
      this.toplam = JSON.parse(localStorage.getItem('toplam' || [] ));
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;
        }
    }
});

var sepet1 = new Vue({ //sepet sayfası
  el: '#sepet1',
  data: {
    cart: sepetAc.cart,
    toplam: sepetAc.toplam,
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem('sepettekiler' || [] ));
  },
  methods: {
    sepettenSil: function(index)
    {
      this.toplam -= this.cart[index].fiyat;
      this.cart.splice(index, 1);
      localStorage.setItem('sepettekiler', JSON.stringify(this.cart));
      localStorage.setItem('toplam', JSON.stringify(this.toplam));
    }
  }
})

new Vue({
    el: '#e-mail',
    methods: {
        mailAlert: function(){
            alert("e-mail"); //TODO: kullanıcadan mail alınacak
        }
    }
})

new Vue({
    el: '#giris',
    data: {
      mailAdresi: "",
      sifreAl: "",
    },
    methods: {
        girisYap: function(){
          if ((this.mailAdresi === 'admin') && (this.sifreAl === 'admin')) {
            document.girisFormu.action = "index.html"
          }

          else {
            alert("Hatalı Giriş!")
          }
        }
    }
})

var tanismaSetleri = new Vue({ // anasayfadaki tanışma setleri
  el: '#tanismaSetleri',
  data: {
    setler: [
      {
        markaurl: '/aeropress',
        sepette: 'Aeropress Tanışma Seti',
        image: 'src/img/789_1569671404_ASZ.jpg',
        url: '/aeropress-aeropress-tanisma-seti-kahve-tanisma-setleri',
        title: 'AEROPRESS TANIŞMA SETI',
        marka: 'AEROPRESS',
        fiyat: 329.99 },
      {
        markaurl: '/kahhvecom',
        sepette: 'Kahhve Tanışma Seti',
        image: 'src/img/92_1569671134_BG8.jpg',
        url: '/kahhvecom-tanisma-seti-kahveler',
        title: 'KAHHVE TANIŞMA SETI',
        marka: 'KAHHVECOM',
        fiyat: 49.99 },
      {
        markaurl: '/hario',
        sepette: 'Hario V60 Tanışma Seti',
        image: 'src/img/112_1569671179_VwG.jpg',
        url: '/hario-set-kahve-demleme-ekipmanlari',
        title: 'V60 TANIŞMA SETI',
        marka: 'HARIO',
        fiyat: 229.99 },
      {
        markaurl: '/bialetti',
        sepette: 'Bialetti Moka Pot Tanışma Seti',
        image: 'src/img/135_1569671319_5Up.jpg',
        url: '/bialetti-moka-pot-baslangic-seti-kahve-demleme-ekipmanlari',
        title: 'MOKA POT TANIŞMA SETI 3 CUP',
        marka: 'BIALETTI',
        fiyat: 219.99 },
    ]
  },
  methods: {
    sepeteEkle: function(index)
    {
      console.log(this.setler[index]);
      sepetAc.cart.push(this.setler[index]);
      sepetAc.toplam += this.setler[index].fiyat;
      localStorage.setItem('sepettekiler', JSON.stringify(sepetAc.cart));
      localStorage.setItem('toplam', JSON.stringify(sepetAc.toplam));
    }
  }
})

var kahhveTanismaSeti = new Vue({ //tanışma setleri sayfası
  el : "#kahhveTanisma",
  data: {
    hepsi: [],

    kahhvesetler: [
      {
        isAvailable: true,
        markaurl: '/kahhvecom',
        sepette: 'Kahhve Tanışma Seti',
        image: 'src/img/92_1569671134_BG8.jpg',
        url: '/kahhvecom-tanisma-seti-kahveler',
        title: 'KAHHVE TANIŞMA SETI',
        marka: 'KAHHVECOM',
        fiyat: 49.99 },
    ],

    bialettiSetler: [
      {
        isAvailable: true,
        markaurl: '/bialetti',
        sepette: 'Bialetti Moka Pot Tanışma Seti 3 Cup',
        image: 'src/img/92_1569671134_BG8.jpg',
        url: '/bialetti-moka-pot-baslangic-seti-kahve-demleme-ekipmanlari',
        title: 'MOKA POT TANIŞMA SETI 3 CUP',
        marka: 'BIALETTI',
        fiyat: 219.99 },
      {
        isAvailable: true,
        markaurl: '/bialetti',
        sepette: 'Bialetti Moka Pot Tanışma Seti 2 Cup',
        image: 'https://kahhvecom.imgix.net/urunler/778_1569671374_THD.jpg',
        url: '/bialetti-moka-pot-tanisma-seti-2-cup-kahve-demleme-ekipmanlari',
        title: 'MOKA POT TANIŞMA SETI 2 CUP',
        marka: 'BIALETTI',
        fiyat: 199.99 },
      {
        isAvailable: false,
        markaurl: '/bialetti',
        sepette: 'Bialetti Moka Pot Tanışma Seti 3 Cup Pro',
        image: 'https://kahhvecom.imgix.net/urunler/850_1569672595_xp6.jpg',
        url: '/bialetti-moka-pot-tanisma-seti-3-cup--pro-moka-pot',
        title: 'MOKA POT TANIŞMA SETI 3 CUP PRO',
        marka: 'BIALETTI',
        fiyat: 474.99 },
    ],

    aeropressSetler: [
      {
        isAvailable: true,
        markaurl: '/aeropress',
        sepette: 'Aeropress Tanışma Seti',
        image: 'https://kahhvecom.imgix.net/urunler/789_1569671404_ASZ.jpg',
        url: '/aeropress-aeropress-tanisma-seti-kahve-tanisma-setleri',
        title: 'AEROPRESS TANIŞMA SETI',
        marka: 'AEROPRESS',
        fiyat: 329.99 },
      {
        isAvailable: false,
        markaurl: '/aeropress',
        sepette: 'Aeropress Tanışma Seti Pro',
        image: 'https://kahhvecom.imgix.net/urunler/855_1569674802_kdG.jpg',
        url: '/aeropress-aeropress-tanisma-seti-pro-kahve-demleme-ekipmanlari',
        title: 'AEROPRESS TANIŞMA SETI PRO',
        marka: 'AEROPRESS',
        fiyat: 579.99 },
    ],

    harioSetler: [
      {
        isAvailable: true,
        markaurl: '/hario',
        sepette: 'Hario V60 Tanışma Seti',
        image: 'https://kahhvecom.imgix.net/urunler/112_1569671179_VwG.jpg',
        url: '/hario-set-kahve-demleme-ekipmanlari',
        title: 'V60 TANIŞMA SETI',
        marka: 'HARIO',
        fiyat: 229.99 },
      {
        isAvailable: false,
        markaurl: '/hario',
        sepette: 'Hario Mill Skerton Tanışma Seti',
        image: 'https://kahhvecom.imgix.net/urunler/857_1569938448_bEm.jpg',
        url: '/hario-mini-mill-skerton-tanisma-seti-kahve-degirmenleri',
        title: 'MINI MILL SKERTON TANIŞMA SETI',
        marka: 'HARIO',
        fiyat: 269.99 },
      {
        isAvailable: false,
        markaurl: '/hario',
        sepette: 'Hario V60 Tanışma Seti Barista',
        image: 'https://kahhvecom.imgix.net/urunler/852_1569673649_CUv.jpg',
        url: '/hario-v60-tanisma-seti-barista-kahve-demleme-ekipmanlari',
        title: 'V60 TANIŞMA SETI BARİSTA',
        marka: 'HARIO',
        fiyat: 874.99 },
      {
        isAvailable: false,
        markaurl: '/hario',
        sepette: 'Hario Tanışma Seti Pro',
        image: 'https://kahhvecom.imgix.net/urunler/851_1569673369_TX7.jpg',
        url: '/hario-v60-tanisma-seti-pro-kahve-demleme-ekipmanlari',
        title: 'V60 TANIŞMA SETI PRO',
        marka: 'HARIO',
        fiyat: 479.99 },
    ]

  },

  created(){
    this.hepsi = this.kahhvesetler.concat(this.bialettiSetler, this.harioSetler, this.aeropressSetler);
  },

  methods: {
    kahhveSepeteEkle: function(index)
    {
      console.log(this.hepsi[index]);
      sepetAc.cart.push(this.hepsi[index]);
      sepetAc.toplam += this.hepsi[index].fiyat;
      localStorage.setItem('sepettekiler', JSON.stringify(sepetAc.cart));
      localStorage.setItem('toplam', JSON.stringify(sepetAc.toplam));
    },

    aeropressSec: function(){
      this.hepsi = this.aeropressSetler;
    },

    harioSec: function(){
      this.hepsi = this.harioSetler;
    },

    bialettiSec: function(){
      this.hepsi = this.bialettiSetler;
    },

    kahhveSec: function(){
      this.hepsi = this.kahhvesetler;
    },

    artanFiyat: function(){
      this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1);
    },

    azalanFiyat: function(){
      this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1).reverse();
    }
  }
})

var kahhveEkipmanlar = new Vue({ //ekipmanlar & aksesuarlar sayfası
  el : "#kahhveEkipmanlar",
  data: {
    hepsi: [],
    sayfa:[],
    itemPerPage: 6,
    a: 0,
    b: 6,
    adet: 1,

    chemexUrunler: [
      {
        isAvailable: true,
        markaurl: '/chemex',
        sepette: 'Chemex Beyaz Filtre 6-8 Cup',
        image: 'https://kahhvecom.imgix.net/urunler/50_1440881161_NU3.jpg',
        url: '/chemex-beyaz-filtre-filtreler',
        title: 'BEYAZ FILTRE 6-8 CUP',
        marka: 'CHEMEX',
        fiyat: 74.99 },
      {
        isAvailable: true,
        markaurl: '/chemex',
        sepette: 'Chemex Ahşap Tutacaklı 6 Cup',
        image: 'https://kahhvecom.imgix.net/urunler/47_1439898391_u6Z.jpg',
        url: 'chemex-ahsap-tutacakli-6-cup-kahve-demleme-ekipmanlari.html',
        title: 'AHŞAP TUTACAKLI 6 CUP',
        marka: 'CHEMEX',
        fiyat: 379.99 },
      {
        isAvailable: true,
        markaurl: '/chemex',
        sepette: 'Chemex Ahşap Tutacaklı 8 Cup',
        image: 'https://kahhvecom.imgix.net/urunler/133_1468588393_zow.jpg',
        url: '/chemex-ahsap-tutacakli-8-cup-kahve-demleme-ekipmanlari',
        title: 'AHŞAP TUTACAKLI 8 CUP',
        marka: 'CHEMEX',
        fiyat: 399.99 },

    ],

    bialettiUrunler: [
      {
        isAvailable: true,
        markaurl: '/bialetti',
        sepette: 'Bialetti Moka Pot Express Kırmızı 1 Cup',
        image: 'https://kahhvecom.imgix.net/urunler/751_1561111234_Gug.jpg',
        url: '/bialetti-moka-pot-express-kirmizi-1-cup-moka-pot',
        title: 'MOKA POT EXPRESS KIRMIZI 1 CUP',
        marka: 'BIALETTI',
        fiyat: 149.99 },
      {
        isAvailable: true,
        markaurl: '/bialetti',
        sepette: 'Bialetti Orzo Express',
        image: 'https://kahhvecom.imgix.net/urunler/456_1492581342_zGf.jpg',
        url: '/bialetti-orzo-express-kahve-demleme-ekipmanlari',
        title: 'ORZO EXPRESS',
        marka: 'BIALETTI',
        fiyat: 129.99 },
      {
        isAvailable: false,
        markaurl: '/bialetti',
        sepette: 'Bialetti Moka Pot Alpina 3 Cup',
        image: 'https://kahhvecom.imgix.net/urunler/76_1444578738_YZI.jpg',
        url: 'bialetti-moka-pot-alpini-3-cup-kahve-demleme-ekipmanlari.html',
        title: 'MOKA POT ALPINA 3 CUP',
        marka: 'BIALETTI',
        fiyat: 219.99 },
    ],

    harioUrunler: [
      {
        isAvailable: true,
        markaurl: '/hario',
        sepette: 'Hario V60 Tanışma Seti',
        image: 'https://kahhvecom.imgix.net/urunler/112_1569671179_VwG.jpg',
        url: '/hario-set-kahve-demleme-ekipmanlari',
        title: 'V60 TANIŞMA SETI',
        marka: 'HARIO',
        fiyat: 229.99 },
      {
        isAvailable: false,
        markaurl: '/hario',
        sepette: 'Hario Mill Skerton Tanışma Seti',
        image: 'https://kahhvecom.imgix.net/urunler/857_1569938448_bEm.jpg',
        url: '/hario-mini-mill-skerton-tanisma-seti-kahve-degirmenleri',
        title: 'MINI MILL SKERTON TANIŞMA SETI',
        marka: 'HARIO',
        fiyat: 269.99 },
      {
        isAvailable: false,
        markaurl: '/hario',
        sepette: 'Hario V60 Tanışma Seti Barista',
        image: 'https://kahhvecom.imgix.net/urunler/852_1569673649_CUv.jpg',
        url: '/hario-v60-tanisma-seti-barista-kahve-demleme-ekipmanlari',
        title: 'V60 TANIŞMA SETI BARİSTA',
        marka: 'HARIO',
        fiyat: 874.99 },
      {
        isAvailable: false,
        markaurl: '/hario',
        sepette: 'Hario Tanışma Seti Pro',
        image: 'https://kahhvecom.imgix.net/urunler/851_1569673369_TX7.jpg',
        url: '/hario-v60-tanisma-seti-pro-kahve-demleme-ekipmanlari',
        title: 'V60 TANIŞMA SETI PRO',
        marka: 'HARIO',
        fiyat: 479.99 },
      {
        isAvailable: true,
        markaurl: '/hario',
        sepette: 'Hario V60 02 Seramik Dripper Beyaz',
        image: 'https://kahhvecom.imgix.net/urunler/94_1453646682_GML.jpg',
        url: '/hario-v60-02-dripper-beyaz-seramik-kahve-demleme-ekipmanlari',
        title: 'V60 02 SERAMIK DRIPPER BEYAZ',
        marka: 'HARIO',
        fiyat: 149.99 },
    ]

  },

  created(){
    this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
    this.sayfa = this.hepsi.slice(this.a,this.b);
    this.hepsi = this.sayfa;
  },

  methods: {
    kahhveSepeteEkle: function(index)
    {
      console.log(this.hepsi[index]);
      sepetAc.cart.push(this.hepsi[index]);
      sepetAc.toplam += this.hepsi[index].fiyat;
      localStorage.setItem('sepettekiler', JSON.stringify(sepetAc.cart));
      localStorage.setItem('toplam', JSON.stringify(sepetAc.toplam));
    },

    hepsiniSec: function(){
      this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
    },

    chemexSec: function(){
      this.hepsi = this.chemexUrunler;
    },

    harioSec: function(){
      this.hepsi = this.harioUrunler;
    },

    bialettiSec: function(){
      this.hepsi = this.bialettiUrunler;
    },

    artanFiyat: function(){
      this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1);
    },

    azalanFiyat: function(){
      this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1).reverse();
    },

    nextPage: function(){
      if (this.b < 12) {
        this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
        this.a += this.itemPerPage;
        this.b += this.itemPerPage;
        this.sayfa = this.hepsi.slice(this.a, this.b);
        this.hepsi = this.sayfa;
      }
    },

    prevPage: function(){
      if (this.a > 0) {
        this.hepsi = this.chemexUrunler.concat(this.harioUrunler, this.bialettiUrunler);
        this.a -= this.itemPerPage;
        this.b -= this.itemPerPage;
        this.sayfa = this.hepsi.slice(this.a, this.b);
        this.hepsi = this.sayfa;
      }
    },

    adetUp: function(){
      this.adet++
    },

    adetDown: function(){
      if (this.adet > 1) {
        this.adet--
      }
    },
  }
})

var kahhveKahhveler = new Vue({
  el: "#kahhveKahhveler",
  data: {
    hepsi: [],
    sayfa:[],
    itemPerPage: 6,
    a: 0,
    b: 6,
    kategoriAcma: false,
    noktalar: true,

    bialettiKahveler: [
      {
        isAvailable: true,
        markaurl: '/bialetti',
        sepette: 'Bialetti Gusto Dolce Öğütülmüş Kahve 250 gram',
        image: 'https://kahhvecom.imgix.net/urunler/737_1537871362_3NA.png',
        url: '/bialetti-gusto-dolce-ogutulmus-kahve-250-gram-kahveler',
        title: 'Bialetti Gusto Dolce Öğütülmüş Kahve 250 gram',
        marka: 'Bialetti',
        fiyat: 79.99 },
      {
        isAvailable: true,
        markaurl: '/bialetti',
        sepette: 'Bialetti Gusto Intenso Öğütülmüş Kahve 250 gram',
        image: 'https://kahhvecom.imgix.net/urunler/739_1542778084_QDU.jpg',
        url: '/bialetti-caffe-macinato--kahveler',
        title: 'Bialetti Gusto Intenso Öğütülmüş Kahve 250 gram',
        marka: 'Bialetti',
        fiyat: 79.99 },
    ],

    caffeVergnanoKahveler: [
      {
        isAvailable: true,
        markaurl: '/caffe-vergnano',
        sepette: 'Caffe Vergnano Espresso 1882',
        image: 'https://kahhvecom.imgix.net/urunler/119_1441352400_zn1.jpg',
        url: '/vergnano-espresso-1882-kahveler',
        title: 'Espresso 1882',
        marka: 'Caffe Vergnano',
        fiyat: 62.99 },
      {
        isAvailable: true,
        markaurl: '/caffe-vergnano',
        sepette: 'Caffe Fresco Arabica Çekirdek Kahvesi',
        image: 'https://kahhvecom.imgix.net/urunler/122_1563525190_Pfu.png',
        url: '/vergnano-arabica-cekirdek-kahvesi-kahveler',
        title: 'Arabica Çekirdek Kahvesi',
        marka: 'Caffe Fresco',
        fiyat: 51.99 },
      {
        isAvailable: true,
        markaurl: '/caffe-vergnano',
        sepette: 'Caffe Fresco Arabica Moka',
        image: 'https://kahhvecom.imgix.net/urunler/120_1441352749_Tvd.jpg',
        url: '/vergnano-arabica-moka-kahveler',
        title: 'Arabica Moka',
        marka: 'Caffe Fresco',
        fiyat: 51.99 },
      {
        isAvailable: true,
        markaurl: '/caffe-vergnano',
        sepette: 'Caffe Fresco Arabica Espresso',
        image: 'https://kahhvecom.imgix.net/urunler/121_1443548403_g5G.jpg',
        url: '/vergnano-arabica-espresso',
        title: 'Arabica Espresso',
        marka: 'Caffe Fresco',
        fiyat: 51.99 },
    ],

    caffeFrescoKahveler: [
      {
        isAvailable: true,
        markaurl: '/caffe-fresco',
        sepette: 'Caffe Fresco All Day Blend',
        image: 'https://kahhvecom.imgix.net/urunler/796_1550056308_k43.jpg',
        url: '/caffe-fresco-all-day-blend-kahveler',
        title: 'All Day Blend',
        marka: 'Caffe Fresco',
        fiyat: 21.99 },
      {
        isAvailable: true,
        markaurl: '/caffe-fresco',
        sepette: 'Caffe Fresco Espresso Blend 1 KG',
        image: 'https://kahhvecom.imgix.net/urunler/811_1565851189_uQt.jpg',
        url: '/caffe-fresco-espresso-blend-1-kg-kahveler',
        title: 'Caffe Fresco Espresso Blend 1 KG',
        marka: 'Caffe Fresco',
        fiyat: 84.99 },
      {
        isAvailable: true,
        markaurl: '/caffe-fresco',
        sepette: 'Caffe Fresco All Day Blend 1 KG',
        image: 'https://kahhvecom.imgix.net/urunler/812_1565087080_BHZ.jpg',
        url: '/caffe-fresco-all-day-blend-1-kg-kahveler',
        title: 'All Day Blend 1 KG',
        marka: 'Caffe Fresco',
        fiyat: 84.99 },
    ],

    coffeeSapiensKahveler: [
      {
        isAvailable: true,
        markaurl: '/coffee-sapiens',
        sepette: 'Coffee Sapiens Evolution Blend',
        image: 'https://kahhvecom.imgix.net/urunler/55_1521108632_Txj.jpg',
        url: '/coffee-sapiens-evolution-blend-kahveler',
        title: 'Evolution Blend',
        marka: 'Coffee Sapiens',
        fiyat: 39.99 },
      {
        isAvailable: true,
        markaurl: '/coffee-sapiens',
        sepette: 'Coffee Sapiens Mutation Blend',
        image: 'https://kahhvecom.imgix.net/urunler/54_1521108565_3mn.jpg',
        url: '/coffee-sapiens-mutation-blend-kahveler',
        title: 'Mutation Blend',
        marka: 'Coffee Sapiens',
        fiyat: 49.99 },
    ],

    kronotropKahveler: [
      {
        isAvailable: true,
        markaurl: '/kronotrop',
        sepette: 'Kronotrop Endonezya Frinsa Collective',
        image: 'https://kahhvecom.imgix.net/urunler/843_1567000093_yE5.jpg',
        url: '/kronotrop-endonezya-frinsa-collective-kahveler',
        title: 'Endonezya Frinsa Collective',
        marka: 'Kronotrop',
        fiyat: 59.99 },
    ]

  },

  created(){
    this.hepsi = this.bialettiKahveler.concat(this.caffeFrescoKahveler, this.caffeVergnanoKahveler, this.coffeeSapiensKahveler, this.kronotropKahveler);
    this.sayfa = this.hepsi.slice(this.a,this.b);
    this.hepsi = this.sayfa;
  },

  methods: {
    kahhveSepeteEkle: function(index)
    {
      console.log(this.hepsi[index]);
      sepetAc.cart.push(this.hepsi[index]);
      sepetAc.toplam += this.hepsi[index].fiyat;
      localStorage.setItem('sepettekiler', JSON.stringify(sepetAc.cart));
      localStorage.setItem('toplam', JSON.stringify(sepetAc.toplam));
    },

    bialettiSec: function(){
      this.hepsi = this.bialettiKahveler;
    },

    kronotropSec: function(){
      this.hepsi = this.kronotropKahveler;
    },

    caffeFrescoSec: function(){
      this.hepsi = this.caffeFrescoKahveler;
    },

    caffeVergnanoSec: function(){
      this.hepsi = this.caffeVergnanoKahveler;
    },

    coffeeSapiensSec: function(){
      this.hepsi = this.coffeeSapiensKahveler;
    },

    artanFiyat: function(){
      this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1);
    },

    azalanFiyat: function(){
      this.hepsi.sort((a, b) => (a.fiyat > b.fiyat) ? 1 : -1).reverse();
    },

    nextPage: function(){
      if (this.b < 12) {
        this.hepsi = this.bialettiKahveler.concat(this.caffeFrescoKahveler, this.caffeVergnanoKahveler, this.coffeeSapiensKahveler, this.kronotropKahveler);
        this.a += this.itemPerPage;
        this.b += this.itemPerPage;
        this.sayfa = this.hepsi.slice(this.a, this.b);
        this.hepsi = this.sayfa;
      }
    },

    prevPage: function(){
      if (this.a > 0) {
        this.hepsi = this.bialettiKahveler.concat(this.caffeFrescoKahveler, this.caffeVergnanoKahveler, this.coffeeSapiensKahveler, this.kronotropKahveler);
        this.a -= this.itemPerPage;
        this.b -= this.itemPerPage;
        this.sayfa = this.hepsi.slice(this.a, this.b);
        this.hepsi = this.sayfa;
      }
    },

    kategoriUzat: function() {
      this.kategoriAcma = true;
      this.noktalar = false;
    }
  }
})

var populerKahveler = new Vue({ //anasayfadaki popüler kahveler
  el: '#populerKahveler',
  data: {
    popKahveler: [
      {
        markaurl: '/caffe-fresco',
        sepette: 'Caffe Fresco All Day Blend',
        image: 'src/img/796_1550056308_k43.jpg',
        url: '/caffe-fresco-all-day-blend-kahveler',
        title: 'ALL DAY BLEND',
        marka: 'CAFFE FRESCO',
        fiyat: 21.99 },
      {
        markaurl: '/coffee-sapiens',
        sepette: 'Coffee Sapiens Evolution Blend',
        image: 'src/img/55_1521108632_Txj.jpg',
        url: '/coffee-sapiens-evolution-blend-kahveler',
        title: 'EVOLUTION BLEND',
        marka: 'COFFEE SAPIENS',
        fiyat: 39.99 },
      {
        markaurl: '/cool-beans',
        sepette: 'Cool Beans Costa Rica',
        image: 'src/img/67_1444945568_pN1.jpg',
        url: '/cool-beans-costa-rica-kahveler',
        title: 'COSTA RICA',
        marka: 'COOL BEANS',
        fiyat: 44.99 },
      {
        markaurl: '/urban-grind',
        sepette: 'Urban Grind Guatemala Santa Barbara',
        image: 'src/img/668_1550484839_u9J.jpg',
        url: '/urban-grind-guatemala-santa-barbara-kahveler',
        title: 'GUATEMALA SANTA BARBARA',
        marka: 'URBAN GRIND',
        fiyat: 49.99 },
    ]
  },
  methods: {
    sepeteEkle: function(index)
    {
      sepetAc.cart.push(this.popKahveler[index]);
      sepetAc.toplam += this.popKahveler[index].fiyat;
      localStorage.setItem('sepettekiler', JSON.stringify(sepetAc.cart));
      localStorage.setItem('toplam', JSON.stringify(sepetAc.toplam));
    }
  }
})

var populerEkipmanlar = new Vue({ //anasayfadaki popüler ekipmanlar
  el: '#populerEkipmanlar',
  data: {
    popEkipmanlar: [
      {
        markaurl: '/hario',
        sepette: 'Hario Kettle Buono 1.0 LT',
        image: 'src/img/361_1469013202_cZg.jpg',
        url: '/hario-kettle-buono-10-lt-kahve-demleme-ekipmanlari',
        title: 'KETTLE BUONO 1.0 LT',
        marka: 'HARIO',
        fiyat: 279.99 },
      {
        markaurl: '/hario',
        sepette: 'Hario Mizudashi Soğuk Demleme',
        image: 'src/img/198_1444597118_LnY.jpg',
        url: '/hario-mizudashi-soguk-demleme-kahve-demleme-ekipmanlari',
        title: 'MIZUDASHI SOĞUK DEMLEME',
        marka: 'HARIO',
        fiyat: 139.99 },
      {
        markaurl: '/hario',
        sepette: 'Hario Mini Mill Plus Skerton Öğütücü',
        image: 'src/img/757_1543556047_ZS1.jpg',
        url: '/hario-mini-mill-plus-skerton-ogutucu-kahve-degirmenleri',
        title: 'MINI MILL PLUS SKERTON ÖĞÜTÜCÜ',
        marka: 'HARIO',
        fiyat: 229.99 },
      {
        markaurl: '/bialetti',
        sepette: 'Bialetti Moka Pot Kirmizi 1 Cup',
        image: 'src/img/751_1561111234_Gug.jpg',
        url: '/bialetti-moka-pot-express-kirmizi-1-cup-moka-pot',
        title: 'MOKA POT EXPRESS KIRMIZI 1 CUP',
        marka: 'BIALETTI',
        fiyat: 149.99 },
    ]
  },
  methods: {
    sepeteEkle: function(index)
    {
      sepetAc.cart.push(this.popEkipmanlar[index]);
      sepetAc.toplam += this.popEkipmanlar[index].fiyat;
      localStorage.setItem('sepettekiler', JSON.stringify(sepetAc.cart));
      localStorage.setItem('toplam', JSON.stringify(sepetAc.toplam));
    }
  }
})

var footerAyarlar = new Vue({
  el: "#footer",
  data: {
    isAvailable: true,
  },
  methods: {
    acKapa: function(){
      if (this.isAvailable === true) {
        this.isAvailable = false;
      }
      else {
        this.isAvailable = true;
      }
    }
  }
})

var searchYap = new Vue({
    el: '#searchYap',
    data: {
        aranacakKelime: "",
    },
    methods: {
        aramaYap: function(){
            if(event.key === 'Enter'){
                window.location.replace('/arama?kelime=' + this.aranacakKelime);
            }
        }
    }
});

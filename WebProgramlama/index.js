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

Vue.component('sepet', {
  props: ['alinacaklar'],
  template: '<li><a :href="alinacaklar.url">Aeropress Aeropress Tanışma Seti</a><span class="pull-right">{{alinacaklar.fiyat}} TL</span></li>'
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

var sepetAc = new Vue({
    el: '#sepetAc',
    data: {
        active: false,
        cart: [],
        toplam: 0.00,
    },
    created(){
      this.cart = JSON.parse(localStorage.getItem('sepettekiler' || [] ))
      this.toplam = JSON.parse(localStorage.getItem('toplam' || [] ))
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;
        }
    }
});

var sepet1 = new Vue({
  el: '#sepet1',
  data: {
    cart: sepetAc.cart,
    toplam: sepetAc.toplam,
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

var tanismaSetleri = new Vue({
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

var populerKahveler = new Vue({
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

var populerEkipmanlar = new Vue({
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

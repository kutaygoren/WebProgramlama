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

var sepetAc = new Vue({
    el: '#sepetAc',
    data: {
        active: false
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;
        }
    }
});

new Vue({
    el: '#e-mail',
    methods: {
        mailAlert: function(){
            alert("e-mail"); //TODO: kullanıcadan mail alınacak
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

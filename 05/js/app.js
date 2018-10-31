Vue.component('hello', {
    template: '<h1>Template from a component</h1>'
});

let vueModel1 = new Vue({
    el: '#app1',
    data: {
  	    title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
  	    show: function() {
    	    this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)')
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

setTimeout(function(){
    vueModel1.title = "Changed by timer";
},3000);

let vueModel2 = new Vue({
    el: '#app2',
    data: {
  	    title: 'The second Instace'
    },
    methods: {
        onChange: function() {
            vueModel1.title = "Changed!";
        }
    }
});
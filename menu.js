$(function() {
        $('#mythingy').contextPopup({
          title: 'Meu Menu Popup',
          items: [
            {label:'Algum Item',     icon:'icons/shopping-basket.png',             action:function() { alert('clicked 1') } },
            {label:'Outra Coisa', icon:'icons/receipt-text.png',                action:function() { alert('clicked 2') } },
            {label:'Blá Blá',     icon:'icons/book-open-list.png',              action:function() { alert('clicked 3') } },
            null, // divider
            {label:'Ovelha',         icon:'icons/application-monitor.png',         action:function() { alert('clicked 4') } },
            {label:'Queijo',        icon:'icons/bin-metal.png',                   action:function() { alert('clicked 5') } },
            {label:'Bacon',         icon:'icons/magnifier-zoom-actual-equal.png', action:function() { alert('clicked 6') } },
            null, // divider
            {label:'Em Diante',       icon:'icons/application-table.png',           action:function() { alert('clicked 7') } },
            {label:'Vibra',      icon:'icons/cassette.png',                    action:function() { alert('clicked 8') } }
          ]
        });
      });
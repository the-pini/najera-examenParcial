Ext.application({
    launch:function(){
        name:'examen-parcial',
                Ext.create('Ext.Panel',{
                    fullscreen:true,
            items:[
                {
                  xtype:'fieldset',
                  title:'Ingresa el valor del subtotal',
                  inconCls:'home',
                  items:[
                      
                          {
                        xtype:'textfield',
           placeHolder:'Ingresa el valor del subtotal'  
                      },
                
                {
                    xtype:'button',
                    text:'calcular',
                    ui: 'confirm',
                    handler:function(){
                        var SUBTOTAL=Ext.getCmp('textoBoton').getValue();
                        var IVA=SUBTOTAL*0.16;
                        var RET_IVA=IVA/3 *2;
                        var ISR=SUBTOTAL*0.10;
                        var TOTAL_PAGAR=SUBTOTAL+RET_IVA-IVA-ISR;
                        Ext.Msg.alert("el resultado es: "+TOTAL_PAGAR);
                    
                }
            }]});
                  
               {
                   xtype:'textfield',
                   title:'IVA',
                   iconCls:'user'
                },
                {
                    xtype:'textfield',
                   title:'Retencion de IVA',
                   iconCls:'user'
                },
                {
                    xtype:'textfield',
                   title:'ISR',
                   iconCls:'user'
                },
                {
                    xtype:'textfield',
                   title:'Total a pagar',
                   iconCls:'user'
                }
                
            
                
               
                
    }]
    });
}
});
    
    



/*
 * File: app/controller/CheckNode.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.CheckNode', {
    extend: 'Ext.app.Controller',

    models: [
        'CheckNode'
    ],
    stores: [
        'CheckNodes'
    ],
    views: [
        'CheckedNodeTree'
    ],

    refs: [
        {
            ref: 'checkedTree',
            selector: 'checkedtree'
        }
    ],

    onButtonClick: function(button, e, options) {
        var records = this.getCheckedTree().getView().getChecked(),
            names = [];

        Ext.Array.each(records, function(rec){
            names.push(rec.get('text'));
        });

        Ext.MessageBox.show({
            title: 'Selected Nodes',
            msg: names.join('<br />'),
            icon: Ext.MessageBox.INFO
        });    
    },

    init: function() {
        this.control({
            "button[action='getCheckedNodes']": {
                click: this.onButtonClick
            }
        });

    }

});

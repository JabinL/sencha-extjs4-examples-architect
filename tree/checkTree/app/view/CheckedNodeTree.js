/*
 * File: app/view/CheckedNodeTree.js
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

Ext.define('MyApp.view.CheckedNodeTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.checkedtree',

    frame: true,
    height: 250,
    width: 400,
    title: 'Check Tree',
    store: 'CheckNodes',
    rootVisible: false,
    useArrows: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Get checked nodes',
                            action: 'getCheckedNodes'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
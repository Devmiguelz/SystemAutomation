const { mouse, left, right, up, down, keyboard, Key, straightTo, centerOf, Region, Button } = require("@nut-tree/nut-js");

(async () => {

    await mouse.move(
        straightTo(
            centerOf(
                new Region(340, 0, 200, 300)
            )
        )
    );

    await mouse.click(Button.LEFT);

})();

keyboard.config.autoDelayMs = 150;

(async () => {

    for (let index = 1; index < 5000; index++) {

        await keyboard.type("<<dxi-item title='Balance Hidrico' [expanded]='false'>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("<div class='title_pago'>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("<label>CRITERIOS DE BÚSQUEDA</label>");
        await keyboard.type(Key.Enter)
        await keyboard.type("</div>");
        await keyboard.type(Key.Enter);
        await keyboard.type("<dx-form [(formData)]='dataSearch' labelLocation='left' [colCount]='12'>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("<dxi-item itemType='group' [colSpan]='12' [colCount]='12'>");

        await keyboard.type(Key.Enter);

        await keyboard.type("<dxi-item itemType='empty' [colSpan]='1'></dxi-item>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("<dxi-item [colSpan]='4' dataField='fechaInicial' [label]='{text:'Fecha y Hora Inicio'}' editorType='dxDateBox' [editorOptions]='{ type: 'datetime', onValueChanged: ValidateData, displayFormat: 'dd/MM/yyyy HH:mm'}'>");
        await keyboard.type(Key.Enter);
        await keyboard.type("<dxi-validation-rule type='required' message='Fecha inicio es requerida'></dxi-validation-rule>");
        await keyboard.type(Key.Enter);
        await keyboard.type("</dxi-item>");

        await keyboard.type(Key.Enter);

        await keyboard.type("<dxi-item itemType='empty' [colSpan]='1'></dxi-item>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("<dxi-item [colSpan]='4' dataField='fechaInicial' [label]='{text:'Fecha y Hora Inicio'}' editorType='dxDateBox' [editorOptions]='{ type: 'datetime', onValueChanged: ValidateData, displayFormat: 'dd/MM/yyyy HH:mm'}'>");
        await keyboard.type(Key.Enter);
        await keyboard.type("<dxi-validation-rule type='required' message='Fecha inicio es requerida'></dxi-validation-rule>");
        await keyboard.type(Key.Enter);
        await keyboard.type("</dxi-item>");

        await keyboard.type(Key.Enter);

        await keyboard.type("<dxi-item [colSpan]='1' cssClass='m-auto'>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("<div *dxTemplate>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("<dx-button stylingMode='contained' text='Buscar' type='success' [width]='140' (click)='SearchRecords()'></dx-button>");
        await keyboard.type(Key.Enter);
        await keyboard.type("</div>");
        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Tab);
        await keyboard.type("</dxi-item>");

        await keyboard.type(Key.Enter);
        await keyboard.type("</dxi-item>");
        await keyboard.type(Key.Enter);
        await keyboard.type("</dx-form>");
        await keyboard.type(Key.Enter);

        await keyboard.type("</dxi-item>");

        await keyboard.type(Key.Enter);
        await keyboard.type(Key.Enter);
    }

})();


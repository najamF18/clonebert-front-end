import VueWrapper from '@/components/core/Vue/vue.wrapper';
import BaseInput from '@/components/vuetify/Input/base-input';
import {ValidationProvider} from 'vee-validate';
import {Component} from 'vue-property-decorator';

import {VueEditor, Quill} from 'vue2-editor';

// import h3icon from 'quill/assets/icons/header-3.svg?inline';

// const icons = Quill.import('ui/icons');
// console.log(icons.header);

// console.log(h3icon);
// icons.header[3] = h3icon;

@Component({
    components: {
        ValidationProvider,
        VueEditor,
        Quill
    }
})
export default class WysiwygEditorComponent extends BaseInput {
    public $refs!: {
        boundaries: HTMLDivElement;
    };

    public toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{header: 1}, {header: 2}, {header: 3}], // custom button values
        [{list: 'ordered'}, {list: 'bullet'}], // superscript/subscript
        // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction
        [{script: 'sub'}, {script: 'super'}],
        [{size: ['small', false, 'large', 'huge']}], // custom dropdown
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        ['link', 'image'],
        ['video'],

        // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        // [{ font: [] }],
        [{align: ''}, {align: 'center'}, {align: 'right'}, {align: 'justify'}]
    ];

    public modules = {
        clipboard: {
            matchVisual: false
        }
    };
    public options = {
        modules: {
            clipboard: {
                matchVisual: false
            }
        },
        bounds: '#editor-boundaries'
    };

    public mounted() {}
}

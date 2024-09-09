import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputtext/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputtext/basicdoc';
import { DisabledDoc } from '@/components/doc/inputtext/disableddoc';
import { FilledDoc } from '@/components/doc/inputtext/filleddoc';
import { HelpTextDoc } from '@/components/doc/inputtext/helptextdoc';
import { ImportDoc } from '@/components/doc/inputtext/importdoc';
import { InvalidDoc } from '@/components/doc/inputtext/invaliddoc';
import { KeyFilterDoc } from '@/components/doc/inputtext/keyfilterdoc';
import { SizesDoc } from '@/components/doc/inputtext/sizesdoc';

const InputTextDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDoc
        },
        /*{
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },*/
        {
            id: 'filled',
            label: 'Filled',
            component: FilledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const ptDocs = [
        /*{
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.inputtext.options',
            label: 'InputText PT Options',
            component: DocApiTable
        }*/
    ];

    const themingDocs = [
        /*{
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }*/
    ];

    return (
        <DocComponent
            title="React Input Component"
            header="InputText"
            description="InputText is an extension to standard input element with theming and keyfiltering."
            componentDocs={docs}
            apiDocs={['InputText']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default InputTextDemo;

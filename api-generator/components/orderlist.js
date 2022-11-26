const OrderListProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'selection',
        type: 'any',
        default: 'null',
        description: 'Selected items in the list.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'Name of the field that uniquely identifies the a record in the data.'
    },
    {
        name: 'listStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the the list element.'
    },
    {
        name: 'responsive',
        type: 'boolean',
        default: 'true',
        description: 'Whether the list optimizes layout based on screen size.'
    },
    {
        name: 'breakpoint',
        type: 'string',
        default: '960px',
        description: 'The breakpoint to define the maximum width boundary when responsiveness is enabled.'
    },
    {
        name: 'stripedRows',
        type: 'boolean',
        default: 'false',
        description: 'Whether to displays rows with alternating colors.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: '0',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'moveUpIcon',
        type: 'string',
        default: 'pi pi-angle-up',
        description: 'Icon to display in the move up button.'
    },
    {
        name: 'moveTopIcon',
        type: 'string',
        default: 'pi pi-angle-double-up',
        description: 'Icon to display in the move top button.'
    },
    {
        name: 'moveDownIcon',
        type: 'string',
        default: 'pi pi-angle-down',
        description: 'Icon to display in the move down button.'
    },
    {
        name: 'moveBottomIcon',
        type: 'string',
        default: 'pi pi-angle-double-down',
        description: 'Icon to display in the move bottom button.'
    },
    {
        name: 'moveUpButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move up button inside the component.'
    },
    {
        name: 'moveTopButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move top button inside the component.'
    },
    {
        name: 'moveDownButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move down button inside the component.'
    },
    {
        name: 'moveBottomButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move bottom button inside the component.'
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying menu element.'
    }
];

const OrderListEvents = [
    {
        name: 'reorder',
        description: 'Callback to invoke when the list is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'array',
                description: 'Ordered list'
            },
            {
                name: 'event.direction',
                type: 'string',
                description: 'Direction of the change; "up", "down", "bottom", "top"'
            }
        ]
    },
    {
        name: 'selection-change',
        description: 'Callback to invoke when selection changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'array',
                description: 'Ordered list'
            }
        ]
    }
];

const OrderListSlots = [
    {
        name: 'header',
        description: "Custom content for the component's header"
    },
    {
        name: 'item',
        description: 'Custom content for the item'
    },
    {
        name: 'controlsstart',
        description: 'Custom content before the buttons'
    },
    {
        name: 'controlsend',
        description: 'Custom content after the buttons'
    }
];

module.exports = {
    orderlist: {
        name: 'OrderList',
        description: 'OrderList is used to managed the order of a collection.',
        props: OrderListProps,
        events: OrderListEvents,
        slots: OrderListSlots
    }
};

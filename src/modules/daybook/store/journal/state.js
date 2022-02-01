// el state es reactivo y cuando se cambia vamos notificar 
//a todos los componentes o donde esten escuchando los cambios


export default () => ({
    isLoading: true,
    entries: [{
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Pariatur nostrud aliquip sint commodo ex eiusmod consequat amet id excepteur. In consequat sit ullamco ut excepteur cupidatat voluptate eu magna magna officia voluptate veniam. Anim labore laboris commodo laborum esse esse pariatur dolor id ut nulla quis. Proident eiusmod culpa nostrud excepteur nulla esse laboris aliquip. Duis magna enim laboris nisi ullamco. Aliquip qui sunt cupidatat veniam duis veniam mollit in ea irure et. Ea velit consequat quis ad ipsum ullamco.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Sit commodo reprehenderit sunt id. Excepteur non velit ea tempor aliqua labore dolor commodo. Fugiat amet labore labore tempor voluptate do duis aute cillum ipsum aliqua velit proident eiusmod. Cupidatat do deserunt elit consectetur eiusmod cupidatat sit veniam aute cupidatat. Nisi incididunt tempor sunt duis.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Eiusmod ut ipsum ut velit tempor eu. Magna deserunt nisi irure ex aute sit ea veniam nisi. Ut ut reprehenderit veniam et ullamco pariatur minim elit. Voluptate adipisicing quis consequat voluptate exercitation qui. Irure enim voluptate quis do officia et ullamco non commodo magna ullamco qui magna.Sit commodo reprehenderit sunt id. Excepteur non velit ea tempor aliqua labore dolor commodo. Fugiat amet labore labore tempor voluptate do duis aute cillum ipsum aliqua velit proident eiusmod. Cupidatat do deserunt elit consectetur eiusmod cupidatat sit veniam aute cupidatat. Nisi incididunt tempor sunt duis.',
            picture: null
        }
    ]
})
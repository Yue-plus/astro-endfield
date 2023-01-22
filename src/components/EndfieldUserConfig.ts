export type Backround = {
    color?: string
    image?: URL
    dynamic?: 'disable' | 'default' | 'dust' | 'firefly' | 'overcast' | 'sunshine'
}

export type NavigationBarItem = {
    icon: string
    text: string
    link: URL
    target: '_blank' | '_self'
}

export type SideBar = {
    // TODO
}

export type Valine = {
    appId: string
    appKey: string
    serverUrl?: string
}

export type Gitalk = {
    clientId: string
    clientSecret: string
    repo: string
    owner: string
    admin: string[]
    id: string
}

export type Waline = {
    serverUrl: string
}

export type EndfieldUserConfig = {
    language?: string
    background?: Backround
    commentSystem?: Valine | Gitalk | Waline
    navigationBar?: NavigationBarItem[]
    aside?: SideBar
}

export function defineEndfieldConfig(config: EndfieldUserConfig): EndfieldUserConfig {
    return {
        language: config.language ?? "zh",
        background: {
            color: config.background?.color ?? 'black',
            image: new URL("/"),
            dynamic: 'disable',
        }
        
    }
}
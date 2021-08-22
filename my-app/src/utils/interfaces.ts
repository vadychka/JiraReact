
export interface ILogIns {
   name: string,
   password: string
}

export interface IToasterHandler {
   type: string,
   message: string
}

const Handlers: IToasterHandler[] = []

export interface ITask {
   title: string,
   details: string,
   priority: string

}

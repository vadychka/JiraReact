
export interface IUser {
   name: string,
   password: string
}

export interface INewUser {
   _id: string,
   name: string,
   email: string,
   password: string,
}

export interface IToasterHandler {
   type: string,
   message: string
}

export interface ITask {
   _id: string,
   title: string,
   details: string,
   priority: string
}


export interface IColumn {
   _id: string,
   title: string,
   tasks: ITask[]
}

export interface IProject {
   title: string,
   details: string,
   _id: string
}

export interface IBoard {
   column: IColumn[],
   projectId: string,
   _id: string
}

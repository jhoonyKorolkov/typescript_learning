import BaseTask from './Task'

export default interface NoteTask extends BaseTask {
    page: number
    note: string
}

import TaskHeader from '@/components/taskComponents/TaskHeader'

const TaskPage = () =>{
  return (
    <TaskHeader 
      title="Nome do objetivo"
      desc="Descrição do objetivo"
      tags={['tag','tag','tag','tag']}/>
  )
}

export default TaskPage
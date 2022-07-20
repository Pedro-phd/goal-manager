import { Container } from './styles'

type TaskHeaderProps = {
  title: string
  desc: string
  tags: Array<string>
}

const TaskHeader = ({title, desc, tags}: TaskHeaderProps) => {
  return(
    <Container>
      <div className="title">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="tags">
        {tags.map(tag => {
          return <p key={Math.random()}>{tag}</p>
        })}
      </div>
    </Container>
  )
}

export default TaskHeader
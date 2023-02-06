import Accordion from './components/Accordion'

function App() {
  const items = [{
    id:1,
    label: 'can i use javascript on a project?',
    content: "You can use javascript on any project u want to work on in any project"
  },{
    id:2,
    label: 'can i use react on a project?',
    content: "You can use javascript on any project u want to work on in any project"
  },{
    id:3,
    label: 'can i use ruby on rails on a project?',
    content: "You can use javascript on any project u want to work on in any project"
  }]
  return <Accordion items={items}/>
}

export default App;
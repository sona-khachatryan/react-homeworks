
import './App.css';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="App">

     <Alert size='small' // '', medium, big
            type='success' // warning, info, error
            version='outlined' // '', filled
            placement='bottom-center' //center, top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
            closeIcon={true} // false
            duration='' // define in seconds, e.g. '5'
            // sx={{backgroundColor: 'black'}} // custom styles
            >
     Mission accomplished!
     </Alert>
    </div>
  );
}

export default App;

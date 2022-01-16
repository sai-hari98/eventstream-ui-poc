import React, {Component} from 'react';

class SseComponent extends Component{

    componentDidMount(){
        var sse = new EventSource("http://localhost:8080/stream/get");

        sse.onerror = () => {
          console.log('An error occurred');
          sse.close();
        }
      
        sse.onmessage = (event) => {
          console.log(JSON.parse(event.data));
        }
    }

    render(){
        return (<div>
            Hahah
        </div>)
    }
}

export default SseComponent;
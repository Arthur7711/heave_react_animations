import React, { PureComponent } from "react";
import raf from "raf";
import hoistNonReactStatics from "hoist-non-react-statics";

 
    class TL extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                time: 0,
                tick: 0,
            };
         }
 
       
      _r;
      C;
      componentDidMount() {
        let startTime , lastTime 
        let interval = 1000 / 60;
        lastTime = -interval;
        const loop = (t ) => {
          this._r = raf(loop);
          if (!startTime) startTime = t;
          if (t - lastTime > interval) {
            lastTime = t;
            this.setState({
              time: t - startTime,
              tick: this.state.tick + 1,
            });
          }
        };
        this._r = raf(loop);
      }
      componentWillUnmount() {
        raf.cancel(this._r);
      }
      render() {
          return
        // return <C {...this.props} {...this.state} />;
      }
      
    }
    hoistNonReactStatics(TL);
   
  
    export default TL;
  
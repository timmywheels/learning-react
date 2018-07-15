import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
      fishes: {},
      order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        // Reinstate local storage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        console.log(localStorageRef);
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });

    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        // Take copy of existing state
        const fishes = { ...this.state.fishes };
        // Add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // Set new fishes object to state
        this.setState({ fishes });
        console.log('adding a 🐠');

    };

    loadSampleFishes = () => {
      this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) => {
        // Take copy of state
        const order = { ...this.state.order };
        // Either add to order, or update number in order
        order[key] = order[key] + 1 || 1;
        // Call setState to update state object
        this.setState({ order });
    }

    render () {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={"Fresh Seafood Market"} age={100}/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                                index={key}
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;
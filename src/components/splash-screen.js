import React, {Component} from 'react';
import './splash-screen.css';

function SplashMessage() {
    return (
        <div className="splash-screen">
            Court Soundboard
            <div className="loading-dot">.</div>
        </div>
    );
}

function SplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // If I need to load something I will put it here
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1500)
            } catch (err) {
                console.log('Failed to load with error:' + err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // If loading, show this
            if (this.state.loading) return SplashMessage();

            // If not go to main page
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default SplashScreen;
import React from 'react'
// import '../setUpTests';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

//<Link page="http://www.facebook.com">Facebook</Link>
class Link extends React.Component {
    constructor(props) {
        super(props);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
    }

    _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
    }

    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }
}

test('component is not crashing', () => {
    //utiliser simplement la fonction shallow pour constater que le composant ne créé pas d'erreur lorsqu'il est instancié
    shallow(<Link />);
});

it('renders correctly', () => {
	//utiliser la méthode renderer afin de créer un snapshot
    
    expect(
        renderer.create(<Link />).toJSON()
    ).toMatchSnapshot()
});


test('can see title', () => {
    //utilisez les fonctions de parcours find, text, etc ... de enzyme afin de valider le titre du lien et son attribut href  
    const link = shallow(<Link />);
    // let test = link.find('a').get(0).props()
    // console.log( test);

    expect(link.find('a').get(0).props.href).toEqual('#')
    expect(link.text()).toEqual('')
});

test('validate props', () => {
    //utilisez ici une nouvelle fois le shallow rendering afin de constater la valeur des props children et page
    const link = shallow(<Link children = 'Facebook' page="http://www.facebook.com" />);
    
    expect(link.find('a').get(0).props.href).toEqual('http://www.facebook.com')
    expect(link.text()).toEqual('Facebook')
});
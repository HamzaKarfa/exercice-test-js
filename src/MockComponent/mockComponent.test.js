import React from 'react'
import { mount } from 'enzyme';
import ShareCom from './ShareComponent'




// //mocker le composant UserComponent
jest.mock("./UserComponent", () => ()=> <div id="User">UserComponent mocked</div>)
// // //mocker le composant InstallComponent
jest.mock("./InstallComponent", () => ()=> <div id="Install">InstallComponent mocked</div>)

describe('ShareCom', () => {

      
    it('should return correct component', () => {
        //mount  ShareCom 
        const ShareComponent = mount(<ShareCom />);

        let UserCom = ShareComponent.find('#User')
        let InstallCom = ShareComponent.find('#Install')
        const propsMockedComponentUser = {
            id: 'User', 
            children: 'UserComponent mocked'
        }
        const propsMockedComponentInstall = {
            id: 'Install', 
            children: 'InstallComponent mocked'
        }
        
        //assert
        expect(UserCom.get(0).props).toEqual(propsMockedComponentUser)
        expect(InstallCom.get(0).props).toEqual(propsMockedComponentInstall)
        
    })
    
});


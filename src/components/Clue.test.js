import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );
import Clue from './Clue';

import { clue } from '../data/fixtures';

const props = { clue };

describe( 'Clue', () => {
    let clueWrapper = shallow( <Clue { ...props } /> );

    it( 'renders the clue value', () => {
        expect( clueWrapper.find( 'h4' ).text() ).toBe( clue.value.toString() );
    } );

    it( 'renders the clue question', () => {
        expect( clueWrapper.find( 'h5' ).at( 0 ).text() ).toBe( clue.question );
    } );

    it( 'renders the clue answer', () => {
        expect( clueWrapper.find( 'h5' ).at( 1 ).text() ).toBe( clue.answer );
    } );

    it( 'sets the answer with the `text-hidden` class', () => {
        expect( clueWrapper.find( 'h5' ).at( 1 ).hasClass( 'text-hidden' ) ).toBe( true );
    } );

    it( 'initializes the `reveal` state to be `false`', () => {
        expect( clueWrapper.state().revealed ).toBe( false );
    } );

    describe( 'when rendering a clue with no value', () => {
        beforeEach( () => {
            props.clue.value = undefined;
            clueWrapper = shallow( <Clue { ...props } /> );
        } );

        it( 'renders the clue `undefined` value', () => {
            expect( clueWrapper.find( 'h4' ).text() ).toBe( 'unknown' );
        } );
    } );

    describe( 'when clicking on the card', () => {
        beforeEach( () => clueWrapper.simulate( 'click' ) );

        it( 'changes the `reveal` state to be `true` on click', () => {
            expect( clueWrapper.state().revealed ).toBe( true );
        } );

        it( 'changes the class', () => {
            expect( clueWrapper.find( 'h5' ).at( 1 ).hasClass( 'text-revealed' ) ).toBe( true );
        } );
    } );
} );

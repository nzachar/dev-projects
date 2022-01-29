import { Content, Wrapper } from './SearchBar.styles'
import searchIcon from '../../images/search-icon.svg'
import { useEffect, useState, useRef } from 'react';

export const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    //always renders on the init render
    useEffect(() => {
        //skip init render trick
        if (initial.current) {
            initial.current = false;
            return
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        //doesn't return untill this render 
        //has finished and is going to render again
        return () => clearTimeout(timer);

    }, [setSearchTerm, state])


    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
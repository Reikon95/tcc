import {React} from 'react'
import { StyledNavbar, StyledList, StyledListItem } from './navbar.styled'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function NavBar() {
    return (
        <StyledNavbar>
          <StyledList>
            <StyledListItem>
              <Link to="/">Home</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="/about">About</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="/jobs">Jobs</Link>
            </StyledListItem>
          </StyledList>
        </StyledNavbar>
    )
}
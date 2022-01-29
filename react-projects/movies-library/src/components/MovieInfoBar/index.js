import { Content, Wrapper } from "./MovieInfoBar.styles";
import { calcTime, convertMoney } from '../../helpers'

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {revenue}</p>
            </div>
        </Content>
    </Wrapper>
);

export default MovieInfoBar;
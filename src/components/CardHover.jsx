
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { HoverCard } from "../page/Projects";
import { addOpacityColor } from "../utils";

const CardHover = ({ item, toggler }) => {

  return (
    <>
      <HoverCard>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <ButtonsCard>
          <button onClick={() => toggler(item)}>
            <a>
              <FormattedMessage
                id="projects.viewpage"
                defaultMessage="View page"
              />
            </a>
          </button>
          <button>
            <a href={item.github} target="_blank">
              <FormattedMessage
                id="projects.repositorie"
                defaultMessage="Repositorie"
              />
            </a>
          </button>
        </ButtonsCard>
      </HoverCard>
    </>
  );
};

export default CardHover;

const ButtonsCard = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
  button {
    padding: 3px 8px;
    border-radius: 3px;
    border: none;
    background-color: var(--secondary-color);
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.3s;
    font-size: 14px;
    :hover {
      background-color: ${({ theme }) =>
        addOpacityColor(theme.colors.secondary, 0.8)};
    }
  }
  a {
    color: ${({ theme }) => theme.bodyDark};
  }
`;

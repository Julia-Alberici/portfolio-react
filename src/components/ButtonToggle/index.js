import { BtnMenu } from "./styled"

export default function ButtonToggle({onClick, toggle}){
    return(
        <BtnMenu onClick={onClick} className={toggle ? 'toggled' : ''}>
          <span className="trace"></span>
          <span className="trace"></span>
          <span className="trace"></span>
        </BtnMenu>
    )
}
import { BtnMenu } from "./styled"

export default function ButtonToggle(props){
    return(
        <BtnMenu {...props}>
          <span className="trace"></span>
          <span className="trace"></span>
          <span className="trace"></span>
        </BtnMenu>
    )
}
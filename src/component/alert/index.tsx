import { X } from 'lucide-react';
import "./index.scss"
import { ReactNode } from 'react';
import { AlertType } from '../../types';
interface  IProp
{
    type:AlertType,
    title:string,
    icon:ReactNode,
    children:ReactNode
}

const index = ({type,title,icon,children}:IProp) => {
return (
    <div>

    <div className={type}>
        <div className="alert-title">
            <div className="title">
                {icon}
                <div className='title-name'>{title}</div>
            
            </div>
            <X />
        </div>
        
        <p>{children}</p>
    </div>

</div>
  )
}

export default index
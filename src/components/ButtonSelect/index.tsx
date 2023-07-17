import { IconContext } from 'phosphor-react';
import { ButtonSelectContainer, SelectOptionsContainer } from './styles';
import { SelectOptionsProps } from './type';
import { PaymentMethodType } from '../../reducers/cart/reducer';

export function SelectOptions({ buttons, name, handleChange, value }: SelectOptionsProps) {

  function onChange(e: any) {
    handleChange(e.target.childNodes[2].value);
  }

  return (
    <SelectOptionsContainer >
      {buttons.map((button, i) => {
        return (
          <ButtonSelectContainer checked={value === button.value} key={i} onClick={onChange} >
            {button.icon && (
              <IconContext.Provider value={{ size: 20 }}>
                {button.icon}
              </IconContext.Provider>
            )}

            <label htmlFor={button.id}>{button.label}</label>
            <input name={name} type="radio" id={button.id} value={button.value} />
          </ButtonSelectContainer>
        );
      })}
    </SelectOptionsContainer>
  );
};

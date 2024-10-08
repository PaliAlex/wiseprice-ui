import {
    ButtonStyled,
    FormContainer,
    InfoIconStyled,
    InfoWrapper,
    InputWrapper,
    TextContainer,
    TextFieldStyled
} from "./styles";
import {Button, TextField} from "@mui/material";
import {SelectComponent} from "../common/select/SelectComponent";
import { useForm} from "react-hook-form";
import {PropertyType} from "../../common/models/PropertyType";
import InfoIcon from "../../common/icons/Info";

export interface IForm {
    postcode: string;
    type: string;
}

export const InputForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IForm>();


    const onSubmit = async (data: IForm) => {
        console.log('Submitted data:', data);

        try {
            const response = await fetch('https://wiseprice-app-et34g.ondigitalocean.app/api/v1/property/valuation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Response data:', result);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const propertyTypeValues: string[] = Object.values(PropertyType);

    return(
        <FormContainer>
            <InputWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextFieldStyled
                        error={!!errors.postcode}
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        {...register('postcode', { required: 'postcode is required' })}
                    />

                    <SelectComponent
                        options={propertyTypeValues}
                        label={'Select property type'}
                        register={register}
                        error={!!errors.type}
                    />

                    <ButtonStyled variant="contained" type="submit" size="large">
                        Continue
                    </ButtonStyled>
                </form>
            </InputWrapper>
            <InfoWrapper>
                <InfoIconStyled />
                <TextContainer>
                    <p>Input the postcode and select the type of house to instantly receive its estimated price.</p>
                    <p>Accurate information ensures the best results!</p>
                </TextContainer>
            </InfoWrapper>
        </FormContainer>
    )
}
import React from 'react';
import {Button, Form, Stack} from "react-bootstrap";
import SelectProduct from "../SelectProduct/SelectProduct";
import {useFormContext} from "react-hook-form";
import {ReactComponent as Cross} from "../../assets/cross.svg";

interface CreateProductSelectProps {
    idx: number,
    remove: () => void,
    fieldId: string,
}

const CreateProductSelect: React.FC<CreateProductSelectProps> = ({ idx, remove, fieldId }) => {
    const {register} = useFormContext();

    return (
        <Stack direction="horizontal" gap={3} className={idx === 0 ? "" : "mt-2"} key={fieldId}>
            <Form.Group style={{ width: "70%" }}>
                <SelectProduct index={idx} />
            </Form.Group>
            <Form.Group style={{ width: "25%" }}>
                <Form.Control type="number" placeholder="0" min={1} {...register(`rows.${idx}.number`, {required: true})} />
            </Form.Group>
            <Button onClick={remove} className={"bg-white border-0"}>
                <Cross />
            </Button>
        </Stack>
    );
}

export default CreateProductSelect;
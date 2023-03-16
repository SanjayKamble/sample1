import Link from "next/link";
import Page from "../../components/layout/Page";
import Button from "../../components/ui/Button";
import Checkbox from "../../components/ui/Checkbox";
import Form, { FormContainer, FormGroup } from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Select from "../../components/ui/Select";
import Textarea from "../../components/ui/Textarea";

function forms() {
  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Form Elements</p>

            <div>
              <FormContainer>
                <Form>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input placeholder="First Name"></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>States</Label>
                    <Select>
                      <option>Select State</option>
                      <option>Maharashtra</option>
                      <option>Punjab</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label>Address</Label>
                    <Textarea></Textarea>
                  </FormGroup>

                  <FormGroup>
                    <label className="flex items-center">
                      <Checkbox></Checkbox>
                      <span>I agree to the Terms of Use</span>
                    </label>
                  </FormGroup>
                  <Button type="submit" theme="dark">
                    Submit Form
                  </Button>
                </Form>
              </FormContainer>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

export default forms;

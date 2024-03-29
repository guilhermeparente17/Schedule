import { Nav } from 'components';
import Button from 'components/Button/Button';
import { DateTimePicker } from 'components/Form/DateTimePicker';
import { RichInput } from 'components/Form/RichInput';
import { IWriteNowForm } from 'components/interfaces/IWriteNowForm';
import { FormProvider, useForm } from 'react-hook-form';
import { WriteNowResolve } from 'validations/WriteNowValidation';

export function WriteNowPage() {
  const formMethods = useForm<IWriteNowForm>({ resolver: WriteNowResolve });
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = formMethods;

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever Agora!</h1>
        <FormProvider {...formMethods}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="destinationName">Nome completo</label>
            <input {...register('destinationName')} type="text" />
            {errors?.destinationName?.message && (
              <p className="error-text">{errors?.destinationName?.message}</p>
            )}

            <label htmlFor="destinationAdress">E-mail</label>
            <input {...register('destinationAddress')} type="email" />
            {errors?.destinationAddress?.message && (
              <p className="error-text">{errors?.destinationAddress?.message}</p>
            )}

            <label htmlFor="dueDate">Data</label>
            <DateTimePicker name="dueDate" />
            {errors?.dueDate?.message && (
              <p className="error-text">{errors?.dueDate?.message}</p>
            )}

            <label htmlFor="subject">Assunto</label>
            <input {...register('subject')} type="text" />
            {errors?.subject?.message && (
              <p className="error-text">{errors?.subject?.message}</p>
            )}
            <label htmlFor="body">Mensagem</label>
            <RichInput name="body" />
            {errors?.body?.message && (
              <p className="error-text">{errors?.body?.message}</p>
            )}

            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default WriteNowPage;

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputContainer, InputBox, ErrorP } from "../../styles/auth";
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/authAxios';

const LoginPage = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!').required('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!'),
        password: yup.string().min(8, '비밀번호는 8~16자 사이로 입력해주세요!').max(16, '비밀번호는 8~16자 사이로 입력해주세요!').required('비밀번호는 8~16자 사이로 입력해주세요!')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (data) => {
        try {
            const response = await API.post("/auth/login", {
                email: data.email,
                password: data.password,
            });
            alert("로그인에 성공하셨습니다.");
            console.log('로그인 성공: ', response.data);

            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('isLoggedIn', 'true');

            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('로그인 오류: ', error.response?.data || error.message);
            alert("로그인에 실패하셨습니다. 입력한 정보를 다시 확인해주세요.");
        }
    };

    return (
        <div className="outletContainer2">
            <p id="pageTitle">로그인</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <InputBox type={'email'} {...register("email")} placeholder="이메일을 입력해주세요!" />
                    <ErrorP>{errors.email?.message}</ErrorP>
                </InputContainer>

                <InputContainer>
                    <InputBox type={'password'} {...register("password")} placeholder="비밀번호를 입력해주세요!" />
                    <ErrorP>{errors.password?.message}</ErrorP>
                </InputContainer>

                <InputBox type={'submit'} value="로그인" disabled={!isValid}/>
            </form>
        </div>
    );
};

export default LoginPage;

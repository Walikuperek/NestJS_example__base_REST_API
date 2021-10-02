import { Body, Controller, Post, Res } from '@nestjs/common';
import { config } from './config/auth.config';
import { SigninDto } from './dto/sign-in.dto';
import { SignupDto } from './dto/sign-up.dto';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService
  ) {}

  @Post('/signin')
  signin(
    @Body() signinDto: SigninDto,
    @Res() response
  ) {
    this.userService.findByUsername(signinDto.username)
      .then(user => {
        const passwordIsValid = bcrypt.compareSync(signinDto.password, user.password);

        if (!passwordIsValid) {
          return response.status(401).send({
            accessToken: null,
            message: 'Nieprawidłowe hasło!'
          });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });

        const authorities = [];

        // @ts-ignore
        user.getRoles()
          .then(roles => {
            for (let i = 0; i < roles.length; i++) {
              authorities.push(`ROLE_${roles[i].name.toUpperCase()}`);
            }

            response.status(200).send({
              id: user.id,
              username: user.username,
              email: user.email,
              roles: authorities,
              accessToken: token
            });
          })
      })
      .catch(err => response.status(500).send({ message: 'Błędna nazwa użytkownika!' }));
  }

  @Post('/signup')
  signup(
    @Body() signupDto: SignupDto,
    @Res() response
  ) {
    this.userService.create({
      username: signupDto.username,
      email: signupDto.email,
      password: bcrypt.hashSync(signupDto.password, 10)
    })
    .then(user => {
      if (signupDto.roles) {
        this.roleService.findAllByName(signupDto.roles)
        .then(roles => {
          // @ts-ignore
          user.setRoles(roles)
          .then(() => {
            response.status(200).send({ message: 'Użytkownik zarejestrowany!' });
          });
        })
      } else {
        // Specified roles not provided
        // user role = 1 ('user')
        // user role = 2 ('moderator')
        // user role = 3 ('admin')
        // @ts-ignore
        user.setRoles([1, 2, 3])
          .then(() => {
            response.status(200).send({ message: 'Użytkownik zarejestrowany!' });
          });
      }
    })
    .catch(err => {
      response.status(500).send({ message: err.message });
    })
  }
}

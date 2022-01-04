/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
  ADMIN = 'ADMIN',
  INDIVIDUAL_CLIENT = 'INDIVIDUAL_CLIENT',
  BUSINESS_CLIENT = 'BUSINESS_CLIENT',
  SELLER = 'SELLER',
}

export class IndividualClientInput {
  email: string
  name: string
  password: string
}

export class UserInput {
  email: string
  name: string
  password: string
  role: Role
}

export class User {
  id: string
  email: string
  name: string
  password: string
  role: Role
}

export abstract class IQuery {
  abstract findByEmail(email: string): User | Promise<User>

  abstract findById(userId: string): User | Promise<User>
}

export abstract class IMutation {
  abstract createUser(input?: Nullable<UserInput>): User | Promise<User>
}

type Nullable<T> = T | null

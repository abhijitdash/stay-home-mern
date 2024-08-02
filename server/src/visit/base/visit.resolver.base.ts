/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Visit } from "./Visit";
import { VisitCountArgs } from "./VisitCountArgs";
import { VisitFindManyArgs } from "./VisitFindManyArgs";
import { VisitFindUniqueArgs } from "./VisitFindUniqueArgs";
import { CreateVisitArgs } from "./CreateVisitArgs";
import { UpdateVisitArgs } from "./UpdateVisitArgs";
import { DeleteVisitArgs } from "./DeleteVisitArgs";
import { Listing } from "../../listing/base/Listing";
import { User } from "../../user/base/User";
import { VisitService } from "../visit.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Visit)
export class VisitResolverBase {
  constructor(
    protected readonly service: VisitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "read",
    possession: "any",
  })
  async _visitsMeta(
    @graphql.Args() args: VisitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Visit])
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "read",
    possession: "any",
  })
  async visits(@graphql.Args() args: VisitFindManyArgs): Promise<Visit[]> {
    return this.service.visits(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Visit, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "read",
    possession: "own",
  })
  async visit(
    @graphql.Args() args: VisitFindUniqueArgs
  ): Promise<Visit | null> {
    const result = await this.service.visit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Visit)
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "create",
    possession: "any",
  })
  async createVisit(@graphql.Args() args: CreateVisitArgs): Promise<Visit> {
    return await this.service.createVisit({
      ...args,
      data: {
        ...args.data,

        listing: {
          connect: args.data.listing,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Visit)
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "update",
    possession: "any",
  })
  async updateVisit(
    @graphql.Args() args: UpdateVisitArgs
  ): Promise<Visit | null> {
    try {
      return await this.service.updateVisit({
        ...args,
        data: {
          ...args.data,

          listing: {
            connect: args.data.listing,
          },

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Visit)
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "delete",
    possession: "any",
  })
  async deleteVisit(
    @graphql.Args() args: DeleteVisitArgs
  ): Promise<Visit | null> {
    try {
      return await this.service.deleteVisit(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Listing, {
    nullable: true,
    name: "listing",
  })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async getListing(@graphql.Parent() parent: Visit): Promise<Listing | null> {
    const result = await this.service.getListing(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Visit): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

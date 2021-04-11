type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type PickRelateToManyInput = {
  readonly create?: ReadonlyArray<PickCreateInput | null> | null;
  readonly connect?: ReadonlyArray<PickWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<PickWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PlayerWhereInput = {
  readonly AND?: ReadonlyArray<PlayerWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PlayerWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly picks_every?: PickWhereInput | null;
  readonly picks_some?: PickWhereInput | null;
  readonly picks_none?: PickWhereInput | null;
};

export type PlayerWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPlayersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'picks_ASC'
  | 'picks_DESC';

export type PlayerUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly picks?: PickRelateToManyInput | null;
};

export type PlayersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PlayerUpdateInput | null;
};

export type PlayerCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly picks?: PickRelateToManyInput | null;
};

export type PlayersCreateInput = {
  readonly data?: PlayerCreateInput | null;
};

export type TeamWhereInput = {
  readonly AND?: ReadonlyArray<TeamWhereInput | null> | null;
  readonly OR?: ReadonlyArray<TeamWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city?: Scalars['String'] | null;
  readonly city_not?: Scalars['String'] | null;
  readonly city_contains?: Scalars['String'] | null;
  readonly city_not_contains?: Scalars['String'] | null;
  readonly city_starts_with?: Scalars['String'] | null;
  readonly city_not_starts_with?: Scalars['String'] | null;
  readonly city_ends_with?: Scalars['String'] | null;
  readonly city_not_ends_with?: Scalars['String'] | null;
  readonly city_i?: Scalars['String'] | null;
  readonly city_not_i?: Scalars['String'] | null;
  readonly city_contains_i?: Scalars['String'] | null;
  readonly city_not_contains_i?: Scalars['String'] | null;
  readonly city_starts_with_i?: Scalars['String'] | null;
  readonly city_not_starts_with_i?: Scalars['String'] | null;
  readonly city_ends_with_i?: Scalars['String'] | null;
  readonly city_not_ends_with_i?: Scalars['String'] | null;
  readonly city_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly abbreviation?: Scalars['String'] | null;
  readonly abbreviation_not?: Scalars['String'] | null;
  readonly abbreviation_contains?: Scalars['String'] | null;
  readonly abbreviation_not_contains?: Scalars['String'] | null;
  readonly abbreviation_starts_with?: Scalars['String'] | null;
  readonly abbreviation_not_starts_with?: Scalars['String'] | null;
  readonly abbreviation_ends_with?: Scalars['String'] | null;
  readonly abbreviation_not_ends_with?: Scalars['String'] | null;
  readonly abbreviation_i?: Scalars['String'] | null;
  readonly abbreviation_not_i?: Scalars['String'] | null;
  readonly abbreviation_contains_i?: Scalars['String'] | null;
  readonly abbreviation_not_contains_i?: Scalars['String'] | null;
  readonly abbreviation_starts_with_i?: Scalars['String'] | null;
  readonly abbreviation_not_starts_with_i?: Scalars['String'] | null;
  readonly abbreviation_ends_with_i?: Scalars['String'] | null;
  readonly abbreviation_not_ends_with_i?: Scalars['String'] | null;
  readonly abbreviation_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly abbreviation_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly conference?: Scalars['String'] | null;
  readonly conference_not?: Scalars['String'] | null;
  readonly conference_contains?: Scalars['String'] | null;
  readonly conference_not_contains?: Scalars['String'] | null;
  readonly conference_starts_with?: Scalars['String'] | null;
  readonly conference_not_starts_with?: Scalars['String'] | null;
  readonly conference_ends_with?: Scalars['String'] | null;
  readonly conference_not_ends_with?: Scalars['String'] | null;
  readonly conference_i?: Scalars['String'] | null;
  readonly conference_not_i?: Scalars['String'] | null;
  readonly conference_contains_i?: Scalars['String'] | null;
  readonly conference_not_contains_i?: Scalars['String'] | null;
  readonly conference_starts_with_i?: Scalars['String'] | null;
  readonly conference_not_starts_with_i?: Scalars['String'] | null;
  readonly conference_ends_with_i?: Scalars['String'] | null;
  readonly conference_not_ends_with_i?: Scalars['String'] | null;
  readonly conference_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly conference_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly division?: Scalars['String'] | null;
  readonly division_not?: Scalars['String'] | null;
  readonly division_contains?: Scalars['String'] | null;
  readonly division_not_contains?: Scalars['String'] | null;
  readonly division_starts_with?: Scalars['String'] | null;
  readonly division_not_starts_with?: Scalars['String'] | null;
  readonly division_ends_with?: Scalars['String'] | null;
  readonly division_not_ends_with?: Scalars['String'] | null;
  readonly division_i?: Scalars['String'] | null;
  readonly division_not_i?: Scalars['String'] | null;
  readonly division_contains_i?: Scalars['String'] | null;
  readonly division_not_contains_i?: Scalars['String'] | null;
  readonly division_starts_with_i?: Scalars['String'] | null;
  readonly division_not_starts_with_i?: Scalars['String'] | null;
  readonly division_ends_with_i?: Scalars['String'] | null;
  readonly division_not_ends_with_i?: Scalars['String'] | null;
  readonly division_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly division_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type TeamWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortTeamsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'abbreviation_ASC'
  | 'abbreviation_DESC'
  | 'conference_ASC'
  | 'conference_DESC'
  | 'division_ASC'
  | 'division_DESC';

export type TeamUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly abbreviation?: Scalars['String'] | null;
  readonly conference?: Scalars['String'] | null;
  readonly division?: Scalars['String'] | null;
};

export type TeamsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: TeamUpdateInput | null;
};

export type TeamCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly abbreviation?: Scalars['String'] | null;
  readonly conference?: Scalars['String'] | null;
  readonly division?: Scalars['String'] | null;
};

export type TeamsCreateInput = {
  readonly data?: TeamCreateInput | null;
};

export type TeamRelateToOneInput = {
  readonly create?: TeamCreateInput | null;
  readonly connect?: TeamWhereUniqueInput | null;
  readonly disconnect?: TeamWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type GameWhereInput = {
  readonly AND?: ReadonlyArray<GameWhereInput | null> | null;
  readonly OR?: ReadonlyArray<GameWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly season?: Scalars['String'] | null;
  readonly season_not?: Scalars['String'] | null;
  readonly season_contains?: Scalars['String'] | null;
  readonly season_not_contains?: Scalars['String'] | null;
  readonly season_starts_with?: Scalars['String'] | null;
  readonly season_not_starts_with?: Scalars['String'] | null;
  readonly season_ends_with?: Scalars['String'] | null;
  readonly season_not_ends_with?: Scalars['String'] | null;
  readonly season_i?: Scalars['String'] | null;
  readonly season_not_i?: Scalars['String'] | null;
  readonly season_contains_i?: Scalars['String'] | null;
  readonly season_not_contains_i?: Scalars['String'] | null;
  readonly season_starts_with_i?: Scalars['String'] | null;
  readonly season_not_starts_with_i?: Scalars['String'] | null;
  readonly season_ends_with_i?: Scalars['String'] | null;
  readonly season_not_ends_with_i?: Scalars['String'] | null;
  readonly season_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly season_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly week?: Scalars['Int'] | null;
  readonly week_not?: Scalars['Int'] | null;
  readonly week_lt?: Scalars['Int'] | null;
  readonly week_lte?: Scalars['Int'] | null;
  readonly week_gt?: Scalars['Int'] | null;
  readonly week_gte?: Scalars['Int'] | null;
  readonly week_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly week_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly spread?: Scalars['Float'] | null;
  readonly spread_not?: Scalars['Float'] | null;
  readonly spread_lt?: Scalars['Float'] | null;
  readonly spread_lte?: Scalars['Float'] | null;
  readonly spread_gt?: Scalars['Float'] | null;
  readonly spread_gte?: Scalars['Float'] | null;
  readonly spread_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly spread_not_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly homeTeam?: TeamWhereInput | null;
  readonly homeTeam_is_null?: Scalars['Boolean'] | null;
  readonly awayTeam?: TeamWhereInput | null;
  readonly awayTeam_is_null?: Scalars['Boolean'] | null;
  readonly winner?: TeamWhereInput | null;
  readonly winner_is_null?: Scalars['Boolean'] | null;
  readonly picks_every?: PickWhereInput | null;
  readonly picks_some?: PickWhereInput | null;
  readonly picks_none?: PickWhereInput | null;
};

export type GameWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortGamesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'season_ASC'
  | 'season_DESC'
  | 'week_ASC'
  | 'week_DESC'
  | 'spread_ASC'
  | 'spread_DESC'
  | 'homeTeam_ASC'
  | 'homeTeam_DESC'
  | 'awayTeam_ASC'
  | 'awayTeam_DESC'
  | 'winner_ASC'
  | 'winner_DESC'
  | 'picks_ASC'
  | 'picks_DESC';

export type GameUpdateInput = {
  readonly season?: Scalars['String'] | null;
  readonly week?: Scalars['Int'] | null;
  readonly spread?: Scalars['Float'] | null;
  readonly homeTeam?: TeamRelateToOneInput | null;
  readonly awayTeam?: TeamRelateToOneInput | null;
  readonly winner?: TeamRelateToOneInput | null;
  readonly picks?: PickRelateToManyInput | null;
};

export type GamesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: GameUpdateInput | null;
};

export type GameCreateInput = {
  readonly season?: Scalars['String'] | null;
  readonly week?: Scalars['Int'] | null;
  readonly spread?: Scalars['Float'] | null;
  readonly homeTeam?: TeamRelateToOneInput | null;
  readonly awayTeam?: TeamRelateToOneInput | null;
  readonly winner?: TeamRelateToOneInput | null;
  readonly picks?: PickRelateToManyInput | null;
};

export type GamesCreateInput = {
  readonly data?: GameCreateInput | null;
};

export type PlayerRelateToOneInput = {
  readonly create?: PlayerCreateInput | null;
  readonly connect?: PlayerWhereUniqueInput | null;
  readonly disconnect?: PlayerWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type GameRelateToOneInput = {
  readonly create?: GameCreateInput | null;
  readonly connect?: GameWhereUniqueInput | null;
  readonly disconnect?: GameWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PickWhereInput = {
  readonly AND?: ReadonlyArray<PickWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PickWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly player?: PlayerWhereInput | null;
  readonly player_is_null?: Scalars['Boolean'] | null;
  readonly game?: GameWhereInput | null;
  readonly game_is_null?: Scalars['Boolean'] | null;
  readonly picked?: TeamWhereInput | null;
  readonly picked_is_null?: Scalars['Boolean'] | null;
  readonly isCorrect?: Scalars['Boolean'] | null;
  readonly isCorrect_not?: Scalars['Boolean'] | null;
};

export type PickWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPicksBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'player_ASC'
  | 'player_DESC'
  | 'game_ASC'
  | 'game_DESC'
  | 'picked_ASC'
  | 'picked_DESC'
  | 'isCorrect_ASC'
  | 'isCorrect_DESC';

export type PickUpdateInput = {
  readonly player?: PlayerRelateToOneInput | null;
  readonly game?: GameRelateToOneInput | null;
  readonly picked?: TeamRelateToOneInput | null;
  readonly isCorrect?: Scalars['Boolean'] | null;
};

export type PicksUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PickUpdateInput | null;
};

export type PickCreateInput = {
  readonly player?: PlayerRelateToOneInput | null;
  readonly game?: GameRelateToOneInput | null;
  readonly picked?: TeamRelateToOneInput | null;
  readonly isCorrect?: Scalars['Boolean'] | null;
};

export type PicksCreateInput = {
  readonly data?: PickCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialPlayerInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type PlayerListTypeInfo = {
  key: 'Player';
  fields: 'id' | 'name' | 'email' | 'password' | 'picks';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly picks?: string | null;
  };
  inputs: {
    where: PlayerWhereInput;
    create: PlayerCreateInput;
    update: PlayerUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PlayerWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPlayersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PlayerListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PlayerListTypeInfo,
    PlayerListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PlayerListTypeInfo,
  PlayerListTypeInfo['fields']
>;

export type TeamListTypeInfo = {
  key: 'Team';
  fields: 'id' | 'name' | 'city' | 'abbreviation' | 'conference' | 'division';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly city?: string | null;
    readonly abbreviation?: string | null;
    readonly conference?: string | null;
    readonly division?: string | null;
  };
  inputs: {
    where: TeamWhereInput;
    create: TeamCreateInput;
    update: TeamUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: TeamWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortTeamsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type TeamListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    TeamListTypeInfo,
    TeamListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  TeamListTypeInfo,
  TeamListTypeInfo['fields']
>;

export type GameListTypeInfo = {
  key: 'Game';
  fields:
    | 'id'
    | 'season'
    | 'week'
    | 'spread'
    | 'homeTeam'
    | 'awayTeam'
    | 'winner'
    | 'picks';
  backing: {
    readonly id: string;
    readonly season?: string | null;
    readonly week?: number | null;
    readonly spread?: number | null;
    readonly homeTeam?: string | null;
    readonly awayTeam?: string | null;
    readonly winner?: string | null;
    readonly picks?: string | null;
  };
  inputs: {
    where: GameWhereInput;
    create: GameCreateInput;
    update: GameUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: GameWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortGamesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type GameListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    GameListTypeInfo,
    GameListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  GameListTypeInfo,
  GameListTypeInfo['fields']
>;

export type PickListTypeInfo = {
  key: 'Pick';
  fields: 'id' | 'player' | 'game' | 'picked' | 'isCorrect';
  backing: {
    readonly id: string;
    readonly player?: string | null;
    readonly game?: string | null;
    readonly picked?: string | null;
    readonly isCorrect?: boolean | null;
  };
  inputs: {
    where: PickWhereInput;
    create: PickCreateInput;
    update: PickUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PickWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPicksBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PickListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PickListTypeInfo,
    PickListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PickListTypeInfo,
  PickListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly Player: PlayerListTypeInfo;
  readonly Team: TeamListTypeInfo;
  readonly Game: GameListTypeInfo;
  readonly Pick: PickListTypeInfo;
};

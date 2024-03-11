export interface CommonMasterDataDocument {
  id: string;
  accountId: string;
  accountName: string;
  dataEntityId: string;
  createdBy: string;
  createdIn: string;
  updatedBy: string | null;
  updatedIn: string | null;
  lastInteractionBy: string;
  lastInteractionIn: string;
  followers: unknown[];
  tags: unknown[];
  auto_filter: unknown | null;
}

export interface CommonMasterDataV1Document extends CommonMasterDataDocument {

}

export interface CommonMasterDataV2Document extends CommonMasterDataDocument {
  schemas: string[]
  createdBy_USER: MasterDataUser
  lastInteractionBy_USER: MasterDataUser
  dataInstanceId: string
  _sort: number[]
}

type MasterDataUser = {
  Id: string,
  Login: string
  Name: null
}



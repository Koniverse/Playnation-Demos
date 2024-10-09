export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface DataListResponse<T> {
  data: T[];
  meta: {
    pagination: Pagination;
  };
}

export interface NftMetadata {
  name: string;
  type: string;
  image: string;
}

export interface IpMetadata {
  name: string;
  tags: string[];
  image: string;
  media: any[];
  title: string;
  ipType: string;
  creators: any[];
  createdAt: string;
  attributes: any[];
  description: string;
  watermarkImg: string;
  relationships: any[];
}

interface TelegramUser {
  id: number;
  telegram_id: string;
  telegram_username: string;
  is_premium: boolean | null;
  is_bot: boolean;
  photo_url: string | null;
  first_name: string;
  last_name: string;
  language_code: string;
  allow_inbox: boolean | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
  documentId: string;
  locale: string | null;
  publishedAt: string | null;
}

export interface IpAsset {
  id: number;
  documentId: string;
  nft_contract_id: string;
  nft_metadata: NftMetadata;
  nft_name: string;
  nft_image: string;
  token_id: string;
  pil_type: string;
  license_terms_Id: string;
  ip_title: string;
  ip_metadata: IpMetadata;
  ip_id: string;
  tx_hash: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  telegram_user: TelegramUser;
}

export interface FileObject {
  name: string;
  type: string;
  data: string;
  size?: number;
}

export interface SubmitIpAssetRequest {
  nft: FileObject | undefined;
  nftName: string;
  nftDescription: string;
  assetTitle: string;
  assetDescription: string;
  pilType: string;
  groupId: string;
}

import type { SchemaType } from "@dojoengine/sdk";

// Type definition for `starkludo::models::game::GameValue` struct
export interface GameValue {
	fieldOrder: string[];
	created_by: string;
	game_status: GameStatus;
	game_mode: GameMode;
	player_green: number;
	player_yellow: number;
	player_blue: number;
	player_red: number;
	invited_players: Array<number>;
	winner_1: number;
	winner_2: number;
	winner_3: number;
	next_player: number;
	number_of_players: number;
	rolls_count: number;
	rolls_times: number;
	dice_face: number;
	player_chance: string;
	has_thrown_dice: boolean;
	b0: number;
	b1: number;
	b2: number;
	b3: number;
	g0: number;
	g1: number;
	g2: number;
	g3: number;
	r0: number;
	r1: number;
	r2: number;
	r3: number;
	y0: number;
	y1: number;
	y2: number;
	y3: number;
}

// Type definition for `starkludo::models::game::Game` struct
export interface Game {
	fieldOrder: string[];
	id: number;
	created_by: string;
	game_status: GameStatus;
	game_mode: GameMode;
	player_green: number;
	player_yellow: number;
	player_blue: number;
	player_red: number;
	invited_players: Array<number>;
	winner_1: number;
	winner_2: number;
	winner_3: number;
	next_player: number;
	number_of_players: number;
	rolls_count: number;
	rolls_times: number;
	dice_face: number;
	player_chance: string;
	has_thrown_dice: boolean;
	b0: number;
	b1: number;
	b2: number;
	b3: number;
	g0: number;
	g1: number;
	g2: number;
	g3: number;
	r0: number;
	r1: number;
	r2: number;
	r3: number;
	y0: number;
	y1: number;
	y2: number;
	y3: number;
}

// Type definition for `starkludo::models::player::Player` struct
export interface Player {
	fieldOrder: string[];
	username: number;
	owner: string;
	total_games_played: number;
	total_games_won: number;
}

// Type definition for `starkludo::models::player::PlayerValue` struct
export interface PlayerValue {
	fieldOrder: string[];
	owner: string;
	total_games_played: number;
	total_games_won: number;
}

// Type definition for `starkludo::models::game::GameStatus` enum
export enum GameStatus {
	Ongoing,
	Waiting,
	Ended,
}

// Type definition for `starkludo::models::game::GameMode` enum
export enum GameMode {
	SinglePlayer,
	MultiPlayer,
}

export interface StarkludoSchemaType extends SchemaType {
	starkludo: {
		GameValue: GameValue,
		Game: Game,
		Player: Player,
		PlayerValue: PlayerValue,
		ERC__Balance: ERC__Balance,
		ERC__Token: ERC__Token,
		ERC__Transfer: ERC__Transfer,
	},
}
export const schema: StarkludoSchemaType = {
	starkludo: {
		GameValue: {
			fieldOrder: ['created_by', 'game_status', 'game_mode', 'player_green', 'player_yellow', 'player_blue', 'player_red', 'invited_players', 'winner_1', 'winner_2', 'winner_3', 'next_player', 'number_of_players', 'rolls_count', 'rolls_times', 'dice_face', 'player_chance', 'has_thrown_dice', 'b0', 'b1', 'b2', 'b3', 'g0', 'g1', 'g2', 'g3', 'r0', 'r1', 'r2', 'r3', 'y0', 'y1', 'y2', 'y3'],
			created_by: "",
			game_status: GameStatus.Ongoing,
			game_mode: GameMode.SinglePlayer,
			player_green: 0,
			player_yellow: 0,
			player_blue: 0,
			player_red: 0,
			invited_players: [0],
			winner_1: 0,
			winner_2: 0,
			winner_3: 0,
			next_player: 0,
			number_of_players: 0,
			rolls_count: 0,
			rolls_times: 0,
			dice_face: 0,
			player_chance: "",
			has_thrown_dice: false,
			b0: 0,
			b1: 0,
			b2: 0,
			b3: 0,
			g0: 0,
			g1: 0,
			g2: 0,
			g3: 0,
			r0: 0,
			r1: 0,
			r2: 0,
			r3: 0,
			y0: 0,
			y1: 0,
			y2: 0,
			y3: 0,
		},
		Game: {
			fieldOrder: ['id', 'created_by', 'game_status', 'game_mode', 'player_green', 'player_yellow', 'player_blue', 'player_red', 'invited_players', 'winner_1', 'winner_2', 'winner_3', 'next_player', 'number_of_players', 'rolls_count', 'rolls_times', 'dice_face', 'player_chance', 'has_thrown_dice', 'b0', 'b1', 'b2', 'b3', 'g0', 'g1', 'g2', 'g3', 'r0', 'r1', 'r2', 'r3', 'y0', 'y1', 'y2', 'y3'],
			id: 0,
			created_by: "",
			game_status: GameStatus.Ongoing,
			game_mode: GameMode.SinglePlayer,
			player_green: 0,
			player_yellow: 0,
			player_blue: 0,
			player_red: 0,
			invited_players: [0],
			winner_1: 0,
			winner_2: 0,
			winner_3: 0,
			next_player: 0,
			number_of_players: 0,
			rolls_count: 0,
			rolls_times: 0,
			dice_face: 0,
			player_chance: "",
			has_thrown_dice: false,
			b0: 0,
			b1: 0,
			b2: 0,
			b3: 0,
			g0: 0,
			g1: 0,
			g2: 0,
			g3: 0,
			r0: 0,
			r1: 0,
			r2: 0,
			r3: 0,
			y0: 0,
			y1: 0,
			y2: 0,
			y3: 0,
		},
		Player: {
			fieldOrder: ['username', 'owner', 'total_games_played', 'total_games_won'],
			username: 0,
			owner: "",
			total_games_played: 0,
			total_games_won: 0,
		},
		PlayerValue: {
			fieldOrder: ['owner', 'total_games_played', 'total_games_won'],
			owner: "",
			total_games_played: 0,
			total_games_won: 0,
		},
		ERC__Balance: {
			fieldOrder: ['balance', 'type', 'tokenmetadata'],
			balance: '',
			type: 'ERC20',
			tokenMetadata: {
				fieldOrder: ['name', 'symbol', 'tokenId', 'decimals', 'contractAddress'],
				name: '',
				symbol: '',
				tokenId: '',
				decimals: '',
				contractAddress: '',
			},
		},
		ERC__Token: {
			fieldOrder: ['name', 'symbol', 'tokenId', 'decimals', 'contractAddress'],
			name: '',
			symbol: '',
			tokenId: '',
			decimals: '',
			contractAddress: '',
		},
		ERC__Transfer: {
			fieldOrder: ['from', 'to', 'amount', 'type', 'executed', 'tokenMetadata'],
			from: '',
			to: '',
			amount: '',
			type: 'ERC20',
			executedAt: '',
			tokenMetadata: {
				fieldOrder: ['name', 'symbol', 'tokenId', 'decimals', 'contractAddress'],
				name: '',
				symbol: '',
				tokenId: '',
				decimals: '',
				contractAddress: '',
			},
			transactionHash: '',
		},

	},
};
// Type definition for ERC__Balance struct
export type ERC__Type = 'ERC20' | 'ERC721';
export interface ERC__Balance {
    fieldOrder: string[];
    balance: string;
    type: string;
    tokenMetadata: ERC__Token;
}
export interface ERC__Token {
    fieldOrder: string[];
    name: string;
    symbol: string;
    tokenId: string;
    decimals: string;
    contractAddress: string;
}
export interface ERC__Transfer {
    fieldOrder: string[];
    from: string;
    to: string;
    amount: string;
    type: string;
    executedAt: string;
    tokenMetadata: ERC__Token;
    transactionHash: string;
}
export default class Episode {
    id: number
    title: string;
    audio_url: string;
    artwork_url: string;
    description: string;
    summary: string;
    artist: string;
    tags: string;
    published_at: Date;
    duration: number;
    hq: boolean;
    guid: string;
    inactive_at!: object;
    episode_number: number;
    season_number: number;
    explicit: boolean;
    isPrivate: boolean;
    total_plays: number;

    constructor(id: number
        , title: string
        , audio_url: string
        , artwork_url: string
        , description: string
        , summary: string
        , artist: string
        , tags: string
        , published_at: Date
        , duration: number
        , hq: boolean
        , guid: string
        , inactive_at: object
        , episode_number: number
        , season_number: number
        , explicit: boolean
        , isPrivate: boolean
        , total_plays: number) {

        this.id = id;
        this.title = title;
        this.audio_url = audio_url;
        this.artwork_url = artwork_url;
        this.description = description;
        this.summary = summary;
        this.artist = artist;
        this.tags = tags;
        this.published_at = published_at;
        this.duration = duration;
        this.hq = hq;
        this.guid = guid;
        this.inactive_at = inactive_at;
        this.episode_number = episode_number;
        this.season_number = season_number;
        this.explicit = explicit;
        this.isPrivate = isPrivate;
        this.total_plays = total_plays;
    }
}
export interface Pokedex {
    abstract:         string;
    web_url:          string;
    snippet:          string;
    lead_paragraph:   string;
    source:           string;
    multimedia:       any[];
    headline:         Headline;
    keywords:         Keyword[];
    pub_date:         string;
    document_type:    string;
    news_desk:        string;
    section_name:     string;
    subsection_name:  string;
    byline:           Byline;
    type_of_material: string;
    _id:              string;
    word_count:       number;
    uri:              string;
}

export interface Byline {
    original:     null;
    person:       any[];
    organization: null;
}

export interface Headline {
    main:           string;
    kicker:         null;
    content_kicker: null;
    print_headline: null;
    name:           null;
    seo:            null;
    sub:            null;
}

export interface Keyword {
    name:  string;
    value: string;
    rank:  number;
    major: string;
}

export interface Comments {
    commentID:             number;
    status:                string;
    commentSequence:       number;
    userID:                number;
    userDisplayName:       string;
    userLocation:          string;
    userTitle:             string;
    userURL:               string;
    picURL:                null;
    commentTitle:          string;
    commentBody:           string;
    createDate:            string;
    updateDate:            string;
    approveDate:           string;
    recommendations:       number;
    replyCount:            number;
    replies:               any[];
    editorsSelection:      boolean;
    parentID:              null;
    parentUserDisplayName: null;
    depth:                 number;
    commentType:           string;
    trusted:               number;
    recommendedFlag:       number;
    permID:                string;
    isAnonymous:           boolean;
}
